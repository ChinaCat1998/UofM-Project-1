// Shows the ingredients for the recipe with their amount and unit of measurements.
let recipe1 = [
    { name: "Sifted Flour", amount: 3 / 2, unit: "cups" },
    { name: "Granulated Sugar", amount: 1, unit: "cup" },
    { name: "Baking Powder", amount: 2, unit: "tsp" },
    { name: "Salt", amount: 1 / 2, unit: "tsp" },
    { name: "Vegetable oil", amount: 1 / 4, unit: "cup" },
    { name: "Egg (beaten)", amount: 1, unit: "unit" },
    { name: "Milk", amount: 1 / 2, unit: "cup" },
    { name: "Chopped Apples", amount: 2, unit: "units" },
    { name: "Brown Sugar", amount: 1 / 2, unit: "cup" },
    { name: "Topping Flour", amount: 2, unit: "tbsp" },
    { name: "Cinnamon", amount: 2, unit: "tbsp" },
    { name: "Butter", amount: 6, unit: "tbsp" },
    { name: "Chopped Walnuts", amount: 1, unit: "cup" },
    { name: "Confectioners' Sugar", amount: 1 / 3, unit: "cup" },
    { name: "Vanilla", amount: 1 / 4, unit: "tsp" },
    { name: "Milk (glaze)", amount: 1 / 2, unit: "tsp" }
];

let recipe2 = [
    { name: "Flank Steak", amount: 2, unit: "units" },
    { name: "Soy Sauce", amount: 1 / 4, unit: "cup" },
    { name: "Honey", amount: 3, unit: "tbsp" },
    { name: "Red Wine Vinegar", amount: 2, unit: "tbsp" },
    { name: "Garlic Powder", amount: 3 / 2, unit: "tsp" },
    { name: "Ground Ginger", amount: 3 / 2, unit: "tsp" },
    { name: "Vegetable Oil", amount: 3 / 4, unit: "cup" },
    { name: "Green Onion", amount: 1, unit: "units" }
];

let recipe3 = [
    { name: "Sugar", amount: 1, unit: "cup" },
    { name: "Water", amount: 3 / 4, unit: "cup" },
    { name: "Egg Yolks", amount: 12, unit: "units" },
    { name: "Evaporated Milk", amount: 12, unit: "ounces" },
    { name: "Sweetened Condensed Milk", amount: 14, unit: "ounces" },
    { name: "Vanilla", amount: 1, unit: "tbsp" }
];

let recipe4 = [
    { name: "Sweet Italian Sausage", amount: 1 / 2, unit: "lbs" },
    { name: "Ground Beef", amount: 1 / 2, unit: "lbs" },
    { name: "Chopped Garlic", amount: 1, unit: "clove" },
    { name: "Chopped Parsley", amount: 1 / 2, unit: "cup" },
    { name: "Egg (beaten)", amount: 1, unit: "unit" },
    { name: "Bread Crumbs", amount: 1, unit: "cup" },
    { name: "Salt", amount: 1 / 2, unit: "tsp" },
    { name: "Pepper", amount: 1 / 4, unit: "tsp" },
    { name: "Milk", amount: 1 / 2, unit: "cup" },
    { name: "Vegetable Oil", amount: 1, unit: "tbsp" }
];

let recipe5 = [
    { name: "Lemon Juice", amount: 2, unit: "tbsp" },
    { name: "Brown Sugar", amount: 1 / 4, unit: "cup" },
    { name: "Salmon Fillets", amount: 4, unit: "units" },
    { name: "Melted Butter", amount: 1, unit: "tbsp" },
    { name: "Lemon", amount: 4, unit: "slices" },
    { name: "Brown Sugar (Top)", amount: 8, unit: "tsp" }
];

let recipe6 = [
    { name: "Banana", amount: 1, unit: "unit" },
    { name: "Mango", amount: 1, unit: "unit" },
    { name: "Milk", amount: 1, unit: "cup" },
    { name: "Vanilla Yogurt", amount: 1, unit: "cup" },
    { name: "Vanilla", amount: 4, unit: "drops" },
    { name: "Pineapple Juice", amount: 1 / 2, unit: "cup" },
    { name: "Honey", amount: null, unit: null }
];

//Update recipe #6
recipe6.forEach(ingredient => {
    if (ingredient.name === "Honey") {
        ingredient.amount = ", to taste";
    }
});

//Display the updated recipe
console.log(recipe6);

const recipes = [recipe1, recipe2, recipe3, recipe4, recipe5, recipe6];

const UserInput = document.querySelector("#UserInput");

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  const user = UserInput.value.trim();{
    if (UserInput ==="flour","sugar","baking powder","salt","vegetable oil","egg","milk","apples","brown sugar","cinnamon","butter","walnuts","confectioners' sugar","vanilla","milk (glaze)") {
        console.log [recipe1];
        }else if (UserInput === "flank steak","soy sauce","honey","red wine vinegar","garlic powder","ground ginger","vegetable oil","green onion") {
        console.log[recipe2];
        }else if (UserInput === "sugar","water","egg yolks","evaporated milk","sweetened condensed milk","vanilla") {
        console.log[recipe3];
        }else if (UserInput === "sweet italian sausage","ground beef","chopped garlic","chopped parsley","egg","bread crumbs","salt","pepper","milk","vegetable oil") {
        console.log();
        }else if (UserInput === "lemon juice","brown sugar","salmon fillets","melted butter","lemon","brown sugar (top)") {
        console.log("Salmon-Fillets");
        }else if (UserInput === "banana","mango","milk","vanilla yogurt","vanilla","pineapple juice","honey") {
        console.log("Mango-Smoothie");
        return;
  };

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
});
