<template>
    <div class="home">
      <div v-if="error">
        {{error}}
      </div>
      <div v-if="posts.length>0">
        <PostsList :posts="posts"></PostsList>
      </div>
      <div v-else>
        <loading class=""></loading>
      </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity'
import PostsList from '../components/PostsList'

export default {
  components: { PostsList },
  setup(){
    let error = ref("")
    let posts = ref([])

    let load=async()=>{
      try{
        let response = await fetch('http://localhost:3000/posts') //fetch is a promise so use await
        if(response.status===404){
          throw new Error('Not Found URL')
        }
        let datas = await response.json() //response.json() is a promise so use await
        posts.value = datas
      }
      catch(err){
        error.value = err.message
      }
    }
    load()
    return {posts,error}
  }
}
</script>

<style>

</style>