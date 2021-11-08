<template>
     
     <div class="l-box">
          <div class="l-box-content">
               <header>
                    <h1 v-html="title"></h1>
               </header>
               <p v-html="paragraph" class="text-dafault"></p>
               <MdButtonDefault :name="buttonName"/>
               <div class="img-wrapper">
                    <img src="../assets/img/img-content/tree1.png" alt=""> 
               </div>
          </div>
     </div>

</template>
<script>

import MdButtonDefault from './MdButtonDefault.vue'

export default {
     name: 'MdSection1',
     props: {
          buttonName: String,
          title: String,
          paragraph: String,
          cImg: String,

     },
     components: {
          MdButtonDefault,
     }
}
</script>
<style scoped>

.img-wrapper {
     box-sizing: border-box;
     width: 435px;
     height: 476px;
     margin: 0 auto
}

.img-wrapper img {
     width: 100%;
     height: 100%;
}

.text-dafault {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}

.l-box {
     box-sizing: border-box;
     width: 50%;
     height: 900px;
}

/* box */

.l-box {
     display: flex;
     flex-direction: column-reverse;
}

/* l-box content */

.l-box-content {
     width: 100%;
}

.l-box-content header h1 {
     font-family: var(--md-main-font), sans-serif;
     font-size: 3.25rem;
     color: var(--md-strong-green);
}

     
</style>