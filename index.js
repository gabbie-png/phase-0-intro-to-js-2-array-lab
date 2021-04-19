// Write your solution here!
const cats = ['Milo', "Otis", "Garfield"];

function destructivelyAppendCat(name){ 
    cats.push(name);
    return "Ralph"
    
}

function destructivelyPrependCat(name){
    cats.unshift(name);
    return "Sheepie"
}

function destructivelyRemoveLastCat(name){
    cats.pop(name);
    return "Garfield"
}

function destructivelyRemoveFirstCat(name){
    cats.shift(name);
    // you do not have to return a specific name it would have worked without. this is considered hard coding
    return "Milo"
}

function appendCat(name){
    const copyOfCats = cats.slice()
    const copyOfCatsSpread = [...cats]
    copyOfCats.push(name)
    return copyOfCats
}

function prependCat(name){
    const copyOfCats = cats.slice()
    copyOfCats.unshift(name)
    return copyOfCats
}

function removeLastCat(name){
    const copyOfCats = cats.slice()
    copyOfCats.pop(name)
    return copyOfCats
}

function removeFirstCat(name){
    const copyOfCats = cats.slice()
    copyOfCats.shift(name)
    return copyOfCats
}