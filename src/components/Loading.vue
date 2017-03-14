<template>
    <p class="loading">
      <img :src="loadingImg">
    </p>
</template>

<script>
    import loadingImg from '../../static/img/loading.png'
    export default {
      name: 'loading',
      data () {
        return {
          loadingImg: loadingImg
        }
      }
    }
</script>

<style lang="scss">
    .loading {
      height: 20em;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
