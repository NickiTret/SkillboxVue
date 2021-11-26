<template>
    <div class="form__counter">
                <button type="button" aria-label="Убрать один товар" @click.prevent="deleteAmount">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-minus"></use>
                  </svg>
                </button>

                <input type="text" v-model.number="amount">

                <button type="button" aria-label="Добавить один товар" @click.prevent="addAmount">
                  <svg width="12" height="12" fill="currentColor">
                    <use xlink:href="#icon-plus"></use>
                  </svg>
                </button>
    </div>
</template>

<script>
export default {
    data(){
    return {
      amount: 1
    };
  },
  computed: {
        amount: {
            get(){
                return this.item.amount;
            },
            set(value){
                this.$store.commit('updateCartProductAmount', {productId: this.item.productId, amount: value});
            }
        }
    },
  methods: {
      addAmount(){
            this.amount++;
        },
        deleteAmount(){
            if(this.amount > 0) {
                this.amount--;
            }
            
        }
  }
}
</script>

<style>

</style>

