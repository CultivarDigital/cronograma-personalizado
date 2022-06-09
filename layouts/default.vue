<template>
  <div>
    <v-app>
      <BottomNavigation
        v-if="!loading && ($auth.user.role !== 'user' || currentContract)"
      />
      <DrawerNavigation
        v-if="!loading && ($auth.user.role !== 'user' || currentContract)"
      />
      <v-main>
        <div
          v-if="loading"
          class="text-center d-flex justify-center align-center fill-height"
        >
          <v-progress-circular color="secondary" indeterminate size="20" />
        </div>
        <template v-else>
          <Profile v-if="!$auth.user.cpf" />
          <div v-else>
            <Anamnese
              v-if="
                currentContract &&
                (!currentContract.anamnese ||
                  !currentContract.anamnese.reuse_products)
              "
              :value="JSON.parse(JSON.stringify(currentContract))"
            />
            <RenewAnswer
              v-else-if="
                waitingContract &&
                (!waitingContract.renew_answer ||
                  !waitingContract.renew_answer.pix)
              "
              v-model="waitingContract"
            />
          </div>

          <Nuxt v-if="$auth.user.role !== 'user' || currentContract" />
          <div
            v-else-if="waitingContract"
            class="text-center fill-height d-flex align-center justify-center"
          >
            <v-alert color="success" dark>
              Seu contrato começa
              {{
                waitingContract.remaining_days > 1
                  ? 'em ' + waitingContract.remaining_days + 'dias'
                  : 'amanhã'
              }}
            </v-alert>
          </div>
          <div
            v-else
            class="text-center fill-height d-flex align-center justify-center"
          >
            <v-alert color="error" dark>
              Você não possui um contrato ativo. Por favor entre em contato com
              nossa equipe
            </v-alert>
          </div>
        </template>
      </v-main>
      <Snackbar />
    </v-app>
  </div>
</template>

<script>
export default {
  middleware: 'auth',
  data() {
    return {
      loading: false,
      waitingContract: null,
    }
  },
  computed: {
    currentContract() {
      return this.$store.state.currentContract
    },
  },
  async created() {
    this.loading = true
    if (this.$auth.user.role !== 'admin') {
      const currentContract = await this.$axios.$get(
        `/v1/contracts/status/active`
      )
      this.$store.dispatch('setCurrentContract', currentContract)
      const waitingContract = await this.$axios.$get(
        `/v1/contracts/status/waiting`
      )
      this.waitingContract = waitingContract
    }
    this.loading = false
  },
}
</script>
<style lang="scss">
.template-form {
  h3 {
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    text-align: center;
  }
  .ccp-options {
    text-align: center;
    margin-bottom: 20px;
    touch-action: none;
  }
  .ccp-option {
    display: inline-block;
    background-color: rgba(238, 96, 94, 0.8);
    color: #fff;
    text-align: center;
    padding: 6px 12px;
    border-radius: 6px;
    margin-left: 3px;
    margin-right: 3px;
    font-weight: bold;
    font-size: 24px;
    cursor: move;
    &.H {
      background-color: rgba(238, 96, 94, 1) !important;
    }
    &.N {
      background-color: rgba(238, 96, 94, 0.8) !important;
    }
    &.R {
      background-color: rgba(238, 96, 94, 0.6) !important;
    }
    &.U {
      background-color: rgba(123, 163, 162, 0.6) !important;
    }
  }
  .months {
    text-align: center;
    h4 {
      background-color: rgba(123, 163, 162, 0.2);
      color: #7ba3a2;
      margin-bottom: 15px;
      padding: 5px;
      text-align: center;
      border-radius: 6px;
      cursor: pointer;
    }
  }
  .week {
    p {
      color: #7ba3a2;
      font-size: 18px;
      font-weight: 500;
      margin-bottom: 5px;
    }
    .week-input {
      border: 1px solid #a9a9a9;
      border-radius: 8px;
      width: 100%;
      min-height: 50px;
      margin-bottom: 15px;
      padding: 5px;
    }
  }
}
</style>
