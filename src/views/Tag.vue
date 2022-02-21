<template>
  <div class="tag">
    <h1>Tag: #{{ route.params.tag }}</h1>
    <div v-if="error">{{ error }}</div>
    <div v-if="filteredPosts.length" class="layout">
      <PostList :posts="filteredPosts" />
      <TagCloud :posts="posts" />
    </div>
    <Spinner v-else />
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import getPosts from '../hooks/getPosts.js';
import Spinner from '../components/Spinner.vue';
import PostList from '../components/PostList.vue';
import TagCloud from '../components/TagCloud.vue';
import { computed } from 'vue';
export default {
  components: {
    Spinner,
    PostList,
    TagCloud,
  },
  setup() {
    const route = useRoute();
    const { posts, error, load } = getPosts();
    load();

    const filteredPosts = computed(() =>
      posts.value.filter((post) => post.tags.includes(route.params.tag))
    );

    return { filteredPosts, error, route, posts };
  },
};
</script>

<style>
.tag {
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}
</style>
