<template id="template-home">
    <div>
        <div v-for="n in 10">
            {{msg}}
        </div>
    </div>
</template>
<script>
       export default {
           data() {
               return {
                   msg: '你好'
               }
           }
       } 
</script>
<style>
body{
    color:red;
}
</style>