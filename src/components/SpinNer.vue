<template>
  <div class="spin">

  </div>
</template>

<script>
export default {

}
</script>

<style>
    .spin{
        width:40px ;
        height:40px ;
        border: 3px solid transparent;
        border-radius: 50%;
        margin: 30px auto;
        border-top-color: red;
        animation: spin 2s linear infinite;
    }
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% {transform: rotate(360deg);}
    }
</style>