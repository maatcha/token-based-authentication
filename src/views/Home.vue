<template>
  <div class="home">
    <h1>Welcome to the App!</h1>
    <p>{{ message }}</p>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  data () {
    return {
      message: null
    }
  },
  created () {
    axios.get('//localhost:3000').then(({ data }) => {
      this.message = data.message
    })
  }
}
</script>
