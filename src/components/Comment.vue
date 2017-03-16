<template>
     <div class="comment-details">
        <div class="title">
            <span class="vote" @click="voted=!voted" v-show="!voted && open"></span>
            <span><router-link :to="'/user/' + comment.by">{{ comment.by }}</router-link></span>
            <span class="timeago">{{ comment.time | timeAgo }}</span>
            <span class="unvote" v-show="voted"><a href="#" @click="voted=!voted">unvote</a></span>
            <span class="toggle">
                <a href="#" v-if="open" @click="open=!open">[-]</a>
                <a href="#" v-else="!open"  @click="open=!open">[+{{ comment.kids ? comment.kids.length + 1 : 1 }}]</a>
            </span>
        </div>
        <!--comment.text为html，为了输出html，使用v-html-->
        <div class="comment-text" v-html="comment.text" v-show="open"></div>
    </div>
</template>

<script>
    // import { fetchItem } from '../api/api.js'
    export default {
      name: 'comment',
      props: ['id'],
      data () {
        return {
          voted: false,
          open: true
        }
      },
      computed: {
        comment () {
          const comment = this.$store.state.comments.find(comment => comment.id === this.id)
          return comment
        }
      }
    }
</script>

<style lang="scss">
    $bgColor:#f6f6ef;
    $fontColor:#9a9a9a;

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

        .unvote {
            padding-left: 0.5em;
            margin-left: 0.5em;
            display: block;
            border-left: 1px solid #9a9a9a;
        }
    }

    .comment-text {
        width: 95%;
        height: auto;
        padding: 1em 0 1em 1em;
        overflow-wrap:break-word;
        display: flex;
        flex-wrap: wrap;

        p {
            padding:0;
            width: 100%;
            margin-top: 0.5em;
            height: auto;
        }
    
    }
    
</style>
