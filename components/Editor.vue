<!-- eslint-disable import/no-named-as-default -->
<template>
  <div class="tiptap-editor mb-6">
    <div v-if="editor" class="bar mb-3">
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('bold') }"
        @click="editor.chain().focus().toggleBold().run()"
      >
        <v-icon>mdi-format-bold</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('italic') }"
        @click="editor.chain().focus().toggleItalic().run()"
      >
        <v-icon>mdi-format-italic</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('strike') }"
        @click="editor.chain().focus().toggleStrike().run()"
      >
        <v-icon>mdi-format-strikethrough</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        @click="editor.chain().focus().unsetAllMarks().run()"
      >
        <v-icon>mdi-format-clear</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('paragraph') }"
        @click="editor.chain().focus().setParagraph().run()"
      >
        <v-icon>mdi-format-paragraph</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 1 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
      >
        <v-icon>mdi-format-header-1</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 2 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
      >
        <v-icon>mdi-format-header-2</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 3 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
      >
        <v-icon>mdi-format-header-3</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 4 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 4 }).run()"
      >
        <v-icon>mdi-format-header-4</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 5 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 5 }).run()"
      >
        <v-icon>mdi-format-header-5</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('heading', { level: 6 }) }"
        @click="editor.chain().focus().toggleHeading({ level: 6 }).run()"
      >
        <v-icon>mdi-format-header-6</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('bulletList') }"
        @click="editor.chain().focus().toggleBulletList().run()"
      >
        <v-icon>mdi-format-list-bulleted</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive('orderedList') }"
        @click="editor.chain().focus().toggleOrderedList().run()"
      >
        <v-icon>mdi-format-list-numbered</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive({ textAlign: 'left' }) }"
        @click="editor.chain().focus().setTextAlign('left').run()"
      >
        <v-icon>mdi-format-align-left</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive({ textAlign: 'center' }) }"
        @click="editor.chain().focus().setTextAlign('center').run()"
      >
        <v-icon>mdi-format-align-center</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive({ textAlign: 'right' }) }"
        @click="editor.chain().focus().setTextAlign('right').run()"
      >
        <v-icon>mdi-format-align-right</v-icon>
      </v-btn>
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        icon
        :class="{ 'is-active': editor.isActive({ textAlign: 'justify' }) }"
        @click="editor.chain().focus().setTextAlign('justify').run()"
      >
        <v-icon>mdi-format-align-justify</v-icon>
      </v-btn>
      <UploadImage prefix="comments" @input="addImage" />
      <v-btn
        color="primary"
        class="mr-1 mb-1 rounded"
        text
        @click="editor.chain().focus().setHorizontalRule().run()"
      >
        linha
      </v-btn>
    </div>
    <editor-content :editor="editor" class="tiptap-content" />
  </div>
</template>

<script>
import { Editor, EditorContent } from '@tiptap/vue-2'
import StarterKit from '@tiptap/starter-kit'
import Placeholder from '@tiptap/extension-placeholder'
import Image from '@tiptap/extension-image'
import TextAlign from '@tiptap/extension-text-align'

export default {
  components: {
    EditorContent,
  },
  props: {
    value: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      editor: null,
      content: null,
    }
  },
  computed: {
    apiURL() {
      return process.env.API_URL
    },
  },
  mounted() {
    this.content = this.value
    this.editor = new Editor({
      extensions: [
        StarterKit,
        Image,
        Placeholder.configure({
          placeholder: 'Conteúdo do post...',
        }),
        TextAlign.configure({
          types: ['heading', 'paragraph', 'image', 'img'],
        }),
      ],
      content: this.content,
      onUpdate: () => {
        // HTML
        this.$emit('input', this.editor.getHTML())

        // JSON
        // this.$emit('input', this.editor.getJSON())
      },
    })
  },

  beforeUnmount() {
    this.editor.destroy()
  },
  methods: {
    addImage(url) {
      this.editor
        .chain()
        .focus()
        .setImage({ src: this.apiURL + url })
        .run()
    },
  },
}
</script>

<style lang="sass">
.tiptap-editor
  .bar
    margin-bottom: 10px
    .is-active
      border: 1px solid
  .ProseMirror
    border: 1px solid rgba(0, 0, 0, 0.38)
    border-radius: 10px
    padding: 15px
    min-height: 130px
    &.ProseMirror-focused
      outline: none
      border-color: #009d6b
    p.is-editor-empty:first-child::before
      content: attr(data-placeholder)
      float: left
      color: rgba(0, 0, 0, 0.38)
      pointer-events: none
      height: 0
</style>
