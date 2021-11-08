<template>
     
     <div class="seed-box">
                         <header>
                              <img src="../assets/img/img-elements/vector2.png" alt="">
                              <h1 v-html="title"></h1>
                         </header>
                         <div>
                    <p v-html="paragraph" class="text-default"></p>
          </div>
     </div>

</template>
<script>
export default {
     name: 'MdBoxSeed2',
     props: {
          title: String,
          paragraph: String,
     }
}
</script>
<style>

.text-default {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}

.seed-box {
     text-align: center;
     box-sizing: border-box;
     width: 30%;
     height: 70%;
     display: flex;
     flex-direction: column;
     justify-content: center;
}

.seed-box header {
     display: flex;
     justify-content: center;
     align-items: center;
}

.seed-box header img {
     box-sizing: border-box;
     width: 32px;
     height: 32px;
     margin-right: 10px;
}

.seed-box h1 {
     font-family: var(--md-main-font);
     color: var(--md-light-green);
     font-size: 1.5625rem;
}

.seed-box p {
     font-size: 1.125rem;
}
     
</style>