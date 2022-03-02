//  //Lập trình trong thẻ này

//         //Khai báo biến
//         /*
//             Đặt tên biến trong js cần lưu ý:
//             + Tên biến không chứa ký tự đặc biệt (!@#$%^&*<>+-*)
//             + Tên biến không bắt đầu từ số 1hoTen => hoTen1
//             ho_ten => hoTen
//             + Tên biến phải có nghĩa (Tuyệt đối không đặt x y z t ....)
//         */
//             var hoTen = 'hoàng đẹp trai';
//             var hopLe = true;
//             var soThuTu = 5;
//             var uf = undefined; //Không xác định - không tồn tại
//             var n = null; // Rỗng không chứa giá trị

//             console.log(typeof (soThuTu))
//             console.log('Hello ', hoTen)
//             //Cấu trúc rẻ nhánh if else
//             var number = 5;

//             if (number % 2 === 0) {
//                 console.log('Số chẵn');
//             }

//             if (number % 2 === 0) {
//                 console.log('Sỗ chẵn');
//             } else {

//                 console.log('Số lẻ');
//             }

//             //Nhập vào 1 số từ 1 -> 5 => in ra màn hình số đó = chữ. Nếu người dùng nhập số lớn hơn 5 hoặc bé hơn 1 => không thể đọc
//             // 1 => số một
//             // 2 => số hai
//             //Cách 1:
//             var n = 4;
//             if (n === 1) {
//                 console.log('Số một')
//             }
//             if (n === 2) {
//                 console.log('Số hai')
//             }
//             if (n === 4) {
//                 console.log('Số bốn')
//             }
//             if (n === 3) {
//                 console.log('Số ba')
//             }
//             if (n === 5) {
//                 console.log('Số năm')
//             }

//             //Cách 2:
//             if (n === 1) {
//                 console.log('Số một')
//             } else if (n === 2) {
//                 console.log('Số hai')
//             } else if (n === 3) {
//                 console.log('Số ba')
//             } else if (n === 4) {
//                 console.log('Số bốn')
//             } else if (n === 5) {
//                 console.log('Số năm')
//             } else {
//                 console.log('Không thể đọc')
//             }

//             //Cách 3:
//             switch (n) {
//                 case 1: {
//                     console.log('Số một');
//                 } ; break;
//                 case 2: {
//                     console.log('Số hai')
//                 }; break;
//                 case 3: {
//                     console.log('Số ba');
//                     // break;
//                 };break;
//                 case 4: {
//                     console.log('Số bốn')
//                 };break;
//                 case 5 :{
//                     console.log('Số năm')
//                 };break;
//                 default : {
//                     console.log('Không thể đọc')
//                 }
//             }

//             //Định nghĩa hàm trong javascript

//             //Cách 1: expressions function (Một function khai báo như 1 biến) (Không hổ trợ hoisting)
//             var showMess = function () {
//                 console.log('Hello cybersoft');
//             }
//             //Gọi hàm
//             showMess();

//             //Cách 2: Declaration function (hổ trợ hoisting - cho phép gọi hàm trước khi khai báo)
//             function showMess1 () {
//                 console.log('Hello cybersoft!');
//             }
//             //Gọi hàm
//             showMess1();

//             // tính điểm trung bình
//             var tinhDiemTrungBinh =  function (diemToan,diemLy,diemHoa) {//Input
//                 var diemTrungBinh = 0;

//                 diemTrungBinh = (diemToan + diemLy + diemHoa) /3;

//                 return diemTrungBinh; //Output => là kết quả khi hàm xử lý xong
//             }

//             //Gọi hàm
//             var dtb = tinhDiemTrungBinh(9,8,7);

//             console.log('dtb',dtb);

/*
    Thao tác truy xuất thẻ thông qua id
*/

var tagTitle = document.getElementById("title");

/*
    .innHTML : Nội dung giữa 2 thẻ đóng mở 
*/

tagTitle.innerHTML = "Hello frontend 70";

/*
    .value : thuộc tính người dùng nhập liệu trên thẻ input
*/

var tagInput = document.getElementById("txtInput");
tagInput.value = "frontend 70";

/*
    .src: Thuộc tính qui định hình ảnh load trên thẻ img
*/

var tagImg = document.getElementById("img");
tagImg.src = "./img/img2.jpeg";

/*
    .className: Thuộc tính qui định class của thẻ
*/

var button = document.getElementById("btnSubmit");
button.className = "btn btn-outline-success";

/*
    Sự kiện trong javascript
*/

