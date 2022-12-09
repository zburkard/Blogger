<template>
  <div class="col-8 rounded elevation-5 p-2 m-2" @click="setActiveBlog()">
    <router-link v-if="route.name == 'Home'" :to="{ name: 'Blogger', params: { bloggerId: blog.creatorId } }">
      <img :src="blog.creator.picture" alt="" class="img-fluid creator-img rounded-circle">
    </router-link>
    <div class="text-center fw-bold">{{ blog.title }}</div>
    <div>
      {{ blog.body }}
    </div>
  </div>
</template>


<script>
import { AppState } from '../AppState';
import { computed, reactive, onMounted } from 'vue';
import { Blog } from "../models/Blog.js";
import { blogsService } from '../services/BlogsService';
import { useRoute } from 'vue-router';
export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()
    return {
      route,
      setActiveBlog() {
        blogsService.setActiveBlog(props.blog)
      }
    }
  }
};
</script>


<style lang="scss" scoped>
.creator-img {
  height: 7vh;
  width: 7vh;
}
</style>