//Intially create the two lists which have some elents common
let carList1 = ['RolceRoyce', 'Kia', 'Maruthi', 'Ferrari', 'Tesla', 'Toyota'];
let carList2 = ['Kia', 'Honda', 'Ferrari', 'Toyota', 'Bugati', 'Ford'];

//Create an three Empty lists  as for per problem statement requirment.
let onlyCarsInList1 = [];
let onlyCarsInlist2 = [];
let commonCars = [];

//Getting of unique Cars from carList1 which are not in the carList2 without using Array methods
for (let i = 0; i < carList1.length; i=i+1) {
    let carIsThere = false;
    for (let j = 0; j < carList2.length; j=j+1) {
        if (carList1[i] === carList2[j]) {
            carIsThere = true;
            break;
        }
    }
    if (!carIsThere) 
    onlyCarsInList1.push(carList1[i]);
}
console.log(onlyCarsInList1);
//Getting of unique Cars from carList2 which are not in the carList1 without using Array Methods
for (let i = 0; i < carList2.length; i=i+1) {
    let carIsThere = false;
    for (let j = 0; j < carList1.length; j = j+ 1) {
        if (carList2[i] === carList1[j]) {
            carIsThere = true;
            break;
        }
    }
    if (!carIsThere)
    onlyCarsInlist2.push(carList2[i]);
}

console.log(onlyCarsInlist2);

//Getting of commonCars from carList1 and carList2 without using Array Methods
for (let i = 0; i < carList1.length; i= i+1) {
    for (let j = 0; j < carList2.length; j = j+1) {
        if (carList1[i] === carList2[j]) {
            commonCars.push(carList1[i]);
            break;
            
        }
    }
}
console.log(commonCars);