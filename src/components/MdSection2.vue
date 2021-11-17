<template>

     <div class="r-box">

          <div class="r-box-content">

               <div class="img-wrapper">
                    <img src="../assets/img/img-content/tree2.jpg" alt="">
               </div>

               <header>
                    <h2 v-html="title" class="secondary-header"></h2>
                    <p v-html="paragraph" class="text-dafault"></p>
                    <MdButtonDefault :name="buttonName"/>
               </header>

          </div>
     </div>

</template>
<script>

import MdButtonDefault from './MdButtonDefault.vue'

export default {
     name: 'MdSection2',
     props: {
          title: String,
          paragraph: String,
          buttonName: String,

     },
     components: {
          MdButtonDefault,
     }
}
</script>
<style scoped>

.img-wrapper {
     box-sizing: border-box;
     width: 740px;
     height: 710px;
     overflow: hidden;
     margin-left: auto;
     margin-bottom: 4.375rem;
}

.img-wrapper img {
     text-align: center;
     width: 100%;
     height: 100%;
}

/* r-box content */

.r-box {
     box-sizing: border-box;
     width: 55%;
     height: 100%;
}

.r-box-content {
     width: 100%;
}

.r-box-content p {
     box-sizing: border-box;
     line-height: 1.7rem;
     width: 100%;
     height: 150px;
}

.r-box-content header h2 {
     color: var(--md-light-green);
     font-family: var(--md-main-font), sans-serif;
     font-size: 1.5625rem;
}

.r-box-content button {
     margin-bottom: 1rem;
}

.text-dafault {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
     font-size: 0.875rem;
     text-align: left;
}

@media screen and (max-width: 1400px) {

     .r-box {
          box-sizing: border-box;
          width: 100%;
          height: auto;
          margin-bottom: 5rem;
     }

     .r-box-content {
          margin-top: 2rem;
     }

     .r-box-content header {
          width: 90%;
          margin: 0 auto;
     }

     .img-wrapper {
          width: 100%;
          height: auto;
          position: static;
          margin: 0 0 auto 0;
     }

     .r-box-content p {
          height: auto;
     }

}

</style>
