<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <demo-view/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import DemoView from './DemoView.vue'
export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    DemoView
  }
}
</script>
