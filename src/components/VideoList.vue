<template>
  <ul class="col-md-4">
    <VideoListItem v-for="video in videos" :video="video" :key="video.etag" @videoClick="onVideoClick"></VideoListItem>
  </ul>
</template>

<script>
import VideoListItem from "@/components/VideoListItem";

export default {
  name: 'VideoList',
  components: {
    VideoListItem
  },
  props: {
    videos: Array
  },
  methods: {
    onVideoClick(video) {
      this.$emit('videoClick', video)
    }
  }
};
</script>