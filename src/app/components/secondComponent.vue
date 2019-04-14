<template>
  <div class="card blue-grey darken-1">
    outer area:
      <div>inner-area: SECOND COMPO {{value}}</div>
    </div>
</template>

<script>
export default {
  props: {
    value: Number
  },
  data () {
    return {
    }
  },
  methods: {
  }
}
</script>

<style scoped>
  div {
    display: inline-block;
    padding: 20px;
    background-color: peachpuff;
    border-radius: 20px;
    margin: 20px;
    border: 2px solid orange;
  }
</style>
