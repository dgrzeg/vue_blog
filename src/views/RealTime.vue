<template>
  <h1>Real-time data</h1>
  <div v-for="post in posts" :key="post.id">
    {{ post.title }}
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import { projectFirestore } from '../firebase/config';
export default {
  setup() {
    const posts = ref([]);

    projectFirestore
      .collection('posts')
      .orderBy('createedAt', 'desc')
      .onSnapshot((snap) => {
        posts.value = snap.docs.map((doc) => {
          return { ...doc.data(), id: doc.id };
        });
      });

    return { posts };
  },
};
</script>

<style></style>
