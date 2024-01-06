//integration test = uses many different pieces/units of code together

import {renderOrderSummary} from "../../scripts/checkout/orderSummary.js";
import {loadFromStorage, cart} from "../../data/cart.js";

describe('test suite: renderOrderSummary', function() {
  const productId1 = 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6'
  const productId2 = '15b6fc6f-327a-4ec4-896f-486349e85a3d'
  
  beforeEach(function() {
    spyOn(localStorage, 'setItem');

    document.querySelector('.js-test-container')
    .innerHTML = `
      <div class="js-order-summary"></div>
      <div class="js-payment-summary"></div>
    `;

    spyOn(localStorage, 'getItem').and.callFake(function() { 
      return JSON.stringify([{
        productId: productId1,
        quantity: 2,
        deliveryOptionId: '1'
      }, {
        productId: productId2,
        quantity: 1,
        deliveryOptionId: '2'
      }]);
    });
    loadFromStorage();

    renderOrderSummary();
  });

  it('displays the cart', function() {
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(2);
    expect(document.querySelector(`.js-product-quantity-${productId1}`).innerText
    ).toContain('Quantity: 2');
    expect(document.querySelector(`.js-product-quantity-${productId2}`).innerText
    ).toContain('Quantity: 1');

    document.querySelector('.js-test-container')
    .innerHTML = '';  //to remove the HTML
  });

  it('removes a product', function() {
    document.querySelector(`.js-delete-link-${productId1}`).click();
    expect(
      document.querySelectorAll('.js-cart-item-container').length
    ).toEqual(1);
    expect(
      document.querySelector(`.js-cart-item-container-${productId1}`)
    ).toEqual(null);  
    expect(
      document.querySelector(`.js-cart-item-container-${productId2}`)
    ).not.toEqual(null); 
    expect(cart.length).toEqual(1);
    expect(cart[0].productId).toEqual(productId2);

    document.querySelector('.js-test-container')
    .innerHTML = '';  //to remove the HTML - to make clean up
  });
});

//toContain: checks if the value contains the string from inside to him
//integration test = tests many pieces/units of code working together
//Hooks- lets us run some code before each test. we can share code between these 2 test with hook
//beforeEach - will run this function before each of the tests