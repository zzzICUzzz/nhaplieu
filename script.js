// Hiện các yêu cầu nhập và thông báo phải điền
document.addEventListener("DOMContentLoaded", function() {
    const fields = [
        { id: "1-ma-so-nghien-cuu", message: "Mã số nghiên cứu không được để trống." },
        { id: "2-ma-ho-so", message: "Mã hồ sơ/bệnh án không được để trống." },
        { id: "3-ho-ten", message: "Họ tên người tham gia nghiên cứu không được để trống." },
        { id: "4-dia-chi", message: "Địa chỉ hiện tại không được để trống." },
        { id: "5-so-dien-thoai", message: "Số điện thoại phải có 10 chữ số.", pattern: /^\d{10}$/ },
        { id: "6-ngay-phong-van", message: "Ngày phỏng vấn không được để trống." },
        { id: "8-nam-sinh", message: "Năm sinh không được để trống." },
        { id: "14-1-can-nang", message: "Cân nặng không được để trống." },
        { id: "14-2-chieu-cao", message: "Chiều cao không được để trống." },
        { id: "14-3-bmi", message: "BMI không được để trống." },
    ];

    fields.forEach(field => {
        const inputElement = document.getElementById(field.id);
        const messageElement = document.createElement("div");
        messageElement.className = "error-message-ticket";
        messageElement.style.display = "none";
        inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);

        inputElement.addEventListener("blur", function() {
            const value = inputElement.value.trim();
            if (!value || (field.pattern && !field.pattern.test(value))) {
                messageElement.textContent = field.message;
                messageElement.style.display = "block";
            } else {
                messageElement.style.display = "none";
            }
        });

        // Hạn chế nhập chữ vào trường số
        if (inputElement.type === "number") {
            const errorMessageElement = document.createElement("div");
            errorMessageElement.className = "error-message-ticket";
            errorMessageElement.style.display = "none";
            inputElement.parentNode.insertBefore(errorMessageElement, inputElement.nextSibling);

            inputElement.addEventListener("keypress", function(event) {
                // Ngăn nhập các ký tự không phải là số và dấu '.'
                if ((event.key < '0' || event.key > '9') && event.key !== '.') {
                    event.preventDefault();
                }
                // Hiển thị thông báo khi người dùng nhập dấu ','
                if (event.key === ",") {
                    errorMessageElement.textContent = "Vui lòng sử dụng dấu '.' để nhập số thập phân.";
                    errorMessageElement.style.display = "block";
                    event.preventDefault(); // Ngăn không cho dấu ',' được nhập
                }
            });

            inputElement.addEventListener("input", function() {
                if (!inputElement.value.includes(",")) {
                    errorMessageElement.style.display = "none";
                }
            });
        }
    });
});
// Hút thuốc lá
document.addEventListener("DOMContentLoaded", function() {
    const radioLabels = document.querySelectorAll(".radio-group label");
    const radioInputs = document.querySelectorAll("input[type='radio'][name='15-hut-thuoc-la']");

    radioInputs.forEach(radio => {
        radio.addEventListener("change", function() {
            // Tô màu cho dòng được chọn
            radioLabels.forEach(label => {
                if (label.contains(radio)) {
                    label.classList.add("selected");
                } else {
                    label.classList.remove("selected");
                }
            });

            // Hiển thị ô nhập liệu nếu chọn mục cần nhập số năm hoặc số gói
            const ngungInput = document.querySelector("input[name='15-hut-thuoc-la-ngung']");
            const goiNamInput = document.querySelector("input[name='15-hut-thuoc-la-so-goi-nam']");

            if (radio.value === "4") {
                ngungInput.style.display = "inline-block";
                goiNamInput.style.display = "none";
            } else if (radio.value === "5") {
                goiNamInput.style.display = "inline-block";
                ngungInput.style.display = "none";
            } else {
                ngungInput.style.display = "none";
                goiNamInput.style.display = "none";
            }
        });
    });
});


// Hiển thị nghề nghiệp khác
document.addEventListener("DOMContentLoaded", function() {
    const selectElement = document.getElementById("13-nghe-nghiep");
    const otherJobInput = document.getElementById("13-nghe-nghiep-khac");

    selectElement.addEventListener("change", function() {
        if (selectElement.value === "7") {
            otherJobInput.style.display = "block";
        } else {
            otherJobInput.style.display = "none";
        }
    });
});
// sử dụng dấu "."
document.addEventListener("DOMContentLoaded", function() {
    // Chọn tất cả các trường input có kiểu là number
    const numberInputs = document.querySelectorAll("input[type='number']");

    numberInputs.forEach(inputElement => {
        const messageElement = document.createElement("div");
        messageElement.className = "error-message-ticket";
        messageElement.style.display = "none";
        inputElement.parentNode.insertBefore(messageElement, inputElement.nextSibling);

        inputElement.addEventListener("input", function() {
            // Kiểm tra xem người dùng có nhập dấu ',' không
            if (inputElement.value.includes(",")) {
                messageElement.textContent = "Vui lòng sử dụng dấu '.' để nhập số thập phân.";
                messageElement.style.display = "block";
                inputElement.value = inputElement.value.replace(",", ".");
            } else {
                messageElement.style.display = "none";
            }
        });
    });
});



