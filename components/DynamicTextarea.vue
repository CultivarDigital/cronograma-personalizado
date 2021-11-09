<template>
  <Mentionable
    :keys="['@']"
    :items="
      members.map((member) => ({
        value: member.login,
        avatar_url: member.avatar_url,
      }))
    "
    offset="6"
  >
    <v-textarea v-model="text" rows="5" placeholder="Detalhes do cartão" />
    <template #item-@="{ item }">
      <div class="user">
        <b-avatar
          :src="item.avatar_url"
          class="mr-1"
          size="2rem"
          :alt="item.value"
        />
        <span class="dim"> {{ item.value }} </span>
      </div>
    </template>
  </Mentionable>
</template>

<script>
import { Mentionable } from 'vue-mention'
export default {
  components: {
    Mentionable,
  },
  props: {
    value: {
      type: String,
      default: () => null,
    },
  },
  data() {
    return {
      text: String,
    }
  },
  computed: {
    members() {
      return this.$store.state.members
    },
  },
}
</script>
