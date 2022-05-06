<template>
  <li class="blog-comment--item">
    <div class="blog-comment--user blog-line blog-line--row ">
      <div class="blog-comment--avatar">
        <img :src="uid.avatar"
             alt="!">
      </div>
      <span class="blog-comment--name">{{uid.nikname}}</span>
    </div>
    <p class="blog-comment-content">{{content}}</p>
    <p class="blog-comment-date">{{date}}</p>
  </li>
</template>

<script>
export default {
  name: 'CommentItem',
  props: {
    uid: {
      type: Object
    },
    content: {
      type: String
    },
    date: {
      type: String
    }
  },
  data () {
    return {

    };
  },
  mounted () {

  },
  methods: {

  },
};
</script>

<style lang="scss" scoped>
</style>