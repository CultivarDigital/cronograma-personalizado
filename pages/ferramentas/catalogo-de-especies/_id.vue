<template>
  <Specie
    :id="$route.params.id"
    :parent="{
      title: 'Catálogo de espécies',
      url: '/ferramentas/catalogo-de-especies',
    }"
  />
</template>
