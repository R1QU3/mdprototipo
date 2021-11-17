<template>

     <div class="box-card">

          <div class="card">
               <i><p v-html="commentary"></p></i>
               <div class="triangle-bottom"></div>
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
<style scoped>

.box-card {
     text-align: center;
     line-height: .9rem;
     box-sizing: border-box;
     width: 30%;
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
	position: relative;
     box-sizing: border-box;
     margin: 0 auto;
     width: auto;
     height: 14rem;
     padding: 2.5rem;
     background-color: var(--md-light-green);
     color: #f5f5f5;
     font-family: var(--md-main-font);
     text-align: center;
     line-height: 1.5rem;
     animation-delay: 8s;
     animation: translateBox 8s linear;
}

.triangle-bottom {
	position: absolute;
	left: calc(50% - 10px);
	bottom: -9px;
    display: inline-block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 10px 10px 0 10px;
    border-color: var( --md-light-green) transparent transparent transparent;
    line-height: 0;
}

@media screen and (max-width: 1200px) {

     .box-card h1 {
     font-size: 1rem;
     }

     .box-card h2 {
     font-size: .7rem;
     }
}

@media screen and (max-width: 900px) {

     .box-card {
          display: none;
     }

     .box-card h1 {
     font-size: 1rem;
     }

     .box-card h2 {
     font-size: .5rem;
     }

}

</style>
