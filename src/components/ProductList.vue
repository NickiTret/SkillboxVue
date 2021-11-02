<template>
  <ul class="catalog__list">
    <ProductItem v-for="(product, index) in products" :key="index" :product="product"/>
  </ul>
</template>
<script>
// eslint-disable-next-line prettier/prettier
import ProductItem from './ProductItem';
export default {
	components: {ProductItem},
	props: ['products']
};
</script>
