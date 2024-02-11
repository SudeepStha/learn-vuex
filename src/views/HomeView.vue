<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">

    <counter />
    <counter-squared />

    <buttons />
    <div>
      <label>Enter your desired colour here(withoutspace):</label> <br>
      <input 
        v-model="colorCode"
        type="text" 
        placeholder="Enter Colour Code"
      >
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import CounterCom from '@/components/Counter.vue'
export default {
  name: 'HomeView',
  components:{
    'counter': require('@/components/Counter.vue').default,
    'counter-squared': require('@/components/CounterSquared.vue').default,
    'buttons': require('@/components/Buttons.vue').default
  },
  computed:{
    colorCode: {
      get(){
        return this.$store.state.colorCode;
      },
      set(newValue){
        console.log(newValue);
        this.$store.dispatch('setColorCode', newValue);
      }
    }
  }
}
</script>

<style>
div{
  margin-bottom: 10px;
}
.counter{
  font-size:80px;
}
.buttons button {
  font-size: 40px;
  width: 100px;
  margin: 0 10px;
}
</style>