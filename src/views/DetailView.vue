<template>
  <div v-if="post">
      <h2>{{post.title}}</h2>
      <p>{{post.body}}</p>
  </div>
  <div v-else>
      <SpinNer></SpinNer>
  </div>
</template>

<script>

import SpinNer from '../components/SpinNer'
import getPost from '../composables/getPost'

export default {
  components: { SpinNer },
    props:['id'],
    setup(props){
        let {post,error,load} = getPost(props.id);

        load();
        return {post,error}
    }
}
</script>

<style>

</style>