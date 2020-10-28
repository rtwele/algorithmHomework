function diff(arr1,arr2){
  var holderArray = [];
  for(var i = 0; i < arr1.length; i++){
      if(arr2.indexOf(arr1[i]) === -1){
          holderArray.push(arr1[i]);
      }
  }  
  for(var j = 0; j < arr2.length; j++){
      if(arr1.indexOf(arr2[j]) === -1){
          holderArray.push(arr2[j]);
      }
  }
  return holderArray;
}
console.log(diff([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(diff(["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]));

function sumAll(arr){
    var maxNum = Math.max.apply(null,arr);
    var minNum = Math.min.apply(null,arr);

    var range = maxNum - minNum;
    var total = 0;

    for(var i = 1; i < range; i++){
        total = total + minNum + i;
    }
    total = total + maxNum + minNum;
    return total;
}
console.log(sumAll([1,4]));
console.log(sumAll([4, 1]));
console.log(sumAll([5, 10]));
console.log(sumAll([10, 5]));

function myReplace(str, before, after){
    if(before.charAt(0) === before.charAt(0).toUpperCase()){
        str = str.replace(before,after.charAt(0).toUpperCase(0) + after.slice(1));
    } else{

    str = str.replace(before,after);
    }
    return str;
}
console.log(myReplace("Let us go to the store", "store", "mall"));
console.log(myReplace("He is Sleeping on the couch", "Sleeping", "sitting"));