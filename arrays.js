var chocolateBars = 
[
  "snickers",
  "hundred grand",
  "kitkat",
  "skittles"
  ]
  
 function addElementToBeginningOfArray(array, element) {
  return [element, ...array]
}
  
function destructivelyAddElementToBeginningOfArray(array, elemen){
  array.unshift(element)
  return array
}

function addElementToEndofArray(array, element) {
  return [...array, element]
}
