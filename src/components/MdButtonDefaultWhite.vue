<template>
     <nav>
          <button class="default-btn">
               {{name}}
          </button>
     </nav>
</template>
<script>
export default {
     name: 'MdButtonDefault',
     props: {
          name: String,
     }
}
</script>
<style scoped>

.default-btn {
     -webkit-border-radius: 50px;
     -webkit-border-bottom-right-radius: 0;
     -moz-border-radius: 50px;
     -moz-border-radius-bottomright: 0;
     border-radius: 50px;
     border-bottom-right-radius: 0;
     font-family: 'Roboto', sans-serif;
     background-color: var(--md-white);
     color: var(--md-light-green);
     border: 0;
     outline: none;
     padding: 1.5rem;
     font-size: 1rem;
     cursor: pointer;
     box-sizing: border-box;
     width: 13.5rem;
     height: 4.25rem;
     transition: all .3s;
}

.default-btn:hover {
     background-color: var(--md-light-green);
     color: var(--md-white);
}

nav {
     margin: 1rem 0;
}
     
</style>