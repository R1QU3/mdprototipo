<template>

     <footer>

          <div id="footer-content">

               <div id="footer-social">
                    <img src="../assets/img/img-elements/Logo.png" alt="logo">
                    <p class="text-default">
                         Volutpat ornare lacus, dignissim morbi bibendum fringilla diam. Sit dui dui non tristique. Cras vivamus metus, sagittis, at etiam sit eu sed viverra. Vehicula turpis sit mauris integer morbi enim tellus.
                    </p>
                    <div class="social">

                      <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>

                      <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>

                      <a href="https://www.linkedin.com/" target="_blank"><i class="fab fa-linkedin"></i></a>

                    </div>
               </div>

               <div id="footer-quicklinks">
                    <h1>Quick Links</h1>
                    <a href="#">Baumpflege</a>
                    <a href="#">Baumfällung</a>
                    <a href="#">Stubbenfräsen</a>
                    <a href="#">Baumpflege</a>
                    <a href="#">Heckenschnitt</a>
                    <a href="#">Obstbaumschnitt</a>
                    <a href="#">Rasenpflege</a>
               </div>

               <div id="footer-info">
                    <h1>So finden Sie uns</h1>
                    <p class="text-default">
                         Garten- und Baumservice Schneider<br>
                         Lindeweg 4<br>
                         16835 Rüthnick
                    </p>
                    <a href="mailto:info@garten-baumservice-schneider.de">info@garten-baumservice-schneider.de</a>
                    <a href="tel:+01627928659">01627928659</a>
               </div>


          </div>

          <div id="footer-line"></div>

          <div id="copy">
               <div class="text-default">
                    <p>Copyright &copy;2021 Alle Rechen vorbehalten</p>
               </div>
               <div>
                    <p class="text-default">
                         Impressum  |  Datenschutz
                    </p>
               </div>
          </div>

     </footer>

</template>
<script>
export default {

}
</script>
<style scoped>

footer {
	box-sizing: border-box;
	width: 90rem;
	padding: 3.125rem;
	margin: 0 auto;
	height: 500px;
}

#footer-content {
     display: flex;
     justify-content: space-between;
     align-items: flex-start;
     padding: 2.9rem;
     height: 90%;
}

#footer-line {
     width: 81.25rem;
     height: 3px;
     margin: 0 auto;
     background-color: var(--md-light-green);
}

#copy {
     box-sizing: border-box;
     height: calc(10% - 3px);
     width: calc(100% - (3.125rem * 2));
     display: flex;
     justify-content: space-between;
     margin: 0 auto;
}

#footer-social, #footer-quicklinks, #footer-info {
     box-sizing: border-box;
     height: 100%;
}

#social {
     width: 40%;
     display: flex;
     align-items: center;
     justify-content: space-between;
}

/* Footer social - 421x100 */
#footer-social, #footer-info {
     width: 26.3125rem;
     height: 15.125rem;
     text-align: left;
}

#footer-quicklinks a {
     text-decoration: none;
     color: var(--md-gray);
     font-family: var(--md-secondary-font);
     font-weight: 400;
     display: block;
     margin-bottom: 0.625rem;
}

/* 182x262 */
#footer-quicklinks {
     width: 11.375rem;
     height: 16.375rem;
     text-align: left;
}

#footer-quicklinks a {
  margin-left: .5rem;
}

#footer-quicklinks h1, #footer-info h1 {
     color: var(--md-light-green);
     font-family: var(--md-main-font);
}

#footer-info p {
     font-size: 1.125rem;
}

#footer-info a {
     display: block;
     color: var(--md-light-green);
     font-size: 1.125rem;
     font-family: var(--md-secondary-font);
}

/* Social */

.social {
     box-sizing: border-box;
     width: 18.75rem;
}


.social a {
     text-decoration: none;
     margin-right: 1.2rem;
     box-sizing: border-box;
     display: flex;
     flex-direction: column;
     justify-content: center;
     width: 3.125rem;
     height: 3.125rem;
     border-radius: 50%;
     border: solid 1px var(--md-light-green);
     transition: all .4s;
}

.social a i {
     font-size: 1.56rem;
     color: var(--md-light-green);
     z-index: 1;
     text-align: center;
     transition: all .4s;
}
.social a:hover {
     background-color: var(--md-light-green);
}

.social a i:hover {
     color: #fff;
}


</style>
