/*
ASSIGNMENT RULES
- All the answers must be in JavaScript
- You can google / use StackOverflow BUT we suggest you to use just the material provided
- You can ask for tutor's help
- You can test your code in a separate file or commenting the single parts in this file or directly in the Developer Console or in the Node Console.
*/

/* EXERCISE 1
Create and array with the first 5 positive numbers
*/

//const myArray = [1, 2, 3, 4, ,5 ];


/* EXERCISE 2
Create an object containing your name, surname, email address and age.
*/
//hello
const myObject = {
    name: "Akbar",
    surname: "Isakov",
    email: "isakov56cc@gmail.com",
    age: 20,
}

/* EXERCISE 3
Add to the previously created object a boolean value to rappresent wheter you have or not a driving license
*/

myObject.drinvingLicense = false;
console.log(myObject.drinvingLicense);

/* EXERCISE 4
Remove from the previously created object the age
*/

delete myObject.age;
console.log(myObject.age);

/* EXERCISE 5
Create a second object with name, surname, email address and verify that this object has a different email address
*/

const secondObject = {
    name: "Harry",
    surname: "Potter",
    email: "harrypotter8@mail.com"
}
console.log(myObject.email === secondObject.email)
/* EXERCISE 6
You are working for an eCommerce. In the variable totalShoppingCart you have the total amount spent by the current user.
In your eCommerce you have a promotion: if the customer shopping cart is more than 50€, they can have free shipping (otherwise it costs 10€).
Write an algorithm that calculate totalCost based on this assumption.
*/
// const totalShoppingCart = 42;
// if (totalShoppingCart < 50){
//     const totalCost =(totalShoppingCart + 10);
//     console.log("Total cost: " + totalCost);
// }else{
//     console.log("Total cost: " + totalShoppingCart)
// }
/* EXERCISE 7
You are working for the same eCommerce. Today is the black friday and everything has a 20% discount at the end of the purchase.
Modify the previous answer inserting this information and, applying the same rules for the shipping cost, calculate the totalShopping.
*/

// const totalShoppingCart = 60;
// if (totalShoppingCart < 50){
//     const totalCost =(totalShoppingCart + 10) - (((totalShoppingCart + 10) / 100) *20);
//     console.log("Total cost: " + totalCost);
// }else{
//     console.log("Total cost: " +(totalShoppingCart - ((totalShoppingCart / 100) * 20)))
// }

/* EXERCISE 8
Create an object rapresenting a car with properties like brand, model, licensePlate.
After you create the first car, clone it and change the licensePlate without affecting the original car.
Do it for five cars.
*/

const carOriginal = {
    brand: "Tesla",
    model: "Model 3",
    licensePlate: 123,
}

const car1 = Object.assign({}, carOriginal);
car1.licensePlate = 456;
console.log(car1.licensePlate)
console.log(carOriginal.licensePlate)

const car2 = Object.assign({}, carOriginal);
car2.licensePlate = 789;

const car3 = Object.assign({}, carOriginal);
car3.licensePlate = 147;

const car4 = Object.assign({}, carOriginal);
car4.licensePlate = 258;

const car5 = Object.assign({}, carOriginal);
car5.licensePlate = 369;




/* EXERCISE 9
Create a new array called carsForRent containing all the cars from the previous exercise
*/

const carsForRent = [carOriginal, car1, car2, car3, car4, car5]

/* EXERCISE 10
Remove the first and the last car from the carsForRent array.
*/

carsForRent.slice(1, 6);

/* EXERCISE 11
Print in the console, the types of a single car, of the car licensePlate and of the brand
*/

console.log(carsForRent[2])

/* EXERCISE 12
Create a new array called carsForSale and insert 3 cars in it.
Store in the variable totalCars the number of cars in both carsForSale and carsForRent arrays
*/

const carsForSale = [car2, car3, car4];
const totalCars = carsForRent.concat(carsForSale).length;
console.log(totalCars);

/* EXERCISE 13
Print in the console the data from each car in the carsForSale array
*/

console.log(carsForSale[0])
console.log(carsForSale[1])
console.log(carsForSale[2])

/* WHEN YOU ARE FINISHED
Send the code on Discord via a message to your tutor! In the next days we'll also learn how to use GIT 
*/
