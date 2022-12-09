<template>
  <div class="container fluid">
    <section class="row">
      <h3 class="text-center">All Blogs</h3>
    </section>
    <section v-for="b in blogs" class="row justify-content-center">
      <BlogCard :blog="b" />
    </section>
  </div>
</template>

<script>
import { logger } from "../utils/Logger.js";
import Pop from "../utils/Pop.js";
import { blogsService } from "../services/BlogsService.js"
import { onMounted, computed } from "vue";
import { AppState } from "../AppState.js";
import BlogCard from "../components/BlogCard.vue";

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        logger.error(error);
        Pop.error(error.message);
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },
  components: { BlogCard }
}
</script>

<style scoped lang="scss">

</style>
