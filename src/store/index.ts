import { createStore } from "vuex";
import http from "../base/http-common";
const pngs: any = import.meta.globEager('/src/assets/*.png');

const store = createStore({
  state: {
    cartProducts: [
      {
        id: 1,
        img: pngs["/src/assets/item.png"].default,
        title: "Вытяжное устройство G2H",
        about:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        model: "Артикул: G2H1065",
        price: 12644,
        amount: 0,
      },
      {
        id: 2,
        img: pngs["/src/assets/item-2.png"].default,
        title: "Вытяжное устройство BXC",
        about:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        model: "Артикул: G2H1065",
        price: 12644,
        amount: 0,
      },
      {
        id: 3,
        img: pngs["/src/assets/item-3.png"].default,
        title: "Вытяжное устройство GHN",
        about:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        model: "Артикул: G2H1065",
        price: 12644,
        amount: 0,
      },
    ],
    swiperProducts: [
      {
        id: 1,
        img: pngs["/src/assets/swiper-product-1.png"].default,
        title: "BXC",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 2,
        img: pngs["/src/assets/swiper-product-2.png"].default,
        title: "G2H",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 3,
        img: pngs["/src/assets/swiper-product-3.png"].default,
        title: "GHN",
        about: "Вытяжное устройство c датчиком присутствия",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 4,
        img: pngs["/src/assets/swiper-product-1.png"].default,
        title: "TDA",
        about: "Вытяжное устройство c датчиком присутствия",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 5,
        img: pngs["/src/assets/swiper-product-3.png"].default,
        title: "GHN",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 6,
        img: pngs["/src/assets/swiper-product-2.png"].default,
        title: "TDA",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
    ],
    cart: {
      amount: 0,
      sum: 0,
      install: false,
    },
  },
  mutations: {
    INCREMENT_PRODUCTS(state, value) {
      state.cartProducts[value - 1].amount++;
      state.cart.sum += state.cartProducts[value - 1].price;
      state.cart.amount++;
    },
    DECREMENT_PRODUCTS(state, value) {
      if (state.cartProducts[value - 1].amount > 0) {
        state.cartProducts[value - 1].amount--;
        state.cart.sum -= state.cartProducts[value - 1].price;
        state.cart.amount--;
      }
    },
    TOGGLE_INSTALL(state) {
      state.cart.install = !state.cart.install;
    },
    REMOVE_PRODUCT(state, value) {
      if (state.cartProducts[value - 1]) {
        state.cart.sum -=
          state.cartProducts[value - 1].price *
          state.cartProducts[value - 1].amount;
        state.cart.amount =
          state.cart.amount - state.cartProducts[value - 1].amount;
        state.cartProducts.splice(value - 1, 1);
      } else {
        state.cart.sum -=
          state.cartProducts[0].price * state.cartProducts[0].amount;
        state.cart.amount = state.cart.amount - state.cartProducts[0].amount;
        state.cartProducts.splice(0, 1);
      }
    },
    REMOVE_PRODUCTS(state) {
      state.cartProducts = [];
      state.cart = state.cart = { amount: 0, sum: 0, install: false };
    },
    FETCH_PRODUCTS(state) {
      return http
        .post("/somewhere", state.cart)
        .then((response) => {
          console.log(response.data);
        })
        .catch(() => {
          console.log("Ошибка, очевидно :)");
        });
    },
    CLEAR_DATA(state) {
      state.cartProducts.forEach((product) => (product.amount = 0));
      state.cart = { amount: 0, sum: 0, install: false };
    },
  },
});

export default store;
