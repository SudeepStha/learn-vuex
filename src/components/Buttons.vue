<template>
    <div class="buttons">
      <!-- $store.commit is used for mutation method -->
      <!-- <button @click="$store.commit('decreaseCounter')">-</button>
      <button @click="$store.commit('increaseCounter')">+</button> -->

      <!-- $store.dispatch is used for action method -->
      <button @click="$store.dispatch('decreaseCounter')">-</button>
      <button @click="$store.dispatch('increaseCounter')">+</button>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>

</style>