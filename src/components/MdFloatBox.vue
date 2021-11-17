
<template>
     
     <!-- Float Component -->
               <div class="float-box">

                    <div class="box">

                         <div class="l-box">

                              <h1>Baumpflege</h1>
                              <h2>Pellentesque<br>nunc cursus</h2>
     
                         </div>
     
                         <div class="r-box">
     
                              <p class="text-dafault">
                                   Lorem ipsum dolor sit amet consectetur adipisicing elit. At totam fugit voluptate? Illum facilis eligendi reiciendis sapiente excepturi numquam impedit, molestias culpa adipisci? Ducimus praesentium aspernatur laborum, nam explicabo ipsum.
                                   Sit omnis itaque adipisci voluptatem fuga quam ducimus nulla repudiandae distinctio rem obcaecati, molestias ratione, voluptas expedita vitae necessitatibus tempora minima assumenda labore aut doloribus, excepturi maxime reiciendis. Consequatur, explicabo.
                                   Laboriosam doloremque, nostrum aliquid repellat rem magnam culpa velit consectetur porro alias minima impedit expedita in repudiandae aspernatur reiciendis quos voluptates, quasi ea quam? Rem cumque sit fugit! Fugiat, saepe.
                              </p>
     
                         </div>
     
                         <a href="#" id="circle"><img src="../assets/img/img-elements/Button.png" alt=""></a>    

                    </div>
           
                    
               </div>

</template>
<script>
export default {
     name: 'MdFloatBox',
     props: {
          
     }
}
</script>
<style scoped>

/* Float */

.float-box {
     position: absolute;
     bottom: -10rem;
     left: 8%;
     padding: 2rem;
     width: 80%;
     height: 16rem;
     background-color: var(--md-white);
     z-index: 1;
}

.box {
     position: relative;
     display: flex;
     justify-content: center;
     align-items: center;
     width: 100%;
     height: 100%;
}

.l-box, .r-box {
     box-sizing: border-box;
     width: 45%;
     text-align: left;
}

.l-box {
     line-height: 3rem;
     color: var(--md-light-green);
}

.l-box h1 {
     font-family: var(--md-secondary-font);
     font-size: 1.5rem;
     font-weight: 400;
}

.l-box h2 {
     font-family: var(--md-main-font);
     font-size: 3rem;
}

#circle {
     position: absolute;
     width: 70px;
     height: 70px;
     left: calc(50% - 35px);
     bottom: -60px;
     transition: all .5s;
}

#circle:hover {
     transform: rotate(360deg);
}
     
.text-dafault {
     color: var(--md-gray);
     font-family: 'Roboto', sans-serif;
     font-weight: 400;
}
     
@media screen and (max-width: 1150px) {
     
     .l-box h1 {
          font-size: 1rem;
     }

     .l-box h2 {
          font-size: 2rem;
     }

     .r-box p {
          font-size: .8rem;
     }
     
}

@media screen and (max-width: 750px) {

     .float-box {
          position: static;
          box-sizing: border-box;
          width: 95%;
          margin: 0 auto;
          height: auto;
     }

     .box {
          flex-direction: column;
          width: 100%;
          height: auto;
     }

     .l-box, .r-box {
          width: 100%;
     }

          
     .l-box h1 {
          font-size: 1rem;
     }

     .l-box h2 {
          font-size: 2rem;
     }

     .r-box p {
          font-size: .90rem;
     }

}


</style>