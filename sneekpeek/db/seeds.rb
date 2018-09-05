# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.delete_all
Sneaker.delete_all

adidas = Brand.create!( 
    name: 'Adidas',
    about: 'Adidas AG is a multinational corporation that designs and manufactures shoes, clothing and accessories.',
    founded: 1948
    hq: 'Herzogenaurach, Germany')

jordan = Brand.create!(
    name: 'Jordan',
    about: 'Air Jordan is a brand of basketball shoes and athletic clothing produced by Nike',
    founded: 1984
    hq: 'Beaverton, Oregon'
)
nike = Brand.create!(
    name: 'Nike',
    about: 'American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.',
    founded: 1971
    hq: 'Beaverton, Oregon'
)

Sneaker.create([
    {brand: 'Adidas', 
    model: 'Ultra Boost', 
    price: 185, 
    release_date: "10/9/18" 
    },{
    brand: 'Adidas',
    model: 'Yeezy V2 350',
    price: 225,
    release_date: "11/17/18"
    }, {
    brand: 'Jordan',
    model: 'XII Playoffs',
    price: 190,
    release_date: "9/20/18"    
    }, {
    brand: 'Jordan',
    model: 'III Flyknit',
    price: 190,
    release_date: "9/27/18"
    }, {
    brand: 'Nike',
    model: 'Air Max 270',
    price: 120,
    release_date: "10/20/18"
    }, {
    brand: "Nike",
    model: 'LeBron XVI',
    price: 195,
    release_date: "10/1/18"
    }
])
