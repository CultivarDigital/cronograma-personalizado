<template>
  <div class="mb-6">
    <div v-if="showPreview && !avatar && preview && preview.length">
      <table
        class="table b-table mb-1"
        :class="{
          'b-table-stacked-md': editTitle || editDescription || editLink,
        }"
      >
        <tbody>
          <tr v-for="(item, index) in preview" :key="index">
            <td style="width: 100px" class="pl-0">
              <CachedAudio v-if="type === 'audios'" :value="item" />
              <CachedImage
                v-else-if="type === 'images'"
                ignore-cache
                :value="item"
                thumb
                size="64"
              />
              <CachedDocument v-else :value="item" />
            </td>
            <td v-if="editTitle || editDescription || editLink">
              <b-form-input
                v-if="editTitle"
                v-model="item.title"
                placeholder="Título"
                class="mt-1"
              />
              <b-form-textarea
                v-if="editDescription"
                v-model="item.description"
                placeholder="Descrição"
                class="mt-1"
              />
              <b-form-input
                v-if="editLink"
                v-model="item.link"
                placeholder="Link"
                class="mt-1"
              />
              <b-form-input
                v-if="editLink"
                v-model="item.link_title"
                placeholder="Título do link"
                class="mt-1"
              />
            </td>
            <td v-if="editDescription" />
            <td class="text-right pr-0">
              <v-btn color="danger" @click="deleteFile(index)">
                <b-icon-trash />
              </v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="type === 'audios'">
      <RecordAudio @result="uploadFiles" />
      <v-btn color="success" @click="upload">
        <b-icon-upload />
        {{ buttonLabel }}
      </v-btn>
    </div>
    <div v-else-if="avatar" class="text-center">
      <v-avatar color="primary" size="64" class="mb-3">
        <CachedImage
          v-if="preview[0] && !is_loading"
          :src="preview[0]"
          size="64"
          ignore-cache
          thumb
        />
        <v-icon v-else dark> mdi-account </v-icon>
      </v-avatar>
      <br />
      <v-btn
        v-if="!is_loading && preview"
        color="primary"
        small
        @click="upload"
      >
        {{ preview[0] ? 'Mudar foto' : 'Enviar foto' }}
      </v-btn>
    </div>
    <v-btn v-else color="success" @click="upload">
      <v-icon dark> mdi-upload </v-icon>
      <b-icon-upload />
      {{ buttonLabel }}
    </v-btn>
    <input
      v-show="false"
      :ref="'uploads-input-' + inputId"
      :multiple="multiple"
      :accept="accept"
      type="file"
      @change="uploadFiles"
    />
    <v-progress-linear v-if="is_loading" :value="progress" />
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: [Object, Array, String],
      default: () => null,
    },
    multiple: {
      type: Boolean,
      default: false,
    },
    url: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: 'Arquivos',
    },
    description: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      required: true,
    },
    prefix: {
      type: String,
      required: true,
    },
    filename: {
      type: String,
      required: true,
    },
    showPreview: {
      type: Boolean,
      default: true,
    },
    avatar: {
      type: Boolean,
      default: false,
    },
    editTitle: {
      type: Boolean,
      default: false,
    },
    editDescription: {
      type: Boolean,
      default: false,
    },
    editLink: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      is_loading: false,
      progress: null,
    }
  },
  computed: {
    buttonLabel() {
      const plural = this.multiple ? 's' : ''
      switch (this.type) {
        case 'images':
          return 'Enviar foto' + plural
        case 'documents':
          return 'Enviar documento' + plural
        case 'audios':
          return 'Enviar áudio' + plural
      }
      return 'Enviar arquivo' + plural
    },
    inputId() {
      return Math.random().toString(36).substring(2, 15)
    },
    accept() {
      if (this.type === 'audios') {
        return 'audio/*'
      } else if (this.type === 'images') {
        return 'image/*'
      }
      return null
    },
    preview() {
      if (Array.isArray(this.value)) {
        return this.value
      } else if (this.value && this.value.url) {
        return [this.value]
      } else if (this.value && typeof this.value === 'string') {
        return [this.value]
      }
      return []
    },
  },
  methods: {
    uploadFiles(e) {
      this.is_loading = true
      let files = []
      if (e.target) {
        files = e.target.files || e.dataTransfer.files
      } else {
        files.push(e)
      }
      for (let i = 0; i < files.length; i++) {
        const file = files[i]
        if (!files.length) {
          return
        }

        const metadata = {
          contentType: file.type,
        }

        const storage = this.$fireModule.storage()
        let fileUrl = this.type
        if (this.prefix) {
          fileUrl += '/' + this.prefix
        }
        if (this.filename) {
          const ext = file.name.split('.').pop()
          fileUrl += '/' + this.filename + '.' + ext
        } else {
          fileUrl += '/' + file.name
        }

        const imageRef = storage.ref(fileUrl)
        const uploadTask = imageRef.put(file, metadata)
        this.is_loading = true
        uploadTask.on(
          'state_changed',
          (snapshot) => {
            this.progress = parseInt(
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            )
          },
          (error) => {
            this.firebaseError(error)
            this.is_loading = false
          },
          () => {
            // Handle successful uploads on complete
            // For instance, get the download URL: https://firebasestorage.googleapis.com/...
            return uploadTask.snapshot.ref.getDownloadURL().then((url) => {
              const downloadURL = new URL(url)
              downloadURL.searchParams.delete('token')
              this.callback(downloadURL.toString())
              this.is_loading = false
            })
          }
        )

        // When the upload ends, set the value of the blog image URL
        // and signal that uploading is done.
      }
    },
    deleteImage() {
      this.$fireModule
        .storage()
        .refFromURL(this.blog.imageUrl)
        .delete()
        .then(() => {
          this.blog.imageUrl = ''
        })
        .catch((error) => {
          console.error('Error deleting image', error)
        })
    },
    addToPool(hash, filename, url) {
      this.$store.commit('addToUploadPool', {
        type: this.type,
        hash,
        filename,
      })
      const uploaded = {
        url,
      }
      this.callback(uploaded)
    },
    callback(uploaded) {
      if (this.multiple) {
        let ret = [uploaded]
        if (this.value) {
          ret = this.value.concat(uploaded)
        }
        this.$emit('input', ret)
      } else {
        this.$emit('input', uploaded)
      }
      this.$emit('uploaded', uploaded)
      this.is_loading = false
    },
    deleteFile(index) {
      if (this.multiple) {
        this.$emit(
          'input',
          this.value.filter((item, i) => i !== index)
        )
      } else {
        this.$emit('input', null)
      }
    },
    upload() {
      // eslint-disable-next-line dot-notation
      this.$refs['uploads-input-' + this.inputId].click()
    },
  },
}
</script>
