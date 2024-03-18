<template>
  <div class="message-form-container bg-primary mb-2 p-4">
    <form @submit.prevent="submitMessage">

      <div class="mb-2 message-zone">
        <label for="userName" class="text-light text-bold">User Name:</label>
        <input id="userName" v-model="userName" type="text" placeholder="Enter your name..." class="form-control" />
      </div>

      <div class="mb-2 message-zone">
        <label for="datePicker" class="text-light text-bold">Date:</label>
        <input id="datePicker" v-model="pickedDate" type="date" class="form-control" />
      </div>

      <div class="mb-2 message-zone">
        <label for="productSelector" class="text-light text-bold">Select Product (optional):</label>
        <select id="productSelector" v-model="selectedProduct" class="form-control">
          <option disabled value="">Please select one</option>
          <option v-for="product in products" :key="product.id" :value="product.id">{{ product.name }}</option>
        </select>
      </div>

      <div class="mb-2 message-zone">
        <label for="messageInput" class="text-light text-bold">Enter your message:</label>
        <input id="messageInput" v-model="newMessage" type="text" placeholder="Type here..."
          class="form-control message-zone" />
      </div>

      <button type="submit" class="btn btn-blue">Send</button>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'MessageForm',
    props: {
      products: {
        type: Array,
        required: true
      }
    },
    data() {
      return {
        newMessage: '',
        userName: '',
        pickedDate: '',
        selectedProduct: '',

      };
    },
    methods: {
      submitMessage() {
        const selectedProductObject = this.products.find(product => product.id === Number(this.selectedProduct));
        const messageData = {
          userName: this.userName,
          date: this.pickedDate,
          productName: selectedProductObject ? selectedProductObject.name : '',
          body: this.newMessage
        };
        this.$emit('message-submitted', messageData);
        this.newMessage = '';
        this.userName = '';
        this.pickedDate = '';
        this.selectedProduct = '';
      }
    }
  };
</script>

<style scoped>
  .message-form-container {

    input[type="text"],
    textarea,
    select {
      border-color: #0000ff;
      background-color: #2c2c2c;
      color: white;

      &::placeholder {
        color: white;
        opacity: 1;
      }

      &:focus {
        box-shadow: 0 0 0 0.2rem rgba(#0000ff, 0.25);
        border-color: #0000ff;
      }

      &:active {
        border-color: #0000ff 0.5s ease;
      }
    }

    select option {
      background-color: #2c2c2c;
      color: white;
    }

    input[type="date"] {
      color: white;
      background-color: #2c2c2c;
      border-color: #0000ff;
    }
  }
</style>
