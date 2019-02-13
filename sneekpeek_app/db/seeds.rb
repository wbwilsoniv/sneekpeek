# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'json'

Brand.create!([ 
    { 
    name: "Adidas",
    about: "Adidas AG is a multinational corporation that designs and manufactures shoes, clothing and accessories.",
    founded: 1948,
    hq: "Herzogenaurach, Germany",
    img_url: "https://user-images.githubusercontent.com/38361826/45305241-d8a5f500-b4e7-11e8-8d3b-d4e419f461c5.jpg"
    }
])

Brand.create!([
    {
    name: "Jordan",
    about: "Air Jordan is a brand of basketball shoes and athletic clothing produced by Nike",
    founded: 1984,
    hq: "Beaverton, Oregon",
    img_url: "https://images-na.ssl-images-amazon.com/images/I/61t%2BNvmBhUL._SX425_.jpg"
    }
])

Brand.create!([
    {
    name: "Nike",
    about: "American multinational corporation that is engaged in the design, development, manufacturing, and worldwide marketing and sales of footwear, apparel, equipment, accessories, and services.",
    founded: 1971,
    hq: "Beaverton, Oregon",
    img_url: "https://user-images.githubusercontent.com/38361826/45305262-e2c7f380-b4e7-11e8-925b-64219bf6b1b1.jpg"
    }
])

