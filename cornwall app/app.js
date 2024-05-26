const express = require("express");
const { request, response } = require("http");
const app = express();
const port = 3000;
const listings = require("./data/listings");

app.listen(port, () => console.log(`Listning on port ${port}`));

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/downtown", (request, response) => {
  const { sort } = request.query;
  if (sort === "ascendingly" || sort === "decendingly") {
    console.log(`Sorting ${sort === "ascendingly" ? "Ascending" : "Descending"}`);
    listings.downtown = sortPrice(listings.downtown, sort);
  }
  response.render("downtown-view", { downtown: listings.downtown });
});


app.get("/northend", (request, response) => {
  const { sort } = request.query;
  if (sort === "ascendingly" || sort === "decendingly") {
    console.log(`Sorting ${sort === "ascendingly" ? "Ascending" : "Descending"}`);
    listings.northend = sortPrice(listings.northend, sort);
  }
  response.render("northend-view", { northend: listings.northend });
});

app.get("/riverdale", (request, response) => {
  const { sort } = request.query;
  if (sort === "ascendingly" || sort === "decendingly") {
    console.log(`Sorting ${sort === "ascendingly" ? "Ascending" : "Descending"}`);
    listings.riverdale = sortPrice(listings.riverdale, sort);
  }
  response.render("riverdale-view", { riverdale: listings.riverdale });
});

app.get("/eastend", (request, response) => {
  const { sort } = request.query;
  if (sort === "ascendingly" || sort === "decendingly") {
    console.log(`Sorting ${sort === "ascendingly" ? "Ascending" : "Descending"}`);
    listings.eastend = sortPrice(listings.eastend, sort);
  }
  response.render("eastend-view", { eastend: listings.eastend });
});

app.get('/:neighbourhood/:id', (req, res)=> {
    const neighbourhood = req.params.neighbourhood;
    const id = req.params.id;

    const listing = getListing(neighbourhood, id);

    if(!listing){
      res.status(404).send("No listing");
      return;
    }
    res.render('listing', {neighbourhood, listing});
})


function getListing(neighbourhood, id){
  if(listings[neighbourhood]){
    return listings[neighbourhood].find(listing => listing.id === id);
  }
  return null;
}

function sortPrice(listingArr, order){
  return listingArr.sort((a,b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.-]+/g, ""));
    const priceB = parseFloat(b.price.replace(/[^0-9.-]+/g, ""));
    return order === "ascendingly" ? priceA - priceB : priceB - priceA;
    });
}

