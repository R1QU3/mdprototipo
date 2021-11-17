<template>
     
     <div class="s-box">
          <img src="../assets/img/img-elements/fertilizer.png" alt="">
          <div>
               <p v-html="name"></p>
          </div>
     </div>

</template>
<script>
export default {
     name: 'MdBoxFerilizer',
     props: {
          name: String,
     }
}
</script>
<style scoped>
     
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
     font-size: 1.2rem;
     text-align: center;
     width: 100%;
}

@media screen and (max-width: 750px) {

     .s-box {
          /* width: 40%; */
          height: 14rem;
     }

     .s-box div {
          margin: 0 auto;
          width: 95%;
          overflow-wrap: break-word;
     }

}

</style>