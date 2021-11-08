<template>
     
     <section class="section" id="section-alicat">

               <article class="alicat-content">

                    <p v-html="paragraph1"></p>

                    <header>
                         <h1 v-html="header1"></h1>
                    </header>

                    <p v-html="paragraph2" class="text-dafault"></p>

                    <button class="default-btn">
                         {{buttonName}}
                    </button>

               </article>

               <img class="leaf" src="../assets/img/img-elements/leaf1.png" alt="leaf image">

     </section>

</template>
<script>
export default {
     name: 'MdSectionAlicat',
     props: {
          paragraph1: String,
          header1: String,
          paragraph2: String,
          buttonName: String,
     }
}
</script>
<style>

/* section-alicat */

#section-alicat {
     position: relative;
     box-sizing: border-box;
     padding: 4.875rem;
     background-image: url(../assets/img/img-bg/bg-leaf.jpg);
     background-size: cover;
}

.alicat-content {
     margin: 0 auto;
     width: 70%;
     box-sizing: border-box;
     text-align: center;
}

.alicat-content p {
     color: var(--md-white);
     font-family: var(--md-secondary-font);
     font-weight: 400;
     font-size: 1.25rem;
}

.alicat-content header h1 {
     font-size: 3.125rem;
     color: var(--md-white);
}
     
</style>