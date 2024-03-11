<!-- <template>
  <div class="container-fluid welcome-container-two bg-primary" id="welcome-section-accordion">
    <div class="row">
      <div class="col-12 mb-4">
        <div class="accordion accordion-flush me-2 bg-primary" id="accordion-one">
          <div class="accordion-item bg-primary">
            <h2 class="accordion-header" id="headingOne">
              <button
                class="accordion-button collapsed bg-primary p-2 rounded"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#collapseOne"
                aria-expanded="true"
                aria-controls="collapseOne"
              >
                How it Works
              </button>
            </h2>
            <div
              id="collapseOne"
              class="accordion-collapse collapse show"
              aria-labelledby="headingOne"
              data-bs-parent="#accordion-one"
            >
              <div class="accordion-body bg-primary align-items-center">
                <div class="row g-3 align-items-center mb-4 bg-primary p-4 justify-content-between">
                  
                  <info-card
                    class="flex-grow text-left"
                    title="Step 1"
                    image-src="/images/tech-entry-3.png"
                    description="Search for the computer parts you need. Find the best deals and quality products."
                  ></info-card>
                  
                  <info-card
                    class="flex-grow"
                    title="Step 2"
                    image-src="/images/tech-entry-4.png"
                    description="Click on a product card for more details. Add products to your cart, and customize your order."
                  ></info-card>
                 
                  <info-card
                    class="flex-grow"
                    title="Step 3"
                    image-src="/images/tech-entry-5.png"
                    description="Review your cart and make any changes, proceed to checkout when ready. Don't forget to try the pc builder to make your dream pc come to life."
                  ></info-card>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import InfoCard from './InfoCard.vue'

export default {
  name: 'HowItWorksAccordion',
  components: {
    InfoCard
  }
}
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
  box-shadow: inset 0 0 0 1px #0ee636;
}
.accordion-button:not(.collapsed):focus {
  background-color: #0ee636;
}
.accordion-button:hover {
  background-color: #0ee636;
  box-shadow: inset 0 0 0 1px #0ee636;
}

.accordion-button {
  &.active,
  &:not(.collapsed) {
    border-color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
    background-color: #0ee636;
  }
}
</style> -->
<template>
  <div class="container-fluid welcome-container-two bg-primary">
    <div class="row">
      <div class="col-12 mt-4">
        <div class="accordion accordion-flush me-2 bg-primary">
          <div class="accordion-item bg-primary">
            <h2 class="accordion-header" :id="headingId">
              <button
                class="accordion-button collapsed bg-primary p-2 rounded"
                type="button"
                @click="toggleCollapse"
                :aria-expanded="!isCollapsed.toString()"
                :aria-controls="collapseId"
                :aria-labelledby="headingId"
              >
                {{ title }}
              </button>
            </h2>
            <div
              :id="collapseId"
              :class="['accordion-collapse', 'collapse', { show: !isCollapsed }]"
              :aria-labelledby="headingId"
            >
              <div class="accordion-body bg-primary align-items-center">
                <slot></slot>
              </div>
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
    collapseId: String
  },
  data() {
    return {
      isCollapsed: true
    }
  },
  methods: {
    toggleCollapse() {
      this.isCollapsed = !this.isCollapsed
    }
  }
}
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
  box-shadow: inset 0 0 0 1px #0ee636;
}
.accordion-button:not(.collapsed):focus {
  background-color: #0ee636;
}
.accordion-button:hover {
  background-color: #0ee636;
  box-shadow: inset 0 0 0 1px #0ee636;
}

.accordion-button {
  &.active,
  &:not(.collapsed) {
    border-color: #0ee636;
    box-shadow: inset 0 0 0 1px #0ee636;
    background-color: #0ee636;
  }
}
</style>
