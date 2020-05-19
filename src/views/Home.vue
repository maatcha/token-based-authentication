<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <p>and {{ message }}</p>
    <div v-if="!loggedIn">
      To use this app you'll need to
      <router-link to="/login">
        Login
      </router-link>
      or
      <router-link to="/register">
        Register
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import { authComputed } from '../vuex/helpers'
export default {
  data () {
    return {
      message: null
    }
  },
  computed: {
    ...authComputed
  },
  created () {
    axios.get('//localhost:3000').then(({ data }) => {
      this.message = data.message
    })
  }
}
</script>
