<template>
  <Specie
    :id="$route.params.id"
    :parent="{
      title: 'O que plantar esse mês',
      url: '/ferramentas/o-que-plantar-esse-mes',
    }"
  />
</template>
