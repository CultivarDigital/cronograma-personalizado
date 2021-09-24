<template>
  <div class="pt-3">
    <Breadcrumb active="Lojinha" />
    <v-container fluid class="mb-3">
      <div class="text-center">
        <h3 class="mb-3">
          <span style="color: #197abb">Magazine</span>
          <span style="color: #009d6b">Cultivar</span>
        </h3>
        <p class="text-center">
          Encontre tudo o que precisa para sua horta ou jardim e de quebra ajude
          a manter o cultivar cada vez melhor
        </p>
        <div class="mb-6">
          <v-btn
            v-for="category in categories"
            :key="category"
            class="mb-2 mr-1"
            :color="
              category === currentCategory ? 'primary darken-2' : 'primary'
            "
            @click="filter(category)"
          >
            {{ category }}
            <v-icon v-if="category === currentCategory" right>mdi-close</v-icon>
          </v-btn>
        </div>
      </div>
      <v-row v-if="loading">
        <v-col v-for="i in 8" :key="i" cols="12" sm="3">
          <v-skeleton-loader
            class="mx-auto"
            max-width="300"
            type="card"
          ></v-skeleton-loader>
        </v-col>
      </v-row>
      <v-row v-else>
        <v-col v-for="(product, index) in list" :key="index" cols="12" sm="3">
          <v-card
            :loading="loading"
            :href="product.link"
            target="_blank"
            class="pt-4"
          >
            <div class="d-flex justify-center">
              <v-img
                :src="product.image"
                :lazy-src="product.image_lazy"
                max-width="160"
                max-height="160"
                contain
              ></v-img>
            </div>
            <v-card-title class="text-body-2">{{ product.title }}</v-card-title>
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
    </v-container>
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
      categories: [],
      currentCategory: null,
      loading: true,
    }
  },
  computed: {
    list() {
      let products = this.products
      if (this.currentCategory) {
        products = products.filter(
          (product) => product.category === this.currentCategory
        )
      }
      return products.sort(() => Math.random() - 0.5)
    },
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      const productsRef = await this.$fire.firestore
        .collection('products')
        .get()
      const products = productsRef.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }))
      const categories = {}
      products.forEach((product) => {
        categories[product.category] = true
      })
      this.categories = Object.keys(categories)
      this.products = products
      this.loading = false
    },
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
          this.$fire.firestore.collection('products').add(product)
        })
      }
    },
    async clearShop() {
      const productsRef = await this.$fire.firestore.collection('products')
      const docs = await productsRef.get()

      docs.forEach((doc) => {
        productsRef.doc(doc.id).delete()
      })
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
