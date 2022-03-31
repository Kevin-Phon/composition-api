<template>
    <h2>{{post.title}}</h2>
    <p>{{cutBodyPost}}</p>
</template>

<script>
import { computed } from '@vue/runtime-core'

export default {
    props:['post'],
    setup(props){
        let cutBodyPost = computed(()=>{
            return props.post.body.substring(0,100)+"..."
        })

        return {cutBodyPost}
    }
}
</script>

<style>

</style>