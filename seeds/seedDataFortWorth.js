const { Category } = require('../models');

const FortWorthData =
[
    {
        "name": " Cowtown Brewing",
        "address": "1301 E Belknap St, Fort Worth, TX",
        "zip_Code": 76102,
        "link": " https://www.cowtownbrewco.com/",
        "id": 501
      },
      {
        "name": " Martin House Brewing Company",
        "address": "220 S Sylvania Ave #209, Fort Worth, TX",
        "zip_Code": 76111,
        "link": " https://martinhousebrewing.com/",
        "id": 502
      },
    
      {
        "name": " Wild Acre Restaurant & Beer Garden",
        "address": "1734 E El Paso St #190, Fort Worth, TX",
        "zip_Code": 76102,
        "link": " https://www.wildacrebrewing.com/",
        "id": 503
      },
      {
        "name": " HopFusion Ale Works",
        "address": "200 E Broadway Ave, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": " https://www.hopfusionaleworks.com/",
        "id": 504
      },
    
      {
        "name": " Funky Picnic Brewery & Café",
        "address": "401 Bryan Ave Suite 117, Fort Worth, TX  ",
        "zipCode": 76104,
        "link": " https://www.funkypicnicbrewery.com/ ",
        "id": 505
      },
    
      {
        "name": " Rahr & Sons Brewing",
        "address": "701 Galveston Ave, Fort Worth, TX   ",
        "zip_Code": 76104,
        "link": " https://rahrbrewing.com/",
        "id": 506
      },
    
      {
        "name": " Neutral Ground Brewing Company",
        "address": "2929 Race St, Fort Worth, TX   ",
        "zip_Code": 76111,
        "link": " https://ngbc.beer/",
        "id": 507
      },
    
      {
        "name": " Panther Island Brewing ",
        "address": "501 N Main St, Fort Worth, TX ",
        "zip_Code": 76164,
        "link": " https://www.pantherislandbrewing.com/",
        "id": 508
      },
    
      {
        "name": " Maple Branch Craft Brewery",
        "address": "2628 Whitmore St, Fort Worth, TX  ",
        "zip_Code": 76107,
        "link": " https://www.maplebranchbrew.com/",
        "id": 509
      },
    
      {
        "name": " Fort Brewery and Pizza",
        "address": "2737 Tillar St, Fort Worth, TX",
        "zip_Code": 76107,
        "link": " https://www.fortbrewery.com/",
        "id": 510
      },
    
      {
        "name": " Bankhead Brewing - Fort Worth",
        "address": "611 University Dr, Fort Worth, TX ",
        "zip_Code": 76107,
        "link": " https://www.bankheadbrewing.com/",
        "id": 511
      },
    
      {
        "name": " Second Rodeo Brewing",
        "address": "122 E Exchange Ave #340, Fort Worth,",
        "zip_Code": 76164,
        "link": " https://secondrodeobrewing.com/",
        "id": 512
      },
    
      {
        "name": " BJ's Restaurant & Brewhouse",
        "address": "9401 Sage Meadow Trail, Fort Worth, TX ",
        "zip_Code": 76177,
        "link": " https://www.bjsrestaurants.com/",
        "id": 513
      },
    
      {
        "name": " False Idol Brewing",
        "address": "7924 Maplewood Ave, North Richland Hills, TX",
        "zip_Code": 76180,
        "link": " https://www.falseidolbrew.com/",
        "id": 513
      },
    
      {
        "name": " Brutal Beerworks",
        "address": "8447 26 Blvd, North Richland Hills, TX",
        "zip_Code": 76180,
        "link": " https://www.brutalbeerworks.com/",
        "id": 514
      },
    
      {
        "name": "Turning Point Beer",
        "address": "1307 Brown Trail, Bedford, TX",
        "zip_Code": 76022,
        "link": " https://www.turningpointbeer.com/beer",
        "id": 515
      },

      {
        "name": " Parker County Brewing Company",
        "address": "225 The, Shops Blvd #105, Willow Park, TX",
        "zip_Code": 756087,
        "link": " https://www.parkercountybrewing.com/",
        "id": 516
      },
    
      {
        "name": " Edgewise Eight Brewing",
        "address": "221 N Main St, Weatherford, TX",
        "zip_Code": 76086,
        "link": " https://www.edgewiseeight.com/",
        "id": 517
      },
    
      {
        "name": " Old Texas Brewing Co.",
        "address": "112 W Ellison St, Burleson, TX",
        "zip_Code": 76028,
        "link": "https://www.oldtexasbrewing.com/",
        "id": 518
      },
    
      {
        "name": " Dirty Job Brewing",
        "address": " 117 N Main St, Mansfield, TX",
        "zip_Code": 76063,
        "link": "https://www.dirtyjobbrewing.com/",
        "id": 519
      },
    
      {
        "name": " Soul Fire Brewing Company",
        "address": " 206 N Oak St Ste #180, Roanoke, TX ",
        "zip_Code": 76262,
        "link": "https://soulfirebrewing.com/",
        "id": 520
      },
    
      {
        "name": " Hop and Sting Brewing Company",
        "address": " 906 Jean St, Grapevine, TX",
        "zip_Code": 76051,
        "link": "https://hopandsting.com//",
        "id": 521
      },
    
      {
        "name": " Bee & Brew Inc",
        "address": "  217 N Rupert St, Fort Worth, TX",
        "zip_Code": 76107,
        "link": "https://beeandbrew.com/",
        "id": 522
      },
    
      {
        "name": " Locust Cider Fort Worth",
        "address": "   710 S Main St #100, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://www.locustcider.com/taprooms/fort-worth/",
        "id": 523
      },
    
      {
        "name": " Southside Cellar",
        "address": "    125 S Main St, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://southsidebeercellar.com/",
        "id": 524
      },

      {
        "name": " Pouring Glory",
        "address": " 1001 Bryan Ave, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://www.pouringglory.com/",
        "id": 525
      },

      {
        "name": " The Radler Biergarten",
        "address": " 1229 7th Ave, Fort Worth, TX",
        "zip_Code": 76104,
        "link": "https://theradlerfw.com/",
        "id": 526
      },

      {
        "name": " Corner Taproom",
        "address": " Corner Taproom ",
        "zip_Code": 76107,
        "link": "https://www.bishopcider.com/",
        "id": 527
      },

      {
        "name": "Lockwood Distilling Company - Magnolia",
        "address": " 1411 W Magnolia Ave, Fort Worth, TX   ",
        "zip_Code": 76104,
        "link": "https://lockwooddistilling.com/magnolia-reservations/",
        "id": 528
      },

      {
        "name": "The Bearded Lady",
        "address": "  300 S Main St, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://www.thebeardedladyfw.com/",
        "id": 529
      },

      {
        "name": "BREWED",
        "address": " 801 W Magnolia Ave, Fort Worth, TX ",
        "zip_Code": 76104,
        "link": "https://brewedfw.com/",
        "id": 530
      },
      {
        "name": "T&P Tavern",
        "address": " 221 W Lancaster Ave, Fort Worth, TX ",
        "zip_Code": 76102,
        "link": "https://tptavern.com/home",
        "id": 531
      }

    ]

    const seedDataFortWorth = () => Category.bulkCreate(FortWorthData);

module.exports = seedDataFortWorth;