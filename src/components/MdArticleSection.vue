<template>

     <article class="alicat-content">

          <header>
               <h1 v-html="title"></h1>
          </header>

          <header>
               <h2 v-html="sub_title"></h2>
          </header>

          <p v-html="paragraph" class="text-dafault"></p>

          <MdButtonDefault :name="buttonName"/>

     </article>

     <img class="leaf" src="../assets/img/img-elements/leaf1.png" alt="">

</template>
<script>

import MdButtonDefault from './MdButtonDefault.vue'

export default {
     name: 'MdArticleSection',
     props: {
          title: String,
          sub_title: String,
          paragraph: String,
          buttonName: String,
     },
     components: {
          MdButtonDefault,
     }
}
</script>
<style scoped>

.text-dafault {
     color: var(--md-white);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}

.alicat-content {
     margin: 0 auto;
     box-sizing: border-box;
     width: 40.125rem;
     height: 29.625rem;
     text-align: center;
}

.alicat-content header {
  overflow-wrap: break-word;
}

.alicat-content header h1 {
     color: var(--md-white);
     font-family: var(--md-secondary-font);
     font-weight: 400;
     text-transform: uppercase;
     font-size: 1.25rem;
}

.alicat-content header h2 {
     font-size: 3.125rem;
     font-weight: 700;
     font-family: var(--md-main-font);
     color: var(--md-white);
     line-height: 3.9375rem;
}

.alicat-content p {
     font-size: 1.125rem;
     color: var(--md-white);
     line-height: 1.5625rem;
}

.leaf {
     position: absolute;
     right: -5rem;
     bottom: -12.5rem;
     z-index: -999;
}

@media screen and (max-width: 1400px) {

     header {
          width: 100%;
     }

     .alicat-content {
          box-sizing: border-box;
          width: 100%;
          height: auto;
     }

     .alicat-content header h1 {
       font-size: 1rem;
     }

     .alicat-content header h2 {
       font-size: 2rem;
       line-height: 2rem;
     }

     .alicat-content p {
       font-size: .9rem;
     }

}

</style>