function handleClickButton() {
  alert("Hello frontend 70");
}
/*
    Bài tập: Xây dựng chương trình khi người dùng click vào nụt button#btnNhanEmDi => Nội dung của thẻ p#NoiDung thay đổi thành 'đã thay đổi rồi nhé!'
*/

// function thayDoiNoiDung() {
//     //Thay đổi nội dung thẻ p
//     var tagP = document.getElementById('noiDung');
//     tagP.innerHTML = 'Đã thay đổi rồi nhé !';
// }

/*
    Cách cài đặt sử kiện onclick cho thẻ
    cách 1: 
    .onclick = callbackFunction 
*/

var tagButton = document.getElementById("btnNhanEmDi");
// tagButton.onclick = thayDoiNoiDung;

tagButton.onclick = function () {
  //Thay đổi nội dung thẻ p
  var tagP = document.getElementById("noiDung");
  tagP.innerHTML = "Đã thay đổi rồi nhé !";
};

/*
    Cách 2: addEventListener 
*/
document.getElementById("btnNhanEmDi").addEventListener("click", function () {
  var tagP = document.getElementById("noiDung");
  tagP.innerHTML = "Đã thay đổi rồi nhé !";
});

/*
    Thay đổi style của thẻ
*/
var fSize = 17;
var tagP = document.getElementById("pContent");
tagP.style.fontSize = fSize + "px";

document.getElementById("btnZoomIn").onclick = function () {
  // console.log('123')
  fSize = fSize + 1; // fSize++
  //Dom đến tagP (p#pContent)=> Gán lại style.fontSize
  tagP.style.fontSize = fSize + "px";
};
document.getElementById("btnZoomOut").onclick = function () {
  // console.log('123')
  fSize = fSize - 1; // fSize--
  //Dom đến tagP (p#pContent)=> Gán lại style.fontSize
  tagP.style.fontSize = fSize + "px";
};

// Bai tap bat tat den
const btnOn = document.querySelector("#btn-on");
const btnOff = document.querySelector("#btn-off");
const imgBulb = document.querySelector("#imgBulb");

btnOn.onclick = () => {
  imgBulb.src = "./img/pic_bulbon.gif";
  btnOn.classList.add("btn-success");
  btnOff.classList.remove("btn-success");
};

btnOff.onclick = () => {
  imgBulb.src = "./img/pic_bulboff.gif";
  btnOff.classList.add("btn-success");
  btnOn.classList.remove("btn-success");
};

// Bai tap 3: Thay doi noi dung css
const h3Title = document.querySelector("#h3title");
const pNoiDung = document.querySelector("#pNoiDung");
const btnThayDoi = document.querySelector("#btnThayDoi");

btnThayDoi.onclick = () => {
  pNoiDung.style.display = "none";
  h3Title.style.opacity = "0.5";
  h3Title.style.border = "1px solid black";
  h3Title.style.fontSize = "30px";
  h3Title.style.background = "red";
};

//  Bai tap 5
const userName = document.querySelector("#userName");
const password = document.querySelector("#password");
const form = document.querySelector("#form");
const btnSubmit = document.querySelector("#btnEnter");
console.log(btnSubmit);

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let valueUserName = userName.value;
  let valuePassword = password.value;
  console.log(valueUserName, valuePassword);
  if (valueUserName === "a" && valuePassword === "a") {
    btnSubmit.classList.add("btn-success");
    btnSubmit.classList.remove("btn-danger");
    btnSubmit.innerHTML = "Dang nhap thanh cong";
  } else {
    btnSubmit.classList.add("btn-danger");
    btnSubmit.classList.remove("btn-success");
    btnSubmit.innerHTML = "Dang nhap that bai";
    userName.focus();
  }
});

// Truy xuat thong qua tag name
const section = document.querySelectorAll("section");
section[1].innerHTML = "section changed";
// Thay doi tat ca cas section thanh bgc mau do, chu mau trang
for (var i = 0; i < section.length; i++) {
  section[i].style.backgroundColor = "red";
  section[i].style.color = "#fff";
  section[i].style.marginBottom = "10px";
}

// Project tinh tien
const money = document.querySelector("#money");
const tip = document.querySelector("#tip");
const people = document.querySelector("#people");
const btnTinhTien = document.querySelector("#btnTinhTien");
const textResult = document.querySelector("#text-result");

btnTinhTien.onclick = () => {
  let valueMoney = money.value;
  let valueTip = tip.value;
  let valuePeople = people.value;
  let result = 0;
  result = (valueMoney * valueTip) / 100 / valuePeople;
  textResult.innerHTML = result;
};
