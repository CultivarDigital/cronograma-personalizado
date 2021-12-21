<!-- eslint-disable vue/no-v-html -->
<!-- eslint-disable vue/no-lone-template -->
<template>
  <div class="comment-form">
    <v-list-item class="mb-1 pt-1">
      <v-list-item-avatar>
        <User thumb size="40" />
      </v-list-item-avatar>
      <v-list-item-content>
        <div v-if="$auth.user">
          <v-textarea
            v-model="form.message"
            color="primary"
            outlined
            rows="1"
            auto-grow
            hide-details
            :placeholder="conversation ? 'Responda' : 'Comente o que achou'"
          />
        </div>
        <v-btn
          v-else
          block
          color="primary"
          large
          class="darken-1"
          @click="$store.dispatch('showPortal')"
        >
          {{ conversation ? 'Responda' : 'Comente o que achou' }}
        </v-btn>
        <div v-if="$auth.user" class="w-100">
          <div>
            <div v-if="form.embeds.length" class="pt-2">
              <EmbedGallery :embeds="form.embeds" />
            </div>
            <div v-if="form.images.length" class="pt-2">
              <Gallery :images="form.images" />
            </div>
            <div v-if="form.members.length" class="pt-2">
              <User
                v-for="member in form.members"
                :key="member"
                :user="members.find((m) => m.id === member)"
                thumb
                size="32"
                class="mr-1 mb-1"
                icon-color="white"
              />
            </div>
            <div v-if="form.species.length" class="pt-2">
              <SpecieChip
                v-for="specie in form.species"
                :key="specie"
                :value="specie"
              />
            </div>
            <SelectMembers
              v-model="form.members"
              :items="members"
              item-value="id"
              item-text="name"
              title="Adicionar clientes"
              @change="loadMembers()"
            />
            <SelectSpecies v-model="form.species" :items="species" />
            <UploadImage prefix="comments" @input="addImage" />
            <EmbedUrl icon="mdi-youtube" @input="addUrl" />
            <EmbedUrl @input="addUrl" />
            <!-- <v-btn color="primary" icon>
              <v-icon>mdi-poll</v-icon>
            </v-btn> -->
          </div>
          <div>
            <v-btn
              color="primary"
              block
              class="mt-md-2"
              large
              :disabled="!form.message || !form.message"
              @click="save"
            >
              {{ conversation ? 'Enviar resposta' : 'Enviar comentário' }}
            </v-btn>
          </div>
        </div>
      </v-list-item-content>
    </v-list-item>
  </div>
</template>
<script>
export default {
  props: {
    comment: {
      type: String,
      default: null,
    },
    target: {
      type: String,
      default: null,
    },
    conversation: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      members: [],
      form: {
        target: this.target,
        conversation: this.conversation,
        message: null,
        members: [],
        species: [],
        images: [],
        embeds: [],
      },
    }
  },
  computed: {
    species() {
      return this.$store.state.species
    },
    selectedMembers() {
      if (this.form.members && this.form.members.length) {
        return this.members.filter((member) =>
          this.form.members.includes(member.id)
        )
      }
      return []
    },
    selectedSpecies() {
      if (this.form.species && this.form.species.length) {
        return this.species.filter((member) =>
          this.form.species.includes(member.id)
        )
      }
      return []
    },
  },
  methods: {
    async loadMembers() {
      if (!this.members.length) {
        this.members = await this.$axios.$get('/v1/users/members')
      }
    },
    addImage(image) {
      if (image) {
        this.form.images.push(image)
      }
    },
    addUrl(embed) {
      if (embed) {
        this.form.embeds.push(embed)
      }
    },
    save() {
      if (this.form.message) {
        this.$axios.$post('/v1/comments', this.form).then((comment) => {
          this.$notifier.success('Comentário enviado!')
          this.$emit('change', comment)
          this.form.message = null
          this.form.members = []
          this.form.species = []
          this.form.images = []
          this.form.embeds = []
        })
      }
    },
  },
}
</script>
