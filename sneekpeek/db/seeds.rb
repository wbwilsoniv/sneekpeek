# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Brand.create!([ 
    { 
    name: "Adidas",
    about: "Adidas AG is a multinational corporation that designs and manufactures shoes, clothing and accessories.",
    founded: 1948,
    hq: "Herzogenaurach, Germany",
    pic_url: "https://user-images.githubusercontent.com/38361826/45305241-d8a5f500-b4e7-11e8-8d3b-d4e419f461c5.jpg"
    }
])

Brand.create!([
    {
    name: "Jordan",
    about: "Air Jordan is a brand of basketball shoes and athletic clothing produced by Nike",
    founded: 1984,
    hq: "Beaverton, Oregon",
    pic_url: "https://images-na.ssl-images-amazon.com/images/I/61t%2BNvmBhUL._SX425_.jpg"
    }
])

Brand.create!([
    {
    name: "Nike",
    about: "American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
    founded: 1971,
    hq: "Beaverton, Oregon",
    pic_url: "https://user-images.githubusercontent.com/38361826/45305262-e2c7f380-b4e7-11e8-925b-64219bf6b1b1.jpg"
    }
])


Sneaker.create([
    { 
    model: "Ultra Boost Mid", 
    price: 185, 
    release_date: "10/9/18",
    brand_id: 1,
    sneak_pic: 'https://user-images.githubusercontent.com/38361826/45303691-65e74a80-b4e4-11e8-957e-a6d95f851e14.png' 
    },{
    model: "Yeezy V2 350",
    price: 225,
    release_date: "11/17/18",
    brand_id: 1,
    sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/37130c9f0ca22d2f408153bfdbb21bea_1514306958.jpg"
    }, {
    model: 'XII',
    price: 190,
    release_date: "9/20/18",
    brand_id: 2,
    sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/3c9ea028a0e6369b2c861d61cc091308_1515610946.jpg"  
    }, {
    model: 'III Mocha',
    price: 190,
    release_date: "9/27/18",
    brand_id: 2,
    sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/26f0768cf4b436aab0c4f1cfe4998ff8_1505407266.jpg"
    }, {
    model: 'Air Max 97',
    price: 120,
    release_date: "10/20/18",
    brand_id: 3,
    sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/bc7a5a2e169f4000a1bb5107dbf00288_1535569505.jpg"
    }, {
    model: 'LeBron XVI',
    price: 195,
    release_date: "10/1/18",
    brand_id: 3,
    sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/a7e0f36308ac992fbba9a54247a6e230_1535060161.jpg"
    }
])
