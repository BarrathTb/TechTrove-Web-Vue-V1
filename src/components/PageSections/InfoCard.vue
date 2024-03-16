<!-- @format -->

<template>

  <div class="col-lg-4 col-md-6 col-sm-12 ">
    <div class="card product-card h-100 bg-secondary p-auto m-auto d-flex flex-column">
      <a href="#" class="product-detail  product-detail-icon"> </a>
      <img :src="imageSrc" class="card-img-top img-fluid" alt="display tech image" />
      <div class="card-body text-light flex-grow-1 d-flex  flex-column justify-content-between ">
        <h5 class="card-title text-center  font-size-md">{{ title }}</h5>
        <p class="card-text text-left font-size-sm">
          {{ description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'InfoCard',
    props: {
      title: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      description: {
        type: String,
        required: true
      }
    }
  }
</script>

<style scoped>


  .bg-secondary {

    background-color: #6c757d;

  }


</style>
