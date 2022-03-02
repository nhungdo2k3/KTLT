// Lay du lieu tu file txt

function getTextFile() {
  var promise = axios({
    url: "./data/data.txt", // duong dan den file hoac api cua BE
    method: "GET", // method do BE quy dinh
    responseType: "text", // Kieu duc lieu sau khi doc file
  });

  promise.then(function (result) {
    // function nay se chay sau khi request den server thanh cong
    console.log(result.data);
    document.querySelector("body").innerHTML = `<p>${result.data}</p>`;
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

// getTextFile();

// Lay du lieu tu file xml
function getXMFile() {
  var promise = axios({
    url: "./data/data.xml", // duong dan den file hoac api cua BE
    method: "GET", // method do BE quy dinh
    responseType: "document",
  });

  promise.then(function (result) {
    console.log(result.data);
    var ketQua = result.data;
    var hoTen = ketQua.getElementsByTagName("hoten");
    document.querySelector("body").innerHTML = hoTen[0].innerHTML;
  });
  promise.catch(function (error) {
    console.lof(error);
  });
}

// getXMFile();

// Lay du lieu tu file JSON
function getJSONFile() {
  var promise = axios({
    url: "./data/data.json", // duong dan den file hoac api cua BE
    method: "GET", // method do BE quy dinh
    // responseType: "json",
  });

  promise.then(function (result) {
    console.log(result.data);
  });

  promise.catch(function (error) {
    console.log(error);
  });
}

getJSONFile();
