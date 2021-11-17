<template>

      <!--<MdHeaderMenu/>-->

  <main>

      <MdHeaderMenu/>

      <section class="section" id="section-header">

        <MdSection1
         title="
          Ast & Strauch Tabbert
        "
         paragraph="
          Baumpflege und Baumkontrolle in Brandenburg und Berlin
         "
         buttonName="
          Angebot anforden
         "
         />

        <MdSection2
        title="
          Arbeiten mit den Baumpflege-Profis
        "
        paragraph="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sit feugiat nunc quis tortor enim purus nibh. Tellus aliquam posuere porta curabitur amet lectus lorem cursus. Amet at pellentesque amet orci. Pharetra eget tempus commodo non. Justo, convallis tristique morbi adipiscing varius donec ac. Et a massa augue viverra. Lorem pellentesque lacus, quis lacus lectus feugiat. Volutpat bibendum integer mi dignissim.
        "
        buttonName="
          Angebot anforden
        "

        />

      </section>

      <section id="section-article">

        <MdArticleSection
        title="
          Metus et sit id vel.
        "
        sub_title="
          Aliquet sed aliquam auctor eu nisi.
        "
        paragraph="
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ac massa vel et. In odio in ultrices in eu, suscipit posuere mauris maecenas. A urna in morbi turpis ornare lectus ac. Tortor orci feugiat magna nisl leo mauris sed volutpat. Massa neque sit et pellentesque tortor eget. Viverra elementum nunc, ipsum odio ullamcorper venenatis id. Aliquet auctor morbi aliquam volutpat, sit volutpat cras. Dignissim iaculis id vitae donec eu cras donec. Ipsum mauris integer lectus dis eu arcu malesuada ac lacus.
        "
        buttonName="
          Angebot anforden
        "
        />

      </section>

      <section class="section" id="section-service">

        <MdSectionServices
          title='
            Unser service
          '
          sub_title='
            Für Sie in Brandenburg und Berlin
          '
        />

      </section>

      <section id="section-commentary">

        <MdSectionCommentary />

        <MdFloatBox />

      </section>

      <section class="section" id="section-seed">

        <MdSectionSeed />

      </section>

      <MdSectionPhoto />

      <MdFooter />

  </main>


</template>

<script>

/* Global Elements */
import MdButtonDefault from './components/MdButtonDefault.vue'
import MdBoxWheelBarrow from './components/MdBoxWheelBarrow.vue'
import MdBoxFertilizer from './components/MdBoxFertilizer.vue'
import MdBoxPlant from './components/MdBoxPlant.vue'
import MdContentBoxStatus from './components/MdContentBoxStatus.vue'
import MdBoxCommentary from './components/MdBoxCommentary'
import MdFloatBox from './components/MdFloatBox.vue'
import MdBoxSeed1 from './components/MdBoxSeed1.vue'
/* Sections */
import MdHeaderMenu from './components/MdHeaderMenu.vue'
import MdSection1 from './components/MdSection1.vue'
import MdSection2 from './components/MdSection2.vue'
import MdArticleSection from './components/MdArticleSection.vue'
import MdSectionServices from './components/MdSectionSevices.vue'
import MdSectionCommentary from './components/MdSectionCommentary.vue'
import MdSectionSeed from './components/MdSectionSeed.vue'
import MdSectionPhoto from './components/MdSectionPhoto.vue'
import MdFooter from './components/MdFooter.vue'


export default {
  name: 'App',
  components: {
    MdButtonDefault,
    MdHeaderMenu,
    MdSection1,
    MdSection2,
    MdArticleSection,
    MdBoxWheelBarrow,
    MdBoxFertilizer,
    MdBoxPlant,
    MdContentBoxStatus,
    MdSectionServices,
    MdBoxCommentary,
    MdSectionCommentary,
    MdFloatBox,
    MdSectionSeed,
    MdBoxSeed1,
    MdSectionPhoto,
    MdFooter,
  }
}
</script>

<style scoped>

#app {
  overflow-x: hidden;
  width: 100%;
}

main {
     width: 87rem;
     margin: 0 auto;
}

.section {
  width: 100%;
  display: block;
}

#section-header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 75rem;
  padding-bottom: .5rem;
}

#section-article {
  position: relative;
  box-sizing: border-box;
  margin: 0 auto;
  height: 39.375rem;
  width: 85rem;
  padding: 4.875rem;
  background-image: url(./assets/img/img-bg/bg-leaf.jpg);
}

#section-service {
     position: relative;
     margin-top: 9.06rem;
     box-sizing: border-box;
}

#section-commentary {
     position: relative;
     height: 68.125rem;
     width: 100%;
     margin: 0 auto;
     box-sizing: border-box;
     margin-top: 9.06rem;
     padding: 5rem 10.625rem;
     background-image: url(./assets/img/img-bg/garden.jpg);
     background-size: cover;
}

@media screen and (max-width: 1200px) {
  #section-commentary {
    padding: 5rem 0;
  }
}

#section-seed {
     position: relative;
     box-sizing: border-box;
     display: flex;
     align-items: flex-end;
     height: 37.5rem;
}


@media screen and (max-width: 1400px) {

  main {
    box-sizing: border-box;
    width: 90%;
    margin: 0 auto;
  }

  #section-header {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  padding-bottom: .5rem;
  }

  #section-article {
  position: relative;
  box-sizing: border-box;
  height: auto;
  width: 100%;
  padding: 2.5rem;
  background-image: url(./assets/img/img-bg/bg-leaf.jpg);
  }

}

@media screen and (max-width: 750px) {

  #section-commentary {
    position: static;
    height: auto;
    padding: 4rem 0;
  }

}

</style>
