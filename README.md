# E-commerce Website 

This is a simple e-commerce website built using nodejS, Express, and MongoDb.

![siteImage](/karmaeCommerce/karma.gif)
<img align="center" alt="CoderGIF" height=350 width=550 src="https://karmacommerce.cf/img/karma.gif"/>


## Features

#### Users
* Product catalog with product details and images
* Shopping cart to keep track of selected products
* Checkout page with shipping and billing information form
* Payment integration with Razorpay and PayPal
* Users can also order the products by cash-on-delivary option.

#### Admin
* Admin can add the product delete the product and edit the product.
* Admin can also block and unblock the user
* Admin add the offer and coupon 
* Admin also add front banner

## Installation and Open site

Clone the repository 
```bash
git clone https://github.com/robin-UI/karmaeCommerce.git
```

Change the director
```vim
cd ./karmaeCommerce
```

Install dependencies
```vim
npm install 
```

Start the server
```vim 
npm start
```

Open the site. Navigate to the Browse a type:
```vim
http://localhost:3000/
```

## Usage

1. Browse the product catalog.
2. Add items to your shopping cart by clicking on the "Add to Cart" button.
3. When you're ready to checkout, click on the shopping cart icon.
4. Review the items in your shopping cart and proceed to the checkout page by clicking on the "Checkout" button.
5. Fill out the shipping and billing information form and click on the "Place Order" button to complete the checkout process.

## Dependencies

This project uses the following dependencies:

#### Front-End
* Templating engine in express --hbs
* HTML, CSS, JavaScript
* Bootstrap v4.0.0
* jQuery v3.6.0
* Swal
* Ajax

#### Back-end 

* bcrypt 
* cookie-parser
* crypto 
* express 
* express-handlebars 
* express-session 
* handlebars 
* hbs 
* mongodb
* morgan 
* multer 
* paypal 
* razorpay 
* twilio

#### Database

* MongoDb


These dependencies are included in the project's `package.json` file, need to install all package to start the server.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.
