<template>
     
     <div class="s-box-info">
          <p v-html="t1"></p>
               <div class="line" id="line-01-status"></div>
          <p v-html="t2"></p>
               <div class="line" id="line-02-status"></div>
          <p v-html="t3"></p>
               <div class="line" id="line-03-status"></div>
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
<style>
     
.s-box-info {
     display: inline-block;
     padding: .5rem;
     width: 24%;
     box-sizing: border-box;
     line-height: 1rem;
}

.s-box-info p {
     text-align: left;
     width: 100%;
}

.line {
     height: 2px;
     background-color: var(--md-light-green);
}

#line-01-status,
#line-03-status {
     width: 100%;
}

#line-02-status {
     width: 80%;
}

</style>