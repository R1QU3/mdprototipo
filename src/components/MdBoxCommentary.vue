<template>

     <div class="box-card">

          <div class="card">
               <p v-html="commentary"></p>
          </div>

               <h1 v-html="title"></h1>
               <h2 v-html="user"></h2>

     </div>

</template>
<script>
     export default {
          name: 'MdBoxCommentary',
          props: {
               commentary: String,
               title: String,
               user: String,
          },
     }
</script>
<style>

.box-card {
     text-align: center;
     line-height: .9rem;
     margin: .5rem;
}

.box-card h1 {
     font-size: 1.5rem;
     font-family: var(--md-secondary-font);
     font-weight: 700;
     color: var(--md-white);
}

.box-card h2 {
     font-size: 1rem;
     font-family: var(--md-secondary-font);
     font-weight: 300;
     color: var(--md-white);
}

.card {
     box-sizing: border-box;
     width: 20rem;
     padding: 2.5rem;
     background-color: var(--md-light-green);
     color: #f5f5f5;
     font-family: var(--md-main-font);
     text-align: center;
     line-height: 1.5rem;
}

</style>