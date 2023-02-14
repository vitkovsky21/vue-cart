<template>

  <HeaderComp />

  <div class="location">
    <span class="location__main">Главная</span>
    <img src="../assets/vector.png" alt="#" class="location__image" />
    <span class="location__place">Корзина</span>
  </div>
  <div class="cart">
    <ProductsComp />
    <TickerComp />
  </div>

  <SwiperComp />


</template>

<script lang="ts">
import HeaderComp from '@/components/HeaderComp.vue';
import ProductsComp from '@/components/ProductsComp.vue';
import TickerComp from '@/components/TickerComp.vue';
import SwiperComp from '@/components/SwiperComp.vue';

export default {
  name: 'HomeView',
  components: {
    HeaderComp,
    ProductsComp,
    TickerComp,
    SwiperComp,
  },
};
</script>

<style scoped>
.location {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 5rem;
  width: 143px;
  height: 21px;
  position: relative;
}

.location__main {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
}

.location__image {
  width: 5px;
  height: 8px;
  position: relative;
  top: .4rem;
  opacity: 0.8;
}

.location__place {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  color: #797B86;
}

.cart {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
