<template>
	 <li class="catalog__item" >
      <a class="catalog__pic" href="#" @click.prevent="gotoPage('product', {id: product.id})">

        <img :src="product.image" :alt="product.title" />
      </a>

      <h3 class="catalog__title">
        <a href="#">
          {{ product.title }}
        </a>
      </h3>

      <span class="catalog__price"> {{ product.price | numberFormat }} ₽ </span>

      <ul class="colors colors--black">
        <li class="colors__item"  v-for="colorProduct in product.colorArray" :key="colorProduct" :colorProduct="colorProduct" >
          <label class="colors__label">
            <input
              class="colors__radio sr-only"
              type="radio"
              :value="colorProduct"
				  v-model="color"
            />
            <span class="colors__value" :style="{'background-color': colorProduct}">
            </span>
          </label>
        </li>
       
      </ul>
    </li>
</template>

<script>
import gotoPage from '@/helpers/gotoPage';
import numberFormat from '@/helpers/numberFormat';
export default {
	data(){
		return {
			color: this.product.colorArray
		};
	},
  filters: {
    numberFormat
  },
  methods: {
    gotoPage
  },
	props: ['product',],
}
</script>

<style scoped>

</style>