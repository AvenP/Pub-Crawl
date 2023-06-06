const { Category } = require('../models');

const PubAll =[
        {
          "id": "101",
          "name": "St. Arnold Brewing Company",
          "address": "2000 Lyons Avenue, Houston, TX",
          "zip_code": 77020,
          "link": "https://www.saintarnold.com",
          "city": "Houston"
      },
      {
          "id": "102",
          "name": "8th Wonder Brewery",
          "address": "2202 Dallas Street, Houston, TX",
          "zip_code": 77003,
          "link": "https://8thwonder.com",
          "city": "Houston"
      },
      {
          "id": "103",
          "name": "True Anomaly Brewing Co",
          "address": "2012 Dallas Street, Houston, TX",
          "zip_code": 77003,
          "link": "https://www.trueanomalybrewing.com",
          "city": "Houston"
      },
      {
          "id": "104",
          "name": "Equal Parts Brewing",
          "address": "3118 Harrisburg Boulevard, Unit 108, Houston, TX",
          "zip_code": 77003,
          "link": "https://equalpartsbrewing.com",
          "city": "Houston"
      },
      {
          "id": "105",
          "name": "Astral Brewing",
          "address": "4816 North Shepherd Dr, Suite A, Houston, TX",
          "zip_code": 77018,
          "link": "https://www.astralbrewing.com",
          "city": "Houston"
      },
      {
          "id": "106",
          "name": "Brash Brewing Company",
          "address": "508 West Crosstimbers Road, Houston, TX",
          "zip_code": 77018,
          "link": "Null",
          "city": "Houston"
      },
      {
          "id": "107",
          "name": "Eureka Heights Brew Company",
          "address": "941 West 18th Street, Houston, TX",
          "zip_code": 77008,
          "link": "https://www.eurekaheights.com/?gclid=CjwKCAjwvdajBhBEEiwAeMh1U_JOkxmJhJ1shTTonR5ZoLq2A_xREpBCg_CkVe2fC6jbTjxL9VGMOBoC3C0QAvD_BwE",
          "city": "Houston"
      },
      {
          "id": "108",
          "name": "Great Heights Brewing Company",
          "address": "938 Wakefield Drive, Houston, TX",
          "zip_code": 77018,
          "link": "https://ghbrewing.com",
          "city": "Houston"
      },

      {
          "id": "109",
          "name": "Karbach Brewing Company",
          "address": "2032 Karbach Street, Houston, TX",
          "zip_code": 77092,
          "link": "https://www.karbachbrewing.com",
          "city": "Houston"
      },
      {
          "id": "110",
          "name": "Walking Stick Brewing Company",
          "address": "956 Judiway Street, Houston, TX",
          "zip_code": 77018,
          "link": "https://walkingstickbrewing.com"
      },
      {
          "id": "111",
          "name": "Buffalo Bayou Brewing Company",
          "address": "2201 Summer Street, Houston, TX",
          "zip_code": 77007,
          "link": "https://www.buffbrew.com",
          "city": "Houston"
      },
      {
          "id": "112",
          "name": "Holler Brewing Company",
          "address": "2206 Edwards Street, Houston, TX",
          "zip_code": 77007,
          "link": "https://hollerbeer.com",
          "city": "Houston"
      },
      {
          "id": "113",
          "name": "Platypus Brewing Company",
          "address": "1902 Washington Ave, Suite E, Houston, TX",
          "zip_code": 77007,
          "link": "https://platypus-brewing.com",
          "city": "Houston"
      },
      {
          "id": "114",
          "name": "Urban South HTX Brewing",
          "address": "1201 Oliver Street, Houston, TX",
          "zip_code": 77007,
          "link": "https://urbansouthbrewery.com/taprooms/houston",
          "city": "Houston"
      },
      {
          "id": "115",
          "name": "Baileson Brewing Company",
          "address": "2322 Bissonnet Street, Houston, TX",
          "zip_code": 77005,
          "link": "https://www.bailesonbrewing.com",
          "city": "Houston"
      },
      {
          "id": "116",
          "name": "Under the Radar Brewing",
          "address": "1506 Trujillo Street, Houston, TX",
          "zip_code": 77004,
          "link": "https://www.undertheradarbrewery.com",
          "city": "Houston"
      },
      {
          "id": "117",
          "name": "11 Below Brewing Company",
          "address": "6820 Bourgeois Road, Houston, TX",
          "zip_code": 77066,
          "link": "http://11belowbrewing.com",
          "city": "Houston"
      },
      {
          "id": "118",
          "name": "City Acre Brewing",
          "address": "3418 Topping Street, Houston, TX",
          "zip_code": 77093,
          "link": "https://www.cityacrebrewing.com",
          "city": "Houston"
      },
      {
          "id": "119",
          "name": "Spindletap Brewery",
          "address": "10622 Hirsch Road, Houston, TX",
          "zip_code": 77016,
          "link": "https://spindletap.com",
          "city": "Houston"
      },
      {
          "id": "120",
          "name": "City Orchard Cider",
          "address": "1201 Oliver Street, Unit 108, Houston, TX",
          "zip_code": 77007,
          "link": "https://cityorchardhtx.com",
          "city": "Houston"
      },
      {
          "id": "121",
          "name": "4J Brewing Company",
          "address": "1348 Cedar Post Ln, Houston, TX",
          "zip_code": 77055,
          "link": "https://www.4jbrewingcompany.com",
          "city": "Houston"
      },
      {
          "id": "122",
          "name": "Whole Foods Market Brewing Company",
          "address": "1700 Post Oak Boulevard, Unit 100, Houston, TX",
          "zip_code": 77056,
          "link": "https://www.wholefoodsmarket.com",
          "city": "Houston"
      },
      {
          "id": "123",
          "name": "Elder Son Brewing Company",
          "address": "946 North Shepherd Drive, Unit A, Houston, TX",
          "zip_code": 77008,
          "link": "https://eldersonbrewing.com",
          "city": "Houston"
      },
      {
          "id": "124",
          "name": "The Phoenix on Westheimer",
          "address": "1915 Westheimer Road, Houston, TX",
          "zip_code": 77098,
          "link": "http://www.phoenixow.com/dr8/",
          "city": "Houston"
      },
      {
          "id": "125",
          "name": "Turkey Forrest Brewing",
          "address": "1848 Airline Drive, Suite C, Houston, TX",
          "zip_code": 77009,
          "link": "https://www.bigowlcbh.com/brew",
          "city": "Houston"
      },
      {
          "id": "126",
          "name": "Black Page Brewing Company",
          "address": "210 Glen Park Street, Houston, TX",
          "zip_code": 77009,
          "link": "http://www.blackpagebrewing.com",
          "city": "Houston"
      },
      {
          "id": "127",
          "name": "Local Group Brewing",
          "address": "1504 Chapman Street, Houston, TX",
          "zip_code": 77009,
          "link": "https://lclgrp.bdev1.com",
          "city": "Houston"
      },
      {
          "id": "128",
          "name": "Frost Town Brewing",
          "address": "100 North Jackson Street, Houston, TX",
          "zip_code": 77002,
          "link": "https://www.frosttownbrew.com",
          "city": "Houston"
      },
      {
          "id": "129",
          "name": "The Moon Tower Inn",
          "address": "3004 Canal Street, Houston, TX",
          "zip_code": 77003,
          "link": "https://www.moontowerinn.com",
          "city": "Houston"
      },


      {
        "name": "Weathered Souls Brewing Co.",
        "address": "606 Embassy Oaks #500 San Antonio, Texas",
        "zip_code": 78216,
        "link": "https://weatheredsouls.beer/SATX/",
        "id": "200",
        "city": "San Antonio"
    },
    {
        "name": "Künstler Brewing",
        "address": "302 E LaChappelle San Antonio, Texas",
        "zip_code": 78204,
        "link": "https://kuenstlerbrewing.com/",
        "id": "201",
        "city": "San Antonio"
    },
    {
        "name": "Freetail Brewing Company",
        "address": "4035 N Loop 1604 W. Suite 105. San Antonio, Texas",
        "zip_code": 78257,
        "link": "https://www.freetailbrewing.com/",
        "id": "202",
        "city": "San Antonio"
    },
    {
        "name": "Longtab Brewing",
        "address": "4700 Timco W, Ste #105 San Antonio, Texas",
        "zip_code": 78238,
        "link": "https://www.longtabbrewing.com/",
        "id": "203",
        "city": "San Antonio"
    },
    {
        "name": "HighWheel Beerworks (Dorćol Distilling+ Brewing Co.)",
        "address": "1902 S Flores St San Antonio, Texas",
        "zip_code": 78204,
        "link": "http://dorcolspirits.com/beer-1",
        "id": "204",
        "city": "San Antonio"
    },
    {
        "name": "Southerleigh Fine Food & Brewery",
        "address": "136 E Grayson St Ste 120 San Antonio, Texas",
        "zip_code": 78215,
        "link": "",
        "id": "205",
        "city": "San Antonio"
    },
    {
        "name": "Roadmap Brewing",
        "address": "723 N Alamo St. San Antonio, Texas",
        "zip_code": 78215,
        "link": "https://www.roadmapbrewing.com/",
        "id": "206",
        "city": "San Antonio"
    },
    {
        "name": "Islla Street Brewing Company",
        "address": "11911 Crosswinds Way San Antonio, Texas",
        "zip_code": 78233,
        "link": "",
        "id": "207",
        "city": "San Antonio"
    },
    {
        "name": "Ranger Creek Brewing & Distilling",
        "address": "4834 Whirlwind Dr. San Antonio, Texas",
        "zip_code": 78217,
        "link": "https://drinkrangercreek.com/",
        "id": "208",
        "city": "San Antonio"
    },
    {
        "name": "Busted Sandal Brewing Company",
        "address": "7114 Oaklawn Dr San Antonio, Texas",
        "zip_code": 78229,
        "link": "http://www.bustedsandalbrewing.com/",
        "id": "209",
        "city": "San Antonio"
    },
    {
        "name": "Alamo Beer Co.",
        "address": "202 Lamar St San Antonio, Texas",
        "zip_code": 78202,
        "link": "https://www.alamobeer.com/",
        "id": "210",
        "city": "San Antonio"
    },
    {
        "name": "Blue Star Brewing Company",
        "address": "1414 S. Alamo #105 San Antonio, Texas",
        "zip_code": 78210,
        "link": "https://bluestarbrewing.com/",
        "id": "211",
        "city": "San Antonio"
    },
    {
        "name": "Back Unturned Brewing Company",
        "address": "516 Brooklyn Ave San Antonio, Texas",
        "zip_code": 78215,
        "link": "https://www.backunturned.com/",
        "id": "212",
        "city": "San Antonio"
    },
    {
        "name": "Dos Sirenos Brewing",
        "address": "231 E Cevallos St San Antonio, Texas",
        "zip_code": 78204,
        "link": "https://dossirenosbrewing.com/",
        "id": "213",
        "city": "San Antonio"
    },
    {
        "name": "Mad Pecker Brewing Co.",
        "address": "6025 Tezel Rd #122 San Antonio, Texas",
        "zip_code": 78250,
        "link": "https://madpeckerbrewing.com/",
        "id": "214",
        "city": "San Antonio"
    },
    {
        "name": "Ghost Pixel Beer Studio",
        "address": "4035 N Loop 1604 W, Ste 105 San Antonio, Texas",
        "zip_code": 78257,
        "link": "",
        "id": "215",
        "city": "San Antonio"
    },
    {
        "name": "Second Pitch Beer Co.",
        "address": "11935 Starcrest Dr. San Antonio, Texas",
        "zip_code": 78247,
        "link": "https://secondpitchbeer.com/",
        "id": "216",
        "city": "San Antonio"
    },
    {
        "name": "Black Laboratory Brewing",
        "address": "1602 E Houston St Suite 109 San Antonio, Texas",
        "zip_code": 78202,
        "link": "https://www.blacklaboratorybrewing.com/",
        "id": "217",
        "city": "San Antonio"
    },

    {
        "name": " Intrinsic Smokehouse Brewery + BBQ Catering",
        "address": "509 W State St, Garland, TX",
        "zip_Code": 75040,
        "link": " https://intrinsicbrewing.com/ ",
        "id": "301",
        "city": "Dallas"
      },
      {
        "name": " FRANCONIA BREWING COMPANY",
        "address": "495 McKinney Pkwy  McKinney, TX",
        "zip_Code": 75071,
        "link": " https://franconiabrewingcompany.com/",
        "id": "302",
        "city": "Dallas"
      },
    
      {
        "name": " DEEP Ellum Breweing Company",
        "address": "2823 ST. LOUIS STREET DALLAS, TX ",
        "zip_Code": 75226,
        "link": " https://deepellumbrewing.com/",
        "id": "303",
        "city": "Dallas"
      },
      {
        "name": " LAKEWOOD BREWING",
        "address": "Lakewood Brewing Co.2302 Executive Drive Garland, TX ",
        "zip_Code": 75041,
        "link": " https://lakewoodbrewing.com/",
        "id": "304",
        "city": "Dallas"
      },
    
      {
        "name": " MARTIN HOUSE Brewing Company",
        "address": "220 S Sylvania Ave, Fort Worth,  ",
        "zipCode": 76111,
        "link": " https://martinhousebrewing.com/",
        "id": "305",
        "city": "Dallas"
      },
    
      {
        "name": " FOUR CORNERS BREWING COMPANY",
        "address": "1311 S. ERVAY ST. DALLAS, TX  ",
        "zip_Code": 75215,
        "link": " https://fcbrewing.com/",
        "id": "306",
        "city": "Dallas"
      },
    
      {
        "name": " COMMUNITY BEER CO.",
        "address": "3110 Commonwealth Dr., Dallas, TX   ",
        "zip_Code": 75247,
        "link": " https://communitybeer.com/",
        "id": "307",
        "city": "Dallas"
      },
    
      {
        "name": " Three Nations Brewing ",
        "address": "1033 E Vandergriff Dr Carrollton, TX  ",
        "zip_Code": 75006,
        "link": " https://3nationsbrewing.com/",
        "id": "308",
        "city": "Dallas"
      },
    
      {
        "name": " Happy Hippie Beer",
        "address": "607 south cottonwood drive Richardson, TX ",
        "zip_Code": 75080,
        "link": " https://happyhippiebeer.com/",
        "id": "309",
        "city": "Dallas"
      },
    
      {
        "name": " Union Bear Brewing Co.",
        "address": "5880 Highway 121 Ste 101, Plano, TX 75024",
        "zip_Code": 75024,
        "link": " https://www.unionbear.com//",
        "id": "310",
        "city": "Dallas"
      },
    
      {
        "name": " CELESTIAL BEERWORKS",
        "address": "2530 Butler St.  Dallas, TX ",
        "zip_Code": 75235,
        "link": " https://www.celestialbeerworks.com/home",
        "id": "311",
        "city": "Dallas"
      },
    
      {
        "name": " MANHATTAN PROJECT BEER CO",
        "address": "2215 Sulphur Street  Dallas, TX",
        "zip_Code": 75208,
        "link": " https://manhattanproject.beer/",
        "id": "312",
        "city": "Dallas"
      },
    
      {
        "name": " OUTFIT BREWERY",
        "address": "7135 John W. Carpenter Fwy Dallas, TX 75247",
        "zip_Code": 75247,
        "link": " https://www.outfitbrewing.com/",
        "id": "313",
        "city": "Dallas"
      },
    
      {
        "name": " OAK HIGHLANDS BREWERY",
        "address": "10484 Brockwood Rd Dallas, TX",
        "zip_Code": 75238,
        "link": " https://www.oakhighlandsbrewery.com/brewery/",
        "id": "313",
        "city": "Dallas"
      },
    
      {
        "name": " OAK CLIFF BREWING CO",
        "address": "1300 S Polk St, #222 Dallas, TX",
        "zip_Code": 75224,
        "link": " http://togo.oakcliffbrewing.com/",
        "id": "314",
        "city": "Dallas"
      },
    
      {
        "name": " ON ROTATION BREWERY & KITCHEN",
        "address": "7701 Lemmon Ave., Suite 200 Dallas, TX",
        "zip_Code": 75209,
        "link": " https://on-rotation.com/",
        "id": "315",
        "city": "Dallas"
      },

      {
        "name": " Turning Point Beer",
        "address": "1307 Brown Trail, Bedford, TX",
        "zip_Code": 756022,
        "link": " https://www.turningpointbeer.com/beer",
        "id": "316",
        "city": "Dallas"
      },
    
      {
        "name": " Hop And Sting Brewing Company",
        "address": "906 Jean St, Grapevine, TX",
        "zip_Code": 76051,
        "link": " https://hopandsting.com/",
        "id": "317",
        "city": "Dallas"
      },
    
      {
        "name": " Peticolas Brewing Company",
        "address": "1301 Pace St, Dallas, TX ",
        "zip_Code": 75207,
        "link": "https://www.peticolasbrewing.com/",
        "id": "318",
        "city": "Dallas"
      },
    
      {
        "name": " Texas Ale Project",
        "address": " 1001 N Riverfront Blvd, Dallas, TX",
        "zip_Code": 75207,
        "link": "https://www.texasaleproject.com/",
        "id": "319",
        "city": "Dallas"
      },
    
      {
        "name": " White Rock Alehouse & Brewery",
        "address": " 7331 Gaston Ave #100, Dallas, TX",
        "zip_Code": 75214,
        "link": "https://www.whiterockalehouse.com/",
        "id": "320",
        "city": "Dallas"
      },
    
      {
        "name": " White Rock Alehouse & Brewery",
        "address": " 7331 Gaston Ave #100, Dallas, TX",
        "zip_Code": 75214,
        "link": "https://www.whiterockalehouse.com/",
        "id": "321",
        "city": "Dallas"
      },
    
      {
        "name": " Pegasus City Brewery",
        "address": "  2222 Vantage St, Dallas, TX",
        "zip_Code": 75207,
        "link": "https://www.pegasuscitybrewery.com/",
        "id": "322",
        "city": "Dallas"
      },
    
      {
        "name": " ODD Muse Brewing Company",
        "address": "   4488 Spring Valley Rd, Farmers Branch, TX",
        "zip_Code": 75244,
        "link": "https://oddmusebrewing.com/",
        "id": "323",
        "city": "Dallas"
      },
    
      {
        "name": " Vector Brewing",
        "address": "    9850 Walnut Hl Ln #405, Dallas, TX ",
        "zip_Code": 75238,
        "link": "https://www.vectorbrewing.com/",
        "id": "324",
        "city": "Dallas"
      },

      {
        "name": " Westlake Brewing Company",
        "address": "     2816 Commerce St, Dallas, TX ",
        "zip_Code": 75226,
        "link": "https://www.westlakebeer.com/",
        "id": "325",
        "city": "Dallas"
      },

      {
        "name": " Trinity Ciders",
        "address": "   2656 Main Street, Suite 120, Dallas, TX ",
        "zip_Code": 75226,
        "link": "https://trinitycider.com/",
        "id": "326",
        "city": "Dallas"
      },

      {
        "name": " Bishop Cider Co",
        "address": "   509 N. Bishop Avenue ",
        "zip_Code": 75208,
        "link": "https://www.bishopcider.com/",
        "id": "327",
        "city": "Dallas"
      },

      {
        "name": "Craft and Growler",
        "address": " 3601 Parry Ave, Dallas, TX  ",
        "zip_Code": 75226,
        "link": "https://craftandgrowler.com/",
        "id": "328",
        "city": "Dallas"
      },

      {
        "name": "Malai Kitchen",
        "address": " 3699 McKinney Ave #319, Dallas, TX ",
        "zip_Code": 75204,
        "link": "https://www.malaikitchen.com/",
        "id": "329",
        "city": "Dallas"
      },

      {
        "name": "Hemisphere Brewing Company",
        "address": " 2015 Kristy Ln, Rockwall, TX ",
        "zip_Code": 75032,
        "link": "https://www.beerinbigd.com/",
        "id": "330",
        "city": "Dallas"
      },
      {
        "name": "Bankhead Brewing - Rowlett",
        "address": " 3840 Main St, Rowlett, TX",
        "zip_Code": 75088,
        "link": "https://www.bankheadbrewing.com/",
        "id": "331",
        "city": "Dallas"
      },

      {
        "name": "LAZARUS BREWING COMPANY",
        "address": "1902 E. Sixth St., Austin, TX",
        "zip_code": 78702,
        "link": "https://www.lazarusbrewing.com/",
        "Id": "400",
        "city": "Austin"
    },
    {
        "name": "AUSTIN BEERWORKS",
        "address": "3001 Industrial Terrace, Austin, TX",
        "zip_code": 78758,
        "link": "https://austinbeerworks.com/",
        "id": "401",
        "city": "Austin"
    },
    {
        "name": "ZILKER BREWING COMPANY",
        "address": "1701 E. Sixth St., Austin, TX",
        "zip_code": 78702,
        "link": "https://zilkerbeer.com/",
        "id": "402",
        "city": "Austin"
    },
    {
        "name": "FAMILY BUSINESS BEER COMPANY",
        "address": "19510 Hamilton Pool Rd., Dripping Springs, TX",
        "zip_code": 78620,
        "link": "https://familybusinessbeerco.com/",
        "id": "403",
        "city": "Austin"
    },
    {
        "name": "ST. ELMO BREWING COMPANY",
        "address": "440 E. St. Elmo Rd., Austin, TX",
        "zip_code": 78745,
        "link": "https://www.stelmobrewing.com/heyyall",
        "id": "404",
        "city": "Austin"
    },
    {
        "name": "BLUE OWL BREWING",
        "address": "2400 E Cesar Chavez St, #300, Austin, TX",
        "zip_code": 78702,
        "link": "https://blueowlbrewing.com/",
        "id": "405",
        "city": "Austin"
    },
    {
        "name": "MEANWHILE BREWING CO.",
        "address": "23901 Promontory Point Dr, Austin, TX",
        "zip_code": 78744,
        "link": "https://www.meanwhilebeer.com/",
        "id": "406",
        "city": "Austin"
    },
    {
        "name": "CTX BEER GARDEN AT CELIS BREWERY",
        "address": "10001 Metric Blvd., Austin, TX",
        "zip_code": 78758,
        "link": "https://www.celisbeers.com/",
        "id": "407",
        "city": "Austin"
    },
    {
        "name": "REAL ALE BREWING CO",
        "address": "231 San Saba Ct, Blanco, TX 78606",
        "zip_code": 78606,
        "link": "https://realalebrewing.com/",
        "id": "408",
        "city": "Austin"
    },
    {
        "name": "AUSTIN EASTCIDERS (COLLABORATORY TAP ROOM)",
        "address": "979 Springdale Rd, Ste. 130, Austin, TX",
        "zip_code": 78702,
        "link": "https://austineastciders.com/",
        "id": "409",
        "city": "Austin"
    },
    {
        "name": "LIVE OAK BREWING COMPANY",
        "address": "1615 Crozier Ln, Del Valle, TX",
        "zip_code": 78617,
        "link": "https://liveoakbrewing.com/",
        "id": "410",
        "city": "Austin"
    },
    {
        "name": "BEERBURG BREWING",
        "address": "13476 Fitzhugh Rd, Austin, TX",
        "zip_code": 78736,
        "link": "https://beerburgbrewing.com/",
        "id": "411",
        "city": "Austin"
    },
    {
        "name": "HI SIGN BREWING",
        "address": "1201 Bastrop Hwy, Bldg A, Austin, TX",
        "zip_code": 78742,
        "link": "https://www.hisignbrewing.com/",
        "id": "412",
        "city": "Austin"
    },
    {
        "name": "PINTHOUSE PIZZA - BURNET",
        "address": "4729 Burnet Road, Austin, TX",
        "zip_code": 78756,
        "link": "https://pinthouse.com/",
        "id": "413",
        "city": "Austin"
    },
    {
        "name": "THE AUSTIN BEER GARDEN BREWING CO",
        "address": "1305 West Oltorf, Austin, TX",
        "zip_code": 78704,
        "link": "https://theabgb.com/",
        "id": "414",
        "city": "Austin"
    },
    {
        "name": "BLACK STAR CO-OP PUB & BREWERY",
        "address": " 7020 Easy Wind Dr., Suite 100, Austin, TX",
        "zip_code": 78752,
        "link": "https://blackstar.coop/",
        "id": "415",
        "city": "Austin"
    },
    {
        "name": "JESTER KING BREWERY",
        "address": "13187 Fitzhugh Rd., Austin, TX",
        "zip_code": 78736,
        "link": "https://jesterkingbrewery.com/",
        "id": "416",
        "city": "Austin"
    },
    {
        "name": "OASIS TEXAS BREWING COMPANY",
        "address": "6550 Comanche Trail, Austin, TX",
        "zip_code": 78732,
        "link": "https://www.otxbc.com/",
        "id": "417",
        "city": "Austin"
    },
    {
        "name": "THIRSTY PLANET BREWING COMPANY",
        "address": "8201 S. Congress, Austin, TX",
        "zip_code": 78745,
        "link": "https://www.thirstyplanet.beer/",
        "id": "418",
        "city": "Austin"
    },
    {
        "name": "CENTRAL MACHINE WORKS BREWERY",
        "address": "4824 E. Cesar Chavez St., TX",
        "zip_code": 78702,
        "link": "https://www.cmwbrewery.com/",
        "id": "419",
        "city": "Austin"
    },
    {
        "name": "LAST STAND BREWING COMPANY (FITZHUGH)",
        "address": "12345 Pauls Valley Rd., Bldg. J, Austin, TX",
        "zip_code": 78737,
        "link": "https://www.laststandbrewing.com/",
        "id": "420",
        "city": "Austin"
    },
    {
        "name": "SAVE THE WORLD BREWING CO.",
        "address": "1510 Resource Parkway, Marble Falls, TX",
        "zip_code": 78654,
        "link": "",
        "id": "421",
        "city": "Austin"
    },
    {
        "name": "ROUGHHOUSE BREWING",
        "address": "680 Oakwood Loop, San Marcos, TX",
        "zip_code": 78666,
        "link": "https://www.roughhousebrewing.com/",
        "id": "422",
        "city": "Austin"
    },
    {
        "name": "CENTRAL DISTRICT BREWING",
        "address": "417 Red River St., Austin, TX",
        "zip_code": 78701,
        "link": "https://centraldistrictbrewing.com/",
        "id": "423",
        "city": "Austin"
    },
    {
        "name": "INDEPENDENCE BREWING COMPANY",
        "address": "3913 Todd Ln., #607, Austin, TX",
        "zip_code": 78744,
        "link": "https://independencebrewing.com/",
        "id": "424",
        "city": "Austin"
    },
    {
        "name": "OSKAR BLUES BREWERY",
        "address": "10420 Metric Blvd., Suite 150, Austin, TX",
        "zip_code": 78758,
        "link": "https://www.oskarblues.com/",
        "id": "425",
        "city": "Austin"
    },
    {
        "name": "STRANGE LAND BREWERY",
        "address": "2500 NE Inner Loop, Georgetown, TX",
        "zip_code": 78626,
        "link": "https://strangelandbrewery.com/",
        "id": "426",
        "city": "Austin"
    },
    {
        "name": "DRAUGHT HOUSE PUB & BREWERY",
        "address": "4112 Medical Parkway, Austin, TX",
        "zip_code": 78756,
        "link": "https://www.draughthouse.com/",
        "id": "427",
        "city": "Austin"
    },
    {
        "name": "INFAMOUS BREWING COMPANY",
        "address": "4602 Weletka Dr., #200-300, Austin, TX",
        "zip_code": 78734,
        "link": "https://infamousbrewing.com/",
        "id": "428",
        "city": "Austin"
    },
    {
        "name": "NOMADIC BEERWORKS",
        "address": "3804 Woodbury Dr, Ste A, Austin, TX",
        "zip_code": 78704,
        "link": "https://www.nomadicbeerworks.com/",
        "id": "429",
        "city": "Austin"
    },
    {
        "name": "OZ TAP HOUSE",
        "address": "10601 Ranch Rd 2222 Suite H, Austin, TX",
        "zip_code": 78730,
        "link": "https://www.oztaphouse.com/",
        "id": "430",
        "city": "Austin"
    },
    {
        "name": "ODDWOOD ALES",
        "address": "3108 Manor Rd., Austin, TX",
        "zip_code": 78723,
        "link": "https://www.oddwoodales.com/home",
        "id": "431",
        "city": "Austin"
    },
    {
        "name": "(512) BREWING COMPANY",
        "address": "407 Radam Ln, Austin, TX",
        "zip_code": 78745,
        "link": "https://512brewing.com/",
        "id": "432",
        "city": "Austin"
    },
    {
        "name": "TEXAS KEEPER CIDER",
        "address": "12521 Twin Creeks Rd, Manchaca, TX",
        "zip_code": 78652,
        "link": "https://texaskeeper.com/",
        "id": "433",
        "city": "Austin"
    },
    {
        "name": "TWISTED X BREWING COMPANY",
        "address": "23455 W. RR 150, Dripping Springs, TX",
        "zip_code": 78620,
        "link": "https://www.twistedxbrewing.com/",
        "id": "434",
        "city": "Austin"
    },
    {
        "name": "FAIRWEATHER CIDER CO",
        "address": "10609 Metric Blvd, Ste 108A, Austin, TX",
        "zip_code": 78758,
        "link": "http://www.fairweathercider.com/",
        "id": "435",
        "city": "Austin"
    },
    {
        "name": "FRIENDS & ALLIES BREWING",
        "address": "979 Springdale Rd., #124, Austin, TX",
        "zip_code": 78702,
        "link": "https://friendsandallies.beer/",
        "id": "436",
        "city": "Austin"
    },
    {
        "name": "HOPSQUAD BREWING",
        "address": "2307 Kramer Ln, Austin, TX",
        "zip_code": 78758,
        "link": "https://www.hopsquad.com/",
        "id": "437",
        "city": "Austin"
    },
    {
        "name": "HOLDOUT BREWING",
        "address": "1208 W 4th St, Austin, TX",
        "zip_code": 78703,
        "link": "https://holdoutbrewing.com/",
        "id": "438",
        "city": "Austin"
    },
    {
        "name": "MOONTOWER CIDER CO",
        "address": "1916 Tillery St, Austin, TX",
        "zip_code": 78702,
        "link": "https://www.moontowercider.com/",
        "id": "439",
        "city": "Austin"
    },
    {
        "name": "CORK & BARREL PUB",
        "address": "4000 E Palm Valley Blvd, Round Rock, TX",
        "zip_code": 78665,
        "link": "https://corkandbarrelpub.com/",
        "id": "440",
        "city": "Austin"
    },
    {
        "name": "PINTHOUSE BREWING",
        "address": "2201 E. Ben White Blvd., Austin, TX",
        "zip_code": 78741,
        "link": "https://pinthouse.com/ben-white/",
        "id": "441",
        "city": "Austin"
    },
    {
        "name": "VISTA BREWING",
        "address": "13551 FM 150 W., Driftwood, TX",
        "zip_code": 78619,
        "link": "https://www.vistabrewingtx.com/",
        "id": "442",
        "city": "Austin"
        
    },

    {
      "name": "LAST STAND BREWING COMPANY (SOUTH CONGRESS)",
      "address": "7601 S Congress Ave, Bldg. 6, Austin, TX",
      "zip_code": 78745,
      "link": "https://www.laststandbrewing.com/",
      "id": "443",
      "city": "Austin"
  },

    {
        "name": "THE BREWTORIUM",
        "address": "6015 Dillard Circle, Ste. A, Austin, TX",
        "zip_code": 78752,
        "link": "https://www.thebrewtorium.com/",
        "id": "444",
        "city": "Austin"
    },
    {
        "name": "VACANCY BREWING",
        "address": "415 E St Elmo Rd, 1-D2, Austin, TX",
        "zip_code": 78745,
        "link": "https://vacancybrewing.com/",
        "id": "445",
        "city": "Austin"
    },
    {
        "name": "CIRCLE BREWING COMPANY",
        "address": "2340 W Braker Ln., Suite B, Austin, TX",
        "zip_code": 78758,
        "link": "https://www.circlebrewing.com/",
        "id": "446",
        "city": "Austin"
    },
    {
        "name": "GUNS & OIL BREWING COMPANY",
        "address": "807 E 4th St, Austin, TX",
        "zip_code": 78702,
        "link": "https://www.gunsandoil.com/",
        "id": "447",
        "city": "Austin"
    },
    {
        "name": "SOUTHERN HEIGHTS BREWING CO.",
        "address": "6014 Techni Center Dr., Austin, TX",
        "zip_code": 78721,
        "link": "http://www.southernheightsbrewing.com/",
        "id": "448",
        "city": "Austin"
    },

      {
        "id": "501",
        "name": "Keg & Brew Craft House",
        "address": "2114 N Zaragoza Rd suite b-1, El Paso, TX",
        "zip_code": 79938,
        "link": "https://kegandbrew.com/",
        "city": "El Paso"
        
      },
      {
        "id": "502",
        "name": "Tin Man Airway",
        "address": "1300 Airway Blvd c103, El Paso, TX",
        "zip_code": 79925,
        "link": "https://untappd.com/v/tin-man-airway/9003850",
        "city": "El Paso"
        
      },
      {
        "id": "503",
        "name": "Keg & Brew Craft House #2",
        "address": "7470 Cimarron Market Ave Suite 100 Building 7, El Paso, TX",
        "link": "https://kegandbrew.com/",
        "zip_code": 79911,
        "city": "El Paso"
        
      },
      {
        "id": "504",
        "name": "Blazing Tree Brewery",
        "address": "11426 Rojas Dr A-13, El Paso, TX",
        "zip_code": 79938,
        "link": "https://blazingtreebreweryelpaso.com/",
        "city": "El Paso"
       
      },
      {
        "id": "505",
        "name": "Craft Rhythm & Brews",
        "address": "1301 Texas Ave, El Paso, TX ",
        "link": "https://www.craftrhythmandbrews.com/",
        "zip_code": 79901,
        "city": "El Paso"
        
      },
      {
        "id": "506",
        "name": "Brewtopia Taphouse",
        "address": "3260-B N Zaragoza Rd Suite 201, El Paso, TX",
        "zip_code": 79938,
        "link": "https://brewtopiataphouse.com/",
        "city": "El Paso"
        
      },
      {
        "id": "507",
        "name": "Tin Man Montecillo",
        "address": "4935 N Mesa St #12, El Paso, TX",
        "zip_code": 79912,
        "link": "https://www.facebook.com/tinmanep/",
        "city": "El Paso"
        
      },
      {
        "id": "508",
        "name": "The Hoppy Monk",
        "address": "4141 N Mesa St, El Paso, TX",
        "zip_code": 79902,
        "link": "https://thehoppymonk.com/elpaso/",
        "city": "El Paso"
        
      },
      {
        "id": "509",
        "name": "Aceitunas Beer Garden",
        "address": "5200 Doniphan Dr, El Paso, TX",
        "zip_code": 79932,
        "link": "https://m.facebook.com/profile.php?id=120332477982982",
        "city": "El Paso"
        
      },
      {
        "id": "510",
        "name": "DeadBeach Brewery",
        "address": "406 Durango St, El Paso, TX",
        "zip_code": 79901,
        "link": "https://www.deadbeach.com/",
        "city": "El Paso"
        
      },
      {
        "id": "511",
        "name": "Craft and Social",
        "address": "305 E Franklin Ave, El Paso, TX",
        "zip_code": 79901,
        "link": "https://www.facebook.com/craftandsocial/",
        "city": "El Paso"
        
      },
      {
        "id": "512",
        "name": "Mountain Star Brewing Company",
        "zip_code": 79935,
        "address": "11135 Pellicano Dr #2, El Paso, TX",
        "link": "https://www.mountainstarbrewingcompany.com/",
        "city": "El Paso"
        
      },
      {
        "id": "513",
        "name": "Old Sheepdog Brewery",
        "address": "3900 Rosa Ave, El Paso, TX",
        "zip_code": 79905,
        "link": "https://www.facebook.com/oldsheepdogbrewery/",
        "city": "El Paso"
        
      },
      {
        "id": "514",
        "name": "Undisputed Craft House",
        "address": "1881 Saul Kleinfeld Dr, El Paso, TX",
        "zip_code": 79936,
        "link": "https://www.undisputedcrafthouse.com/",
        "city": "El Paso"
        
      },
      {
        "id": "515",
        "name": "The Lucky Dog Beer Garden",
        "address": "1810 George Dieter Dr, El Paso, TX",
        "zip_code": 79936,
        "link": "https://www.facebook.com/THELUCKYDOGEPTX/",
        "city": "El Paso"
        
      },
      {
        "id": "516",
        "name": "Border City Ale House",
        "address": "1506 Lee Trevino Dr Suite G, El Paso, TX 79936",
        "zip_code": 79936,
        "link": "https://www.bordercityalehouse.com/",
        "city": "El Paso"
        
      },
      {
        "id": "517",
        "name": "Three Pints Pub",
        "address": "10710 Gateway N Blvd a1, El Paso, TX",
        "zip_code": 79924,
        "link": "https://www.facebook.com/ThreePintsPub/",
        "city": "El Paso"
        
      },
      {
        "id": "518",
        "name": "Vincent and Melo's Crafthouse",
        "address": "1691 N Zaragoza Rd Suite 3, El Paso, TX 79936",
        "zip_code": 79936,
        "link": "https://vincentandmelos.com/",
        "city": "El Paso"
        
      },
      {
        "id": "601",
        "name": "Lazy Beach Brewing and Cafe",
        "address": "7522 Bichon Dr #100, Corpus Christi, TX",
        "zip_code": 78414,
        "link": "https://lazybeachbrewing.com/",
        "city": "Corpus Christi"
        
      },
      {
        "id": "602",
        "name": "Rebel Toad Brewing Co.",
        "address": "425 Lomax St, Corpus Christi, TX",
        "zip_code": 78401,
        "link": "https://www.rebeltoadbrewing.com/",
        "city": "Corpus Christi"
        
      },
      {
        "id": "603",
        "name": "Lorelei Brewing Company",
        "address": "520 NAS Dr, Corpus Christi, TX",
       "zip_code": 78418,
        "link": "https://www.facebook.com/loreleibrewing/",
        "city": "Corpus Christi"
        
      },
      {
        "id": "604",
        "name": "Nueces Brewing and Barbecuing",
        "address": "401 S Water St, Corpus Christi, TX",
        "zip_code": 78401,
        "link": "https://www.nuecesbrewing.com/bbq-menu/",
        "city": "Corpus Christi"
        
      },
      {
        "id": "605",
        "name": "Dewey's Beer Garden",
        "address": "2302 Rodd Field Rd # 2, Corpus Christi, TX",
        "zip_code": 78414,
        "link": "http://www.deweysbeergarden.com/",
        "city": "Corpus Christi"
       
      },
      {
        "id": "606",
        "name": "Tapology Texas Pub",
        "address": "4334 S Staples St, Corpus Christi, TX",
        "zip_code": 78411,
        "link": "https://tapology-pub.edan.io/",
        "city": "Corpus Christi"
       
      },
      {
        "id": "607",
        "name": "Brewster Street Ice House",
        "address": "1724 N Tancahua St, Corpus Christi, TX",
        "zip_code": 78401,
        "link": "https://brewsterstreet.net/",
        "city": "Corpus Christi"
       
      },
      {
        "id": "608",
        "name": "Hofbrau Bar",
        "address": "1214 N Chaparral St, Corpus Christi, TX",
        "zip_code": 78401,
        "link": "https://www.sirved.com/restaurant/corpus_christi-texas-usa/hofbrau-bar/640143/menus",
        "city": "Corpus Christi"
        
      },
      {
        "id": "609",
        "name": "Watering Hole Pub",
        "address": "5723 Leopard St, Corpus Christi, TX 78408",
        "zip_code": 78408,
        "link": "https://www.facebook.com/wateringholepub/",
        "city": "Corpus Christi"
       
      },
      {
        "id": "610",
        "name": "Riley's Pub",
        "address": "6314 Yorktown Blvd Suite 106, Corpus Christi, TX 78414",
        "zip_code": 78414,
        "link": "https://www.facebook.com/rileyspub2016/",
        "city": "Corpus Christi"
       
      },
      {
        "id": "611",
        "name": "The Point of Corpus Christi",
        "address": "601 N Chaparral St, Corpus Christi, TX 78401",
        "zip_code": 78401,
        "link": "https://www.facebook.com/ThePointofCorpusChristi/",
        "city": "Corpus Christi"
        
      },
      {
        "id": "612",
        "name": "Oso Rose",
        "address": "2001 Yorktown Blvd #2, Corpus Christi, TX 78418",
        "zip_code": 78418,
        "link": "https://www.facebook.com/p/Oso-Rose-Beer-Garden-100063760346386/",
        "city": "Corpus Christi"
        
      },
      {
      "id": "701",
      "name": "Galveston Island Brewing",
      "address": "8423 Stewart Rd, Galveston, TX 77554",
      "zip_code": 77554,
      "link": "https://www.galvestonislandbrewing.com/",
      "city": "Galveston"
      
      },
      {
      "id": "702",
      "name": "Beerfoot Beach Bar",
      "address": "2816 Avenue R 1/2, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://beerfootisland.com/",
      "city": "Galveston"
      
      },
      {
      "id": "703",
      "name": "Devil and The Deep Brewery",
      "address": "2425 Postoffice St, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://www.devilandthedeep.com/",
      "city": "Galveston"
      
      },
      {
      "id": "704",
      "name": "Brews Brothers",
      "address": "2404 The Strand, Galveston, TX 77550",
       "zip_code": 77550,
      "link": "https://www.facebook.com/BrewsBrothersGalveston/",
      "city": "Galveston"
      
      },
      {
      "id": "705",
      "name": "The Proletariat Gallery",
      "address": "2221 Market St #100, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://www.proletariatgallery.com/",
      "city": "Galveston"
      
      },
      {
      "id": "706",
      "name": "Shuttgarden Tavern",
      "address": "111 23rd St, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://stuttgardentavern.com/",
      "city": "Galveston"
      
      },
      {
      "id": "707",
      "name": "3 Doors Down Bar",
      "address": "102 20th St suite a, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://www.facebook.com/3DoorsDownBar/",
      "city": "Galveston"
      },

      {
      "id": "708",
      "name": "Old Cellar Bar",
      "address": "2013 Postoffice St, Galveston, TX 77550",
      "zip_code": 77550,
      "link": "https://www.galveston.com/nightlife/find-a-bar/mollys/",
      "city": "Galveston"
      },

      {
        "name": " Cowtown Brewing",
        "address": "1301 E Belknap St, Fort Worth, TX",
        "zip_Code": 76102,
        "link": " https://www.cowtownbrewco.com/",
        "id": "801",
        "city": "Fort Worth",
      },

      {
        "name": " Martin House Brewing Company",
        "address": "220 S Sylvania Ave #209, Fort Worth, TX",
        "zip_Code": 76111,
        "link": " https://martinhousebrewing.com/",
        "id": "802",
        "city": "Fort Worth",
      },
    
      {
        "name": " Wild Acre Restaurant & Beer Garden",
        "address": "1734 E El Paso St #190, Fort Worth, TX",
        "zip_Code": 76102,
        "link": " https://www.wildacrebrewing.com/",
        "id": "803",
        "city": "Fort Worth",
      },

      {
        "name": " HopFusion Ale Works",
        "address": "200 E Broadway Ave, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": " https://www.hopfusionaleworks.com/",
        "id": "804",
        "city": "Fort Worth",
      },
    
      {
        "name": " Funky Picnic Brewery & Café",
        "address": "401 Bryan Ave Suite 117, Fort Worth, TX  ",
        "zipCode": 76104,
        "link": " https://www.funkypicnicbrewery.com/ ",
        "id": "805",
        "city": "Fort Worth",
      },
    
      {
        "name": " Rahr & Sons Brewing",
        "address": "701 Galveston Ave, Fort Worth, TX   ",
        "zip_Code": 76104,
        "link": " https://rahrbrewing.com/",
        "id": "806",
        "city": "Fort Worth",
      },
    
      {
        "name": " Neutral Ground Brewing Company",
        "address": "2929 Race St, Fort Worth, TX   ",
        "zip_Code": 76111,
        "link": " https://ngbc.beer/",
        "id": "807",
        "city": "Fort Worth",
      },
    
      {
        "name": " Panther Island Brewing ",
        "address": "501 N Main St, Fort Worth, TX ",
        "zip_Code": 76164,
        "link": " https://www.pantherislandbrewing.com/",
        "id": "808",
        "city": "Fort Worth",
      },
    
      {
        "name": " Maple Branch Craft Brewery",
        "address": "2628 Whitmore St, Fort Worth, TX  ",
        "zip_Code": 76107,
        "link": " https://www.maplebranchbrew.com/",
        "id": "809",
        "city": "Fort Worth",
      },
    
      {
        "name": " Fort Brewery and Pizza",
        "address": "2737 Tillar St, Fort Worth, TX",
        "zip_Code": 76107,
        "link": " https://www.fortbrewery.com/",
        "id": "810",
        "city": "Fort Worth",
      },
    
      {
        "name": " Bankhead Brewing - Fort Worth",
        "address": "611 University Dr, Fort Worth, TX ",
        "zip_Code": 76107,
        "link": " https://www.bankheadbrewing.com/",
        "id": "811",
        "city": "Fort Worth",
      },
    
      {
        "name": " Second Rodeo Brewing",
        "address": "122 E Exchange Ave #340, Fort Worth,",
        "zip_Code": 76164,
        "link": " https://secondrodeobrewing.com/",
        "id": "812",
        "city": "Fort Worth",
      },
    
      {
        "name": " BJ's Restaurant & Brewhouse",
        "address": "9401 Sage Meadow Trail, Fort Worth, TX ",
        "zip_Code": 76177,
        "link": " https://www.bjsrestaurants.com/",
        "id": "813",
        "city": "Fort Worth",
      },
    
      {
        "name": " False Idol Brewing",
        "address": "7924 Maplewood Ave, North Richland Hills, TX",
        "zip_Code": 76180,
        "link": " https://www.falseidolbrew.com/",
        "id": "814",
        "city": "Fort Worth",
      },
    
      {
        "name": " Brutal Beerworks",
        "address": "8447 26 Blvd, North Richland Hills, TX",
        "zip_Code": 76180,
        "link": " https://www.brutalbeerworks.com/",
        "id": "815",
        "city": "Fort Worth",
      },
    
      {
        "name": "Turning Point Beer",
        "address": "1307 Brown Trail, Bedford, TX",
        "zip_Code": 76022,
        "link": " https://www.turningpointbeer.com/beer",
        "id": "816",
        "city": "Fort Worth",
      },

      {
        "name": " Parker County Brewing Company",
        "address": "225 The, Shops Blvd #105, Willow Park, TX",
        "zip_Code": 756087,
        "link": " https://www.parkercountybrewing.com/",
        "id": "817",
        "city": "Fort Worth",
      },
    
      {
        "name": " Edgewise Eight Brewing",
        "address": "221 N Main St, Weatherford, TX",
        "zip_Code": 76086,
        "link": " https://www.edgewiseeight.com/",
        "id": "818",
        "city": "Fort Worth",
      },
    
      {
        "name": " Old Texas Brewing Co.",
        "address": "112 W Ellison St, Burleson, TX",
        "zip_Code": 76028,
        "link": "https://www.oldtexasbrewing.com/",
        "id": "819",
        "city": "Fort Worth",
      },
    
      {
        "name": " Dirty Job Brewing",
        "address": " 117 N Main St, Mansfield, TX",
        "zip_Code": 76063,
        "link": "https://www.dirtyjobbrewing.com/",
        "id": "820",
        "city": "Fort Worth",
      },
    
      {
        "name": " Soul Fire Brewing Company",
        "address": " 206 N Oak St Ste #180, Roanoke, TX ",
        "zip_Code": 76262,
        "link": "https://soulfirebrewing.com/",
        "id": "821",
        "city": "Fort Worth",
      },
    
      {
        "name": " Hop and Sting Brewing Company",
        "address": " 906 Jean St, Grapevine, TX",
        "zip_Code": 76051,
        "link": "https://hopandsting.com//",
        "id": "822",
        "city": "Fort Worth",
      },
    
      {
        "name": " Bee & Brew Inc",
        "address": "  217 N Rupert St, Fort Worth, TX",
        "zip_Code": 76107,
        "link": "https://beeandbrew.com/",
        "id": "823",
        "city": "Fort Worth",
      },
    
      {
        "name": " Locust Cider Fort Worth",
        "address": "   710 S Main St #100, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://www.locustcider.com/taprooms/fort-worth/",
        "id": "824",
        "city": "Fort Worth",
      },
    
      {
        "name": " Southside Cellar",
        "address": "    125 S Main St, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://southsidebeercellar.com/",
        "id": "825",
        "city": "Fort Worth",
      },

      {
        "name": " Pouring Glory",
        "address": " 1001 Bryan Ave, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://www.pouringglory.com/",
        "id": "826",
        "city": "Fort Worth",
      },

      {
        "name": " The Radler Biergarten",
        "address": " 1229 7th Ave, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://theradlerfw.com/",
        "id": "827",
        "city": "Fort Worth",
      },

      {
        "name": " Corner Taproom",
        "address": " Corner Taproom ",
        "zip_Code": 76107,
        "link": "https://www.bishopcider.com/",
        "id": "828",
        "city": "Fort Worth",
      },

      {
        "name": "Lockwood Distilling Company - Magnolia",
        "address": " 1411 W Magnolia Ave, Fort Worth, TX   ",
        "zip_Code": 76104,
        "link": "https://lockwooddistilling.com/magnolia-reservations/",
        "id": "829",
        "city": "Fort Worth",
      },

      {
        "name": "The Bearded Lady",
        "address": "  300 S Main St, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://www.thebeardedladyfw.com/",
        "id": "830",
        "city": "Fort Worth",
      },

      {
        "name": "BREWED",
        "address": " 801 W Magnolia Ave, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://brewedfw.com/",
        "id": "831",
        "city": "Fort Worth",
      },
      {
        "name": "T&P Tavern",
        "address": " 221 W Lancaster Ave, Fort Worth, TX ",
        "zip_Code": 76102,
        "link": "https://tptavern.com/home",
        "id": "832",
        "city": "Fort Worth",
      }

    ];

const seedPubAll = () => Category.bulkCreate(PubAll);

module.exports = seedPubAll;



// Router.get('', (request, response) => {
//   response.send(supermarkets);
// });


// module.exports = router;

