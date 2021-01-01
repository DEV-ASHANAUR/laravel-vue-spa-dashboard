<template>
  <main>
    <Header />
    <div id="layoutSidenav">
      <Sidebar />
      <div id="layoutSidenav_content">
        <router-view></router-view>
        <Footer />
      </div>
    </div>
    <FlashMessage :position="'right bottom'"></FlashMessage>
  </main>
</template>

<script>
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";

export default {
  components: {
    Header,
    Sidebar,
    Footer,
  },
};
</script>

<style>
</style>