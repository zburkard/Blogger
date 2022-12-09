<template>
    <div class="container-fluid">
        <div class="row">
            <div v-if="blogger" class="img-fluid m-3 d-flex mx-5 align-items-center">
                <img :src="blogger?.picture" alt="" class="rounded-circle">
                <h3 class="mx-5">{{ blogger.name }}</h3>
                <i class="mdi mdi-pencil fs-3 text-info"></i>
            </div>
        </div>
        <section class="row">
            <div v-for="b in blogs" class="col-8 p-4">
                <BlogCard :blog="b" />
            </div>
        </section>
    </div>
</template>

<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState';
import BlogCard from '../components/BlogCard.vue';
import { bloggersService } from "../services/BloggersService.js"
import { blogsService } from '../services/BlogsService';
import Pop from '../utils/Pop';



export default {
    setup() {
        const route = useRoute();
        async function getBloggerById() {
            try {
                await bloggersService.getBloggerById(route.params.bloggerId);
            }
            catch (error) {
                console.error(error);
                Pop.error(("[ERROR]"), error.message);
            }
        }
        async function getBlogsById() {
            try {
                await blogsService.getBlogsById(route.params.bloggerId)
            } catch (error) {
                console.error(error)
                Pop.error(('[ERROR]'), error.message)
            }
        }
        onMounted(() => {
            getBloggerById()
            getBlogsById()
        });
        return {
            blogger: computed(() => AppState.activeBlogger),
            blogs: computed(() => AppState.blogs)
        };
    },
    components: { BlogCard }
}
</script>

<style >

</style>
