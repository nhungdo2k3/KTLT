//Bước 1: Định nghĩa xử lý cho nút button#btnXacNhan
document.querySelector('#btnXacNhan').onclick = function (){
    //Input: 
    var maSinhVien = document.querySelector('#maSinhVien').value;
    var tenSinhVien = document.querySelector('#tenSinhVien').value;
    var loaiSinhVien = document.querySelector('#loaiSinhVien').value;
    var diemToan = document.querySelector('#diemToan').value;
    var diemLy = document.querySelector('#diemLy').value;
    var diemHoa = document.querySelector('#diemHoa').value;
    var diemRenLuyen = document.querySelector('#diemRenLuyen').value;

    console.log('Mã sinh viên',maSinhVien)
    console.log('tenSinhVien',tenSinhVien)
    console.log('loaiSinhVien',loaiSinhVien)
    console.log('diemToan',diemToan)
    console.log('diemLy',diemLy)
    console.log('diemHoa',diemHoa)
    console.log('diemRenLuyen',diemRenLuyen)
    //Output
    document.querySelector('#txtTenSinhVien').innerHTML = tenSinhVien;
    document.querySelector('#txtMaSinhVien').innerHTML = maSinhVien;
    document.querySelector('#txtLoaiSinhVien').innerHTML = loaiSinhVien;

    var dtb = tinhDiemTrungBinh(diemToan,diemLy,diemHoa);

    document.querySelector('#txtDiemTrungBinh').innerHTML = dtb;

    var hocLuc = tinhXepLoai(dtb,diemRenLuyen);
    document.querySelector('#txtXepLoai').innerHTML = hocLuc;
}

function tinhDiemTrungBinh (dToan,dLy,dHoa) { //input
    var dtb = (Number(dToan) + Number(dLy) + Number(dHoa) )/3
    return dtb; //8.5
}

function tinhXepLoai (diemTrungBinh,diemRenLuyen) { //input 
    var loaiHocLuc = '';
    if(diemRenLuyen < 5) {
        loaiHocLuc = 'Yếu';
        return loaiHocLuc;
    }
    if(diemTrungBinh < 5) {
        loaiHocLuc = 'Yếu';
    } else if(diemTrungBinh >=5 && diemTrungBinh <=6.5) {
        loaiHocLuc = 'Trung bình';
    } else if (diemTrungBinh >=6.5 && diemTrungBinh < 8 ) {
        loaiHocLuc = 'Khá';
    } else if (diemTrungBinh >=8 && diemTrungBinh <= 10) {
        loaiHocLuc = 'Giỏi';
    } else {
        loaiHocLuc = 'Không hợp lệ!'
    }
    return loaiHocLuc; //output : khá, yếu, giỏi, ...
}