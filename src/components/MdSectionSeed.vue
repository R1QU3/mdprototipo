<template>
     
     <div class="seed-content">

          <MdBoxSeed1
               title='Loren Ipsilun Dor'
               paragraph='
                    Tempus sed eget facilisi ultrices.
               Amet leo vitae elit diam. Convallis
               eu nisi id nibh ut fringilla. A suspendisse nibh. 
               ' 
               />
               
          <MdBoxSeed2
               title='Loren Ipsilun Dor'
               paragraph='
                    Tempus sed eget facilisi ultrices.
               Amet leo vitae elit diam. Convallis
               eu nisi id nibh ut fringilla. A suspendisse nibh. 
               ' 
               />
               
          <MdBoxSeed3
               title='Loren Ipsilun Dor'
               paragraph='
                    Tempus sed eget facilisi ultrices.
                    Amet leo vitae elit diam. Convallis
                    eu nisi id nibh ut fringilla. A suspendisse nibh. 
               ' 
               />

          <div class="leaf-float">
               <img src="../assets/img/img-elements/Ahornblatt.png" alt="">
          </div>

     </div>

     

</template>
<script>

import MdBoxSeed1 from './MdBoxSeed1.vue'
import MdBoxSeed2 from './MdBoxSeed2.vue'
import MdBoxSeed3 from './MdBoxSeed3.vue'

export default {
     name: 'MdSectionSeed',
     props: {
          
     },
     components: {
          MdBoxSeed1,
          MdBoxSeed2,
          MdBoxSeed3,
     }
}
</script>
<style>


.seed-content {
     display: flex;
     justify-content: space-evenly;
     align-items: center;
     margin: 0 auto;
     width: 80%;
     height: 65%;
}

.leaf-float {
     position: absolute;
     left: 0;
     bottom: 0;
     z-index: -1;
}
     
@media screen and (max-width: 750px) {
     
     .seed-content {
          flex-direction: column;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
          width: 80%;
          height: 100%;
     }

     .seed-box {
          width: 100%;
          height: auto;
     }

}

</style>