<template>
  <div class="container mt-4">
    <h1>Ventas de juegos</h1>
    <div class="alert alert-info">
      Cantidad de juegos con stock: {{juegoStock.length}}
    </div>

    <tablaVentas :lista="juegoStock"></tablaVentas>
  </div>
</template>

<script>
import tablaVentas from "../components/tableVentas";

export default {
  computed: {
    juegoStock() {
      return this.$store.getters.filtrarStock;
    },
  },

  components: {
    tablaVentas
  },
};
</script>

