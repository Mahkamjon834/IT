console.log("Hello world");

// let request = new XMLHttpRequest();
// request.addEventListener("readystatechange", () => {
// //   console.log(request, request.readyState);
//  if(request.readyState === 4){
//     console.log(request.responseText);
//  }
// });

// // open - so'rov tayyorlaymiz
// request.open("GET", "https://jsonplaceholder.typicode.com/todos");
// // send -> yuborish
// request.send();

// readyState 
// 1 open() bo'lsa
// 2 send() send bo'lsa
// 3 loading...
// 4 malumot keldi

fetch("https://jsonplaceholder.typicode.com/todos")
.then((data)=>{
    return data.json()
})
.then((res)=>{
    console.log(res);
})
.catch((err) =>{
    console.log(err);   
})




