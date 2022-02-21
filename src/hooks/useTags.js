import { ref } from 'vue';

const useTags = (posts) => {
  const tags = ref([]);
  const tagSet = new Set();

  posts.forEach((item) => item.tags.forEach((tag) => tagSet.add(tag)));

  tags.value = [...tagSet].sort();

  return { tags };
};

export default useTags;
