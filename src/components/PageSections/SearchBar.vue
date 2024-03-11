<!-- @format -->

<template>
  <div class="row align-items-center da-fade px-4 py-2">
    <div class="col-9">
      <input
        type="text"
        class="form-control search-input"
        placeholder="Search for quality computer parts..."
      />
    </div>
    <div class="col-auto">
      <button type="button" class="btn btn-success search-section">Search</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchBar'
}
</script>

<style scoped>
.entry-image {
  width: calc(12vw * 0.75);
  height: calc(12vw * 0.75);
  margin: 0.2rem;
}
.da-fade {
  background: linear-gradient(180deg, black 0%, #161616 20%, #161616 60%, #0ee636 100%);
  height: calc(12vw * 0.75);
}
</style>
