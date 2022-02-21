import { ref } from 'vue';
import { projectFirestore } from '../firebase/config.js';

const getPosts = () => {
  const posts = ref([]);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection('posts')
        .orderBy('createedAt', 'desc')
        .get();
      posts.value = res.docs.map((doc) => {
        return { ...doc.data(), id: doc.id };
      });
      // //simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 500);
      // });
      // let data = await fetch('http://localhost:3000/posts');
      // if (!data.ok) throw Error('no data');
      // posts.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { posts, error, load };
};

export default getPosts;
