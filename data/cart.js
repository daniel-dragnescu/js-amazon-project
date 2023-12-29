export const cart = []; //accesed outisde of this file/ used outside of this js

export function addToCart(productId) {
  let matchingItem; // it is set undefined

  cart.forEach((cartItem) => {   //item = productid, quantity
    if (productId === cartItem.productId) {
      matchingItem = cartItem; // this is how to check if in item is already in the cart
    }
  });

  if(matchingItem) {
    matchingItem.quantity += 1; //it it's in the cart, increase the quantity
  } else {
    cart.push({
      productId: productId,
      quantity: 1
    });  //if it's not in the cart, add it to the cart
  }
}