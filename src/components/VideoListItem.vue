<template>
  <li class="list-group-item media" @click="onVideoClick">
    <img class="mr-3" :src="thumbnailUrl" alt="video thumbnail">
    <div class="media-body">{{ videoTitle }}</div>
  </li>
</template>

<script>
  export default {
    name: 'VideoListItem',
    props: ['video'],
    computed: {
      thumbnailUrl() {
        return this.video.snippet.thumbnails.default.url;
      },
      videoTitle() {
        return this.video.snippet.title;
      }
    },
    methods: {
      onVideoClick() {
        this.$emit('videoClick', this.video);
      }
    }
  }
</script>

<style scoped>
li {
  display: flex;
  cursor: pointer;
}

li:hover {
  background-color: #eee;
}
</style>