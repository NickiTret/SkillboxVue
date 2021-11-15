<template>
  <ul class="catalog__list">
    <ProductItem v-for="product in products" :key="product.id" :product="product" @goToPage="(pageName, pageParams) => $emit('goToPage', pageName, pageParams)"/>
  </ul>
</template>
<script>
// eslint-disable-next-line prettier/prettier
import ProductItem from '@/components/ProductItem';
export default {
	components: {ProductItem},
	props: ['products']
};
</script>
