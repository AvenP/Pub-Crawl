const { Category } = require('../models');

const DallasData =[
    {
        "name": " Intrinsic Smokehouse Brewery + BBQ Catering",
        "address": "509 W State St, Garland, TX",
        "zip_Code": 75040,
        "link": " https://intrinsicbrewing.com/ ",
        "id": 301
      },
      {
        "name": " FRANCONIA BREWING COMPANY",
        "address": "495 McKinney Pkwy  McKinney, TX",
        "zip_Code": 75071,
        "link": " https://franconiabrewingcompany.com/",
        "id": 302
      },
    
      {
        "name": " DEEP Ellum Breweing Company",
        "address": "2823 ST. LOUIS STREET DALLAS, TX ",
        "zip_Code": 75226,
        "link": " https://deepellumbrewing.com/",
        "id": 303
      },
      {
        "name": " LAKEWOOD BREWING",
        "address": "Lakewood Brewing Co.2302 Executive Drive Garland, TX ",
        "zip_Code": 75041,
        "link": " https://lakewoodbrewing.com/",
        "id": 304
      },
    
      {
        "name": " MARTIN HOUSE Brewing Company",
        "address": "220 S Sylvania Ave, Fort Worth,  ",
        "zipCode": 76111,
        "link": " https://martinhousebrewing.com/",
        "id": 305
      },
    
      {
        "name": " FOUR CORNERS BREWING COMPANY",
        "address": "1311 S. ERVAY ST. DALLAS, TX  ",
        "zip_Code": 75215,
        "link": " https://fcbrewing.com/",
        "id": 306
      },
    
      {
        "name": " COMMUNITY BEER CO.",
        "address": "3110 Commonwealth Dr., Dallas, TX   ",
        "zip_Code": 75247,
        "link": " https://communitybeer.com/",
        "id": 307
      },
    
      {
        "name": " Three Nations Brewing ",
        "address": "1033 E Vandergriff Dr Carrollton, TX  ",
        "zip_Code": 75006,
        "link": " https://3nationsbrewing.com/",
        "id": 308
      },
    
      {
        "name": " Happy Hippie Beer",
        "address": "607 south cottonwood drive Richardson, TX ",
        "zip_Code": 75080,
        "link": " https://happyhippiebeer.com/",
        "id": 309
      },
    
      {
        "name": " Union Bear Brewing Co.",
        "address": "5880 Highway 121 Ste 101, Plano, TX 75024",
        "zip_Code": 75024,
        "link": " https://www.unionbear.com//",
        "id": 310
      },
    
      {
        "name": " CELESTIAL BEERWORKS",
        "address": "2530 Butler St.  Dallas, TX ",
        "zip_Code": 75235,
        "link": " https://www.celestialbeerworks.com/home",
        "id": 311
      },
    
      {
        "name": " MANHATTAN PROJECT BEER CO",
        "address": "2215 Sulphur Street  Dallas, TX",
        "zip_Code": 75208,
        "link": " https://manhattanproject.beer/",
        "id": 312
      },
    
      {
        "name": " OUTFIT BREWERY",
        "address": "7135 John W. Carpenter Fwy Dallas, TX 75247",
        "zip_Code": 75247,
        "link": " https://www.outfitbrewing.com/",
        "id": 313
      },
    
      {
        "name": " OAK HIGHLANDS BREWERY",
        "address": "10484 Brockwood Rd Dallas, TX",
        "zip_Code": 75238,
        "link": " https://www.oakhighlandsbrewery.com/brewery/",
        "id": 313
      },
    
      {
        "name": " OAK CLIFF BREWING CO",
        "address": "1300 S Polk St, #222 Dallas, TX",
        "zip_Code": 75224,
        "link": " http://togo.oakcliffbrewing.com/",
        "id": 314
      },
    
      {
        "name": " ON ROTATION BREWERY & KITCHEN",
        "address": "7701 Lemmon Ave., Suite 200 Dallas, TX",
        "zip_Code": 75209,
        "link": " https://on-rotation.com/",
        "id": 315
      },

      {
        "name": " Turning Point Beer",
        "address": "1307 Brown Trail, Bedford, TX",
        "zip_Code": 756022,
        "link": " https://www.turningpointbeer.com/beer",
        "id": 316
      },
    
      {
        "name": " Hop And Sting Brewing Company",
        "address": "906 Jean St, Grapevine, TX",
        "zip_Code": 76051,
        "link": " https://hopandsting.com/",
        "id": 317
      },
    
      {
        "name": " Peticolas Brewing Company",
        "address": "1301 Pace St, Dallas, TX ",
        "zip_Code": 75207,
        "link": "https://www.peticolasbrewing.com/",
        "id": 318
      },
    
      {
        "name": " Texas Ale Project",
        "address": " 1001 N Riverfront Blvd, Dallas, TX",
        "zip_Code": 75207,
        "link": "https://www.texasaleproject.com/",
        "id": 319
      },
    
      {
        "name": " White Rock Alehouse & Brewery",
        "address": " 7331 Gaston Ave #100, Dallas, TX",
        "zip_Code": 75214,
        "link": "https://www.whiterockalehouse.com/",
        "id": 320
      },
    
      {
        "name": " White Rock Alehouse & Brewery",
        "address": " 7331 Gaston Ave #100, Dallas, TX",
        "zip_Code": 75214,
        "link": "https://www.whiterockalehouse.com/",
        "id": 321
      },
    
      {
        "name": " Pegasus City Brewery",
        "address": "  2222 Vantage St, Dallas, TX",
        "zip_Code": 75207,
        "link": "https://www.pegasuscitybrewery.com/",
        "id": 322
      },
    
      {
        "name": " ODD Muse Brewing Company",
        "address": "   4488 Spring Valley Rd, Farmers Branch, TX",
        "zip_Code": 75244,
        "link": "https://oddmusebrewing.com/",
        "id": 323
      },
    
      {
        "name": " Vector Brewing",
        "address": "    9850 Walnut Hl Ln #405, Dallas, TX ",
        "zip_Code": 75238,
        "link": "https://www.vectorbrewing.com/",
        "id": 324
      },

      {
        "name": " Westlake Brewing Company",
        "address": "     2816 Commerce St, Dallas, TX ",
        "zip_Code": 75226,
        "link": "https://www.westlakebeer.com/",
        "id": 325
      },

      {
        "name": " Trinity Ciders",
        "address": "   2656 Main Street, Suite 120, Dallas, TX ",
        "zip_Code": 75226,
        "link": "https://trinitycider.com/",
        "id": 326
      },

      {
        "name": " Bishop Cider Co",
        "address": "   509 N. Bishop Avenue ",
        "zip_Code": 75208,
        "link": "https://www.bishopcider.com/",
        "id": 327
      },

      {
        "name": "Craft and Growler",
        "address": " 3601 Parry Ave, Dallas, TX  ",
        "zip_Code": 75226,
        "link": "https://craftandgrowler.com/",
        "id": 328
      },

      {
        "name": "Malai Kitchen",
        "address": " 3699 McKinney Ave #319, Dallas, TX ",
        "zip_Code": 75204,
        "link": "https://www.malaikitchen.com/",
        "id": 329
      },

      {
        "name": "Hemisphere Brewing Company",
        "address": " 2015 Kristy Ln, Rockwall, TX ",
        "zip_Code": 75032,
        "link": "https://www.beerinbigd.com/",
        "id": 330
      },
      {
        "name": "Bankhead Brewing - Rowlett",
        "address": " 3840 Main St, Rowlett, TX",
        "zip_Code": 75088,
        "link": "https://www.bankheadbrewing.com/",
        "id": 331
      }

    ];

const seedDataDallas = () => Category.bulkCreate(DallasData);

module.exports = seedDataDallas;