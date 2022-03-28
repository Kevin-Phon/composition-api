<template>
  <h1>Home Page</h1>
  <!-- not need .value if we use datas outside -->
  <p>Hello! I'm {{name}} and {{age}} years old.</p> 
  <input type="text" v-model="name">
  <button @click="handleClick">Click</button>
  <button @click="age++">Increase age</button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  setup(){
    let name = ref("KayAs")
    //console.log("name.value")
    let age = ref(23)
    let handleClick=()=>{
      name.value = "Kevin Phon" //remember to use .value
    }
    return {name,age,handleClick}
  }
}
</script>

<style>

</style>