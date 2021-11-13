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

               <!-- Mobile Menu -->
               <div id="hamburger">
                    <i class="fas fa-bars"></i>
               </div>
               <div id="mobile-menu-container">
                    <div id="close">
                         <i class="fas fa-times"></i>
                    </div>
                    <ul id="mobile-menu">
                         <li><a href="#">Home</a></li>
                         <li><a href="#">Über Uns</a></li>
                         <li><a href="#">Services</a></li>
                         <li><a href="#">Kontakt</a></li>
                    </ul>
                    <div id="mobile-social">
                         <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>

                         <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>

                         <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>
                    </div>
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
     /* Main Header - Menu */

     #header-nav {
          width: 90%;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 5rem;
     }

     #header-nav nav {
          display: flex;
          justify-content: center;
          align-items: center;
     }

     /* Desktop Menu */

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


     /* MOBILE MENU */

     /* Hamburger Icon */
     #hamburger {
          display: none;
     }

     #hamburger i {
          font-size: 2.5rem;
          cursor: pointer;
          color: var(--md-light-gray);
     }

     /* Main container - Mobile Menu */

     #mobile-menu-container {
          display: none;
          z-index: 9999;
          position: fixed;
          top: 0;
          right: 0;
          box-sizing: border-box;
          width: 80%;
          height: 100%;
          padding: 2rem;
          background-color: var(--md-white);
          animation: onOff linear .5s;
     }

     @keyframes onOff {
          0%{
               transform: translateX(500%);
          }
          100%{
               transform: translateX(0);
          }
     }

     /* Close Icon */

     #close {
          box-sizing: border-box;
          height: 10%;
     }

     #close i {
          font-size: 5rem;
          cursor: pointer;
          transition: all .8s;
     }

     #close i:hover {
          transform: rotate(360deg);
     }

     #mobile-menu {
          list-style: none;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;
          align-items: center;
          box-sizing: border-box;
          height: 70%;
     }

     #mobile-menu li a {
          display: inline-block;
          text-decoration: none;
          font-size: 2.5rem;
          font-family: var(--md-secondary-font);
          color: var(--md-black);
          transition: all .5s;
     }

     #mobile-menu li a:hover {
          transform: scale(0.9);
     }

     #mobile-social {
          box-sizing: border-box;
          height: 10%;
          display: flex;
          justify-content: space-evenly;
          align-items: center;
     }

     #mobile-social i {
          font-size: 2.5rem;
          color: var(--md-light-green);
          transition: all .5s;
     }

     #mobile-social i:hover {
          transform: scale(1.4);
     }

     @media screen and (max-width: 750px) {
          
          #header-nav {
               position: fixed;
               top: 0;
               left: 2rem;
               margin-bottom: 2rem;
               z-index: 99999999;
          }

          #hamburger {
               display: block;
          }

          .menu,
          .social {
               display: none;
          }


     }

     @media screen and (max-width: 1400px) {
          
          .logo {
               box-sizing: border-box;
               width: 3rem;
               height: 3rem;
          }

          .logo img {
               width: 100%;
               height: 100%;
          }

     }
</style>
