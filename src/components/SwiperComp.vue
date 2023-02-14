<template>
    <div class="swiper home-slider">

        <h2 class="swiper__title">Просмотренные товары</h2>

        <swiper :slides-per-view="4" :space-between="50" @swiper="onSwiper" @slideChange="onSlideChange"
            class="swiper__products">
            <swiper-slide v-for="swiperProduct in swiperProducts" :key="swiperProduct.id" class="item">
                <img :src="swiperProduct.img" alt="#" class="item__image">
                <h4 class="item__title">{{ swiperProduct.title }}</h4>
                <div class="item__about">{{ swiperProduct.about }}</div>
                <div class="item__rub">{{ swiperProduct.priceRub }}</div>
                <div class="item__euro">{{ swiperProduct.priceEuro }}</div>
                <div class="btn">Подробнее</div>
            </swiper-slide>
        </swiper>

    </div>
</template>

<script lang="ts">
import { Swiper, SwiperSlide } from "swiper/vue"
import { mapState } from 'vuex';
import 'swiper/css';

export default {
    components: {
        Swiper,
        SwiperSlide
    },
    setup() {
        const onSwiper = (swiper: any) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange
        };
    },
    computed: mapState({
        swiperProducts: (state: any) => state.swiperProducts
    }),
};
</script>

<style scoped>
.swiper__title {
    margin-top: 5.2rem;
    font-style: normal;
    font-weight: 600;
    font-size: 30px;
    line-height: 120.52%;
}

.swiper__products {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 100%;
}

.item {
    background: #F6F8FA;
    border-radius: 5px;
    margin-right: .9rem !important;
    position: relative;
    top: 2rem;
    left: 0rem;
    width: 24% !important;
    height: 600px !important;
}

.item:hover {
    cursor: grab;
}

.item__image {
    position: relative;
    left: 2rem;
    top: 2rem;
}

.item__title {
    font-style: normal;
    font-weight: 700;
    font-size: 22px;
    line-height: 120.52%;
    color: #1F2432;
    position: relative;
    left: 1.5rem;
    top: .2rem;
}

.item__about {
    width: 255px;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 145%;
    color: #1F2432;
    position: relative;
    left: 1.5rem;
    bottom: 1rem;
}

.item__rub {
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    line-height: 130%;
    letter-spacing: 0.005em;
    color: #1F2432;
    position: relative;
    top: 2.5rem;
    left: 1.5rem;
}

.item__euro {
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 145%;
    color: #797B86;
    position: relative;
    top: 2.7rem;
    left: 1.5rem;
}

.btn {
    margin: 4rem 1.3rem;
    height: 50px;
}
</style>