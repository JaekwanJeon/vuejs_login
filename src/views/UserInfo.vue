<template>
  <div class="userinfo" v-if="this.$store.state.loginUserInfo.token">
    반갑습니다. {{this.$store.state.loginUserInfo.email}}&nbsp;
    <button @click=logout() class="w3-button w3-greee w3-round">LogOut</button>
  </div>
</template>
<script>
export default {
  methods: {
    logout() {
      this.$store.state.loginUserInfo.token = '';
    }
  }
}
</script>

<style>
.userinfo {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
</style>