import {cart, addToCart} from '../data/cart.js';  //.. - to get out to the folder to the main folder (javascript-amazon...)
import {products} from '../data/products.js';
import {formatCurrency} from './utils/money.js';

//import {cart as myCart} from '.../data/cart/js;
//const cart = []; here we have naming conflict again. We use 'as' and another name to change it and avoid naming

//first step: save the data from html to js
//create an array because represents an list
//this is called data structure (combination of arrays and objects)

//FIRST STEP IS IN PRODUCTS.JS // 

//second step: generate the html
//it takes each object, save in the parameter product and then run the function
//take the first object, save in the product, run the function, then the second and so on
//we dont want to have the same name for the all code so we have to replace this part of the code with the property from objects
//we change the image with the code. take whatever the image property is of the product and put it inside html code from below.
//the same thing for the rest of the properties that can be different one from another
//and now we generated all the html for all 3 products just by this single code from below

let productsHTML = ''; //acumulator pattern- loop through array and each time add to the result here.

products.forEach((product) => {
  productsHTML += `

    <div class="product-container">
      <div class="product-image-container">
        <img class="product-image"
          src="${product.image}">
      </div>

      <div class="product-name limit-text-to-2-lines">
        ${product.name}
      </div>

      <div class="product-rating-container">
        <img class="product-rating-stars"
          src="images/ratings/rating-${product.rating.stars * 10}.png">
        <div class="product-rating-count link-primary">
          ${product.rating.count}
        </div>
      </div>

      <div class="product-price">
        $${formatCurrency(product.priceCents)}
      </div>

      <div class="product-quantity-container">
        <select>
          <option selected value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>
      </div>

      <div class="product-spacer"></div>

      <div class="added-to-cart">
        <img src="images/icons/checkmark.png">
        Added
      </div>

      <button class="add-to-cart-button button-primary js-add-to-cart"
      data-product-id="${product.id}">
        Add to Cart
      </button>
    </div>
  `;
});

//console.log(productsHTML); // we combined all the html together

//third step: combine this HTML together and put it on the webpage
//create a variable at the top with let
//each time we go through the loop, we add html string in the variable let from the above

//fourth step: put it on the webpage with DOM

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML; //we generated all the html cu js and then using the dom to put this html inside here(HTML file)
  //now we can remove the divs inside grid from html because we added to js
  //toFixed() - to select how many decimals you want. convert a number into a string


  //last step: make it interactive

  
  
  function updateCartQuantity() {
    //(A) Total quantity
    let cartQuantity = 0;

    cart.forEach((cartItem) => {  //this is gonna loop through each object in the cart
      cartQuantity += cartItem.quantity; //we add the the item quantity to the variable let
    });

    //(B) Put the quantity on the page
    document.querySelector('.js-cart-quantity')
      .innerHTML = cartQuantity;
  }

  document.querySelectorAll('.js-add-to-cart')
    .forEach((button) => {
      button.addEventListener('click', () => {
        //console.log(button.dataset.productId); to acces the productId as in the console log
        const productId = button.dataset.productId;
        addToCart(productId);
        updateCartQuantity();        
      });
    });

    //now we add a data atribute in html (data-product-name(data- and the rest is how we want to name it))
    //it allow us to attach any info to an element
    //when we console log, we can see the name atribute inside the element, next to console.
    //each of the button have this atribute and it is equal to the product name (his name)
    //we can attach anything, not just name
    //when we click the button, we can get the name, and tell us which product will should add to the cart
    //dataset give us all the data atributes that are attatched to this button (data-product-name)

    //we first attached the product name to the button using data atribute and then, when we click the button
    //we got the product name out and then we added the product to the cart


    //next step: we want to add multiple quantity for one product, not the same product for many times.


    //(A)next step: calculate the quantity from the cart from above right
    //(B)Put the quantity on the page, using the dom.

