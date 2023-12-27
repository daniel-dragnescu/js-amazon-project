//first step: save the data from html to js
//create an array because represents an list
//this is called data structure (combination of arrays and objects)

const products = [{
image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
name: 'Black and Gray Athletic Cotton Socks - 6 Pairs',
rating: {
  stars: 4.5,
  count: 87
},
priceCents: 1090
}, {
  image: 'images/products/intermediate-composite-basketball.jpg',
  name: 'Intermediate Size Basketball',
  rating: {
    stars: 4,
    count: 127
  },
  priceCents: 2095
}, {
  image: 'images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg',
  name: 'Adults Plain Cotton T-Shirt - 2 Pack',
  rating: {
    stars: 4.5,
    count: 56
  },
  priceCents: 799
}];

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
        $${(product.priceCents / 100).toFixed(2)}
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

      <button class="add-to-cart-button button-primary">
        Add to Cart
      </button>
    </div>
  `;
});

console.log(productsHTML); // we combined all the html together

//third step: combine this HTML together and put it on the webpage
//create a variable at the top with let
//each time we go through the loop, we add html string in the variable let from the above

//fourth step: put it on the webpage with DOM

document.querySelector('.js-products-grid')
  .innerHTML = productsHTML; //we generated all the html cu js and then using the dom to put this html inside here(HTML file)
  //now we can remove the divs inside grid from html because we added to js
  //toFixed() - to select how many decimals you want. convert a number into a string