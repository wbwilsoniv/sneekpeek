# README

# SneekPeek
SneekPeek is a React on Rails app where users can track upcoming sneaker releases. They have full CRUD capabilities with whatever sneakers they’ve created.


## Motivation

As a long-time sneaker afficionado, I wanted to create an app where I can keep track of upcoming sneaker release dates  

## General Approach


For this project I started with creating ERDs for Sneakers and Brands. The back-end was then built using Ruby on Rails.

From there we set about building up the app where we would define our models, controllers and routes for CRUD on both podcasts and reviews.

For the client side,  the front-end I used react.js. 

After creating both a functional front-end and back-end, I used CSS-Grid and flexbox to style and format our app.


## App Link


## MVP
1. CRUD functionality for Sneaker
2. CRUD functionality for Brands

## ICE-Box

1. User/Authentication
2. Sort functionality
3. Additional sneaker pictures


## Code Example
 Renders brand name instead of brand_id for sneakers.
```
renderBrand(brand_id) {
        switch(brand_id) {
            case 1:
            return ('Adidas')
            break;
            case 2:
            return ('Jordan')
            break;
            case 3:
            return ('Nike')
            break;
            default:
            return null;  
        }
    }
```


## Appshots & Wireframes
![sneekpeekerd](https://user-images.githubusercontent.com/38361826/45902825-9a88bb00-bd9c-11e8-8bc5-d96cfc1c59f6.jpg)
![sneekpeekwf](https://user-images.githubusercontent.com/38361826/45902779-788f3880-bd9c-11e8-86a0-69f7f0972fb3.jpg)


## User Stories
1. As a person who likes to buy sneakers, I would like to track sneaker release dates 
2. As a user I want to see a list of upcoming sneakers. 
3. As a user I want to see a collection of brands.
4. As a user I want to sort the sneakers by brand.
5. As a user I want to see a description of each brand.
6. As a user I want to see pictures of a sneaker.
7. As a user I want to add / edit / delete a sneaker.


## Built with

* Visual Studio Code
* JSX
* Ruby
* Rails
* Axios
* Heroku
* React
* CORS
* Nodemon
* PG-Promise
* PSQL
* Body-Parser
* CSS-Grid 

 

## How to Use:
List of sneakers default rendered. Click around!

## Unsolved Problems:
1. Redirects after update/delete/create


### Things to be added later:
1. User Authentication
2. Sort by price and date
3. Delete and edit brands



## Credits

* Reactjs.org

* https://medium.com/@bruno_boehm/reactjs-ruby-on-rails-api-heroku-app-2645c93f0814

* https://rubyonrails.org/

* General Assembly NYC Lambda Repo


## License

GA ©