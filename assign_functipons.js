// You manage a grocery store and need to keep track of the inventory of various items. You will use arrays to store the data and various functions to manipulate and analyze the data. 
// Create an array containing the names of all items in the inventory maximum of 10.
// Create a separate array with the corresponding stock quantities of each item maximum of 10.
// Write a function to add a new item to the inventory, updating both arrays.
// Write a function to update the stock quantity of an existing item.
// /Write a function to calculate the total number of items in the inventory.
// Write a function to find the item with the lowest stock quantity.

let inventory=[];
let stockQuantities=[];

// add initial items and stock quantities
inventory.push('apples');
stockQuantities.push(5);
inventory.push('banana');
stockQuantities.push(6);
// function to add a new item to the inventory 
function addItem(itemName,itemQuantity){
    if(inventory.length <10){
        inventory.push(itemName);
        stockQuantities.push(itemQuantity);
    }else{
        console.log("Maximu inventory capacity reached");
    }
}
addItem("Mango", 6)
console.log(inventory)
// // function to update the stock quantity of existing item
function updateStcok(itemName,newQuantity){
    const index=inventory.indexOf(itemName);
    if(index!==-1){
      stockQuantities[index]=newQuantity;

    }else{
        console.log("item not found in inventory");
    }
}
// // fuction to calculate the total number of items in the inventory
function totalltems(){
    let tatol=0;
    for(let i =0;i <stockQuantities.length; i++){
        total +=stockQuantities[i]
    }
    return total;
}
// // function to find the item with the lowest stock quality

function lowstStock(){
    if(stockQuantities.length>0){
        const minQuantities=Math.max(...stockQuantities);
        const index=stockQuantities.indexOf(minQuantities);
        return inventory[index];
    }else{
        console.log("No items in inventory ")
    }
}

// addItem("Oranges",30);
updateStcok("Apples",20);
console.log(totalltems());
console.log(lowestStock());