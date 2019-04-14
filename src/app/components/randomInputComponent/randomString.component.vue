<template>
  <div>
    <label>Random text</label>
    <input type="text" v-model="randomText">
  </div>
</template>

<script>
export default {
  data () {
    return {
      randomText: 'random string text to display'
    }
  }
}
</script>
