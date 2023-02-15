<script setup lang="ts">
</script>

<template>
    <div class="ticker">
        <h2 class="ticker__title">Итого</h2>
        <div class="ticker__row">
            <span>Сумма заказа</span>
            <span class="ticker__row-data">{{ formatPrice(cart.sum) }} ₽</span>
        </div>
        <div class="ticker__row">
            <span>Количество</span>
            <span class="ticker__row-data">{{ cart.amount }} шт</span>
        </div>
        <div class="ticker__row">
            <span>Установка</span>
            <span class="ticker__row-data">{{ cart.install ? "да" : "нет" }}</span>
        </div>
        <hr class="hr-line" />
        <div class="ticker__result">
            <span class="ticker__result-title">Стоимость товаров</span>
            <span class="ticker__result-data">{{ formatPrice(cart.sum) }} ₽</span>
        </div>
        <div class="btn btn-main">Оформить заказ</div>
        <div class="btn btn-second">Купить в 1 клик</div>
    </div>

</template>

<script lang="ts">
import { mapState } from 'vuex';

export default {
    computed: mapState({
        cart: (state: any) => state.cart
    }),
    methods: {
        formatPrice(value: number) {
            let val = (value / 1).toFixed(2).replace(' ', ' ')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        },
    }
}
</script>

<style scoped>
.ticker {
    position: relative;
    top: 1.7rem;
    width: 425px;
    height: 458px;
    background: #F6F8FA;
    border-radius: 5px;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
}

.ticker__title {
    padding: .8rem 2rem;
}

.ticker__row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 425px;
    padding: .6rem 2rem;
    position: relative;
    bottom: .9rem;
}

.ticker__row-data {
    position: relative;
    right: 4rem;
}

.ticker__result {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 425px;
    padding: .6rem 2rem;
    position: relative;
    bottom: .4rem;
}

.ticker__result-title {
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 145%;

    color: #1F2432;
}

.ticker__result-data {
    position: relative;
    right: 4rem;

    font-style: normal;
    font-weight: 700;
    font-size: 26px;
    line-height: 130%;

    text-align: right;
    letter-spacing: 0.005em;

    color: #1F2432;
}

.btn-main {
    margin: 0.7rem 2rem;
}

.btn-second {
    margin: 0rem 2rem;

    color: #0069B4;
    background: #FFFFFF;
    border: 1px solid #0069B4;
    border-radius: 4px;
}
</style>