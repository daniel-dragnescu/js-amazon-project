export const cart = [{
  productId: 'e43638ce-6aa0-4b85-b27f-e1d07eb678c6',
  quantity: 2,
}, {
  productId: '15b6fc6f-327a-4ec4-896f-486349e85a3d',
  quantity: 1
}]; //accesed outisde of this file/ used outside of this js

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
      quantity: 1
    });  //if it's not in the cart, add it to the cart
  }
}