json_data = [
  {
    "model": "Air Force 1 Low Premium 2",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9e86a1e6a0e2f31ca81e0d17a2946023_1546548876.jpg",
    "release_date": "02.12",
    "price": "$ 130",
    "post_id": "823392"
  },
  {
    "model": "Air Max 720 Saturn \"All-Star\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/6189e777828a8b31b85ae6f3c1354be3_1548785664.jpg",
    "release_date": "02.12",
    "price": "$ 180",
    "post_id": "828687"
  },
  {
    "model": "JW Anderson x Converse Run Star Hike",
    "brand_id": 4,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/d3e4829a359cb7a65df9128ab355d7f6_1550004473.jpg",
    "release_date": "02.12",
    "price": "$ 120",
    "post_id": "832275"
  },
  {
    "model": "Converse Chuck 70 High Riri Zip",
    "brand_id": 4,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/125ca6d8957fd27000e62da99da8f022_1550004883.jpg",
    "release_date": "02.12",
    "price": "$ 110",
    "post_id": "832276"
  },
  {
    "model": "Converse Chuck 70 High Riri Zip",
    "brand_id": 4,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/49a9148a10ce4bbc192339a416df59b3_1550004968.jpg",
    "release_date": "02.12",
    "price": "$ 110",
    "post_id": "832277"
  },
  {
    "model": "Air Max Dia",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/292fe655f432444293a268e7be7f53b1_1549398748.jpg",
    "release_date": "02.13",
    "price": "$ 110",
    "post_id": "830763"
  },
  {
    "model": "Blazer Mid 77",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/13142d780aa3cb9209066b62f6a813ae_1547486541.jpg",
    "release_date": "02.14",
    "price": "$ 100",
    "post_id": "825455"
  },
  {
    "model": "Air Foamposite One \"Floral\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9b07d2e955cf9afa42425a79fc055019_1548355224.jpg",
    "release_date": "02.14",
    "price": "$ 230",
    "post_id": "827768"
  },
  {
    "model": "KD 11 \"Aunt Pearl\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/a48a7ccb19f99b7c9d5b331bd64f1abc_1549400262.jpg",
    "release_date": "02.14",
    "price": "$ 150",
    "post_id": "830365"
  },
  {
    "model": "Air Force 1",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/29538e84e5c729be695920050b189b3a_1549571476.jpg",
    "release_date": "02.14",
    "price": "$ 110",
    "post_id": "830762"
  },
  {
    "model": "Vandal LX",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c61d4d2da1d7b4c3b325af3040e399d0_1549650239.jpg",
    "release_date": "02.14",
    "price": "$ 120",
    "post_id": "831603"
  },
  {
    "model": "Air Swoopes II",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/110435bd382d288897daca0a92d8cffb_1549650302.jpg",
    "release_date": "02.14",
    "price": "$ 140",
    "post_id": "831604"
  },
  {
    "model": "React Element 87 \"Royal Tint\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/44b627a9e6bf8e064e8fb6e4442dde0c_1548368955.jpg",
    "release_date": "02.15",
    "price": "$ 160",
    "post_id": "828083"
  },
  {
    "model": "Rokit x Nike Kyrie 5",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/1c179897598284372e301c9def2413ba_1549657533.jpg",
    "release_date": "02.15",
    "price": "$ 140",
    "post_id": "830362"
  },
  {
    "model": "PG 3 \"All-Star\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/1e2ff23d31a071ec15b2ba5656fc5a14_1549571560.jpg",
    "release_date": "02.15",
    "price": "$ 120",
    "post_id": "830364"
  },
  {
    "model": "Zoom Kobe IV Protro \"Draft Day\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/0e91d2368ee15224f1d35d80fb8324d3_1549558237.jpg",
    "release_date": "02.15",
    "price": "$ 175",
    "post_id": "830985"
  },
  {
    "model": "Black Sheep x Nike Dunk Mid",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/481c740e0026b363d5dd1eb496193bc8_1549557896.jpg",
    "release_date": "02.15",
    "price": "$ N/A",
    "post_id": "831334"
  },
  {
    "model": "Under Armour Curry 6",
    "brand_id": 4,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/258af00507ee6eb172acce568ec7dc74_1549399025.jpg",
    "release_date": "02.15",
    "price": "$ 130",
    "post_id": "830764"
  },
  {
    "model": "Adapt BB",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/ed221fb3883123dd458da88ea7921ae0_1547569540.jpg",
    "release_date": "02.16",
    "price": "$ 350",
    "post_id": "825743"
  },
  {
    "model": "Little Posite One",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/f458da234000ae15b5890f0bcc44265f_1548351936.jpg",
    "release_date": "02.16",
    "price": "$ 180",
    "post_id": "828060"
  },
  {
    "model": "Air Max 98",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/bec1e9017e2ccbadb158e1e79a1d08f4_1549305708.jpg",
    "release_date": "02.16",
    "price": "$ 160",
    "post_id": "830361"
  },
  {
    "model": "N3XT L3V3L",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/196ba6f22b6068dbdea9b2f036321bd8_1548113481.jpg",
    "release_date": "02.16",
    "price": "$ 180",
    "post_id": "827320"
  },
  {
    "model": "LeBron 16 KC \"Watch The Throne\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/54bf848c0f9e0835febe0c939bdad58b_1549571648.jpg",
    "release_date": "02.17",
    "price": "$ 200",
    "post_id": "830513"
  },
  {
    "model": "Air More Uptempo 720",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c63ff83158d19c1754fcb8a80dc2202f_1549567117.jpg",
    "release_date": "02.17",
    "price": "$ 200",
    "post_id": "831336"
  },
  {
    "model": "Air Force 1 Low Utility \"Black History Month\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/421e018fa550a26d719176cb3ec25443_1547656799.jpg",
    "release_date": "02.20",
    "price": "$ 200",
    "post_id": "826067"
  },
  {
    "model": "Air Max 720 \"Sunrise\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/6b0a3bf096ea669152dbf131dd7cecf5_1546545539.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "823312"
  },
  {
    "model": "Air Max 720 \"Sunset\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/204775c205749c686cf70814ac7c3fae_1548103084.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "827199"
  },
  {
    "model": "Air VaporMax Gliese",
    "brand_id": 3,
    "pic_url": "https://sneakernews.com/wp-content/themes/sneakernews/images/sneaker_default.jpg",
    "release_date": "02.21",
    "price": "$ N/A",
    "post_id": "830774"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/07494e2eab439dbdb24a5ba303d57ae0_1547756958.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "826581"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e829777cd6deee94a2225afc8ea167b0_1549399273.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830765"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/88ad0b3a4da517d89ab4e5b4c680d817_1549399478.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830766"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/f58cb3a7256ac0811a51966eb0112d1a_1549399650.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830767"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4fa1e9a05d877bda37c0f01e839fd820_1549399812.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830769"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/a9b035caeda1a10bc43b87adc2f68780_1549400135.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830771"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e6b471b36b60379ba060ecaa6466ef56_1549400295.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830772"
  },
  {
    "model": "Ultra Boost 2019",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/75d34bd6c2091404673713ee45de780e_1549400577.jpg",
    "release_date": "02.21",
    "price": "$ 180",
    "post_id": "830773"
  },
  {
    "model": "Air Max 95",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/65e78f506f5d317808d5d8e3f8a010a3_1546549374.jpg",
    "release_date": "02.22",
    "price": "$ 130",
    "post_id": "823396"
  },
  {
    "model": "Air Max 1",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c282d883a9bd461e8242dc20a9164ebd_1548267538.jpg",
    "release_date": "02.22",
    "price": "$ N/A",
    "post_id": "827735"
  },
  {
    "model": "Air Max 270",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/bc6d884fa082121830015f303b20dd2f_1548278055.jpg",
    "release_date": "02.22",
    "price": "$ 150",
    "post_id": "827767"
  },
  {
    "model": "Air Zoom Rookie \"Galaxy\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/f1cadd4d78d0102416b8f6fb597ae9fa_1549297315.jpg",
    "release_date": "02.22",
    "price": "$ N/A",
    "post_id": "830303"
  },
  {
    "model": "Slam Jam x Nike Blazer",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/2cdb12b4012055b2fbe1848b9e0f671f_1549914664.jpg",
    "release_date": "02.22",
    "price": "$ N/A",
    "post_id": "831939"
  },
  {
    "model": "Air Max Light 2",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/18ea7207cae45bec7f26dd08d21e274f_1545062898.jpg",
    "release_date": "02.23",
    "price": "$ N/A",
    "post_id": "819717"
  },
  {
    "model": "Air Max Light 2",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/aad2f35309ed22872d27e019974ddb26_1545062957.jpg",
    "release_date": "02.23",
    "price": "$ N/A",
    "post_id": "819718"
  },
  {
    "model": "Air Max 720 Saturn",
    "brand_id": 3,
    "pic_url": "https://sneakernews.com/wp-content/themes/sneakernews/images/sneaker_default.jpg",
    "release_date": "02.23",
    "price": "$ N/A",
    "post_id": "830775"
  },
  {
    "model": "Yeezy Boost 700 \"Salt\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e9448aa27128b0bfd40925063bec855b_1546545657.jpg",
    "release_date": "02.23",
    "price": "$ 300",
    "post_id": "823315"
  },
  {
    "model": "Air Max 720 \"Sand Dune\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/458c33ca6c50d0b2878159a61ef01ea3_1546545668.jpg",
    "release_date": "02.28",
    "price": "$ 180",
    "post_id": "823314"
  },
  {
    "model": "Air Max 720 \"Total Eclipse\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/6cc4721ab7294503ff1a596ca6cc6a2b_1546545824.jpg",
    "release_date": "02.28",
    "price": "$ 180",
    "post_id": "823316"
  },
  {
    "model": "Air Max 720",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/b1a43a4115faacbf0fb7c772c1302349_1546546200.jpg",
    "release_date": "02.28",
    "price": "$ 180",
    "post_id": "823326"
  },
  {
    "model": "Air Max 720 \"Sea Forest\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4550c56449d4e9d9da9b48f1162d3824_1547575530.jpg",
    "release_date": "02.28",
    "price": "$ 180",
    "post_id": "825876"
  },
  {
    "model": "Gyakusou x Nike Zoom Pegasus 35 Turbo",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/3370d9dbc6faef9c26f89fa9163899d0_1547668276.jpg",
    "release_date": "02.28",
    "price": "$ N/A",
    "post_id": "826231"
  },
  {
    "model": "Air Max 720 \"Pink Sea\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9d88084c3a3e25bdce1e0810104691ce_1548103347.jpg",
    "release_date": "02.28",
    "price": "$ 180",
    "post_id": "827200"
  },
  {
    "model": "Deerupt S",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/32485561ea1f5c7787ee40522559ccdb_1547744366.jpg",
    "release_date": "02.28",
    "price": "$ 110",
    "post_id": "826441"
  },
  {
    "model": "Deerupt S",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/8a74729ab1228b93e5c1ab8d325e401d_1548705918.jpg",
    "release_date": "02.28",
    "price": "$ 110",
    "post_id": "828722"
  },
  {
    "model": "Sleek",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/71b2dc8ae98ae78d0d161c1b3aab307f_1549401589.jpg",
    "release_date": "02.28",
    "price": "$ 80",
    "post_id": "830776"
  },
  {
    "model": "Air Max Plus",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/7d68ed77bea2fd789fd3b132ac42aa29_1538071893.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "801839"
  },
  {
    "model": "Zoom Kobe 1 Protro \"USA\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/d7a09609f4fd7f3b8d5744f20c37ee57_1539196673.jpg",
    "release_date": "February",
    "price": "$ 175",
    "post_id": "804935"
  },
  {
    "model": "Tom Sachs x Nike Mars Yard Overshoe",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/5b74322f3eff4c3c84be662f0120de2c_1541630166.jpg",
    "release_date": "February",
    "price": "$ 550",
    "post_id": "809326"
  },
  {
    "model": "Air Max 98 \"All-Star\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e2b934b8719c532da0e08ca3da045b13_1548877247.jpg",
    "release_date": "February",
    "price": "$ 180",
    "post_id": "813527"
  },
  {
    "model": "Air Max 98",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9a40c2fcb930a4c75871535561c5dc4e_1544720016.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "819194"
  },
  {
    "model": "Zoom Fly SP",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c23298949267ff38d5d0dd862ecb8fac_1544814020.jpg",
    "release_date": "February",
    "price": "$ 150",
    "post_id": "819562"
  },
  {
    "model": "Air Max 97",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/02122132f0414fb25f738e3fd742bb3c_1545062660.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "819716"
  },
  {
    "model": "Air Max 180 \"Freedom\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c377cec10f6f260529fee13d25e908da_1545675641.jpg",
    "release_date": "February",
    "price": "$ 130",
    "post_id": "821300"
  },
  {
    "model": "Air Max 90",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/cfc9bb0291af4578865f90b22933c2a5_1546460586.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "822971"
  },
  {
    "model": "Air Max Deluxe",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/d3a14c89646e88fd0347bd3c8049fca7_1548785588.jpg",
    "release_date": "February",
    "price": "$ 180",
    "post_id": "823401"
  },
  {
    "model": "Air Max 1 Golf",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/3337dfdd5b02642b801e7e571ab21525_1547593226.jpg",
    "release_date": "February",
    "price": "$ 140",
    "post_id": "826055"
  },
  {
    "model": "Air Max 1 Golf",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/12162d8ecd2a5990d5fa37c384cb5568_1547593289.jpg",
    "release_date": "February",
    "price": "$ 140",
    "post_id": "826056"
  },
  {
    "model": "Air Max 1 Golf",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/1230ada8415cde44af1169ec6a187613_1547593344.jpg",
    "release_date": "February",
    "price": "$ 120",
    "post_id": "826057"
  },
  {
    "model": "Air Max 1 Golf",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/2ed66b8da4207d196ac26789b2603487_1547593403.jpg",
    "release_date": "February",
    "price": "$ 120",
    "post_id": "826058"
  },
  {
    "model": "Air Force 1 Low",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4959342c6c1ba616fa11d9a06ab0dbda_1548087342.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "827120"
  },
  {
    "model": "Air Max 95",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/0098e8c79c997fe1b5b747a07202bbe1_1548259158.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "827728"
  },
  {
    "model": "React Element 55",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/2e73d83368ea6bd0ded909aa8a0b3d9d_1548259208.jpg",
    "release_date": "February",
    "price": "$ 130",
    "post_id": "827729"
  },
  {
    "model": "Air Force 1 Low \"Racing\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/f003db4309b63d2b15992f0d159650e3_1548790440.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "827836"
  },
  {
    "model": "Air Huarache E.D.G.E. \"All-Star\"",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/dc2295d64120c367420b4ebd4e82ee26_1548693818.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "828555"
  },
  {
    "model": "Air Max Dia",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/abb4850bb5c420c95a72e3cc6c714c8d_1548693950.jpg",
    "release_date": "February",
    "price": "$ 120",
    "post_id": "828557"
  },
  {
    "model": "Janoski Mid Crafted",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/908e8215e0c9101b0355746ddc56bd97_1548702308.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "828670"
  },
  {
    "model": "Janoski Mid Crafted",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/ce25298608e0bc279c3eb49a30182ab8_1548702377.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "828671"
  },
  {
    "model": "Air Max 1",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/86c97679eafa77c3a566209c2a3efb45_1548793640.jpg",
    "release_date": "February",
    "price": "$ 120",
    "post_id": "829065"
  },
  {
    "model": "Air Force 1 Low",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/7dde1faa3f78fd41f5e4b374b6166269_1548793750.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "829066"
  },
  {
    "model": "Air Max 95",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e40aa046c2366cfd7befb789dc6e4a80_1548864126.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "829237"
  },
  {
    "model": "Air Max 97",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/ea7ceb7d87a5ae0308e6da141c6882e8_1549044621.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "830079"
  },
  {
    "model": "Air Max 270",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/c3872905e9e48dcc1801fc77f2707c9d_1549057599.jpg",
    "release_date": "February",
    "price": "$ 170",
    "post_id": "830080"
  },
  {
    "model": "Air Max 98",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/6a05e9a33c1a3ea84bac82d33eb87672_1549295656.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "830245"
  },
  {
    "model": "React Element 55",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/206846677448d7a4350764f082e0d56a_1549383160.jpg",
    "release_date": "February",
    "price": "$ 130",
    "post_id": "830563"
  },
  {
    "model": "Air Force 1 Low Utility",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4dcee3aa54dfa4231e5a33a241b87c16_1549388136.jpg",
    "release_date": "February",
    "price": "$ 150",
    "post_id": "830698"
  },
  {
    "model": "React Element 55",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/fcc9b3e1401248fa8134ad3505a158e5_1549468107.jpg",
    "release_date": "February",
    "price": "$ 130",
    "post_id": "830982"
  },
  {
    "model": "Air Force 1 High",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/69b42342033b5a2fac79b6ce94c055ff_1549566349.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "831335"
  },
  {
    "model": "Air Max 95",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/b45e209692278b76500704b6a6c46294_1549650392.jpg",
    "release_date": "February",
    "price": "$ 170",
    "post_id": "831605"
  },
  {
    "model": "Air Max 95",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/a4ad74912e7ae1cc6f1a6283db2a9ea1_1549901790.jpg",
    "release_date": "February",
    "price": "$ 160",
    "post_id": "831810"
  },
  {
    "model": "Air Max 720",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/5177841cd44baadd2a292de5d57beda8_1549907438.jpg",
    "release_date": "February",
    "price": "$ 180",
    "post_id": "831934"
  },
  {
    "model": "Air Max Plus 97",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4893add78524f8bb501b2b9b6965b7b3_1549908461.jpg",
    "release_date": "February",
    "price": "$ 170",
    "post_id": "831935"
  },
  {
    "model": "React Element 55",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/d00aa9698f3131a0a7f07bdd5494126e_1549921448.jpg",
    "release_date": "February",
    "price": "$ 130",
    "post_id": "832146"
  },
  {
    "model": "Air Max 720",
    "brand_id": 3,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/7cd1b72ec1e89d6e4a1e311050379caa_1549994739.jpg",
    "release_date": "February",
    "price": "$ 180",
    "post_id": "832273"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"House Targaryen Dragons\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/ac6a801c889bbf78826922aac4d518bd_1541450212.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "810765"
  },
  {
    "model": "Yung 1",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/84116621cd630b958b1300b6d89fab4f_1545155634.jpg",
    "release_date": "February",
    "price": "$ 120",
    "post_id": "820021"
  },
  {
    "model": "Dame 5 \"People's Champ\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/07405682d7f233f19f8ef24d4c24f75e_1546468746.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "823038"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"Night's Watch\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/4378234f8f4d84d824cfb6d28a010500_1549314804.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "824664"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"House Stark\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/52aca473b8e5cd656b5ca088df3c41c7_1549315645.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "824665"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"White Walkers\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/2127032feded423930b44c80bf904b52_1549315817.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "824666"
  },
  {
    "model": "Continental 80",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/b33ba588c3ecfd7d71c72a5566c9345c_1547841540.jpg",
    "release_date": "February",
    "price": "$ 80",
    "post_id": "826867"
  },
  {
    "model": "Continental 80",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/2b113a7b6c44e160f0d85ec99e7b921e_1547841874.jpg",
    "release_date": "February",
    "price": "$ 80",
    "post_id": "826871"
  },
  {
    "model": "Continental 80",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/5c23bd6da78c34fed53d8383f7364df9_1547842056.jpg",
    "release_date": "February",
    "price": "$ 80",
    "post_id": "826873"
  },
  {
    "model": "Continental 80",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/3c7753c1e7605b43e51b0bad0a1a9ee6_1547842171.jpg",
    "release_date": "February",
    "price": "$ 80",
    "post_id": "826874"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"House Lannister\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/9ee9d0ee29d1d3e08b9633b993e00f9b_1549316125.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "830464"
  },
  {
    "model": "Game Of Thrones x adidas Ultra Boost \"House Targaryen\"",
    "brand_id": 1,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/456d4554885d0509dc42298a29d338ec_1549316252.jpg",
    "release_date": "February",
    "price": "$ N/A",
    "post_id": "830465"
  },
  {
    "model": "Social Status x Air Jordan 6 \"Black Cat\"",
    "brand_id": 2,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/da774ce4b74ec16b1918da8f4c617add_1549489400.jpg",
    "release_date": "02.13",
    "price": "$ 250",
    "post_id": "820156"
  },
  {
    "model": "Travis Scott x Air Jordan 33",
    "brand_id": 2,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/e7a86da35d4e8c9c40657aebc0ba3e69_1548788490.jpg",
    "release_date": "02.14",
    "price": "$ 175",
    "post_id": "799477"
  },
  {
    "model": "1 \"UNC\"",
    "brand_id": 2,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/ef46cff8e6aa1533445f5dd7b967eb4c_1549576620.jpg",
    "release_date": "02.14",
    "price": "$ 160",
    "post_id": "814097"
  },
  {
    "model": "1 Retro High OG \"Turbo Green\"",
    "brand_id": 2,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/5875ae3f5acd18a05fc9fed98a68ff49_1548367729.jpg",
    "release_date": "02.15",
    "price": "$ 160",
    "post_id": "820185"
  },
  {
    "model": "11 Golf \"Concord\"",
    "brand_id": 2,
    "pic_url": "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/31fef3eb7c68af00696be9a3903a961d_1549484627.jpg",
    "release_date": "02.15",
    "price": "$ 220",
    "post_id": "828559"
  }]

