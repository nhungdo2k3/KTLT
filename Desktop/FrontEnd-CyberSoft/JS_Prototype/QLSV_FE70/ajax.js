function getAPISinhVien() {
  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/LayDanhSachSinhVien",
    method: "GET",
  });

  promise.then(function (result) {
    console.log(result.data);
    renderTableSV(result.data);
  });
  promise.catch(function (error) {
    console.log(error);
  });
}

document.querySelector("#btnXacNhan").onclick = function () {
  var sinhVien = {
    maSinhVien: document.querySelector("#maSinhVien").value,
    tenSinhVien: document.querySelector("#tenSinhVien").value,
    loaiSinhVien: document.querySelector("#loaiSinhVien").value,
    diemToan: document.querySelector("#diemToan").value,
    diemLy: document.querySelector("#diemLy").value,
    diemHoa: document.querySelector("#diemHoa").value,
    diemRenLuyen: document.querySelector("#diemRenLuyen").value,
    email: document.querySelector("#emailSinhVien").value,
    soDienThoai: document.querySelector("#sdtSinhVien").value,
  };

  var promise = axios({
    url: "http://svcy.myclass.vn/api/SinhVienApi/ThemSinhVien",
    method: "POST",
    data: sinhVien,
  });

  promise.then(function (result) {
    alert("Them thanh cong sinh vien: ", result);
    getAPISinhVien();
  });

  promise.catch(function (error) {
    alert(error);
  });
};

function xoaSinhVien(maSV) {
  var promise = axios({
    url: `http://svcy.myclass.vn/api/SinhVienApi/XoaSinhVien?maSinhVien=${maSV}`,
    method: "DELETE",
  });

  promise.then(function (result) {
    alert("Xoa thanh cong sinh vien: ", result);
    getAPISinhVien();
  });

  promise.catch(function (error) {
    alert(error);
  });
}

function suaSinhVien(maSV) {
  document.querySelector("#btnCapNhat").disabled = false;
  document.querySelector("#btnXacNhan").disabled = true;
  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/LayThongTinSinhVien?maSinhVien=" +
      maSV,
    method: "GET",
  });

  promise.then(function (result) {
    var sv = result.data;
    document.querySelector("#maSinhVien").value = sv.maSinhVien;
    document.querySelector("#maSinhVien").disabled = true;
    document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
    document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
    document.querySelector("#emailSinhVien").value = sv.email;
    document.querySelector("#sdtSinhVien").value = sv.soDienThoai;
    document.querySelector("#diemToan").value = sv.diemToan;
    document.querySelector("#diemLy").value = sv.diemLy;
    document.querySelector("#diemHoa").value = sv.diemHoa;
    document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
  });
}

document.querySelector("#btnCapNhat").onclick = function () {
  document.querySelector("#btnCapNhat").disabled = true;
  document.querySelector("#btnXacNhan").disabled = false;
  var sinhVien = {
    maSinhVien: document.querySelector("#maSinhVien").value,
    tenSinhVien: document.querySelector("#tenSinhVien").value,
    loaiSinhVien: document.querySelector("#loaiSinhVien").value,
    diemToan: document.querySelector("#diemToan").value,
    diemLy: document.querySelector("#diemLy").value,
    diemHoa: document.querySelector("#diemHoa").value,
    diemRenLuyen: document.querySelector("#diemRenLuyen").value,
    email: document.querySelector("#emailSinhVien").value,
    soDienThoai: document.querySelector("#sdtSinhVien").value,
  };

  var promise = axios({
    url:
      "http://svcy.myclass.vn/api/SinhVienApi/CapNhatThongTinSinhVien?maSinhVien=" +
      sinhVien.maSinhVien,
    method: "PUT",
    data: sinhVien,
  });

  promise.then(function (result) {
    alert("Cap nhat thanh cong sinh vien: ", result);
    getAPISinhVien();
  });

  promise.catch(function (error) {
    alert(error);
  });
};

const renderTableSV = (arr) => {
  var noiDung = "";
  arr.forEach((element) => {
    var sv = new SinhVien(
      element.maSinhVien,
      element.tenSinhVien,
      element.loaiSinhVien,
      element.email,
      element.soDienThoai,
      element.diemToan,
      element.diemLy,
      element.diemHoa,
      element.diemRenLuyen
    );
    noiDung += `
          <tr>
              <td>${sv.maSinhVien}</td>
              <td>${sv.tenSinhVien}</td>
              <td>${sv.loaiSinhVien}</td>
              <td>${sv.tinhDiemTrungBinh()}</td>
              <td>${sv.diemRenLuyen}</td>
              <td class="text-center">
                  <button
                   class="btn btn-danger"
                   onclick=xoaSinhVien('${sv.maSinhVien}')>
                      Xóa
                  </button>
                  <button
                   class="btn btn-primary"
                   onclick=suaSinhVien('${sv.maSinhVien}')>
                      Sửa
                  </button>
              </td>
          </tr>
        `;
  });

  document.querySelector("#tbodySV").innerHTML = noiDung;
};

getAPISinhVien();
