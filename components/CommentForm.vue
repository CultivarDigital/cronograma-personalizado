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
            :placeholder="conversation ? 'Responder' : 'Deixe seu comentário'"
          />
        </div>
        <v-btn
          v-else
          block
          color="primary"
          large
          @click="$store.dispatch('showPortal')"
        >
          {{ conversation ? 'Responder' : 'Deixe seu comentário' }}
        </v-btn>
        <v-row v-if="$auth.user">
          <v-col cols="12" md="6">
            <div v-if="form.images.length" class="pt-2">
              <Gallery :images="form.images" />
            </div>
            <div
              v-if="selectedMembers.length || selectedSpecies.length"
              class="pa-2"
            >
              <User
                v-for="member in selectedMembers"
                :key="member.id"
                :user="member"
                thumb
                size="30"
                class="mr-1 mb-1"
                icon-color="white"
              />
              <SpecieChip
                v-for="specie in selectedSpecies"
                :key="specie.id"
                :value="specie"
              />
            </div>
            <SelectMembers
              v-model="form.members"
              :items="members"
              item-value="id"
              item-text="name"
              title="Adicionar membros"
              @change="loadMembers()"
            />
            <SelectSpecies v-model="form.species" :items="species" />
            <UploadImage prefix="comments" @input="addImage" />
            <v-btn color="primary" icon>
              <v-icon>mdi-poll</v-icon>
            </v-btn>
          </v-col>
          <v-col cols="12" md="6" class="pt-0 pt-md-2">
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
          </v-col>
        </v-row>
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
    save() {
      if (this.form.message) {
        this.$axios.$post('/v1/comments', this.form).then((comment) => {
          this.$notifier.success('Comentário enviado!')
          this.$emit('change', comment)
          this.form.message = null
          this.form.members = []
          this.form.species = []
          this.form.images = []
        })
      }
    },
  },
}
</script>
