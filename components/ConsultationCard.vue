<template>
  <v-card
    color="#F4F4F4"
    :to="isActive(consultation.startAt) ? baseLink + consultation._id : null"
    rounded="3"
    :disabled="!isActive(consultation.startAt)"
    class="d-flex justify-start align-center pa-6 primary--text mb-6"
    elevation="3"
  >
    <v-avatar
      left
      color="rgba(123, 163, 162, 0.4)"
      class="primary--text"
      size="60"
    >
      <strong class="primary--text">{{
        $moment(consultation.startAt).tz('UTC').format('MMM')
      }}</strong>
    </v-avatar>
    <div class="w-100 ml-3">
      <h4># {{ consultation.name }}</h4>
      <v-progress-linear
        color="primary"
        rounded
        :value="
          isActive(consultation.startAt)
            ? statusList[consultation.status].progress
            : 0
        "
        style="width: 72px"
        class="d-inline-block mr-1"
      ></v-progress-linear>
      <div v-if="isActive(consultation.startAt)">
        <small style="font-size: 10px">
          {{ statusList[consultation.status].label }}
        </small>
      </div>
      <div v-else>
        <small style="font-size: 10px">
          Começa em {{ dateDiff(consultation.startAt) }} dias
        </small>
      </div>
    </div>
  </v-card>
</template>
<script>
import statusList from '@/data/status-list'
export default {
  props: {
    consultation: {
      type: Object,
      required: true,
      default: () => null,
    },
  },
  data() {
    return {
      statusList,
    }
  },
  computed: {
    baseLink() {
      return this.$auth.user.role === 'admin'
        ? '/acompanhamentos/'
        : '/acompanhamento-mensal/'
    },
  },
  methods: {
    isActive(startAt) {
      return this.dateDiff(startAt) <= 1
    },
    dateDiff(date) {
      const today = new Date()
      return this.$moment(date)
        .tz('UTC')
        .diff(
          this.$moment(
            Date.UTC(today.getFullYear(), today.getMonth(), today.getDate())
          ).tz('UTC'),
          'days'
        )
    },
  },
}
</script>
