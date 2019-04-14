<template>
  <div class="card blue-grey darken-1">
    <div class="card-content white-text">
      <span class="card-title">Hi, {{firstName}} {{lastName}}</span>
      <p>{{description}}</p>
    </div>

    <button type="button" @click="helloFromVue">Hello from vue</button>
    <second-component :value="value"></second-component>
    <ul>
      <li v-for="movie in batmanMovies" :key="movie">{{movie}}</li>
    </ul>
  </div>
</template>

<script>
import mainService from '../services/mainService.js'

export default {
  props: {
    firstName: String,
    lastName: String,
    description: String
  },
  data() {
    return {
      value: 4,
      batmanMovies: null
    };
  },
  async mounted () {
    console.log('mounted')
    const batmanMovies = await mainService.getBatmanMovies()
    this.batmanMovies = batmanMovies.map(movie => movie.show.name)
  },
  methods: {
    helloFromVue() {
      this.$emit("hello", "Hello, World!");
    }
  }
};
</script>

<style lang="scss" scoped>
  .card {
    & .card-content {
      background-color: rgb(140, 140, 173);
      font-weight: bold;
    }
  }
</style>
