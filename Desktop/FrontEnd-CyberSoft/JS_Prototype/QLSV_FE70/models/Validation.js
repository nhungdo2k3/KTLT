function Validation() {
  this.kiemTraRong = function (value, selectorError) {
    if (value.trim() === "") {
      document.querySelector(selectorError).innerHTML = "Khong duoc bo trong!";
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };

  this.kiemTraKiTu = function (value, selectorError) {
    regexLetter = /^[A-Z a-z]+$/;
    if (regexLetter.test(value) === false) {
      document.querySelector(selectorError).innerHTML =
        "Khong duoc chua so hoac ki tu dac biet!";
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };

  this.kiemTraSo = function (value, selectorError) {
    regexLetter = /^[0-9]+$/;
    if (regexLetter.test(value) === false) {
      document.querySelector(selectorError).innerHTML = "Vui long chi nhap so!";
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };

  this.kiemTraGiaTri = function (value, selectorError, minValue, maxValue) {
    if (Number(value) > maxValue || Number(value) < minValue) {
      document.querySelector(
        selectorError
      ).innerHTML = `Vui long chi nhap so tu ${minValue} den ${maxValue}!`;
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };

  this.kiemTraEmail = function (value, selectorError) {
    var regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (regexEmail.test(value) === false) {
      document.querySelector(selectorError).innerHTML = "Email khong hop le!";
      return false;
    } else {
      document.querySelector(selectorError).innerHTML = "";
      return true;
    }
  };
}
