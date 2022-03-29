<template>
  <h1>Reactive vs ref</h1>
  <p>User one - {{user1}}</p>
  <p>User two - {{user2}}</p>
  <p>Person two - {{person2.name}}</p>
  <button @click="changeOne">User1 button</button>
  <button @click="changeTwo">User2 button</button>
  <button @click="personTwo">Person2 button</button>
</template>

<script>
import { reactive, ref } from '@vue/reactivity'
export default {
  setup(){
    let user1 = ref("Kevin")
    let user2 = reactive("Phon")

    let person2 = reactive({name:"KS"})

    let changeOne=()=>{
      user1.value = "KayAs"
    }
    let changeTwo=()=>{
      user2 = "WP" // in reactive dose not need .value but only in object and array
    }
    let personTwo=()=>{
      person2.name = "wp" //not need .value because its object
    }

    return {user1,user2,changeOne,changeTwo,person2,personTwo}
  }
}
</script>

<style>

</style>