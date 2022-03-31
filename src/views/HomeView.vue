<template>
  <PostsList :posts="posts"></PostsList>
  
</template>

<script>
import PostsList from '../components/PostsList'
import { ref } from '@vue/reactivity'

export default {
  components: { PostsList },
  setup(){
    let posts = ref([
      {title:"post title 1",body:"Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores a numquam dolore itaque est tempora, deserunt, nam earum aperiam dolor deleniti error perferendis quod. Nostrum quod eos velit ea laudantium. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, dolorum. Soluta at suscipit illum quos, delectus in nobis dolores fuga tempora sapiente! Adipisci quaerat, eveniet placeat consequatur qui rerum dicta.",id:1},
      {title:"post title 2",body:"lorem ipsum",id:2}
    ])

    return {posts}
  }
}
</script>

<style>

</style>