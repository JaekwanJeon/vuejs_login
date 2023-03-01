<template>
  <div class="demo-view" v-if="this.$store.state.loginUserInfo.token">
    <button @click=callDemoApi() class="w3-button w3-greee w3-round">Rest Test</button>&nbsp;&nbsp;
    {{this.demoText}}&nbsp;
  </div>
</template>
<script>
export default {
  data() {
    return {
      demoText: '',
    }
  },
  methods: {
    callDemoApi() {
      this.$axios
        .get("/api/v1/demo-controller")
        .then((res) => {
          console.log(res.status);
          console.log(res.data);
          this.demoText = res.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
}
</script>

<style>
.demo-view {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>