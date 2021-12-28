<template>
  <div>
    <table class="table table-striped mt-4">
      <thead>
        <th>Código</th>
        <th>Nombre</th>
        <th>Precio</th>
      </thead>
      <tbody>
        <tr v-for="(juego, index) in lista" :key="index">
          <td>
            {{ juego.codigo }}
          </td>
          <td>
            {{ juego.nombre }}
          </td>
          <td>${{ juego.precio }}</td>
        </tr>
        <tr>
          <td scope="row">Total</td>
          <td colspan="1"></td>
          <td> ${{ ventasTotales }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  props: ["lista"],

  computed: {
    ventasTotales() {
      return this.$store.getters.ventaTotal;
    },
  },
};
</script>

<style scoped>
td {
  font-weight: regular;
  color: #000;
  font-size: 20px;
}
</style>