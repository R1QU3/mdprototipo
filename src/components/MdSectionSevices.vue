<template>
     
     <header>
          <h1 v-html="title"></h1>
          <h2 v-html="sub_title"></h2>
     </header>

     <section class="services">

                    <section class="section services-content">

                         <MdBoxWheelBarrow 
                              name='
                                   Lorem ipsum dolor sit
                              '
                              photo='../assets/img/img-elements/wheelbarrow.png'
                              bg='
                                   background: #F9F7F5;
                              '
                         />

                         <MdBoxFertilizer 
                              name='
                                   Lorem ipsum dolor sit
                              '
                         />

                         <MdBoxPlant 
                              name='
                                   Lorem ipsum dolor sit
                              '
                         />

                         <MdContentBoxStatus
                              t1='
                              Baumpflege
                              '
                              t2='
                              Stubbenfräsen
                              '
                              t3='
                              Obstbaumschnitt
                              '
                         />

                    </section>

                    <section class="section services-content">

                         <MdBoxWheelBarrow 
                              name='
                                   Lorem ipsum dolor sit
                              '
                              photo='../assets/img/img-elements/wheelbarrow.png'
                         />

                         <MdBoxFertilizer 
                              name='
                                   Lorem ipsum dolor sit
                              '
                         />

                         <MdBoxPlant 
                              name='
                                   Lorem ipsum dolor sit
                              '
                         />

                         <MdBoxPlant 
                              name='
                                   Lorem ipsum dolor sit
                              '
                         />


                    </section>

     </section>

     <img class="leaf" src="../assets/img/img-elements/leaf2.png" alt="">


</template>
<script>

import MdBoxWheelBarrow from './MdBoxWheelBarrow.vue' 
import MdBoxFertilizer from './MdBoxFertilizer.vue' 
import MdBoxPlant from './MdBoxPlant.vue' 
import MdContentBoxStatus from './MdContentBoxStatus.vue'

export default {
     name: 'MdSectionServices',
     props: {
          title: String,
          sub_title: String,
     },
     components: {
          MdBoxWheelBarrow,
          MdBoxFertilizer,
          MdBoxPlant,
          MdContentBoxStatus,
     }
}
</script>
<style scoped>

.leaf {
     position: absolute;
     bottom: -14rem;
     right: .2rem;
}

.s-box {
     margin: 1.875rem;
     cursor: pointer;
     border: solid 1px transparent;
     transition: all .5s;
}

.s-box:hover {
     border-color: var(--md-light-green);
     transform: scale(1.1);
}
     
#section-service header {
     margin-bottom: 4.70rem;
}

#section-service header h1 {
     text-transform: uppercase;
     font-family: var(--md-secondary-font);
     font-size: 1.25rem;
     color: var(--md-light-green);
}

#section-service header h2 {
     text-transform: uppercase;
     font-family: var(--md-main-font);
     font-weight: 700;
     font-size: 3.125rem;
     color: var(--md-light-green);
}


</style>