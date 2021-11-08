<template>
     
     <div class="s-box">
          <img src="../assets/img/img-elements/wheelbarrow.png" alt="">
          <p v-html="name"></p>
     </div>

</template>
<script>
export default {
     name: 'MdBoxWheelBarrow',
     props: {
          name: String,
     }
}
</script>
<style>
     
.s-box {
     display: inline-block;
     padding: 1.25rem;
     width: 24%;
     box-sizing: border-box;
}

.s-box img {
     display: block;
     margin: 0 auto;
     width: 80px;
     height: 80px;
}

.s-box p {
     display: block;
     font-family: var(--md-main-font);
     color: var(--md-light-green);
     font-size: 1.5rem;
     text-align: center;
     width: 100%;
}

</style>