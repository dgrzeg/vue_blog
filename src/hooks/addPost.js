import { ref } from 'vue';
import { projectFirestore } from '../firebase/config.js';

const addPost = (post) => {
  const error = ref(null);

  const add = async () => {
    try {
      const res = await projectFirestore.collection('posts').add(post);

      // let data = await fetch(`http://localhost:3000/posts/`, {
      //   method: 'POST',
      //   body: JSON.stringify(post),
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      // });

      // if (!data.ok) throw Error('sth went wrong');

      // return data.json();
    } catch (err) {
      error.value = err.message;
    }
  };

  return { error, add };
};

export default addPost;
