<template>
  <h1>{{ title }}</h1>
  <br>
  <input type="text" ref="name" />
  <button @click="handleClick">Click me</button>
  <Teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">sign up now</a>
        <br>
        <a href="#">more info</a>
      </template>
      <h1>FB Give Away</h1>
      <p>Grab your course with 0$</p>
    </Modal>
  </Teleport>


  <div v-if="showModalTwo">
    <Modal theme="" @close="toggleModalTwo">
      <h1>Sign up to the newletters</h1>
      <p>For update and promo codes!</p>
    </Modal>
  </div>

  <br><br>
  <button @click.alt="toggleModal">open Modal (alt + click)</button>
  <button @click="toggleModalTwo">open Modal</button>
</template>

<script>
import Modal from "./components/Modal.vue";

export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "My fisrt Vue App",
      header: "Sign up for Give away!",
      text: "Grab your tool with 0$",
      showModal: false,
      showModalTwo: true,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name.value);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo() {
      this.showModalTwo = !this.showModalTwo;
    }
  },
};
</script>

<style>
#app, .modals {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  color: rebeccapurple;
  border-bottom: 1px solid #000;
  display: inline-block;
}
</style>
