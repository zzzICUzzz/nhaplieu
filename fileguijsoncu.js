document.getElementById('researchForm').addEventListener('submit', async function(e) {
    e.preventDefault(); // Ngăn không cho form gửi đi theo cách thông thường

    // Lấy thời gian hiện tại và dữ liệu từ biểu mẫu
    const currentTime = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    const formData = new FormData(this);
    
    // Thêm thời gian vào formData
    formData.append('time', currentTime);
    
    // Xử lý tất cả các trường checkbox
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        if (checkbox.checked) {
            formData.append(checkbox.name, checkbox.value || checkbox.getAttribute('data-score'));
        } else {
            formData.append(checkbox.name, "0");  // Nếu không chọn, gán giá trị mặc định
        }
    });

    // Xử lý các radio button để đảm bảo chúng có giá trị
    const radios = document.querySelectorAll('input[type="radio"]');
    radios.forEach((radio) => {
        if (radio.checked) {
            formData.append(radio.name, radio.value);
        } else if (!formData.has(radio.name)) {
            formData.append(radio.name, "N/A");  // Gán giá trị mặc định nếu radio không được chọn
        }
    });

    // Chuyển formData thành đối tượng JSON
    const data = {};
    formData.forEach((value, key) => {
        if (value === "") {
            data[key] = "N/A"; // Gán giá trị mặc định nếu trường trống
        } else {
            data[key] = value;
        }
    });
    
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