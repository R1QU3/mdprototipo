<template>
     
     <section id="section-photos">

          <img src="../assets/img/img-content/photo-01.jpg" alt="photo">
		<img src="../assets/img/img-content/photo-02.jpg" alt="photo">
          <img src="../assets/img/img-content/photo-03.jpg" alt="photo">
		<img src="../assets/img/img-content/photo-04.jpg" alt="photo">
          <img src="../assets/img/img-content/photo-01.jpg" alt="photo">
	
	</section>

</template>
<script>
export default {
     
}
</script>
<style>

#section-photos {
	margin: 0 auto;
	box-sizing: border-box;
	height: 400px;
	width: 1440px;
	display: flex;
	justify-content: center;
	align-items: center;
	overflow-x: scroll;
	overflow-y: hidden;
}

#section-photos img {
	width: 342px;
	height: 100%;
}
     
</style>