function SinhVien(
  maSV,
  tenSV,
  loaiSV,
  email,
  sdtSV,
  dToan,
  dLy,
  dHoa,
  dRenLuyen
) {
  this.maSinhVien = maSV;
  this.tenSinhVien = tenSV;
  this.emailSinhVien = email;
  this.sdtSinhVien = sdtSV;
  this.loaiSinhVien = loaiSV;
  this.diemToan = dToan;
  this.diemLy = dLy;
  this.diemHoa = dHoa;
  this.diemRenLuyen = dRenLuyen;
  this.tinhDiemTrungBinh = function () {
    return (
      (Number(this.diemHoa) + Number(this.diemLy) + Number(this.diemToan)) / 3
    );
  };
  this.xepLoaiSinhVien = function () {
    //Input
    var diemRenLuyen = this.diemRenLuyen;
    var diemTrungBinh = this.tinhDiemTrungBinh();
    var loaiHocLuc = "";
    if (diemRenLuyen < 5) {
      loaiHocLuc = "Yếu";
      return loaiHocLuc;
    }
    if (diemTrungBinh < 5) {
      loaiHocLuc = "Yếu";
    } else if (diemTrungBinh >= 5 && diemTrungBinh <= 6.5) {
      loaiHocLuc = "Trung bình";
    } else if (diemTrungBinh >= 6.5 && diemTrungBinh < 8) {
      loaiHocLuc = "Khá";
    } else if (diemTrungBinh >= 8 && diemTrungBinh <= 10) {
      loaiHocLuc = "Giỏi";
    } else {
      loaiHocLuc = "Không hợp lệ!";
    }
    return loaiHocLuc;
  };
}
