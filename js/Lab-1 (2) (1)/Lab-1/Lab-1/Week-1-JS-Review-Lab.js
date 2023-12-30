//All the listings for the project as JS objects

const listings = [
  {
    id: "10100",
    price: "$439,500",
    address: "321 Water Street",
    postalCode: "K6J 1A5",
    MLSnumber: "1328809",
    photo: "../img/10100.jpg",
    description:
      "This condo may be the perfect fit for you. Located in a highly sought after building, this unit has many brag worthy features. Starting with the building itself, recent improvements include: new roof, windows, and plumbing. The interior of the unit features a spacious layout, and offers scenic views of Lamoureux Park & the St. Lawrence River, which can be enjoyed from your own private balcony. This condo offers 2 spacious bedrooms and 2 bathrooms, including a master bedroom with ensuite, complete with walk-in closet. The galley style kitchen has been tastefully upgraded with granite counter tops, white cabinetry, and an undermount sink. In addition to all this, an indoor parking space, and a storage locker are also included. Don't miss out on this one. Call to book a private viewing today.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "Apartment Building",
      storeys: "1",
      title: "Condominium",
      builtIn: "2001",
      taxes: "$4,390",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "2+0",
      bathrooms: "2",
      buildingFeatures: ["Elevator", "Balcony"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "1190 sqft",
    },
  },
  {
    id: "10200",
    price: "$321,000",
    address: "129 First Street West",
    postalCode: "K6J 3P5",
    MLSnumber: "1326947",
    photo: "../img/10200.jpg",
    description:
      "Here's great income potential, upwards of $2000+/mth. This 3 brm home offers the perfect blend of historical character and modern convenience. Spacious kitchen and updated laminate floors throughout. This easy flow layout is functional and efficient for everyday living. It's conveniently located near a variety of amenities such as shopping and bistros. The local park is also nearby providing a great place to spend time outdoors.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "Townhouse",
      storeys: "2",
      title: "Freehold",
      builtIn: "1900",
      taxes: "$2,096",
      parking: "Driveway 2 spaces",
    },
    buildingSummary: {
      bedrooms: "3+0",
      bathrooms: "1",
      buildingFeatures: ["Poured Concrete", "Wooden Structure"],
      cooling: "None",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "10300",
    price: "$829,900",
    address: "35 Second Street East",
    postalCode: "K6H 1Y2",
    MLSnumber: "1322346",
    photo: "../img/10300.jpg",
    description:
      "4100 Sq.Ft. that the owner converted to beautifully finished 4 bedroom home w/open concept main floor living room,Kitchen w/island, dining area & 3pc bath with main level laundry. The 2nd floor residence features a family room w/access to a private patio, 4 bedrooms & 2 full baths & includes a spacious master bedroom w/walk-in closet & ensuite.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "2",
      title: "Freehold",
      builtIn: "Renovated 2009",
      taxes: "$9,381",
      parking: "Driveway",
    },
    buildingSummary: {
      bedrooms: "4",
      bathrooms: "6",
      buildingFeatures: [
        "Detached",
        "Wood Frame",
        "Basement partially finished",
      ],
      cooling: "Unknown",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "4,100 sqft",
    },
  },
  {
    id: "10400",
    price: "$399,000",
    address: "402 Pitt Street",
    postalCode: "K6J 3R2",
    MLSnumber: "1323223",
    photo: "../img/10400.jpg",
    description:
      "This large heritage home is located in the heart of downtown and has several interesting features. Historically a Dr.'s residence, it has a contained office within and a separate entrance off Fourth St. CBD zoning allows for several uses. Ideal for your entrepreneurial concept, or use the entire house as a home. ",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "2",
      title: "Freehold",
      builtIn: "1900",
      taxes: "$2,732",
      parking: "Detached Garage",
    },
    buildingSummary: {
      bedrooms: "3+0",
      bathrooms: "3",
      buildingFeatures: ["Stone Cladding", "Detached"],
      cooling: "None",
      heating: "Hot water Radiator",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "20100",
    price: "$349,000",
    address: "4 LeFebvre Street",
    postalCode: "K6H 5G4",
    MLSnumber: "1326657",
    photo: "../img/20100.jpg",
    description:
      "This home has had extensive updates including all those big tickets items. This 2 bedroom home features one full bath and laundry on the main floor. The eat in kitchen has plenty of cupboards. Make your way through this home and notice all those brand new windows. In the living room you will enjoy the view of the St Lawrence right from your couch. ",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "Unknown",
      taxes: "$1,023",
      parking: "Driveway",
    },
    buildingSummary: {
      bedrooms: "2+0",
      bathrooms: "1",
      buildingFeatures: ["Laminate Floor", "Low Basement"],
      cooling: "None",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "20200",
    price: "$525,000",
    address: "252 Gillis Street",
    postalCode: "K6J 7N2",
    MLSnumber: "1315922",
    photo: "../img/20200.jpg",
    description:
      "Modern and stylish 2 +1 bedroom bungalow in the desirable East Ridge subdivision. Beautiful investment property or plan to move in this spring! Nicely finished custom cabinetry with crown mouldings and working island. Quartz counters in kitchen and bathroom. Spacious open concept layout. Two main floor bedrooms.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "2022",
      taxes: "$4,600",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "2+1",
      bathrooms: "1",
      buildingFeatures: ["Poured Concrete", "Bungalow"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "20300",
    price: "$549,900",
    address: "573 Lynwood Drive",
    postalCode: "K6H 5W7",
    MLSnumber: "1329543",
    photo: "../img/20300.jpg",
    description:
      "his home is ideal for a growing family! Located in a great residential area, with 2000+ sq ft of living space and a deck overlooking the large backyard. This 4-level split provides several main floor living areas, with a formal living, dining room, eat-in area & a large, bright family room warmed by a wood-burning fireplace. Upstairs, 3 good sized bedrooms are serviced by a 4 pcs bathroom, with the primary bedroom having its private 2 pcs.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "Unknown",
      title: "Freehold",
      builtIn: "1979",
      taxes: "$5,172",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "3",
      bathrooms: "4",
      buildingFeatures: ["Poured Concrete", "Deck"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "2,000+ sqft",
    },
  },
  {
    id: "20400",
    price: "$445,000",
    address: "401 Anderson Street",
    postalCode: "K6H 5N4",
    MLSnumber: "1328253",
    photo: "../img/20400.jpg",
    description:
      "BEAUTIFUL BRICK BUNGALOW LOCATED IN THE EAST END OF CORNWALL FACING EAST ALSO FEATURES A 2 + 2 BEDROOM, POSSIBLE 3 BEDROOMS IN THE BASEMENT, POSSIBILITY OF AN IN LAW SUITE/ APARTMENT. 2 FULL BATHROOMS, LARGE BRIGHT LIVING ROOM WITH GAS FIREPLACE & BAY WINDOW. ",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "1965",
      taxes: "$3,578",
      parking: "Detached Garage",
    },
    buildingSummary: {
      bedrooms: "2+3",
      bathrooms: "2",
      buildingFeatures: ["Block", "Detached"],
      cooling: "Central Air Conditioning",
      heating: "Hot water Radiator",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "30100",
    price: "$425,000",
    address: "124 Heritage Place",
    postalCode: "K6J 5V5",
    MLSnumber: "1330147",
    photo: "../img/30100.jpg",
    description:
      "Extremely well maintained 3 bedroom and 2 bathroom home with over 1500 sq/ft of living space located in a family oriented neighborhood and near all amenities. A beautiful kitchen with plenty of cupboard space, open concept living and dining area with a gas fireplace. ",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "Townhouse",
      storeys: "2",
      title: "Freehold",
      builtIn: "1991",
      taxes: "$2,450",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "3+0",
      bathrooms: "2",
      buildingFeatures: ["Poured Concrete"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "1567 sqft",
    },
  },
  {
    id: "30200",
    price: "$429,000",
    address: "108 Hemlock crescent",
    postalCode: "K6H 7L7",
    MLSnumber: "1323791",
    photo: "../img/30200.jpg",
    description:
      "Bright and spacious 2 bedroom semi in a desirable location. This north end semi detached home features beautiful finishings and recent updates. Step into the roomy living area boasting high ceilings and hardwood flooring. Foyer leading to attached single car garage with exterior access to the yard.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "2003",
      taxes: "$3,268",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "2+1",
      bathrooms: "1",
      buildingFeatures: ["Poured Concrete", "Bungalow"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "1050 sqft.",
    },
  },
  {
    id: "30300",
    price: "$419,900",
    address: "3223 Northdale Drive",
    postalCode: "K6K 0A5",
    MLSnumber: "1327364",
    photo: "../img/30300.jpg",
    description:
      "Welcome to this 2015 2 bedroom Menard built semi detached in the North End. Open concept Kitchen, dining and livingroom with hardwood and ceramic floors. 2 bedroom on the main floor, 4 piece bathroom, large foyer, fully fenced yard, shed and unspoiled basement ready to finish.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "2015",
      taxes: "$3,200",
      parking: "Driveway",
    },
    buildingSummary: {
      bedrooms: "3",
      bathrooms: "4",
      buildingFeatures: ["Poured Concrete", "Deck"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "30400",
    price: "$450,000",
    address: "3130 Ross Street",
    postalCode: "K6K 1E7",
    MLSnumber: "1328254",
    photo: "../img/30400.jpg",
    description:
      "Great location with home set on a large lot with fenced in rear yard. The home has had many upgrades as the pictures show. Garage and two out buildings.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "1960",
      taxes: "$2,717",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "3+0",
      bathrooms: "2",
      buildingFeatures: ["Poured Concerte", "Detached"],
      cooling: "Central Air Conditioning",
      heating: "Hot water Radiator",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },

  {
    id: "40100",
    price: "$564,900",
    address: "918 Second Street",
    postalCode: "K6J 1H9",
    MLSnumber: "1319080",
    photo: "../img/40100.jpg",
    description:
      "Be impressed with spacious 4 bedroom home in Riverdale, with numerous updates blending today with the original character. Covered front veranda, large foyer with gorgeous solid wood staircase to the second level. Large formal livingroom and formal diningroom with classy wooden built-ins that bring the character of this classic home to a fully renovated kitchen with an abundance of cabinets, working space and a nice day to day dining room.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "2",
      title: "Freehold",
      builtIn: "1937",
      taxes: "$3,182",
      parking: "Driveway",
    },
    buildingSummary: {
      bedrooms: "4+0",
      bathrooms: "3",
      buildingFeatures: ["Poured Concerte", "Detached"],
      cooling: "Wall Unit",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "Unknown",
    },
  },
  {
    id: "40200",
    price: "$659,900",
    address: "1016 Oak Crescent",
    postalCode: "K6J 2N1",
    MLSnumber: "1327402",
    photo: "../img/40200.jpg",
    description:
      "Modern and stylish 2 +1 bedroom bungalow in the desirable East Ridge subdivision. Beautiful investment property or plan to move in this spring! Nicely finished custom cabinetry with crown mouldings and working island. Quartz counters in kitchen and bathroom. Spacious open concept layout. Two main floor bedrooms.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "1977",
      taxes: "$5,491",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "3+1",
      bathrooms: "3",
      buildingFeatures: ["Poured Concrete", "Bungalow"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "1968 sqft",
    },
  },
  {
    id: "40300",
    price: "$409,900",
    address: "513 Joyce Street",
    postalCode: "K6J 1Y1",
    MLSnumber: "1329879",
    photo: "../img/40300.jpg",
    description:
      "Check out this all brick family home in Riverdale, located right beside a school. On the main floor you'll find an eat-in kitchen, living room, full bathroom, a large master bedroom and another bedroom. Downstairs has a nice family room with a gas fireplace, 2 more bedrooms, laundry room and a 2pcs bathroom.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "1958",
      taxes: "$2,372",
      parking: "Driveway",
    },
    buildingSummary: {
      bedrooms: "2+2",
      bathrooms: "2",
      buildingFeatures: ["Poured Concrete", "Deck"],
      cooling: "Central Air Conditioning",
      heating: "Forced Air",
      sewer: "Municipal",
      water: "Municipal",
      size: "1,043 sqft",
    },
  },
  {
    id: "40400",
    price: "$949,900",
    address: "1208 Innwood Avenue",
    postalCode: "K6J 5V2",
    MLSnumber: "1301028",
    photo: "../img/40400.jpg",
    description:
      "This spacious 2187sq.ft. one owner custom home complete with a huge 22’ x 24’ attached double garage is situated in one of the City’s most prestigious neighbourhoods! An impeccable 3+1 bedroom fully finished family home with beautiful features such as gleaming hardwood flooring throughout, 3 full bathrooms including a 5pc ensuite off the master, an open concept layout, a super cool 4 season sunroom/den which provides access to the private deck zone, a main floor laundry room, a fully finished basement with the ultimate games room and so much more.",
    propertySummary: {
      propertyType: "Single Family",
      buildingType: "House",
      storeys: "1",
      title: "Freehold",
      builtIn: "2014",
      taxes: "$7,215",
      parking: "Attached Garage",
    },
    buildingSummary: {
      bedrooms: "3",
      bathrooms: "3",
      buildingFeatures: ["Poured Concrete", "Detached"],
      cooling: "Central Air Conditioning",
      heating: "Hot water Radiator",
      sewer: "Municipal",
      water: "Municipal",
      size: "2187 sqft",
    },
  },
];

