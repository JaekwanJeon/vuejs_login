<template>
  <div>
    <div>
      <h2>Please Log In</h2>
      <div id="loginForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your email" v-model="email"><br>
          </p>
          <p>
            <input name="password" class="w3-input" placeholder="Enter your password" v-model="password" type="password">
          </p>
          <p>
            <button type="submit" class="w3-button w3-green w3-round">Login</button>
          </p>
        </form>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    fnLogin() {
      if (this.email === '') {
        alert('email을 입력하세요.')
        return
      }

      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      let account = {};
      account.email = this.email;
      account.password = this.password;

      this.$axios
        .post("/api/v1/auth/authenticate", JSON.stringify(account))
        .then((res) => {
          console.log(res.staus);
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });

      alert('로그인 되었습니다.')
    }
  }
}
</script>

<style>
#loginForm {
  width: 500px;
  margin: auto;
}
</style>