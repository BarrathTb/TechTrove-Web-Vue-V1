<template>
  <div class="container-fluid welcome-container-two bg-primary">
    <div class="col-12 ">
      <div class="accordion accordion-flush bg-primary">
        <div class="accordion-item bg-primary">
          <h2 class="accordion-header" :id="headingId">
            <button class="accordion-button accordion-title collapsed bg-primary p-4 rounded" type="button"
              @click="toggleCollapse" :aria-expanded="!isCollapsed.toString()" :aria-controls="collapseId"
              :aria-labelledby="headingId">
              {{ title }}
            </button>
          </h2>
          <div :id="collapseId" :class="['accordion-collapse', 'collapse', { show: !isCollapsed }]"
            :aria-labelledby="headingId">
            <div class="row m-4 g-3">
              <slot></slot>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'HowItWorksAccordion',
    props: {
      title: String,
      headingId: String,
      collapseId: String,
    },
    data() {
      return {
        isCollapsed: true,
      };
    },
    methods: {
      toggleCollapse() {
        this.isCollapsed = !this.isCollapsed;
      },
    },
  };
</script>

<style scoped>
  .accordion-button:not(.collapsed)::after {
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .accordion-button.collapsed::after {
    filter: invert(1) grayscale(100%) brightness(200%);
  }

  .accordion-button.collapsed:focus {
    border-color: #0ee636;
    color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
  }

  .accordion-button:not(.collapsed):focus {
    background-color: #0ee636;
  }

  .accordion-button:hover {
    background-color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
  }

  .accordion-button.active,
  .accordion-button:not(.collapsed) {
    border-color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
    background-color: #0ee636;
  }

  .accordion-button.accordion-title {
    /* Increased minimum font size and scaling factor for demonstration purposes */
    font-size: calc(.7rem + 1vw);
  }

  .accordion-button:hover {
    background-color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
  }
</style>
