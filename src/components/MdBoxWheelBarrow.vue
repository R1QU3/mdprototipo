<template>
     
     <div class="s-box" :style="bg">
          <img src="../assets/img/img-elements/wheelbarrow.png" alt="">
          <div>
               <p v-html="name"></p>
          </div>
     </div>

</template>
<script>
export default {
     name: 'MdBoxWheelBarrow',
     props: {
          name: String,
          bg: String,
     }
}
</script>
<style>
     
/* 245x234 */

.s-box {
     display: inline-block;
     padding: 1.25rem;
     width: 14.625rem;
     height: 15.3125rem;
     box-sizing: border-box;
}

.s-box div {
     margin: 0 auto;
     width: 80%;
     overflow-wrap: break-word;
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
     font-weight: 700;
     color: var(--md-light-green);
     font-size: 1.5rem;
     text-align: center;
     width: 100%;
}

</style>