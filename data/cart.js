export let cart = JSON.parse(localStorage.getItem('cart')); //we need to get the cart from local storage. we need one string, and we have to get the value back from a string with parse

//if not cart/we dont have a cart in local storage, json.parse we give as null
//in this case, not null will be truthy and will run the code inside the {}
//if the cart get the value null, we run the code from {}. we have null, so we run the {}
if(!cart) {  //!cart = is the null error
  cart = [{
    productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
    quantity: 2,
    deliveryOptionId: '1'
  }, {
    productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
    quantity: 1,
    deliveryOptionId: '2'
  }];
}  //now, if the cart is empty, we get a default value

 //accesed outisde of this file/ used outside of this js
//cart is variable, so it resets when we reload the page or go to different page. we need to localstorage

function saveToStorage() {
  localStorage.setItem('cart', JSON.stringify(cart));  //local storage needs 2 strings
}  // first: 'cart' - the name that wherever we want to save / we want to put
  //second: is the value that we need, but converted into a string by json.stringify

export function addToCart(productId) {
  let matchingItem; // it is set undefined

  cart.forEach((cartItem) => {   //item = productid, quantity
    if (productId === cartItem.productId) {
      matchingItem = cartItem; // this is how to check if in item is already in the cart
    }
  });

  if(matchingItem) {
    matchingItem.quantity += 1; //if it's in the cart, increase the quantity
  } else {
    cart.push({
      productId: productId,
      quantity: 1,
      deliveryOptionId: '1'
    });  //if it's not in the cart, add it to the cart
  }

  saveToStorage();
}

export function removeFromCart(productId) {
  const newCart = [];

  cart.forEach((cartItem) => {
    if (cartItem.productId !== productId) {  // !== if it's not equal
      newCart.push(cartItem);
    } 
  });

  cart = newCart;

  saveToStorage(); //now, whenever we update the card, we save it in localstorage
}
