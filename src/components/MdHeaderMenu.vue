<template>
     
<!-- Component Header -->
     <header id="header-nav">
               <div class="logo">
                    <a href="#">
                         <img src="../assets/img/img-elements/Logo.png" alt="logo">
                    </a>
               </div>
               <nav>
                    <ul class="menu">
                         <li><a href="#">Page</a></li>
                         <li><a href="#">Page</a></li>
                         <li><a href="#">Page</a></li>
                         <li><a href="#">Page</a></li>
                    </ul>
                    <div class="social">
                         <a href="#"><img src="../assets/img/img-elements/SocialIcon1.png" alt=""></a>
                         <a href="#"><img src="../assets/img/img-elements/SocialIcon2.png" alt=""></a>
                         <a href="#"><img src="../assets/img/img-elements/SocialIcon3.png" alt=""></a>
                    </div>
               </nav>
     </header>

</template>
<script>

export default {
     name: 'MdHeaderMenu',
     components: {

     }
}
</script>
<style>
     

/* header */

#header-nav {
     width: 90%;
     margin: 0 auto;
     display: flex;
     justify-content: space-between;
     align-items: center;
     margin-bottom: 5rem;
}

/* menu */

#header-nav nav {
     display: flex;
     justify-content: center;
     align-items: center;
}

.menu {
     display: flex;
     justify-content: space-between;
     align-items: center;
}

.menu li {
     list-style: none;
}

.menu li a {
     text-decoration: none;
     margin-right: 3.5rem;
     color: var(--md-black);
     font-family: 'Roboto', sans-serif;
}

.menu li a:hover {
     color: var(--md-gray);
}

/* Social */

.social {
     display: flex;
     justify-content: space-between;
     align-items: center;
}

.social a {
     margin-right: 1.2rem;
}



</style>