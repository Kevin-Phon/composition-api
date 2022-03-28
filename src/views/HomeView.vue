<template>
  <h1>Home Page</h1>
  <p>Hello! I'm {{name}} and {{age}} years old.</p>
  <button @click="handleClick">Click</button>
</template>

<script>
export default {
  setup(){
    let name = "KayAs"
    let age = 23
    let handleClick=()=>{
      console.log('Click function')
    }
    return {name,age,handleClick}//remember to return datas in composition api. 
                      // so that we can use them
  }
}
</script>

<style>

</style>