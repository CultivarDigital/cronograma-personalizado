<template>
  <div>
    <TopNavigation active="Montar Cronograma" />
    <v-container class="pt-0 px-6">
      <div class="mb-8">
        <Subtitle label="Turma" back-to="/turmas" />
      </div>
    </v-container>
    <div>
      <v-container v-if="group" class="px-4">
        <v-row>
          <v-col cols="4">
            <v-card
              style="
                background-color: rgba(123, 163, 162, 0.4);
                border-radius: 4px;
                font-size: 14px;
                line-height: 14px;
              "
              class="px-3 py-2 primary--text text-center"
              elevation="0"
            >
              {{ group.name }}
            </v-card>
            <div class="text-center">
              <div
                style="font-size: 42px"
                class="primary--text font-weight-bold"
              >
                {{ $moment(group.startAt).tz('UTC').format('DD') }}
              </div>
              <div
                style="
                  color: rgba(123, 163, 162, 0.4);
                  font-size: 16px;
                  line-height: 18px;
                  text-transform: capitalize;
                "
              >
                {{ $moment(group.startAt).tz('UTC').format('MMM YYYY') }}
              </div>
            </div>
          </v-col>
          <v-col cols="8" class="font-size: 14px; line-height: 14px;">
            <GroupForm :group="group" @change="load" />
          </v-col>
        </v-row>
        <v-card
          style="
            background-color: rgba(196, 196, 196, 0.4);
            color: rgba(0, 0, 0, 0.8);
            border-radius: 8px;
          "
          class="px-3 py-3 text-center mt-10"
          elevation="0"
          @click="copyURL"
        >
          <small>{{ registerUrl }}</small>
        </v-card>
        <p class="text-center">
          <small style="font-size: 12px">
            clique para copiar o link de cadastro da turma
          </small>
        </p>
      </v-container>
    </div>
    <hr class="mb-3" style="border-color: rgba(215, 215, 215, 0.37)" />
    <div v-if="loading" class="text-center py-6">
      <v-skeleton-loader type="list-item@5" />
    </div>
    <div v-else>
      <v-container
        v-if="membersDataset && membersDataset.items.length"
        class="px-4"
      >
        <DoubleTable :data="membersDataset" clickable />
      </v-container>
      <v-container v-else>
        <v-alert class="text-center" color="grey" dark>
          Nenhuma cliente nessa turma
        </v-alert>
      </v-container>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    target: {
      type: String,
      default: null,
    },
  },
  data() {
    return {
      group: null,
      members: null,
      active: null,
      currentGroup: null,
      loading: false,
    }
  },
  computed: {
    registerUrl() {
      let url = process.env.BASE_URL
      if (this.group) {
        url += `?codigo=${this.group._id}`
      }
      return url
    },
    membersDataset() {
      if (this.members) {
        return {
          header: {
            label: 'Adesão',
            value: 'Clientes da turma',
          },
          items: this.members.map((member) => ({
            label: this.$moment(member.createdAt).format('DD/MM/YYYY'),
            value: member.name,
            url: `/clientes/${member.id}`,
          })),
        }
      }
      return null
    },
  },
  watch: {
    active(index) {
      this.currentGroup = null
      if (index !== null) {
        this.currentGroup = this.group[index]
      }
    },
  },
  created() {
    this.load()
  },
  methods: {
    async load() {
      this.loading = true
      this.group = await this.$axios.$get('/v1/groups/' + this.$route.params.id)
      this.members = await this.$axios.$get(
        '/v1/groups/' + this.$route.params.id + '/members'
      )
      this.loading = false
    },
    async copyURL() {
      await navigator.clipboard.writeText(this.registerUrl)
      this.notify('Link copiado!')
    },
  },
}
</script>
