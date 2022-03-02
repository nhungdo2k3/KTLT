const stateDefault = {
  gioHang: [],
};

export const cartReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "THEM_GIO_HANG": {
      let gioHang = [...state.gioHang];
      let spThem = { ...action.spThem, soLuong: 1 };
      let hasItem = gioHang.find((item) => {
        return item.maSP === spThem.maSP;
      });
      if (hasItem) {
        hasItem.soLuong += spThem.soLuong;
      } else {
        gioHang.push(spThem);
      }
      state.gioHang = gioHang;
      return { ...state };
    }
    case "XOA_SAN_PHAM": {
      let gioHangMoi = state.gioHang.filter((item) => {
        return item.maSP !== action.spClick.maSP;
      });
      state.gioHang = gioHangMoi;
      return { ...state };
    }
    default:
      return state;
  }
};
