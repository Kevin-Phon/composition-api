<template>
  <form @submit.prevent="addPost">
      <label>Title</label>
      <input type="text" v-model="title" required>

      <label>Body</label>
      <textarea v-model="body" required></textarea>

      <label>Tag(hit Enter to add tag)</label>
      <input type="text" v-model="tag" @keydown.enter.prevent="handleKeydown">
      <div class="pill" v-for="tag in tags" :key="tag">
          {{tag}}
      </div>

      <button>Add Post</button>
  </form>
</template>

<script>
import { ref } from '@vue/reactivity'
import {useRouter} from 'vue-router'
export default {
    setup(){
        let router = useRouter();//this.router

        let title = ref("")
        let body = ref("")
        let tag = ref("")
        let tags = ref([])

        let handleKeydown=()=>{
            if(!tags.value.includes(tag.value)){
                tags.value.push(tag.value)
            }
            tag.value = ""
        }

        let addPost=()=>{
          fetch("http://localhost:3000/posts",{
            method:"POST",
            headers:{
              "Content-type":"application/json"
            },
            body:JSON.stringify(
              {
                title:title.value,
                body:body.value,
                tags:tags.value
              }
            )
          })
          
          //redirect user to redirect page
          router.push('/')
        }
      
      return {title,body,tag,tags,handleKeydown,addPost}
    }
}
</script>

<style>
    form {
    max-width: 480px;
    margin: 0 auto;
    text-align: left;
  }
  input, textarea {
    display: block;
    margin: 10px 0;
    width: 100%;
    box-sizing: border-box;
    padding: 10px;
    border: 1px solid #eee;
  }
  textarea {
    height: 160px;
  }
  label {
    display: inline-block;
    margin-top: 30px;
    position: relative;
    font-size: 20px;
    color: white;
    margin-bottom: 10px;
  }
  label::before {
    content: "";
    display: block;
    width: 100%;
    height: 100%;
    background: #ff8800;
    position: absolute;
    z-index: -1;
    padding-right: 40px;
    left: -30px;
    transform: rotateZ(-1.5deg);
  }
  button {
    display: block;
    margin-top: 30px;
    background: #ff8800;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 18px
  }
  .pill {
    display: inline-block;
    margin: 10px 10px 0 0;
    color: #444;
    background: #ddd;
    padding: 8px;
    border-radius: 20px;
    font-size: 14px;
  }
</style>