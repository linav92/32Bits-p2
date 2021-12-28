import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    juegos: [
      {
        codigo: "0001",
        nombre: "Pokemon Diamante Brillante",
        stock: 100,
        precio: 30000,
        color: "red",
        destacado: "true"
      },

      {
        codigo: "0002",
        nombre: "Celeste",
        stock: 100,
        precio: 25000,
        color: "blue",
        destacado: "false"
      },

      {
        codigo: "0003",
        nombre: "Hollow Knight",
        stock: 100,
        precio: 15000,
        color: "green",
        destacado: "true"
      },

      {
        codigo: "0004",
        nombre: "Stardew Valley",
        stock: 100,
        precio: 35000,
        color: "yellow",
        destacado: "false"
      },

      {
        codigo: "0005",
        nombre: "Mario Party Super Stars",
        stock: 100,
        precio: "10000",
        color: "green",
        destacado: "false"
      },

      {
        codigo: "0006",
        nombre: "Sea of Stars",
        stock: 100,
        precio: 20000,
        color: "blue",
        destacado: "true"
      }
    ],
    ventas: []
  },

  getters: {
    juegosTotal(state) {
      return state.juegos.length;
    },
    stockTotal(state) {
      let total = 0;
      state.juegos.forEach(function (game) {
        total += game.stock;
      });
      return total;
    },
    filtrarJuegos: (state) => (id) => {
      return state.juegos.filter((juego) => juego.codigo === id);
    },
    filtrarStock(state) {
      return state.juegos.filter((juego) => juego.stock > 0);
    },
    ventaTotal(state) {
      let ventaTotal = 0;
      state.ventas.forEach((venta) => {
        ventaTotal += venta.precio;
      });
      return ventaTotal;
    }
  },
  mutations: {
    procesarVenta(state, data) {
      let index = state.juegos.findIndex((juego) => juego.codigo === data);
      state.juegos[index].stock -= 1;
    },

    registrarVenta(state, data) {
      state.ventas.push(data);
    }
  },
  actions: {
    venderJuego(context, data) {
      setTimeout(() => {
        context.commit("procesarVenta", data.codigo);
      }, 2000);
      setTimeout(() => {
        context.commit("registrarVenta", data);
      }, 3000);
    }
  }
});

export default store;