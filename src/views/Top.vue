<template>
    <div class="news">
        <p class="loading" v-show="loading">
          <span><i class="iconfont icon-loading"></i></span>
        </p>
        <ul>
           <item v-for="(item, index) in limitItem" :item="item" :index="index+1"></item>
        </ul> 
        <p v-if="items.length >= limitNum"><a href="#">More</a></p>
     </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import item from '../components/Item.vue'

    export default {
      name: 'top',
      data () {
        return {
          loading: true
        }
      },
      components: {
        item
      },
      created () {
        const ids = this.$store.state.ids.topids
        this.$nextTick(() => {
          this.$store.dispatch('FETCH_ITEMS', ids).then(() => {
            this.loading = false
          })
        })
      },
      computed: {
        ...mapState({
          items: 'items',
          limitNum: 'limitNum'
        }),
        ...mapGetters({
          limitItem: 'limitItem'
        })
      }
    }
</script>

<style lang="scss">
    .news {
        width: 100%;
        height: 100%;
        font-size: 0.9rem;
        background: white;
    }
    .loading {
      height: 100%;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
