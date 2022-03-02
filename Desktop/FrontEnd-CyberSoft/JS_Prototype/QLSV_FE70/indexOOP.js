var arrSinhVien = [];
layLocalStorage();

var kiemTra = new Validation();

document.getElementById("btnXacNhan").onclick = function () {
  var sinhvien = new SinhVien();
  sinhvien.maSinhVien = document.querySelector("#maSinhVien").value;
  sinhvien.tenSinhVien = document.querySelector("#tenSinhVien").value;
  sinhvien.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  sinhvien.emailSinhVien = document.querySelector("#emailSinhVien").value;
  sinhvien.sdtSinhVien = document.querySelector("#sdtSinhVien").value;
  sinhvien.diemToan = document.querySelector("#diemToan").value;
  sinhvien.diemLy = document.querySelector("#diemLy").value;
  sinhvien.diemHoa = document.querySelector("#diemHoa").value;
  sinhvien.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  var valid = true;

  // validator input
  valid &= kiemTra.kiemTraRong(sinhvien.maSinhVien, "#error_maSinhVien");
  valid &= kiemTra.kiemTraRong(sinhvien.tenSinhVien, "#error_tenSinhVien");
  valid &= kiemTra.kiemTraKiTu(sinhvien.tenSinhVien, "#error_tenSinhVien");
  valid &= kiemTra.kiemTraEmail(sinhvien.emailSinhVien, "#error_emailSinhVien");
  valid &= kiemTra.kiemTraRong(sinhvien.sdtSinhVien, "#error_sdtSinhVien");
  valid &= kiemTra.kiemTraSo(sinhvien.sdtSinhVien, "#error_sdtSinhVien");
  valid &= kiemTra.kiemTraRong(sinhvien.diemToan, "#error_diemToan");
  valid &= kiemTra.kiemTraSo(sinhvien.diemToan, "#error_diemToan");
  valid &= kiemTra.kiemTraGiaTri(sinhvien.diemToan, "#error_diemToan", 0, 10);
  valid &= kiemTra.kiemTraRong(sinhvien.diemLy, "#error_diemLy");
  valid &= kiemTra.kiemTraSo(sinhvien.diemLy, "#error_diemLy");
  valid &= kiemTra.kiemTraGiaTri(sinhvien.diemLy, "#error_diemLy", 0, 10);
  valid &= kiemTra.kiemTraRong(sinhvien.diemHoa, "#error_diemHoa");
  valid &= kiemTra.kiemTraSo(sinhvien.diemHoa, "#error_diemHoa");
  valid &= kiemTra.kiemTraGiaTri(sinhvien.diemHoa, "#error_diemHoa", 0, 10);
  valid &= kiemTra.kiemTraRong(sinhvien.diemRenLuyen, "#error_diemRenLuyen");
  valid &= kiemTra.kiemTraSo(sinhvien.diemRenLuyen, "#error_diemRenLuyen");
  valid &= kiemTra.kiemTraGiaTri(
    sinhvien.diemRenLuyen,
    "#error_diemRenLuyen",
    0,
    100
  );

  if (!valid) {
    return;
  }

  arrSinhVien.push(sinhvien);

  luuLocalStorage();

  renderTableSV(arrSinhVien);

  //   {
  //     // Tao the tr
  //     var trSinhVien = document.createElement("tr");

  //     // Tao cac the td
  //     var tdMaSinhVien = document.createElement("td");
  //     tdMaSinhVien.innerHTML = sinhvien.maSinhVien;

  //     var tdTenSinhVien = document.createElement("td");
  //     tdTenSinhVien.innerHTML = sinhvien.tenSinhVien;

  //     var tdLoaiSinhVien = document.createElement("td");
  //     tdLoaiSinhVien.innerHTML = sinhvien.loaiSinhVien;

  //     var tdEmailSinhVien = document.createElement("td");
  //     tdEmailSinhVien.innerHTML = sinhvien.emailSinhVien;

  //     var tdSdtSinhVien = document.createElement("td");
  //     tdSdtSinhVien.innerHTML = sinhvien.sdtSinhVien;

  //     var tdDiemTrungBinh = document.createElement("td");
  //     tdDiemTrungBinh.innerHTML = sinhvien.tinhDiemTrungBinh();

  //     var tdDiemRenLuyen = document.createElement("td");
  //     tdDiemRenLuyen.innerHTML = sinhvien.diemRenLuyen;

  //     // Gan cac td vao tr
  //     trSinhVien.appendChild(tdMaSinhVien);
  //     trSinhVien.appendChild(tdTenSinhVien);
  //     trSinhVien.appendChild(tdLoaiSinhVien);
  //     trSinhVien.appendChild(tdDiemTrungBinh);
  //     trSinhVien.appendChild(tdDiemRenLuyen);

  //     // Tao nut xoa
  //     var btnXoa = document.createElement("button");
  //     btnXoa.innerHTML = "Xóa";
  //     btnXoa.className = "btn btn-danger";

  //     // Gan btn vao td
  //     var tdChucNang = document.createElement("td");
  //     tdChucNang.className = "text-center";
  //     tdChucNang.appendChild(btnXoa);

  //     // Tao su kien xoa
  //     btnXoa.onclick = () => {
  //       btnXoa.closest("tr").remove();
  //     };

  //     // Gan td vao tr
  //     trSinhVien.appendChild(tdChucNang);

  //     // Gan the tr vao tbody
  //     document.querySelector("#tbodySV").appendChild(trSinhVien);
  //   }
};

