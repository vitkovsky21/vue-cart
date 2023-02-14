<template>
    <div class="header">
      <div class="header__cart">
        <img src="../assets/cart-logo.png" alt="icon" class="header__icon" />
        <div class="header__info">
          <h4 class="header__title">Ваша корзина</h4>
          <p class="header__amount">3 товара</p>
          <p class="header__sum">50 576 ₽</p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  </script>
  
  <style scoped>  
  .header__cart {
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  
    display: flex;
    justify-content: flex-end;
    align-items: center;
  }
  
  .header__icon {
    padding: 0rem;
  }
  
  .header__info {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    margin-left: 1rem;
  }
  
  .header__title {
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    
    margin: 0rem;
    width: 6rem;
  }
  
  .header__amount {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    color: #797B86;
  
    margin: 0rem;
  }
  
  .header__sum {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 145%;
    
    margin: 0rem;
  }
  </style>
  