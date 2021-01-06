<template>
  <div id="layoutSidenav_nav">
    <nav class="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div class="sb-sidenav-menu">
        <div class="nav">
          <div class="sb-sidenav-menu-heading">Core</div>
          <router-link class="nav-link" to="/home" exact>
            <div class="sb-nav-link-icon">
              <i class="fas fa-tachometer-alt"></i>
            </div>
            Dashboard
          </router-link>
          <div class="sb-sidenav-menu-heading">Interface</div>
          <router-link class="nav-link" to="/home/category" exact>
            <div class="sb-nav-link-icon">
              <i class="fas fa-table"></i>
            </div>
            Catagories
          </router-link>
        </div>
      </div>
      <div class="sb-sidenav-footer">
        <div class="small">Logged in as:</div>
        Start Bootstrap
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>