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
     width: 100%;
     height: 660px;
     overflow: hidden;
}

.img-wrapper img {
     text-align: center;
     width: 100%;
     height: 100%;
}

/* r-box content */

.r-box {
     box-sizing: border-box;
     width: 50%;
     height: 900px;
}

.r-box-content {
     width: 100%;
}

.r-box-content header h2 {
     color: var(--md-light-green);
     font-family: var(--md-main-font), sans-serif;
     font-size: 1.5rem;
}

.r-box-content button {
     margin-bottom: 1rem;
}
     
.text-dafault {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}

</style>