<template>

     <div class="l-box">
          <div class="l-box-content">
               <header>
                    <h1 v-html="title"></h1>
               </header>
               <p v-html="paragraph" class="text-dafault"></p>
               <MdButtonDefault :name="buttonName"/>
          </div>
          <div class="img-wrapper">
               <img src="../assets/img/img-content/tree1.png" alt="">
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
     position: absolute;
     bottom: -40px;
     left: 40px;
     margin: 0 auto;
}

.img-wrapper img {
     width: 100%;
}

.text-dafault {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}

.l-box {
  margin-top: 5rem;
     box-sizing: border-box;
     width: 45%;
     height: 100%;
}

/* box */

.l-box {
     position: relative;
     display: flex;
     align-items: flex-start;
     flex-direction: column;
}

/* l-box content */

.l-box-content {
     width: 100%;
     margin-top: 17.187rem;
}

.l-box-content header {
  box-sizing: border-box;
  width: 39.375rem;
  overflow-wrap: break-word;
}

.l-box-content header h1 {
     font-family: var(--md-main-font), sans-serif;
     font-size: 3.5rem;
     font-weight: 700;
     color: var(--md-strong-green);
}


@media screen and (max-width: 1400px) {


     .l-box-content {
          margin: 3rem 0;
     }

     .img-wrapper {
          display: none;
     }

     .l-box {
          box-sizing: border-box;
          width: 100%;
          height: auto;
     }

     .l-box-content {
          margin-top: 2rem;
          padding-left: 5%;
     }

     .l-box-content header {
          width: 90%;
          margin: 0 auto;
     }

     .img-wrapper {
          position: static;
          margin: 0 auto 0 0;
     }

     .l-box-content p {
       font-size: .9rem;
     }

     .l-box-content header h1 {
          font-size: 2.3rem;
     }

}


</style>
