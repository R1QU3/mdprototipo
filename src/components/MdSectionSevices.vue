<template>
     
     <header>
          <h1 v-html="title"></h1>
          <h2 v-html="sub_title"></h2>
     </header>

     <section class="services">

                    <section class="section services-content">

                         <MdBoxWheelBarrow 
                              name='
                              Loren Ipsilon<br>dor sir loren
                              '
                              photo='../assets/img/img-elements/wheelbarrow.png'
                         />

                         <MdBoxFertilizer 
                              name='
                              Loren Ipsilon<br>dor sir loren
                              '
                         />

                         <MdBoxPlant 
                              name='
                              Loren Ipsilon<br>dor sir loren
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
                              Loren Ipsilon<br>dor sir loren
                              '
                              photo='../assets/img/img-elements/wheelbarrow.png'
                         />

                         <MdBoxFertilizer 
                              name='
                              Loren Ipsilon<br>dor sir loren
                              '
                         />

                         <MdBoxPlant 
                              name='
                              Loren Ipsilon<br>dor sir loren
                              '
                         />

                         <MdBoxPlant 
                              name='
                              Loren Ipsilon<br>dor sir loren
                              '
                         />

                         <!-- <MdContentBoxStatus
                              t1='
                              Term 3
                              '
                              t2='
                              Term 2
                              '
                              t3='
                              Term 3
                              '
                         />    -->

                    </section>

     </section>


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
<style>
     
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