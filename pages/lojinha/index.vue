<template>
  <div>
    <Breadcrumb
      active="Lojinha"
      description="Tudo o que você precisa para sua horta ou jardim"
    />
    <v-container fluid class="mb-3">
      <div v-if="$nuxt.isOnline">
        <div class="text-center">
          <h3 class="mb-3">
            <span style="color: #197abb">Magazine</span>
            <span style="color: #009d6b">Cultivar</span>
          </h3>
          <p class="text-center">
            Tudo o que você precisa para sua horta ou jardim
          </p>
        </div>
        <div v-if="categories" class="mb-6 text-center">
          <v-btn
            v-for="category in categories"
            :key="category"
            class="mb-2 mr-1"
            small
            :color="
              category === currentCategory ? 'primary darken-2' : 'primary'
            "
            @click="filter(category)"
          >
            {{ category }}
            <v-icon v-if="category === currentCategory" right>mdi-close</v-icon>
          </v-btn>
        </div>
        <v-row v-if="products.length">
          <v-col
            v-for="(product, index) in list"
            :key="index"
            cols="12"
            md="3"
            sm="6"
          >
            <v-card :href="product.link" target="_blank" class="pt-4">
              <div class="d-flex justify-center">
                <v-img
                  :src="product.image"
                  :lazy-src="product.image_lazy"
                  max-width="160"
                  max-height="160"
                  contain
                ></v-img>
              </div>
              <v-card-title class="text-body-2">{{
                product.title
              }}</v-card-title>
              <v-card-text>
                <div style="color: #197abb; font-size: 20px">
                  <strong>{{ product.price }}</strong>
                </div>
                <div>
                  {{ product.price_complement }}
                </div>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
        <v-row v-else>
          <v-col v-for="i in 8" :key="i" cols="12" sm="3">
            <v-skeleton-loader
              class="mx-auto"
              max-width="300"
              type="card"
            ></v-skeleton-loader>
          </v-col>
        </v-row>
      </div>
      <Offline v-else />
    </v-container>
    <v-btn
      v-if="authUser && authUser.email === 'diegomr86@gmail.com'"
      block
      @click="importShop"
    >
      Atalizar loja
    </v-btn>
  </div>
</template>
<script>
import Breadcrumb from '@/components/Breadcrumb.vue'
import axios from 'axios'
import cheerio from 'cheerio'
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      products: [],
      currentCategory: null,
    }
  },
  computed: {
    categories() {
      const products = this.products
      if (products) {
        const categories = {}
        products.forEach((product) => {
          categories[product.category] = true
        })
        return Object.keys(categories)
      }
      return null
    },
    list() {
      let products = [...this.products]
      if (products) {
        if (this.currentCategory) {
          products = products.filter(
            (product) => product.category === this.currentCategory
          )
        }
        products = products.sort(() => Math.random() - 0.5)
      }
      return products
    },
  },
  async created() {
    await this.$db
      .getList('products')
      .then((species) => {
        this.products = species
      })
      .catch(this.$notifier.dbError)
  },
  methods: {
    async importShop() {
      const magazineURL = 'https://www.magazinevoce.com.br'
      await this.clearShop()
      const response = await axios.get(magazineURL + '/magazinecultivarbrasil/')
      let $ = cheerio.load(response.data)
      const categories = []
      $('.swc-item a').each((i, e) => {
        categories.push({ title: $(e).text(), link: $(e).attr('href') })
      })
      for (const category of categories) {
        const resp = await axios.get(magazineURL + category.link)
        $ = cheerio.load(resp.data)
        $('.g-items .g-item').each((i, e) => {
          const product = {}
          product.category = category.title
          product.title = $(e).find('.g-title').text().trim()
          product.price = $(e).find('.g-price').text().trim()
          product.price_complement = $(e).find('.g-installment').text().trim()
          product.image = $(e).find('.g-img-wrapper img').data('original')
          product.image_lazy = $(e).find('.g-img-wrapper img').attr('src')
          product.link = magazineURL + $(e).find('.g-img-wrapper').attr('href')
          this.$db.add('products', product)
        })
      }
    },
    async clearShop() {
      this.products = null
      const products = await this.$db.getList('products')
      for (const product of products) {
        await this.$db.remove('products', product.id)
      }
    },
    filter(category) {
      if (this.currentCategory === category) {
        this.currentCategory = null
      } else {
        this.currentCategory = category
      }
    },
  },
}
</script>
