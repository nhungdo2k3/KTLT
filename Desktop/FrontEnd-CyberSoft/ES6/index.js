// /*
//     1. let, var, const
//     - var:
//         + hoisting
//         + Cho khai báo cùng tên nhưng là gán vào biến đã khai báo
//     - let:
//         + Không có hoisting
//         + Trong cùng 1 scope không cho khai báo cùng tên. Nếu khai báo 2 biến cùng tên khác scope thì browser sẽ tự hiểu 2 biến khác nhau
//     - const:
//         + Không gán lại giá trọ khác được
//         + Khai báo biến cùng tên nếu khác scope sẽ giống let
// */
// // let hoTen = "Nguyen Van A";
// // let hoTen = "ABC";

// // console.log(hoTen);

// let arrBtn = document.querySelectorAll("button");
// arrBtn.forEach((btn, index) => {
//   btn.onclick = () => {
//     alert(index);
//   };
// });

// /*
//     Bài tập 1: Cho mảng màu, yêu cầu:
//         1. Từ mảng màu load ra mảng btn tương đương đưa lên giao diện div#colors
//         2. Xây dựng tính năng khi click vào btn màu nào thì div#home thay đổi thành màu đó
// */

// let colors = ["red", "green", "blue", "pink", "purple"];

// // convert array color to html and add to div#color
// let htmlBtn = "";
// colors.forEach((color) => {
//   htmlBtn += `
//         <button class="btn-color btn" style="background-color: ${color}">
//             ${color}
//         </button>
//     `;
// });
// document.querySelector("#colors").innerHTML = htmlBtn;

// // add event click for btnColor
// let arrBtnColor = document.querySelectorAll(".btn-color");
// arrBtnColor.forEach((btnColor) => {
//   let color = btnColor.innerHTML;
//   btnColor.onclick = () => {
//     document.querySelector("#home").style.color = color;
//   };
// });

// /*
//     declaration function: hoisting (function abc)
//     expression function: ko có hoisting (let abc = function)
//     2. Arrow function
// */

// //es5
// function test(param) {
//   return "test " + param;
// }
// //es6
// let test1 = (param) => "test " + param;

// console.log(test(1), test1(2));

// /*
//     context(con tro this):
//         - Mặc định: this là window
//         - Object: this đại diện cho Object đó
//         - Function: this đại diện cho function
//         - Đối với Arrow Function: không có con trỏ this
//         - Arrow dùng để tạo các hàm xử lý bình thường (ko phải phương thức hay prototype)
// */

// let hocVien = {
//   id: 1,
//   hoTen: "Nguyen Van A",
//   hienThiThongTin: function () {
//     console.log("Ho ten: " + this.hoTen);
//   },
// };

// // let HocVienA = {
// //   id: 1,
// //   tenHocVien: "Nguyen Van A",
// //   hienThiThongTin: function () {
// //     function HienThi() {
// //       console.log("Ho ten: " + this.tenHocVien);
// //     }
// //     HienThi();
// //   },
// // };
// // HocVienA.hienThiThongTin();

// let HocVienB = {
//   id: 1,
//   tenHocVien: "Nguyen Van A",
//   hienThiThongTin: function () {
//     const HienThi = () => {
//       console.log("Ho ten: " + this.tenHocVien);
//     };
//     HienThi();
//   },
// };
// HocVienB.hienThiThongTin();

// /*
//     3. res params
// */

// // function TinhToan(a, b) {
// //   console.log(a + b);
// // }

// // function TinhToan(a, b, c) {
// //   console.log(a + b + c);
// // }

// function TinhToan(...resParams) {
//   switch (resParams.length) {
//     case 2: {
//       console.log(resParams[0] + resParams[1]);
//       break;
//     }
//     case 3: {
//       console.log(resParams[0] + resParams[1] + resParams[2]);
//       break;
//     }
//     default: {
//       console.log("Tham so khong hop le");
//     }
//   }
// }

// TinhToan(1, 2);
// TinhToan(1, 2, 3);

// /*
//     4. Spread Operator
//  */

// let hocVien1 = { id: 5 };
// let hocVien2 = hocVien1;
// hocVien2.id = 10;
// console.log("id1: " + hocVien1.id + "; id2: " + hocVien2.id);

// let hocVien3 = { id: 100 };
// let hocVien4 = { ...hocVien3 };
// hocVien4.id = 999;
// console.log("id3: " + hocVien3.id + "; id4: " + hocVien4.id);

