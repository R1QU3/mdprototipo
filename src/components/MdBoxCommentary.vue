<template>

  <div class="d-n">

     <div class="box-card mySlides">

          <div class="card">
               <i><p v-html="commentary"></p></i>
               <div class="triangle-bottom"></div>
          </div>

               <h1 v-html="title"></h1>
               <h2 v-html="user"></h2>

     </div>

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

.d-n {
     display: none;
}

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
	position: relative;
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
     animation-delay: 6s;
     animation: translateBox 4s linear;
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

@keyframes translateBox {
     0%{
          opacity: 0;
     }
     100%{
          opacity: 100;
     }
}

@media screen and (max-width: 900px) {

     .d-n {
          display: block;
     }

     .box-card {
          display: block;
     }

     .card {
          width: 90%;
          animation-delay: 10s;
          animation: transitionBox linear 5s;
     }

     .box-card h1 {
          font-size: 1.2rem;
     }

     @keyframes transitionBox {
     0%{
     opacity: 100;
     }
     50%{
     opacity: 0;
     }
     100%{
     opacity: 100;
     }
     }

}

</style>
