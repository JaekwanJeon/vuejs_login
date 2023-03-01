<template>
  <div>
    <div>
      <h2>Signup</h2>
      <div id="JoinForm">
        <form @submit.prevent="fnLogin">
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your first name" v-model="fname"><br>
          </p>
          <p>
            <input class="w3-input" name="uid" placeholder="Enter your last name" v-model="lname"><br>
          </p>
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
      fname: '',
      lname: '',
      email: '',
      password: ''
    }
  },
  methods: {
    fnLogin() {

      if (this.fname === '') {
        alert('이름을 입력하세요.')
        return
      }

      if (this.lname === '') {
        alert('성을 입력하세요.')
        return
      }

      if (this.email === '') {
        alert('email을 입력하세요.')
        return
      }

      if (this.password === '') {
        alert('비밀번호를 입력하세요.')
        return
      }

      let account = {};
      account.fname = this.fname;
      account.lname = this.lname;
      account.email = this.email;
      account.password = this.password;

      this.$axios
        .post("/api/v1/auth/register", JSON.stringify(account))
        .then((res) => {
          console.log(res.staus);
          console.log(res.data);
          alert("환영합니다. 가입하신 계정으로 로그인 하세요.");
          this.$router.push('/login');
        })
        .catch((error) => {
          console.log(error);
          alert("가입 오류 입니다. 다시 가입해 주세요.");
        });


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