// /*
//     5. Default Params
// */

// function GetInfor(name = "Minh", age = 20) {
//   console.log(name, age);
// }

// GetInfor();
// GetInfor("Loan");
// GetInfor("Loan", 18);

// /*
//     6. Destructuring
// */

// let product = {
//   id: 1,
//   name: "Iphone",
//   price: 1000,
//   showInfor: function () {
//     console.log(this.id, this.name, this.price);
//   },
// };

// product.showInfor();

// let { id, showInfor, ...rest } = product;
// console.log(id, showInfor, rest);

// let sanPham = [
//   1,
//   "Iphone",
//   1000,
//   function () {
//     console.log(this.id, this.name, this.price);
//   },
// ];

// let [maSP, tenSP, giaSP, hienThiSP] = sanPham;

// console.log(maSP);

// /* For
//     - For ... in: duyet mang theo index, duyet Object
//     - For ... of: duyet mang theo phan tu
// */
// let arrProduct = [
//   {
//     id: 1,
//     name: "Iphone",
//   },
//   {
//     id: 2,
//     name: "SamSung",
//   },
// ];

// for (let product of arrProduct) {
//   console.log(product);
//   //   for (let attr in product) {
//   //     console.log(attr);
//   //   }
// }

// for (let product in arrProduct) {
//   console.log(product);
// }

// let arrProduct = [
//   { maSP: 1, tenSP: "Sony xperia xz2", gia: 1750, hangSX: "Sony" },
//   { maSP: 2, tenSP: "Sony xperia xz1", gia: 1550, hangSX: "Sony" },
//   { maSP: 3, tenSP: "Sony xperia xz premium", gia: 1850, hangSX: "Sony" },
//   { maSP: 4, tenSP: "Google pixel XL", gia: 2750, hangSX: "Google" },
//   { maSP: 5, tenSP: "Google pixel 2", gia: 1750, hangSX: "Google" },
//   { maSP: 6, tenSP: "Samsung galaxy note9", gia: 1750, hangSX: "Samsung" },
//   { maSP: 7, tenSP: "Samsung galaxy s10 plus", gia: 2750, hangSX: "Samsung" },
//   { maSP: 8, tenSP: "Samsung galaxy s10 5g", gia: 3750, hangSX: "Samsung" },
// ];

// let arrProductSony = arrProduct.filter((product) => {
//   return product.hangSX === "Sony";
// });

// let sp7 = arrProduct.find((product) => {
//   return product.maSP === 7;
// });

// let html = arrProduct.map((prod) => {
//   return `<h1>${prod.tenSP}</h1>`;
// });

// let totalPrice = arrProduct.reduce((acc, prod) => {
//   return (acc += prod.gia);
// }, 0);

// let htmlProd = arrProduct.reduce((result, product) => {
//   return (result += `<p>${product.tenSP}: ${product.gia}.000vnd`);
// }, "");

// document.querySelector("body").innerHTML = htmlProd;

// let arrProductSort = arrProduct.sort((sp, spTruoc) => {
//   let tenSP = sp.tenSP.toLowerCase().trim();
//   let tenSPTruoc = spTruoc.tenSP.toLowerCase().trim();
//   if (tenSP > tenSPTruoc) {
//     return -1;
//   } else {
//     return 1;
//   }
// });

// console.log(arrProductSort);

/*
  Xay dung xu ly in thong tin sinh vien
*/

class SinhVien {
  maSinhVien = "";
  tenSinhVien = "";
  email = "";
  soDienThoai = "";
  loaiSinhVien = "";
}

let arrSinhVien = [];

const renderTable = () => {
  let html = arrSinhVien.reduce((result, sv) => {
    return `
      <tr>
        <td>${sv.maSinhVien}</td>
        <td>${sv.tenSinhVien}</td>
        <td>${sv.email}</td>
        <td>${sv.soDienThoai}</td>
        <td>${sv.loaiSinhVien}</td>
      </tr>
    `;
  }, "");

  document.querySelector("#tblSinhVien").innerHTML = html;
};

document.querySelector("#btnInThongTin").onclick = () => {
  var arrayInput = document.querySelectorAll(
    "#formSinhVien input, #formSinhVien select"
  );

  let SinhVienObject = {};

  for (let input of arrayInput) {
    let { id, value } = input;
    SinhVienObject = { ...SinhVienObject, [id]: value };
  }

  arrSinhVien.push(SinhVienObject);

  renderTable();
};
