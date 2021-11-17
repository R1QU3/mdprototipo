<template>

     <div class="commentary-content">

          <div id="quotation">
               <p>“</p>
          </div>

          <section class="c-card-section">

               <MdBoxCommentary
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis 1
                    '
                    title='
                         Max Musstermann 1
                    '
                    user='
                         JustGreen 1
                    '
               />

               <MdBoxCommentary
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis 2
                    '
                    title='
                         Max Musstermann 2
                    '
                    user='
                         JustGreen 2
                    '
               />

               <MdBoxCommentary
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis 3
                    '
                    title='
                         Max Musstermann 3
                    '
                    user='
                         JustGreen 3
                    '
               />

          </section>

          <div class="interessiert">

               <h1>Haben Sie sich interessiert?</h1>
               <h2>Dann Melden Sie sich gerne für ein unverbindliches Angebot!</h2>

               <MdButtonDefaultWhite
               name='
                  Angebot anfordern
               '
               />

          </div>

          <!-- FloatBox -->

     </div>

</template>
<script>

import MdBoxCommentary from './MdBoxCommentary.vue'
import MdButtonDefaultWhite from './MdButtonDefaultWhite.vue'


export default {
     name: 'MdSectionCommentary',
     props: {

     },
     components: {
          MdButtonDefaultWhite,
          MdBoxCommentary,
     }
}
</script>
<style scoped>

#quotation {
     width: 100%;
     text-align: center;
}

#quotation p {
     color: var(--md-white);
     font-size: 4.5rem;
}

.commentary-content {
     width: 100%;
     height: 100%;
}

.c-card-section {
     display: flex;
     justify-content: space-around;
     align-items: center;
     width: 100%;
     transition: all 3s;
}

.interessiert {
     text-align: center;
     color: var(--md-white);
}

.interessiert h1 {
     font-family: var(--md-secondary-font);
     font-weight: 400;
     font-size: 1.125rem;
}

.interessiert h2 {
     width: 70%;
     margin: 0 auto;
     font-family: var(--md-main-font);
     font-weight: 700;
     font-size: 1.875rem;
     overflow-wrap: break-word;
}

@media screen and (max-width: 750px) {

     .interessiert h1 {
          font-size: 1rem;
     }

     .interessiert h2 {
          font-size: 1.3rem;
     }

}

</style>
