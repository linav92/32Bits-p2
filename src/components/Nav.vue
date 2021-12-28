<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
     <div class="container-fluid">
       <router-link class="navbar-brand" to="/">32Bits</router-link>      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Inicio</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/busqueda">Busqueda</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/ventas">Ventas</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/total">Total</router-link>
          </li>
        </ul>
      </div>
     </div>
    </nav>
  </div>
</template>