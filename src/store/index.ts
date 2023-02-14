import { createStore } from "vuex";

const store = createStore({
  state: {
    cartProducts: [
      {
        id: 1,
        img: "src/assets/item.png",
        title: "Вытяжное устройство G2H",
        about:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        model: "Артикул: G2H1065",
        price: 12644,
        amount: 0,
      },
      {
        id: 2,
        img: "src/assets/item-2.png",
        title: "Вытяжное устройство BXC",
        about:
          "12-72/168 м3/ч / гидрорегулируемый расход / от датчика присутствия",
        model: "Артикул: G2H1065",
        price: 12644,
        amount: 0,
      },
      {
        id: 3,
        img: "src/assets/item-3.png",
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
        img: "src/assets/swiper-product-1.png",
        title: "BXC",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 2,
        img: "src/assets/swiper-product-2.png",
        title: "G2H",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 3,
        img: "src/assets/swiper-product-3.png",
        title: "GHN",
        about: "Вытяжное устройство c датчиком присутствия",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 4,
        img: "src/assets/swiper-product-1.png",
        title: "TDA",
        about: "Вытяжное устройство c датчиком присутствия",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 5,
        img: "src/assets/swiper-product-3.png",
        title: "GHN",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
      {
        id: 6,
        img: "src/assets/swiper-product-2.png",
        title: "TDA",
        about: "Вытяжное устройство для механической системы вентиляции",
        priceRub: "6 848 ₽ - 56 584 ₽",
        priceEuro: "77.60 € - 643.86 €",
      },
    ],
    cart: {
      amount: 0,
      sum: 0,
    },
  },
  mutations: {
    INCREMENT_PRODUCTS(state, value) {
      state.cartProducts[value - 1].amount++;
      state.cart.sum += state.cartProducts[value - 1].price;
      state.cart.amount++;
    },
    DECREMENT_PRODUCTS(state, value) {
      state.cartProducts[value - 1].amount--;
      state.cart.sum -= state.cartProducts[value - 1].price;
      state.cart.amount--;
    },
  },
});

export default store;
