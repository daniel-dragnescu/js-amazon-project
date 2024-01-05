import {addToCart, cart, loadFromStorage} from "../../data/cart.js";

describe('test suite: addToCart', function() {
  it('adds an existing product to the cart', function() {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(function() { 
      return JSON.stringify([{
        productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
        quantity: 1,
        deliveryOptionId: '1'
      }]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(2);
  });

  it('adds a new product to the cart', function() {
    spyOn(localStorage, 'setItem');

    spyOn(localStorage, 'getItem').and.callFake(function() { //now will repalce it with a fake version and we can do it anynthing we want with the fake vers
      //the function inside callFake is what we want to do with the fake version
      return JSON.stringify([]);
    });
    loadFromStorage();

    addToCart('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart.length).toEqual(1);
    expect(localStorage.setItem).toHaveBeenCalledTimes(1);
    expect(cart[0].productId).toEqual('e43638ce-6aa0-4b85-b27f-e1d07eb678c6');
    expect(cart[0].quantity).toEqual(1);
  });
});



//test coverage = test each condition of if-statement. How much of te code is being tested
//flaky test = test that sometimes passes and sometimes fails
//mock = lets us replace a method with a fake version and then we can make it to do anything we want
//we can use mock to do a fake version of getItem and then to do anything we want with it
//spyOn -first param: the obj that we want to mock, the second: the string that we want to mock
//toHaveBeenCalledTimes - how many times localStorage.setItem was called in the code from above