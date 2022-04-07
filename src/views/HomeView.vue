<template>
    <div class="home">
      <div v-if="error">
        {{error}}
      </div>
      <div v-if="posts.length>0" class="layout">
        <div>
          <PostsList :posts="posts"></PostsList>
        </div>
        <div>
          <TagCloud></TagCloud>
        </div>
      </div>
      <div v-else>
        <SpinNer></SpinNer>
      </div>
    </div>
</template>

<script>

import TagCloud from '../components/TagCloud'
import SpinNer from '../components/SpinNer'
import PostsList from '../components/PostsList'
import getPosts from '../composables/getPosts'

export default {
  components: {
    TagCloud,
    SpinNer, PostsList },
  setup(){
    let{posts,error,load} = getPosts()

    load();
    return {posts,error}
  }
}
</script>

<style>
  .home{
    max-width: 1200px;
    margin: 0 auto;
    padding: 10px;
  }
  .layout{
    display: grid;
    grid-template-columns: 3fr 1fr;
    gap: 20px;
  }
</style>