// function getData() {
//     // 1.XMLHttpRequestオブジェクトを生成する
//     const request = new XMLHttpRequest(); //-- 1
//     // 2. XMLHttpRequestオブジェクトにイベントハンドラを設定して、通信時の処理を設定する
//     request.onreadystatechange = function() { //-- 2-1
//       if (request.readyState == 4) { //-- 2-2
//         if(request.status == 200) { //-- 2-3
//           console.log(request.response); //-- 2-4
//         }
//       }
//     }
//     // 3. リクエストを送信
//     request.open("GET", "data.txt"); //-- 3-1
//     request.responseType = "text"; //-- 3-2
//     request.send(null); //-- 3-3
//   }
  
//   window.onload = getData;


// let number = 0; //--1
// const titleArea = document.getElementById("title"); //--2
// const contentArea = document.getElementById("content"); //--2
// const videoArea = document.getElementById("video"); //--2
// const button = document.getElementById('btn'); //--3

// function getData() {
//   button.addEventListener('click', e => { //--4
//     const request = new XMLHttpRequest();
//     request.onreadystatechange = function() {
//       if (request.readyState == 4) {
//         if(request.status == 200) {
//           titleArea.innerHTML = request.response[number].title; //--5
//           contentArea.innerHTML = request.response[number].content; //--5
//           videoArea.setAttribute("src", request.response[number].url); //--6
//           number == 2 ? number = 0 : number++; //--7
//         }
//       }
//     }
//     request.open("GET", "ajax.json");
//     request.responseType = "json";
//     request.send(null);
//   })
// }

// window.onload = getData;



let number = 0;
let data = []; //--1
const button = document.getElementById('btn');
const titleArea = document.getElementById("title");
const contentArea = document.getElementById("content");
const videoArea = document.getElementById("video");

function getData() {
  const request = new XMLHttpRequest();
  request.onreadystatechange = function () {
    if (request.readyState == 4) {
      if (request.status == 200) {
        data = request.response
      }
    }
  }
  request.open("GET", "ajax.json");
  request.responseType = "json"
  request.send(null);
}

function changeVideo() {
  if (data.length < 1) { //--2
    getData();
  }
  button.addEventListener('click', e => {
    titleArea.innerHTML = data[number].title;
    contentArea.innerHTML = data[number].content;
    videoArea.setAttribute("src", data[number].url);
    number == 2 ? number = 0 : number++
  })
}

window.onload = changeVideo;





