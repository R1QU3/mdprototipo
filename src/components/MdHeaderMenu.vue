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
                         <li><a href="#">Home</a></li>
                         <li><a href="#">Über Uns</a></li>
                         <li><a href="#">Services</a></li>
                         <li><a href="#">Kontakt</a></li>
                    </ul>
                    <div class="social">

                         <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>

                         <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>

                         <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>

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
     width: 85rem;
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
     text-decoration: none;
     margin-right: 1.2rem;
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: center;
     width: 1.5625rem;
     height: 1.5625rem;
     border-radius: 50%;
     border: solid 1px var(--md-light-green);
     transition: all .4s;
}

.social a i {
     font-size: 0.780rem;
     color: var(--md-light-green);
     z-index: 1;
     text-align: center;
     padding: 25%;
     transition: all .4s;
}
.social a:hover {
     background-color: var(--md-light-green);
}

.social a i:hover {
     color: #fff;
}

</style>
