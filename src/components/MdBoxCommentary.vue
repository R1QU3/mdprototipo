<template>

     <div class="box-card mySlides">

          <div class="card">
               <i><p v-html="commentary"></p></i>
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

.mySlides {display:none;}

.box-card {
     text-align: center;
     line-height: .9rem;
     width: 100%;
}

.box-card p {
     font-family: var(--md-secondary-font);
     font-weight: 400;
     color: #fff;
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
     margin: 0 auto;
     width: 21.25rem;
     height: 14rem;
     padding: 2.5rem;
     background-color: var(--md-light-green);
     color: #f5f5f5;
     font-family: var(--md-main-font);
     text-align: center;
     line-height: 1.5rem;
}

@media screen and (max-width: 750px) {
     
     .card {
          width: 90%;
     }

}

</style>