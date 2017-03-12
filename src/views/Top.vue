<template>
    <div class="news">
        <p class="loading" v-show="loading">
          <img :src="loadingImg">
        </p>
        <ul>
           <item v-for="(item, index) in limitItem" :item="item" :index="index+1" :key="item.id"></item>
        </ul> 
        <p v-if="items.length >= limitNum"><a href="#">More</a></p>
     </div>
</template>

<script>
    import { mapState, mapGetters } from 'vuex'
    import item from '../components/Item.vue'
    import loadingImg from '../../static/img/loading.png'

    export default {
      name: 'top',
      data () {
        return {
          loadingImg: loadingImg
        }
      },
      components: {
        item
      },
      created () {
        const ids = this.$store.state.ids.topids
        this.$nextTick(() => {
          this.$store.dispatch('FETCH_ITEMS', ids).then(() => {
            this.$store.state.loading = true
          })
        })
      },
      computed: {
        ...mapState({
          items: 'items',
          limitNum: 'limitNum',
          loading: 'loading'
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
        font-size: 0.9rem;
        background: white;
    }
    .loading {
      height: 20em;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
</style>
