// 1 ham duoc truyen vao 1 ham khac thi goi la call back
// function abc(){
//     alert(` hello baby ^-^`)
// }
// document.addEventListener( "click" , abc);





// // try{
//     setTimeout(() =>{
//         eval( "XXX")
//     },3000);
// }catch(error){
//     console.log("loi sai");
// }

// // call back hell



// eventQueue va event oop

// khai bao Promise 
// let a = Promise( resolve , reject);
// // trong do resolve la dung va reject la sai
// //
// pending ; dang cho ket qua
// fulfilled ; da co ket qua
// rejected ; loi xay ra
// fetch tra ra luon cho minh 1 Promise


// function customizeFetch() {
//     return newPromise(resolve, reject) => {
//         console.log(" dong thu 3");
//         setTimeout(() => {
//             // neu thoi gian la diem so millisecond
//             // nei chai 2 du 1 thi thong bao thanh cong
//             // khong thi that bai
//             if (newDate().getMillisecond() % 2 === 1) {
//                 resole(" thanh cong");

//             } else {
//                 reject(" that bai");
//             }, 3000);
//     });
// }
// function changQuote() {
//     const quote = document.getElementById(" quote");
//     const quote = document.getElementById(" author");
//     customizeFetch()
//         .then((msg) => {
//             quote.innerText = msg;
//             auhther.innerText = " chung bien"

//         })

//         .catch((err) = > {
//             quote.innerText =
//                 "                "
//         author.innerText = " chung bt"

//         })

//}



// dong bo hoa

// async thi luon di cung voi await


// json trong js la object 