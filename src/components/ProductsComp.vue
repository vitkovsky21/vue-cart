<script setup lang="ts">
</script>


<template>
    <div class="cart__container">
        <div class="navbar">
            <h2 class="navbar__title">Ваша корзина</h2>
            <div class="navbar__amount">{{ cartProducts.length }} товара</div>
            <div class="navbar__remove" @click="removeProducts()">Очистить корзину</div>
        </div>

        <div v-for="cartProduct in cartProducts" :key="cartProduct.id">
            <div class="item" v-if="cartProducts">
                <img :src="cartProduct.img" alt="#" class="item__image" />
                <div class="item__container">
                    <h4 class="item__title">{{ cartProduct.title }}</h4>
                    <p class="item__chars">{{ cartProduct.about }}</p>
                    <p class="item__model">{{ cartProduct.model }}</p>
                </div>
                <div class="item__amount">
                    <span @click="decrementProducts(cartProduct.id)">-</span>
                    <span>{{ cartProduct.amount }}</span>
                    <span @click="incrementProducts(cartProduct.id)">+</span>
                </div>
                <div class="item__cost">{{ formatPrice(cartProduct.price) }} ₽</div>
                <img @click="removeProduct(cartProduct.id)" src="../assets/cross.png" alt="#" class="item__cross" />
            </div>
            <hr class="hr-line" />
        </div>


        <div class="install">
            <input type="checkbox" class="install__checkbox" @click="installToggle()">
            <img src="../assets/instrument.png" alt="#" class="install__image" />
            <div class="install__container">
                <h4 class="install__title">Установка</h4>
                <p class="install__about">Отметьте, если Вам необходима консультация профессионала по монтажу выбранных
                    товаров.</p>
            </div>
        </div>

    </div>

</template>

<script lang="ts">
import { mapState } from 'vuex';
import store from '@/store';

export default {
    computed: mapState({
        cartProducts: (state: any) => state.cartProducts
    }),
    methods: {
        formatPrice(value: number) {
            let val = (value / 1).toFixed(2).replace(' ', ' ')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
        },
        incrementProducts(id: number) {
            store.commit('INCREMENT_PRODUCTS', id)
        },
        decrementProducts(id: number) {
            store.commit('DECREMENT_PRODUCTS', id)
        },
        installToggle() {
            store.commit('TOGGLE_INSTALL')
        },
        removeProduct(id: number) {
            store.commit('REMOVE_PRODUCT', id)
        },
        removeProducts() {
            store.commit('REMOVE_PRODUCTS')
        }
    }
}
</script>

<style scoped>
.cart__container {
    display: flex;
    flex-direction: column;
    width: 63%;
}

.navbar {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 1.3rem;
}

.navbar__title {
    width: 287px;
    height: 53px;
    font-family: 'Lato';
    font-style: normal;
    font-weight: 700;
    font-size: 44px;
    line-height: 120.52%;
}

.navbar__amount {
    position: relative;
    top: .7rem;
    right: 8.2rem;

    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 145%;
    color: #797B86;
}

.navbar__remove {
    position: relative;
    top: .8rem;

    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    text-align: right;
    text-decoration-line: underline;

    color: #797B86;
    cursor: pointer;
}

.item {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
}

.item__image {
    position: relative;
    left: 1.2rem;
    top: .3rem;
}

.item__container {
    position: relative;
    top: 1.1rem;
    width: 38%;
}

.item__title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;

    color: #1F2432;
    margin: 0rem;
}

.item__chars {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 150%;

    color: #2C3242;
    margin: .3rem 0rem;
}

.item__model {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;

    color: #797B86;
}

.item__amount {
    position: relative;
    top: .5rem;
    right: 1.3rem;
    width: 102px;
    height: 34px;

    display: flex;
    justify-content: space-between;
    align-items: center;

    cursor: pointer;
}

.item__amount span {
    padding: .5rem .75rem;
    margin: 0rem;
    background: #F6F8FA;
    border-radius: 4px;
}

.item__cost {
    position: relative;
    left: .7rem;
    top: .6rem;
    font-style: normal;
    font-weight: 500;
    font-size: 18px;
    line-height: 145%;

    text-align: right;

    color: #1F2432;
}

.item__cross {
    position: relative;
    bottom: 2.1rem;
    right: .3rem;
    width: 12px;
    height: 12px;
    cursor: pointer;
}

.hr-line {
    width: 800px;
    margin: 1.2rem 0rem;

    background: #C4C4C4;
}

.install {
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-direction: row;

    margin-top: 2.6rem;
    width: 800px;
    height: 102px;

    background: #F6F8FA;
    border-radius: 5px;
}

.install__checkbox {
    transform: scale(1.8);
    position: relative;
}

.install__image {
    position: relative;
    right: .8rem;
}

.install__container {
    position: relative;
    right: 1.8rem;
}

.install__title {
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 145%;
    color: #1F2432;
    margin: 0rem;
}

.install__about {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    color: #797B86;
    margin: 0rem;
}
</style>