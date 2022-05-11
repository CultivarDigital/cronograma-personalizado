<template>
  <v-dialog
    v-model="dialog"
    max-width="290"
    @click:outside="removeComment = null"
  >
    <template #activator="{ on, attrs }">
      <v-btn v-if="button" small dark color="error" v-bind="attrs" v-on="on">
        <v-icon left>mdi-delete</v-icon> Remover
      </v-btn>
      <v-btn v-else v-bind="attrs" icon x-small v-on="on">
        <v-icon dark>mdi-delete</v-icon>
      </v-btn>
    </template>
    <v-card>
      <v-card-title class="text-h5">
        Tem certeza que deseja excluír?
      </v-card-title>
      <v-card-text> Esta alteração não pode ser desfeita </v-card-text>
      <v-card-actions>
        <v-spacer />
        <v-btn color="error" text @click="cancel"> Não </v-btn>
        <v-btn color="green" text @click="confirm"> Sim </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    button: {
      type: Boolean,
      default: false,
    },
  },
  data: () => ({
    dialog: false,
  }),
  methods: {
    confirm() {
      this.dialog = false
      this.$emit('confirm')
    },
    cancel() {
      this.dialog = false
      this.$emit('cancel')
    },
  },
}
</script>
