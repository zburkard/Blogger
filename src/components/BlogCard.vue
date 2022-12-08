<template>
  <div class="col-8 rounded elevation-5 p-2 m-2">
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
export default {
  props: {
    blog: {
      type: Blog,
      required: true
    }
  },
  setup(props) {
    return {}
  }
};
</script>


<style lang="scss" scoped>

</style>