/**
 * Task-1: make a variable named listing0 and assign the first listing object
 * from the array above
 */
//WRITE YOUR CODE BELOW
console.log[listings[0]]
/**
 * Task-2: create an object named listing1 using the spread operator and add 2 new properties,
 * isSold which is a boolean set to false,
 * and currentOwner which is a string with the value of Jane Doe
 */
//WRITE YOUR CODE BELOW
const listing1 = listings[1];
const newlisting1 = {
  ...listing1,
  isSold: false,
  currentOwner: "Jane Doe",
};

console.log(newlisting1)




  


/**
 * Task-3: print to console a text using template literals that contains the name of the owner,
 * and their current address for listing1.
 * The text should read the following:
 * "This house at (address) is owned by (currentOwner)"
 */
//WRITE YOUR CODE BELOW
console.log(
  `This house at ${newlisting1.address} is owned by ${newlisting1.currentOwner}`
);
/**
 * NOTE: THIS TASK IS TRICKY!
 * Task-4: Create a function, using the old decleration method, to calculate the realtor fees.
 * The function's name is realtorFees, that takes a listing object as it's input parameter,
 * and returns a a string with the dollar amount as realtor fees using the following conditions,
 * Realtor gets 2.5% of the listing price is the listing is equal or below $450,000
 * Realtor gets 2% if the listing is more than $450,000
 *
 * example realtorFees(listings[2]) should return 16598
 * example realtorFees(listings[6]) should return 10998
 *
 * USE TERNARIES INSTEAD OF IF/ELSE STATEMENTS!
 */
//WRITE YOUR CODE BELOW

const num = Number(listings[0].price.replace(/[$ ,]/g,""))
console.log(num) 

function realtorFees(listings){
const price = Number(listings.price.replace(/[$ ,]/g,""))
const fees = price <= 45000? price * 0.025 : price * 0.02
return fees
}

console.log(realtorFees(listings[6]))
/**
 * Task-5: Sort the listing array ascendingly in a new variable called listingAscendingly
 *
 */
//WRITE YOUR CODE BELOW


/**
 * Task-6: filter all the listings by bulitIn propertite for all houses built on or after 1990.
 * Name the variable newBuiltListings
 */
//WRITE YOUR CODE BELOW
const  newBuiltListings = listings.filter((building) => building.propertySummary.builtIn >= "1990");
console.log(newBuiltListings)
// console.log(listings.filter((x)=>x.propertySummary.builtIn == "2014"))
