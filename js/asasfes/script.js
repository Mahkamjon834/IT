// Object    key va velyudan tashkil topkan
let obj = {
    name: "Alex",
    age: 25,
}
// Tashqaridan qoshish
obj.age = 25
obj.lengvuch = "uzb"
// Ichidagini ozgartirish
obj.name = "bob"
obj.age = 20
console.log(obj)
// tatijani ozini  chiqarish
console.log(obj.name)
console.log(obj.name + "    " + obj.age)




let techer = {
    lastname: "Shohruhmirzo",
    forstname: "Nomonjonov",
    age: 20,
    phone: 948285228,
    isStudint: true,
    villej: "Namangan",
    Conntry:"UZB",
    cardName: 86000000000,
    job : 'developer',
}
console.log(techer)
console.log(techer.villej + "    " + techer.cardName + "    " + techer.phone)    


// Arrey
// Arrey "index " va "velyu" dan iborat
let arr =["red", "blek", "blu", "grin"]
console.log(arr)

// Arreyni ichidan qiymat opchiqish 
console.log(arr[2])

// Arreyni ichiga qiymat qoshish
arr[4] = 24
