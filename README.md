# E-commerce Website 

This is a simple e-commerce website built using nodejS, Express, and MongoDb.

## Features

* Product catalog with product details and images
* Shopping cart to keep track of selected products
* Checkout page with shipping and billing information form
* Payment integration with Razorpay and PayPal
* Users can also order the products by cash-on-delivary option.

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

* bcrypt 5.1.0
* cookie-parser1.4.4
* crypto 1.0.1
* express ~4.16.1
* express-handlebars ^6.0.6
* express-session ^1.17.3
* handlebars ^4.7.7
* hbs ~4.0.4
* mongodb ^4.12.1
* morgan ~1.9.1
* multer ^1.4.5-lts.1
* paypal-rest-sdk ^1.8.1
* razorpay ^2.8.6
* twilio

#### Database

* MongoDb


These dependencies are included in the project's `package.json` file, need to install all package to start the server.

## License

This project is licensed under the MIT License. See the `LICENSE` file for more information.