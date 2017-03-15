<template>
    <div>1</div>
</template>

<script>
    export default {
      name: 'comment',
      props: ['comment']
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
