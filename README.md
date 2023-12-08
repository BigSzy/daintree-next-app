This is my E-commerce website for my portfolio,
This project was built with Next JS , Also i've included Fake Store API , Stripe API , Sass and font awesome icons, aswell as being deployed with AWS Amplifiy.
To see this website in action please click on this link -> (insert working link here)

If you use these files there are a few thing you are going to need to do to make the checkout system to work.

Firstly you will need to set up a stripe account to get two test keys for you to invoke the API and get your checkout session URL

Secondly you will have to create a .env.local file in the root directory to then put these keys in two enviormental variables:

    NEXT_PUBLIC_TEST_STRIPE_PUBLISHABLE_KEY = { your publishable key }
    STRIPE_TEST_SECRET_KEY = { your secret key}
    
After the keys have been implemented you will now have to create all 20 products in your stripe product catalog.

To get accurate results visit https://fakestoreapi.com/products to get all the IDs, name of products and prices , you can also npm run dev and look at all products by pressing the 'shop now' button on the home page to get the images.

Once all the products have been created you will need to extract the price IDs from stripe and insert them to the corresponding IDs in the map object in src/app/api/checkout/route.js file.

The functionality of the checkout system should work now but you will need to use test cards to make the checkout to go through , please find these here : https://stripe.com/docs/testing


    
