// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(name){
    cats.push("Ralph")
}
function destructivelyPrependCat(name){
    cats.unshift("Bob")

}
function destructivelyRemoveLastCat(name){
    cats.pop()
}

function destructivelyRemoveFirstCat(name){
    cats.shift()
}
function appendCat(name){
   const catAdd = [...cats, "Broom"]
   return catAdd

}
function prependCat(){
    const catAdd = ["Arnold",...cats]
    return catAdd
}
function removeLastCat(){
    const removeCat = cats.slice(0, cats.length -1 )
    return removeCat
}
function removeFirstCat(){
    const removeCat = cats.slice(1)
    return removeCat

}

//const destructivlyAppendCat = (cats.push ("Billy"))
// cats.push("Milo", "Otis", "Garfield")
// function destructivelyAppendCat(name)
// cats.push("Ralph")ß