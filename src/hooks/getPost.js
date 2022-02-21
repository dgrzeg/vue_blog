import { ref } from 'vue';
import { projectFirestore } from '../firebase/config.js';

const getPost = (id) => {
  const post = ref(null);
  const error = ref(null);

  const load = async () => {
    try {
      const res = await projectFirestore
        .collection('posts')
        .doc(id)
        .get();

      if (!res.exists) throw Error('Does not exist');
      post.value = { ...res.data(), id: res.id };
      // //simulate delay
      // await new Promise((resolve) => {
      //   setTimeout(resolve, 500);
      // });
      // let data = await fetch(`http://localhost:3000/posts/${id}`);
      // if (!data.ok) throw Error('no data');
      // post.value = await data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { post, error, load };
};

export default getPost;