// checkbox hiện xanh
const checkboxes = document.querySelectorAll('.score-checkbox');
        const totalScoreElement = document.getElementById('total-score-charlson');
    
        checkboxes.forEach(checkbox => {
            checkbox.addEventListener('change', function() {
                let totalScore = 0;
    
                checkboxes.forEach(cb => {
                    const row = cb.closest('tr'); // Lấy dòng của checkbox hiện tại
                    if (cb.checked) {
                        totalScore += parseInt(cb.getAttribute('data-score'));
                        row.classList.add('checked-row'); // Thêm lớp để đổi màu
                    } else {
                        row.classList.remove('checked-row'); // Xóa lớp để trở về màu gốc
                    }
                });
    
                totalScoreElement.value = totalScore;
            });
        });

        document.getElementById('researchForm').addEventListener('submit', async function(e) {
            e.preventDefault(); // Ngăn không cho form gửi đi theo cách thông thường
        
            // Lấy thời gian hiện tại
            const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
            
            // Thu thập dữ liệu từ biểu mẫu
            const formData = new FormData(this);
            
            // Chuyển formData thành đối tượng JSON theo thứ tự
            const data = {};
            data['time'] = currentTime; // Thêm ngày giờ gửi
            
            // Lấy các trường từ biểu mẫu theo thứ tự
            formData.forEach((value, key) => {
                if (value === "") {
                    data[key] = "N/A"; // Gán giá trị mặc định nếu trường trống
                } else {
                    data[key] = value;
                }
            });
        
            // Phần 21: Chỉ số đa bệnh lý Charlson
            const checkboxes = document.querySelectorAll('input[type="checkbox"].score-checkbox');
            checkboxes.forEach((checkbox) => {
                const rowName = checkbox.closest('tr').querySelector('td').innerText.trim();
                if (checkbox.checked) {
                    data[rowName] = "1";
                } else {
                    data[rowName] = "0";
                }
            });
        
            // Phần 22: Đánh giá hoạt động thể lực, lấy giá trị từ input của từng phần
            const physicalActivityParts = ['P1', 'P2', 'P2a', 'P3', 'P4', 'P4a', 'P5', 'P6', 'P6a', 'P7', 'P7a'];
            physicalActivityParts.forEach(part => {
                const inputElement = document.getElementById(`numberInput${part}`);
                if (inputElement && inputElement.value) {
                    data[`Phần ${part}`] = inputElement.value;
                } else {
                    data[`Phần ${part}`] = "N/A";
                }
            });
        
            // Phần 26 và 27: Tay thuận (thay vì checkbox, giờ là radio để chọn tay thuận)
            const dominantHand = document.querySelector('input[name="dominant-hand"]:checked');
            if (dominantHand) {
                data['tay-thuan'] = dominantHand.value; // Gửi thông tin tay thuận
            } else {
                data['tay-thuan'] = "Không chọn tay thuận";
            }
        
            // In dữ liệu JSON ra console trước khi gửi
            console.log("Dữ liệu JSON sẽ gửi:", JSON.stringify(data));
        
            try {
                // Gửi dữ liệu đến Google Sheets với mode: 'no-cors'
                await fetch('https://script.google.com/macros/s/AKfycbyS1-3lkA3hZKrNvG76o836px3N0jIkkTM4QwVM2tPM7R0CXigko-XT7rT8q5C1yE2zqg/exec', {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                console.log("Dữ liệu đã được gửi thành công tới Google Sheets!");
                alert("Dữ liệu đã được lưu lại thành công!");
            } catch (error) {
                console.error("Lỗi khi gửi dữ liệu tới Google Sheets:", error);
                alert("Lỗi khi gửi mẫu. Vui lòng thử lại.");
            }
        });
        

// Bảng điểm 22. Đánh giá hoạt động thể lực
function showInput(inputId) {
    document.getElementById(inputId).style.display = 'inline-block';
}

function hideInput(inputId) {
    document.getElementById(inputId).style.display = 'none';
}
// Tô màu cho các tùy chọn từ 15 đến 20
document.addEventListener("DOMContentLoaded", function() {
    const radioGroups = ['15-hut-thuoc-la',
                         '16-uong-ruou-bia',
                         '17-tien-su-te-nga',
                         '18-tien-su-gay-xuong-ban-than',
                         '19-tien-su-nguoi-than-truc-he', 
                         '20-tien-su-su-dung-corticoid'
                        ];

    radioGroups.forEach(groupName => {
        const radioLabels = document.querySelectorAll(`.radio-group label`);
        const radioInputs = document.querySelectorAll(`input[type='radio'][name='${groupName}']`);

        radioInputs.forEach(radio => {
            radio.addEventListener('change', function() {
                radioLabels.forEach(label => {
                    if (label.contains(radio)) {
                        label.classList.add("selected");
                    } else {
                        label.classList.remove("selected");
                    }
                });
            });
        });
    });
});
