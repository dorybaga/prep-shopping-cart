window.onload = function(){

var vendor = [
  { name: "Lusicious Jello Mix", description: ["Very Elegant", "Trending item", "Come in Purple"], price: 80.65 },
  { name: "Tarnished Standing Desk", description: ["Modular", "Works for both Tall and Loud People", "Smells like Productivity"], price: 1654.99},
  { name: "Hand-made Hand Grenades", description: ["Such gift!", "Much boom!", "Very safe for kids"], price: 10.44},
  { name: "Pan-fried Cookie Dough", description: ["Chocolate", "Family-size", "Hot Mess"], price: 16.99 },
  { name: "Fancy Dress Hanger", description: ["Keep organized", "On Sale"], price: 67.32 },
  { name: "Snarky Britsh Mustache 3-Pack", description: ["Sharing is caring!", "Hugs not drugs", "As seen on 'So You Think You Can Dance - Nigeria!'"], price: 1.99 },
];

// console.log(vendor);

for (var i =0; i<vendor.length; i++){
	// console.log(vendor[i]);
	// console.log(vendor[i].name);
	// console.log(vendor[i].description);
	// console.log(vendor[i].price);


var itemBox = document.createElement("div");
itemBox.className = "generalContainer";
main.appendChild(itemBox);

var productName = document.createElement("div");
productName.className = "things";
productName.innerHTML = vendor[i].name;
itemBox.appendChild(productName);

var productSum = document.createElement("div");
productSum.className = "summary";
productSum.innerHTML = vendor[i].description;
itemBox.appendChild(productSum);

var productPrice = document.createElement("div");
productPrice.className = "cost";
productPrice.innerHTML = vendor[i].price;
itemBox.appendChild(productPrice);

}

function totalPrice (num){
	var myPrice = 0;
	for (var k =0; k<num.length;k++){
		myPrice += num[k].price;
}
	return myPrice;

}
totalPrice(vendor);
console.log(totalPrice(vendor));



};



