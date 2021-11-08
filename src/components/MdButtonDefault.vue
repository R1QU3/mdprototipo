<template>
     <nav>
          <button :style="color" class="default-btn">
               {{name}}
          </button>
     </nav>
</template>
<script>
export default {
     name: 'MdButtonDefault',
     props: {
          name: String,
          color: String,
     }
}
</script>
<style>

.default-btn {
     -webkit-border-radius: 50px;
     -webkit-border-bottom-right-radius: 0;
     -moz-border-radius: 50px;
     -moz-border-radius-bottomright: 0;
     border-radius: 50px;
     border-bottom-right-radius: 0;
     font-family: 'Roboto', sans-serif;
     background-color: var(--md-strong-green);
     color: var(--md-white);
     border: 0;
     outline: none;
     padding: 1.5rem;
     font-size: 1rem;
     cursor: pointer;
}

nav {
     margin: 1rem 0;
}
     
</style>