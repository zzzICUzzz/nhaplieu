function doPost(e) {
    // Lấy các tham số POST từ biểu mẫu
    var time = e.parameter.time;
    var maSoNghienCuu = e.parameter['ma-so-nghien-cuu'];
    var maHoSo = e.parameter['ma-ho-so'];
    var hoTen = e.parameter['ho-ten'];
    var diaChi = e.parameter['dia-chi'];
    var soDienThoai = e.parameter['so-dien-thoai'];
    var ngayPhongVan = e.parameter['ngay-phong-van'];
    var gioiTinh = e.parameter['7.gioi-tinh'];
    var namSinh = e.parameter['nam-sinh'];
    var noiSong = e.parameter['9.noi-song'];
    var tinhTrangSinhSong = e.parameter['10.tinh-trang-sinh-song'];
    var tinhTrangKinhTe = e.parameter['11.tinh-trang-kinh-te'];
    var trinhDoHocVan = e.parameter['12.trinh-do-hoc-van'];
    var ngheNghiep = e.parameter['13.nghe-nghiep'];
    var ngheNghiepKhac = e.parameter['nghe-nghiep-khac'];
    var canNang = e.parameter['14.1.can-nang'];
    var chieuCao = e.parameter['14.2.chieu-cao'];
    var bmi = e.parameter['14.3.bmi'];
    var hutThuocLa = e.parameter['15.hut-thuoc-la'];
    var hutThuocLaNgung = e.parameter['15.hut-thuoc-la-ngung'];
    var hutThuocLaSoGoiNam = e.parameter['15.hut-thuoc-la-so-goi-nam'];
    var uongRuouBia = e.parameter['16.uong-ruou-bia'];
    var tienSuTeNga = e.parameter['17.tien-su-te-nga'];
    var tienSuGayXuongBanThan = e.parameter['18.tien-su-gay-xuong-ban-than'];
    var tienSuNguoiThanTrucHe = e.parameter['19.tien-su-nguoi-than-truc-he'];
    var tienSuSuDungCorticoid = e.parameter['20.tien-su-su-dung-corticoid'];
    var totalScoreCharlson = e.parameter['total-score-charlson'];
    var mdxL1 = e.parameter['mdx_l1'];
    var tScoreL1 = e.parameter['t_score_l1'];
    var mdxL2 = e.parameter['mdx_l2'];
    var tScoreL2 = e.parameter['t_score_l2'];
    var mdxL3 = e.parameter['mdx_l3'];
    var tScoreL3 = e.parameter['t_score_l3'];
    var mdxL4 = e.parameter['mdx_l4'];
    var tScoreL4 = e.parameter['t_score_l4'];
    var mdxL1L4 = e.parameter['mdx_l1_l4'];
    var tScoreL1L4 = e.parameter['t_score_l1_l4'];
    var mdxTotal = e.parameter['mdx_total'];
    var tScoreTotal = e.parameter['t_score_total'];
    var mdxNeck = e.parameter['mdx_neck'];
    var tScoreNeck = e.parameter['t_score_neck'];
    var khoiLuongCoXuong = e.parameter['khoi_luong_co_xuong'];
    var smi = e.parameter['smi'];
    var lucBopTraiLan1 = e.parameter['luc_bop_trai_lan_1'];
    var lucBopTraiLan2 = e.parameter['luc_bop_trai_lan_2'];
    var lucBopPhaiLan1 = e.parameter['luc_bop_phai_lan_1'];
    var lucBopPhaiLan2 = e.parameter['luc_bop_phai_lan_2'];
    var giaTriCaoNhat = e.parameter['gia_tri_cao_nhat'];
    var thoiGianDiBo6m = e.parameter['thoi_gian_di_bo_6m'];
    var osteocalcin = e.parameter['osteocalcin'];
    var urea = e.parameter['urea'];
    var betactx = e.parameter['betactx'];
    var creatinin = e.parameter['creatinin'];
    var hb = e.parameter['hb'];
    var calcitotal = e.parameter['calcitotal'];
    var slhongcau = e.parameter['slhongcau'];
    var ast = e.parameter['ast'];
    var slbachcau = e.parameter['slbachcau']; // Thiếu trường này
    var ALT = e.parameter['ALT'];
    var sltieucau = e.parameter['sltieucau']; // Biến cần kiểm tra
  
    // Mở Google Sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    var newRow = sheet.getLastRow() + 1;
  
    // Ghi dữ liệu vào các cột trong Google Sheets
    sheet.getRange(newRow, 1).setValue(time);
    sheet.getRange(newRow, 2).setValue(maSoNghienCuu);
    sheet.getRange(newRow, 3).setValue(maHoSo);
    sheet.getRange(newRow, 4).setValue(hoTen);
    sheet.getRange(newRow, 5).setValue(diaChi);
    sheet.getRange(newRow, 6).setValue(soDienThoai);
    sheet.getRange(newRow, 7).setValue(ngayPhongVan);
    sheet.getRange(newRow, 8).setValue(gioiTinh);
    sheet.getRange(newRow, 9).setValue(namSinh);
    sheet.getRange(newRow, 10).setValue(noiSong);
    sheet.getRange(newRow, 11).setValue(tinhTrangSinhSong);
    sheet.getRange(newRow, 12).setValue(tinhTrangKinhTe);
    sheet.getRange(newRow, 13).setValue(trinhDoHocVan);
    sheet.getRange(newRow, 14).setValue(ngheNghiep);
    sheet.getRange(newRow, 15).setValue(ngheNghiepKhac);
    sheet.getRange(newRow, 16).setValue(canNang);
    sheet.getRange(newRow, 17).setValue(chieuCao);
    sheet.getRange(newRow, 18).setValue(bmi);
    sheet.getRange(newRow, 19).setValue(hutThuocLa);
    sheet.getRange(newRow, 20).setValue(hutThuocLaNgung);
    sheet.getRange(newRow, 21).setValue(hutThuocLaSoGoiNam);
    sheet.getRange(newRow, 22).setValue(uongRuouBia);
    sheet.getRange(newRow, 23).setValue(tienSuTeNga);
    sheet.getRange(newRow, 24).setValue(tienSuGayXuongBanThan);
    sheet.getRange(newRow, 25).setValue(tienSuNguoiThanTrucHe);
    sheet.getRange(newRow, 26).setValue(tienSuSuDungCorticoid);
    sheet.getRange(newRow, 27).setValue(totalScoreCharlson);
    sheet.getRange(newRow, 28).setValue(mdxL1);
    sheet.getRange(newRow, 29).setValue(tScoreL1);
    sheet.getRange(newRow, 30).setValue(mdxL2);
    sheet.getRange(newRow, 31).setValue(tScoreL2);
    sheet.getRange(newRow, 32).setValue(mdxL3);
    sheet.getRange(newRow, 33).setValue(tScoreL3);
    sheet.getRange(newRow, 34).setValue(mdxL4);
    sheet.getRange(newRow, 35).setValue(tScoreL4);
    sheet.getRange(newRow, 36).setValue(mdxL1L4);
    sheet.getRange(newRow, 37).setValue(tScoreL1L4);
    sheet.getRange(newRow, 38).setValue(mdxTotal);
    sheet.getRange(newRow, 39).setValue(tScoreTotal);
    sheet.getRange(newRow, 40).setValue(mdxNeck);
    sheet.getRange(newRow, 41).setValue(tScoreNeck);
    sheet.getRange(newRow, 42).setValue(khoiLuongCoXuong);
    sheet.getRange(newRow, 43).setValue(smi);
    sheet.getRange(newRow, 44).setValue(lucBopTraiLan1);
    sheet.getRange(newRow, 45).setValue(lucBopTraiLan2);
    sheet.getRange(newRow, 46).setValue(lucBopPhaiLan1);
    sheet.getRange(newRow, 47).setValue(lucBopPhaiLan2);
    sheet.getRange(newRow, 48).setValue(giaTriCaoNhat);
    sheet.getRange(newRow, 49).setValue(thoiGianDiBo6m);
    sheet.getRange(newRow, 50).setValue(osteocalcin);
    sheet.getRange(newRow, 51).setValue(urea);
    sheet.getRange(newRow, 52).setValue(betactx);
    sheet.getRange(newRow, 53).setValue(creatinin);
    sheet.getRange(newRow, 54).setValue(hb);
    sheet.getRange(newRow, 55).setValue(calcitotal);
    sheet.getRange(newRow, 56).setValue(slhongcau);
    sheet.getRange(newRow, 57).setValue(ast);
    sheet.getRange(newRow, 58).setValue(slbachcau); // Ghi thiếu trường này
    sheet.getRange(newRow, 59).setValue(ALT);
    sheet.getRange(newRow, 60).setValue(sltieucau); // Dữ liệu cho cột sltieucau
  
    // Phản hồi thành công
    return ContentService.createTextOutput('Dữ liệu đã được nhận và xử lý thành công.');
  }
  