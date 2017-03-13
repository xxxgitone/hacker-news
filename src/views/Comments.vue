<template>
    <div>
       <item :item="item"></item>
    </div>
</template>

<script>
    import item from '../components/Item.vue'
    export default {
      name: 'comment',
      components: {
        item
      },
      computed: {
        // item () {
        //   const id = this.$route.parmas.id
        //   const item = this.$store.state.items.find(item => item.id === id)
        //   return item
        // }
      }
    }
</script>

<style lang="scss">
    
</style>