const renderTableSV = (arr) => {
  var noiDung = "";
  arr.forEach((element) => {
    var sv = new SinhVien(
      element.maSinhVien,
      element.tenSinhVien,
      element.loaiSinhVien,
      element.emailSinhVien,
      element.sdtSinhVien,
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

const xoaSinhVien = (maSV) => {
  for (var i = arrSinhVien.length - 1; i >= 0; i--) {
    if (arrSinhVien[i].maSinhVien === maSV) {
      arrSinhVien.splice(i, 1);
    }
  }
  renderTableSV(arrSinhVien);
};

const suaSinhVien = (maSV) => {
  document.querySelector("#btnXacNhan").disabled = true;
  document.querySelector("#btnCapNhat").disabled = false;
  for (var i = arrSinhVien.length - 1; i >= 0; i--) {
    var sv = arrSinhVien[i];
    if (sv.maSinhVien === maSV) {
      document.querySelector("#maSinhVien").value = sv.maSinhVien;
      document.querySelector("#maSinhVien").disabled = true;
      document.querySelector("#tenSinhVien").value = sv.tenSinhVien;
      document.querySelector("#loaiSinhVien").value = sv.loaiSinhVien;
      document.querySelector("#emailSinhVien").value = sv.emailSinhVien;
      document.querySelector("#sdtSinhVien").value = sv.sdtSinhVien;
      document.querySelector("#diemToan").value = sv.diemToan;
      document.querySelector("#diemLy").value = sv.diemLy;
      document.querySelector("#diemHoa").value = sv.diemHoa;
      document.querySelector("#diemRenLuyen").value = sv.diemRenLuyen;
    }
  }
};

document.querySelector("#btnCapNhat").onclick = () => {
  var svUpdate = new SinhVien();

  svUpdate.maSinhVien = document.querySelector("#maSinhVien").value;
  svUpdate.tenSinhVien = document.querySelector("#tenSinhVien").value;
  svUpdate.loaiSinhVien = document.querySelector("#loaiSinhVien").value;
  svUpdate.emailSinhVien = document.querySelector("#emailSinhVien").value;
  svUpdate.sdtSinhVien = document.querySelector("#sdtSinhVien").value;
  svUpdate.diemToan = document.querySelector("#diemToan").value;
  svUpdate.diemLy = document.querySelector("#diemLy").value;
  svUpdate.diemHoa = document.querySelector("#diemHoa").value;
  svUpdate.diemRenLuyen = document.querySelector("#diemRenLuyen").value;

  for (i = arrSinhVien.length - 1; i >= 0; i--) {
    var sv = arrSinhVien[i];
    if (sv.maSinhVien === svUpdate.maSinhVien) {
      sv.maSinhVien = svUpdate.maSinhVien;
      sv.tenSinhVien = svUpdate.tenSinhVien;
      sv.loaiSinhVien = svUpdate.loaiSinhVien;
      sv.emailSinhVien = svUpdate.emailSinhVien;
      sv.sdtSinhVien = svUpdate.sdtSinhVien;
      sv.diemToan = svUpdate.diemToan;
      sv.diemLy = svUpdate.diemLy;
      sv.diemHoa = svUpdate.diemHoa;
      sv.diemRenLuyen = svUpdate.diemRenLuyen;
    }
  }

  renderTableSV(arrSinhVien);
  document.querySelector("#maSinhVien").disabled = false;
  document.querySelector("#btnXacNhan").disabled = false;
  document.querySelector("#btnCapNhat").disabled = true;
};

// Luu localStorage
function luuLocalStorage() {
  var sMangSinhVien = JSON.stringify(arrSinhVien);
  localStorage.setItem("mangSinhVien", sMangSinhVien);
}

// Lay localstorage
function layLocalStorage() {
  if (localStorage.getItem("mangSinhVien")) {
    var sMangSinhVien = localStorage.getItem("mangSinhVien");
    arrSinhVien = JSON.parse(sMangSinhVien);
  }
}

renderTableSV(arrSinhVien);

document.getElementById("btnTimKiem").onclick = () => {
  var textTimKiem = document
    .querySelector("#timKiemSinhVien")
    .value.toLowerCase();
  var arrSearch = [];
  arrSinhVien.forEach((el) => {
    var sv = el;
    if (sv.tenSinhVien.toLowerCase().search(textTimKiem) != -1) {
      arrSearch.push(el);
    }
  });
  renderTableSV(arrSearch);
};
