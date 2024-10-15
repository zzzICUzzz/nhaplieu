function doGet() {
    return HtmlService.createHtmlOutputFromFile('index')
        .setTitle('Mẫu Thu Thập Số Liệu Nghiên Cứu')
        .setSandboxMode(HtmlService.SandboxMode.IFRAME);
  }
  
  
  function doPost(e) {
    // Chuyển đổi dữ liệu JSON thành đối tượng trong Apps Script
    const data = JSON.parse(e.postData.contents);
    
    // Mở Google Sheet theo ID
    const ss = SpreadsheetApp.openById('1_7U4pTYcD50qo6WS4W93y26UtI_YCenriSWQyim7akY'); // Thay YOUR_GOOGLE_SHEET_ID bằng ID của Google Sheets
    const sheet = ss.getSheetByName('Sheet1'); // Chọn tên Sheet
    
    // Dòng tiếp theo để thêm dữ liệu
    const lastRow = sheet.getLastRow() + 1;
  
    // Thêm dữ liệu vào các cột tương ứng
    sheet.getRange(lastRow, 1).setValue(data['ma-so-nghien-cuu']); // Cột A: Mã số nghiên cứu
    sheet.getRange(lastRow, 2).setValue(data['ma-ho-so']); // Cột B: Mã hồ sơ/bệnh án
    sheet.getRange(lastRow, 3).setValue(data['ho-ten']); // Cột C: Họ tên
    sheet.getRange(lastRow, 4).setValue(data['dia-chi']); // Cột D: Địa chỉ
    sheet.getRange(lastRow, 5).setValue(data['so-dien-thoai']); // Cột E: Số điện thoại
    sheet.getRange(lastRow, 6).setValue(data['ngay-phong-van']); // Cột F: Ngày phỏng vấn
    sheet.getRange(lastRow, 7).setValue(data['7.gioi-tinh']); // Cột G: Giới tính
    sheet.getRange(lastRow, 8).setValue(data['nam-sinh']); // Cột H: Năm sinh
    sheet.getRange(lastRow, 9).setValue(data['9.noi-song']); // Cột I: Nơi sống
    sheet.getRange(lastRow, 10).setValue(data['10.tinh-trang-sinh-song']); // Cột J: Tình trạng sinh sống
    sheet.getRange(lastRow, 11).setValue(data['11.tinh-trang-kinh-te']); // Cột K: Tình trạng kinh tế
    sheet.getRange(lastRow, 12).setValue(data['12.trinh-do-hoc-van']); // Cột L: Trình độ học vấn
    sheet.getRange(lastRow, 13).setValue(data['13.nghe-nghiep']); // Cột M: Nghề nghiệp
    sheet.getRange(lastRow, 14).setValue(data['nghe-nghiep-khac']); // Cột N: Nghề nghiệp khác (nếu có)
    sheet.getRange(lastRow, 15).setValue(data['14.1.can-nang']); // Cột O: Cân nặng
    sheet.getRange(lastRow, 16).setValue(data['14.2.chieu-cao']); // Cột P: Chiều cao
    sheet.getRange(lastRow, 17).setValue(data['14.3.bmi']); // Cột Q: BMI
  
    // Tiền căn
    sheet.getRange(lastRow, 18).setValue(data['15.hut-thuoc-la']); // Cột R: Hút thuốc lá
    sheet.getRange(lastRow, 19).setValue(data['15.hut-thuoc-la-ngung']); // Cột S: Số năm đã ngưng hút thuốc
    sheet.getRange(lastRow, 20).setValue(data['15.hut-thuoc-la-so-goi-nam']); // Cột T: Số gói - năm hút thuốc
    sheet.getRange(lastRow, 21).setValue(data['16.uong-ruou-bia']); // Cột U: Uống rượu bia
    sheet.getRange(lastRow, 22).setValue(data['17.tien-su-te-nga']); // Cột V: Tiền sử té ngã
    sheet.getRange(lastRow, 23).setValue(data['18.tien-su-gay-xuong-ban-than']); // Cột W: Tiền sử gãy xương bản thân
    sheet.getRange(lastRow, 24).setValue(data['19.tien-su-nguoi-than-truc-he']); // Cột X: Tiền sử người thân gãy xương
    sheet.getRange(lastRow, 25).setValue(data['20.tien-su-su-dung-corticoid']); // Cột Y: Tiền sử sử dụng corticoid
  
    // Chỉ số đa bệnh lý Charlson
    sheet.getRange(lastRow, 26).setValue(data['total-score-charlson']); // Cột Z: Tổng điểm chỉ số đa bệnh lý Charlson
  
    // Đánh giá thiếu cơ - loãng xương
    sheet.getRange(lastRow, 27).setValue(data['mdx_l1']); // Cột AA: MDX L1
    sheet.getRange(lastRow, 28).setValue(data['t_score_l1']); // Cột AB: T-score L1
    sheet.getRange(lastRow, 29).setValue(data['mdx_l2']); // Cột AC: MDX L2
    sheet.getRange(lastRow, 30).setValue(data['t_score_l2']); // Cột AD: T-score L2
    sheet.getRange(lastRow, 31).setValue(data['mdx_l3']); // Cột AE: MDX L3
    sheet.getRange(lastRow, 32).setValue(data['t_score_l3']); // Cột AF: T-score L3
    sheet.getRange(lastRow, 33).setValue(data['mdx_l4']); // Cột AG: MDX L4
    sheet.getRange(lastRow, 34).setValue(data['t_score_l4']); // Cột AH: T-score L4
    sheet.getRange(lastRow, 35).setValue(data['mdx_l1_l4']); // Cột AI: MDX L1-L4
    sheet.getRange(lastRow, 36).setValue(data['t_score_l1_l4']); // Cột AJ: T-score L1-L4
    sheet.getRange(lastRow, 37).setValue(data['mdx_total']); // Cột AK: MDX Total (Xương vùng hông)
    sheet.getRange(lastRow, 38).setValue(data['t_score_total']); // Cột AL: T-score Total (Xương vùng hông)
    sheet.getRange(lastRow, 39).setValue(data['mdx_neck']); // Cột AM: MDX Neck (Xương vùng hông)
    sheet.getRange(lastRow, 40).setValue(data['t_score_neck']); // Cột AN: T-score Neck (Xương vùng hông)
  
    // Cơ xương và các chỉ số
    sheet.getRange(lastRow, 41).setValue(data['khoi_luong_co_xuong']); // Cột AO: Khối lượng cơ xương (ASM)
    sheet.getRange(lastRow, 42).setValue(data['smi']); // Cột AP: Chỉ số SMI
    sheet.getRange(lastRow, 43).setValue(data['luc_bop_trai_lan_1']); // Cột AQ: Lực bóp tay trái lần 1
    sheet.getRange(lastRow, 44).setValue(data['luc_bop_trai_lan_2']); // Cột AR: Lực bóp tay trái lần 2
    sheet.getRange(lastRow, 45).setValue(data['tay_thuan_trai']); // Cột AS: Tay thuận trái
    sheet.getRange(lastRow, 46).setValue(data['luc_bop_phai_lan_1']); // Cột AT: Lực bóp tay phải lần 1
    sheet.getRange(lastRow, 47).setValue(data['luc_bop_phai_lan_2']); // Cột AU: Lực bóp tay phải lần 2
    sheet.getRange(lastRow, 48).setValue(data['tay_thuan_phai']); // Cột AV: Tay thuận phải
    sheet.getRange(lastRow, 49).setValue(data['gia_tri_cao_nhat']); // Cột AW: Giá trị cao nhất
    sheet.getRange(lastRow, 50).setValue(data['thoi_gian_di_bo_6m']); // Cột AX: Thời gian đi bộ 6m (giây)
  
    // Cận lâm sàng
    sheet.getRange(lastRow, 51).setValue(data['osteocalcin']); // Cột AY: Osteocalcin
    sheet.getRange(lastRow, 52).setValue(data['urea']); // Cột AZ: Urea
    sheet.getRange(lastRow, 53).setValue(data['betactx']); // Cột BA: Beta CTX
    sheet.getRange(lastRow, 54).setValue(data['creatinin']); // Cột BB: Creatinin
    sheet.getRange(lastRow, 55).setValue(data['hb']); // Cột BC: Hb
    sheet.getRange(lastRow, 56).setValue(data['calcitotal']); // Cột BD: Calci toàn phần
    sheet.getRange(lastRow, 57).setValue(data['slhongcau']); // Cột BE: Số lượng hồng cầu
    sheet.getRange(lastRow, 58).setValue(data['ast']); // Cột BF: AST
    sheet.getRange(lastRow, 59).setValue(data['ALT']); // Cột BG: ALT
    sheet.getRange(lastRow, 60).setValue(data['sltieucau']); // Cột BH: Số lượng tiểu cầu
  
    // Thiết lập tiêu đề CORS để cho phép truy cập từ các nguồn khác
    const output = ContentService.createTextOutput(JSON.stringify({ 'result': 'success' }))
        .setMimeType(ContentService.MimeType.JSON);
    
    // Thêm tiêu đề CORS để cho phép yêu cầu từ các nguồn khác
    output.setHeaders({
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST',
      'Access-Control-Allow-Headers': 'Content-Type'
    });
  
    return output;
  }
  