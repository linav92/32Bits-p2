<template>
  <div class="container mt-4">
    <h1>Total Ventas</h1>
    <tablaTotal :lista="listaTotal"></tablaTotal>
  </div>
</template>

<script>
import tablaTotal from "../components/tableTotal";

export default {
  components: {
    tablaTotal,
  },
  computed: {
    listaTotal() {
      return this.$store.state.ventas;
    },
  },
};
</script>

<style>
h1{
  text-align: center;
}
</style>