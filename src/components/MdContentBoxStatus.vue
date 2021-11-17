<template>
     
     <div class="s-box-info">
          <p v-html="t1"></p>
               <div class="line">
                    <div class="progress" id="progress-1"></div>
               </div>
          <p v-html="t2"></p>
               <div class="line">
                    <div class="progress" id="progress-2"></div>
               </div>
          <p v-html="t3"></p>
               <div class="line">
                    <div class="progress" id="progress-3"></div>
               </div>
     </div>

</template>
<script>
export default {
     name: 'MdContentBoxStatus',
     props: {
          t1: String,
          t2: String,
          t3: String,
     }
}
</script>
<style scoped>

.s-box-info {
     display: inline-block;
     padding: .5rem;
     width: 22.3125rem;
     height: 10rem;
     box-sizing: border-box;
     line-height: 1rem;
}

.s-box-info p {
     text-align: left;
     font-family: var(--md-secondary-font);
     font-weight: 400;
     width: 100%;
}

.line {
     height: 2px;
     background-color: var(--md-white);
     border-radius: 10px;
     width: 100%;
}
     
.progress {
     height: 2px;
     background-color: var(--md-light-green);
     border-radius: 10px;
}

#progress-1 {
     width: 95%;
}

#progress-2 {
     width: 75%;
}

#progress-3 {
     width: 95%;
}

@media screen and (max-width: 700px) {
     
     .s-box-info {
          position: absolute;
          bottom: -5rem;
          width: 100%;
     }

}

@media screen and (max-width: 450px) {
     
     .s-box-info {
          display: block;
          box-sizing: border-box;
          width: 80%;
          margin: 0 auto;
     }

}

</style>