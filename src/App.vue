<template>
  <v-app>
    <div id="app">
      <Header />
      <router-view />
    </div>
    <LoginPage />
  </v-app>
</template>

<script>
import LoginPage from './components/LoginPage.vue';

export default {
  components: {
    LoginPage,
  },
};
</script>
<style scoped>
body, html {
  height: 100%;
  margin: 0;
  font-family: 'Roboto', sans-serif;
  background: linear-gradient(to bottom, #e0f7fa, #ffffff);
}
</style>