<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <button @click="transtionTo">跳转到About</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld,
  },
  methods: {
    transtionTo() {
      this.$router.push("/about/a");
    },
  },
  mounted() {},
};
</script>

<style>
.home {
  text-align: center;
}
</style>
