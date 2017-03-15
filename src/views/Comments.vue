<template>
    <div class="comments">
      <item :item="item" :key="item.id"></item>
      <div class="add-comment">
         <textarea name="comment" cols="70" rows="7"></textarea>
         <button type="submit">Add Comment</button>
      </div>

      <div class="kid-comment">
        
        <div class="comment-details" v-for="comment in comments">
        <div class="title">
            <span class="vote"></span>
            <span><router-link :to="'/user/' + comment.by">{{ comment.by }}</router-link></span>
            <span class="timeago">{{ comment.time | timeAgo }}</span>
            <span class="toggle"><a href="#">[-]</a></span>
        </div>
        <!--comment.text为html，为了输出html，使用v-html-->
        <div class="comment-text" v-html="comment.text"></div>
    </div>

      </div>


    </div>
</template>

<script>
    import item from '../components/Item.vue'
    // import comment from '../components/Comment.vue'
    import { mapState } from 'vuex'
    export default {
      name: 'comment',
      components: {
        item
      },
      created () {
        const id = Number(this.$route.params.id)
        const item = this.$store.state.items.find(item => item.id === id)
        const ids = item.kids
        if (ids) {
          this.$store.dispatch('FETCH_COMMENTS', ids)
        }
      },
      computed: {
        ...mapState({
          comments: 'comments'
        }),
        item () {
          //  string类型,item.id为number类型
          const id = Number(this.$route.params.id)
          const item = this.$store.state.items.find(item => item.id === id)
          return item
        }
      }
    }
</script>

<style lang="scss">
    $bgColor:#f6f6ef;
    $fontColor:#9a9a9a;

    .comments {
      width: 100%;
      background: $bgColor;
      font-size: 1rem;
      overflow-y: scorll;
    }

    .add-comment {
      width:100%;
      display: flex;
      flex-direction: column;

      textarea {
        margin: 0 0 1em 2em;
        width: 70%;
        color: $fontColor;
      }

      button {
        flex-basis: 100%;
        width:8em;
        margin: 0 0 1em 2em;
      }
    }

    .kid-comment {
      width: 100%;
      margin: 1.5em 0 0 1em;
    }

    .comment-details {
        padding: 0.5em 0 0 1em;
    }

    .title {
        color: $fontColor;
        display: flex;

        a {
            color: $fontColor;

            &:hover {
            text-decoration: underline;
            }
        }

        .vote {
            display: block;
            width: 0;
            height: 0;
            overflow: hidden;
            border: 0.45em solid transparent;
            border-bottom-color: $fontColor;
            margin: 0 0.3em;
            cursor: pointer;
        }

        .timeago {
            padding-left: 0.5em;
        }

        .toggle {
            padding-left: 0.5em;
        }
    }

    .comment-text {
        width: 95%;
        height: auto;
        padding: 1em 0 1em 1em;
        overflow-wrap:break-word;
        display: flex;
        flex-wrap: wrap;

        p, i {
            padding:0;
            width: 100%;
            margin-top: 0.5em;
            height: auto;
        }
    
    }

</style>
