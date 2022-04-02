<template>
    <div class="home">
      <div v-if="error">
        {{error}}
      </div>
      <div v-if="posts.length>0">
        <PostsList :posts="posts"></PostsList>
      </div>
      <div v-else>
        <SpinNer></SpinNer>
      </div>
    </div>
</template>

<script>

import SpinNer from '../components/SpinNer'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'

export default {
  components: {
    SpinNer, PostsList },
  setup(){
    let{posts,error,load} = getPosts()

    load();
    return {posts,error}
  }
}
</script>

<style>

</style>