sneakers = JSON.parse(json_data.to_json)

sneakers.each do |sneaker|
    Sneaker.create(
        model: sneaker["model"],
        price: sneaker["price"],
        release_date: sneaker["release_date"],
        brand_id: sneaker["brand_id"],
        pic_url: sneaker["pic_url"],
        post_id: sneaker["post_id"]
    )
end


# Sneaker.create([
#     { 
#     model: "Ultra Boost Mid", 
#     price: 185, 
#     release_date: "10/9/18",
#     brand_id: 1,
#     sneak_pic: 'https://user-images.githubusercontent.com/38361826/45303691-65e74a80-b4e4-11e8-957e-a6d95f851e14.png' 
#     },{
#     model: "Yeezy V2 350",
#     price: 225,
#     release_date: "11/17/18",
#     brand_id: 1,
#     sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/37130c9f0ca22d2f408153bfdbb21bea_1514306958.jpg"
#     }, {
#     model: 'XII Red Octobers',
#     price: 190,
#     release_date: "9/20/18",
#     brand_id: 2,
#     sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/3c9ea028a0e6369b2c861d61cc091308_1515610946.jpg"  
#     }, {
#     model: 'III Mocha',
#     price: 190,
#     release_date: "9/27/18",
#     brand_id: 2,
#     sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/26f0768cf4b436aab0c4f1cfe4998ff8_1505407266.jpg"
#     }, {
#     model: 'Air Max 97',
#     price: 120,
#     release_date: "10/20/18",
#     brand_id: 3,
#     sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/bc7a5a2e169f4000a1bb5107dbf00288_1535569505.jpg"
#     }, {
#     model: 'LeBron XVI',
#     price: 195,
#     release_date: "10/1/18",
#     brand_id: 3,
#     sneak_pic: "https://s3.amazonaws.com/images.kicksfinder.com/products/thumbs/a7e0f36308ac992fbba9a54247a6e230_1535060161.jpg"
#     }
# ])
