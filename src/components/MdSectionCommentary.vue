<template>
     
     <div class="commentary-content">

          <div id="quotation">
               <p>“</p>
          </div>
          
          <section class="c-card-section">

               <MdBoxCommentary 
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis nec proin nisi libero sit purus. consectetur adipiscing elit. 
                    '
                    title='
                         Max Musstermann
                    '
                    user='
                         JustGreen
                    '
               />

               <MdBoxCommentary 
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis nec proin nisi libero sit purus. consectetur adipiscing elit.
                    '
                    title='
                         Max Musstermann
                    '
                    user='
                         JustGreen
                    '
               />

               <MdBoxCommentary 
                    commentary='
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit. Est lacinia non mollis nec proin nisi libero sit purus. consectetur adipiscing elit.
                    '
                    title='
                         Max Musstermann
                    '
                    user='
                         JustGreen
                    '
               />

          </section>

          <div class="interessiert">

               <h1>Haben Sie sich interessiert?</h1>
               <h2>Dann Melden Sie sich gerne für ein unverbindliches Angebot!</h2>
                    
               <MdButtonDefault name='This is a button' color='background: white; color: var(--md-light-green)'/>

          </div>

          <!-- FloatBox -->

     </div>

</template>
<script>

import MdBoxCommentary from './MdBoxCommentary.vue'
import MdButtonDefault from './MdButtonDefault.vue'


export default {
     name: 'MdSectionCommentary',
     props: {

     },
     components: {
          MdButtonDefault,
          MdBoxCommentary,
     }
}
</script>
<style>

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
}

.interessiert {
     text-align: center;
     color: var(--md-white);
}

.interessiert h1 {
     font-family: var(--md-secondary-font);
     font-weight: 400;
     font-size: 1rem;
}

.interessiert h1 {
     font-family: var(--md-main-font);
     font-weight: 700;
     font-size: 2rem;
}
     
</style>