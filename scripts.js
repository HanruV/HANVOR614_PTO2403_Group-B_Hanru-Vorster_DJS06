// A list of provinces:
const provinces = [
  "Western Cape",
  "Gauteng",
  "Northern Cape",
  "Eastern Cape",
  "KwaZulu-Natal",
  "Free State",
];

// A list of names:
const names = [
  "Ashwin",
  "Sibongile",
  "Jan-Hendrik",
  "Sifso",
  "Shailen",
  "Frikkie",
];

console.log(`##############################`);
console.log(`##### BASIC EXERCISES #####`);
console.log(`##############################`);
// 1.
console.log(`#-----1.1-----#`);
provinces.forEach((province) => console.log(province));

console.log(`#-----1.2-----#`);
names.forEach((name) => console.log(name));

console.log(`#-----1.3-----#`);
names.forEach((name, index) => {
  console.log(`${name} (${provinces[index]})`);
});

// 2.
console.log(`#-----2-----#`);
provinces.map((province) => console.log(province.toUpperCase()));

// 3.
console.log(`#-----3-----#`);
names.map((name) => console.log(name.length));

// 4.
console.log(`#-----4-----#`);
console.log(provinces.sort());

// 5.
console.log(`#-----5-----#`);
const filteredProvinces = provinces.filter(
  (province) => !province.includes("Cape")
);
console.log(`Remaining Provinces: ${filteredProvinces.length}`);

// 6.
console.log(`#-----6-----#`);
const hasletterS = names.map((name) =>
  name.split("").some((letter) => letter === "S")
);
console.log(hasletterS);

//  7.
console.log(`#-----7-----#`);
const nameProvinceObj = names.reduce((acc, name, index) => {
  acc[name] = provinces[index];
  return acc;
}, {});

console.log(nameProvinceObj);

console.log(`##############################`);
console.log(`##### ADVANCED EXERCISES #####`);
console.log(`##############################`);

// A list of products with prices:
const products = [
  { product: "banana", price: "2" },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: "8" },
  { product: "coffee", price: 10 },
  { product: "tea", price: "" },
];

// 1. Log Products
console.log(`#-----1-----#`);

console.log(products.map((product) => product.product).join(", "));

// 2. Filter by Name Length (<= 5 characters)
console.log(`#-----2-----#`);
console.log(
  products
    .filter((product) => product.product.length <= 5)
    .map((product) => product.product)
    .join(", ")
);

// 3. Price Manipulation (Filter out empty prices, convert to numbers, and calculate total)
console.log(`#-----3-----#`);
console.log(
  products
    .filter((product) => product.price !== "")
    .map((product) => parseFloat(product.price) || 0)
    .reduce((acc, price) => acc + price, 0)
);

// 4. Concatenate Product Names
console.log(`#-----4-----#`);
console.log(products.reduce((acc, product) => acc + product.product, ""));

// 5. Find Extremes in Prices (Highest and Lowest)
console.log(`#-----5-----#`);
console.log(
  (() => {
    const validPrices = products
      .filter(
        (product) => !isNaN(parseFloat(product.price)) && product.price !== ""
      )
      .map((product) => parseFloat(product.price));

    const maxPrice = Math.max(...validPrices);
    const minPrice = Math.min(...validPrices);

    return `Highest: ${maxPrice}. Lowest: ${minPrice}.`;
  })()
);

// 6. Object Transformation (Using Object.entries and reduce)
console.log(`#-----6-----#`);
console.log("I have no idea how to do this");
