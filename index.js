/** Bài 1: Quản lý tuyển sinh
*input: điểm chuẩn, điểm 3 môn, khu vực(A,B,C,X), loại đối tượng(1,2,3,0)
*Process: (pseudo code)
    1. làm sao lấy input (user interface) UI
    2 tính điểm ưu tiên
     - Tính điểm ưu tiên theo khu vực(if else)
     - tính điểm ưu tiên theo đối tượng (if else)
    3. tính tổng điểm = điểm 3 môn + điêm ưu tiên
    4. kiêm tra kết quả :
*Output: tính tổng điểm, kết quả
 */
//input area => return điểm
function calcAreaGrade(area1) {
    switch (area1) {
        case "A":
            return 2
        case "B":
            return 1;
        case "C":
            return 0.5
        default:
            return 0;
    }
}
function calcTypeGrade(type1) {
    switch (type1) {
        case "1":
            return 2.5;
        case "2":
            return 1.5;
        case "3":
            return 1;
        default:
            return 0;
    }
}
document.getElementById("btnTest").onclick = function () {
    let standardGrade = +document.getElementById("txtStandardGrade").value;
    let subject1 = +document.getElementById("txtSubject1").value;
    let subject2 = +document.getElementById("txtSubject2").value;
    let subject3 = +document.getElementById("txtSubject3").value;
    let area = document.getElementById("area").value;
    let type = document.getElementById("type").value;
    let result = document.getElementById("result1");
    let totalGrade = 0;
    let areaGrade = calcAreaGrade(area);;
    let typeGrade = calcTypeGrade(type);
    totalGrade = subject1 + subject2 + subject3 + areaGrade + typeGrade;
    if (
        subject1 > 0 &&
        subject2 > 0 &&
        subject3 > 0 &&
        totalGrade >= standardGrade
    ) {
        result.value = "Bạn đã đậu. Tổng điểm: " + totalGrade;
    } else {
        result.value = "Bạn đã rớt. Tổng điểm: " + totalGrade;
    }
}

/** Bài 2: Tính tiền điện
*input: họ tên, số Kw
*Process: (pseudo code)
    1. input (user interface) UI
    2. tính số tiền điện
     - 50kw đầu : số kw * 500đ(if else)
     - 50kw kế : (50kw * 500đ ) + (số kw - 50) * 650đ (if else)
     - 100kw kế : (50kw * 500đ ) + (50kw * 650đ) + ((số kw - 100) * 850đ ) (if else)
     - 150kw kế : (50kw * 500đ ) + (50kw * 650đ) + (100kw * 850đ) + ((số kw - 200) * 1100đ ) (if else)
     - nếu kw kế lơn hơn 350kw : (50kw * 500đ ) + (50kw * 650đ) + (100kw * 850đ) + (150kw * 1100đ)+ ((số kw - 350) * 1300đ )
*Output: xuất tên, số tiền điện.
 */
document.getElementById("btnTinhTienDien").onclick = function () {
    let soKw = document.getElementById("soKw").value;
    let name = document.getElementById("name").value;
    let result = document.getElementById("result2");
    let level1 = 500, level2 = 650, level3 = 850, level4 = 1100, level5 = 1300;
    let tienDien = 0;
    if (soKw <= 50) {
        tienDien = soKw * level1;
        result.value = `Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)}VNĐ`;
    } else if (soKw > 50 && soKw <= 100) {
        tienDien = (level1 * 50) + ((soKw - 50) * level2);
        result.value = `Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)}VNĐ`;
    } else if (soKw > 100 && soKw <= 200) {
        tienDien = (level1 * 50) + (level2 * 50) + ((soKw - 100) * level3);
        result.value = `Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)}VNĐ`;
    } else if (soKw > 200 && soKw <= 350) {
        tienDien = (level1 * 50) + (level2 * 50) + (level3 * 100) + ((soKw - 200) * level4);
        result.value = `Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)}VNĐ`;
    } else {
        tienDien = (level1 * 50) + (level2 * 50) + (level3 * 100) + (level4 * 150) + ((soKw - 350) * level5);
        result.value = `Họ tên: ${name}; Tiền điện: ${new Intl.NumberFormat('vn-VN').format(tienDien)}VNĐ`;
    }
}


/** Bài 3: Tính thuế thu nhập cá nhân
*input: họ tên, tông thu nhập năm, số người phụ thuộc
*Process: (pseudo code)
    1. input (user interface) UI
    2. tính thu nhập chịu thuế = tổng thu nhập năm - 4tr - số người phụ thuộc*1,6tr
    3. tính Tiền thuế thu nhập cá nhân theo thuế suất (%) của thu nhập chiệu thuế (triệu)
     - nhỏ hơn 60 thì thuế suất 0.05;
     - lơn hơn 60 nhỏ hơn 120 thì thuế suất 0.1;
     - lơn hơn 120 nhỏ hơn 210 thì thuế suất 0.15;
     - lơn hơn 210 nhỏ hơn 384 thì thuế suất 0.2;
     - lơn hơn 384 nhỏ hơn 624 thì thuế suất 0.25;
     - lơn hơn 624 nhỏ hơn 960 thì thuế suất 0.3;
     - lơn hơn 960 thì thuế suất 0.35;
*Output: họ tên, Tiền thuế thu nhập cá nhân
*/
document.getElementById("btnCalcTax").onclick = function () {
    let name = document.getElementById("name3").value;
    let totalIncome = +document.getElementById("totalIncome").value;
    let amountPeople = +document.getElementById("amountPeople").value;
    let result = document.getElementById("resultBai3");
    let tax = totalIncome - 4e+6 - (amountPeople * 1600000);
    if (tax < 60e+6) {
        tax *= 0.05;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else if (tax > 60e+6 && tax < 120e+6) {
        tax *= 0.1;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else if (tax > 120e+6 && tax < 210e+6) {
        tax *= 0.15;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else if (tax > 210e+6 && tax < 384e+6) {
        tax *= 0.2;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else if (tax > 384e+6 && tax < 624e+6) {
        tax *= 0.25;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else if (tax > 624e+6 && tax < 960e+6) {
        tax *= 0.3;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    } else {
        tax *= 0.35;
        result.value = `Họ tên: ${name}; Tiền thuế thu nhập cá nhân: ${new Intl.NumberFormat('vn-VN').format(tax)}VNĐ`;
    }
}

/** Bài 4: Tính thuế thu nhập cá nhân
*input: loại kH, mã KH, số kênh cao cấp, số kết nối( nếu là loại doanh nghiệp)
*Process: (pseudo code)
    1. input (user interface) UI
    2. nếu KH là nhà dân thì tiền cáp = phí xử lý HĐ (4.5$) + Phí DVCB(20.5$) +(số kênh cao cấp * 7.5$)
    3. Nếu Kh là doanh nghiệp: 
     - phí xử lý HĐ (15$)
     - Phí DVCB:
        + dưới 10 kết nối là 7.5$
        + trên 10 kết nối là 5$
     - kênh cao cấp : 50$/ kênh
*Output: họ tên, Tiền cáp
*/

let soKetNoi = document.getElementById('soKetNoi');
let loaiKH = document.getElementById("loaiKH");
document.getElementById("loaiKH").onchange = function () {
    if (loaiKH.value === "B") {
        soKetNoi.classList.remove('d-none');
    } else {
        soKetNoi.classList.add('d-none');
    }
}
function tinhSoKetNoi(temp) {
    let x = soKetNoi.value
    if (x <= 10) {
        temp = 75;
    } else {
        temp = 75 + ((x - 10) * 5);
    }
    return temp;
}
document.getElementById("btnTinhTienCap").onclick = function () {
    let maKH = document.getElementById("maKH").value;
    let soKenh = +document.getElementById("soKenh").value;
    let result = document.getElementById("result4");
    let sum = 0;
    let phiXLHD = 0;
    let phiDCCB = 0;
    if (loaiKH.value === "A") {
        phiXLHD = 4.5;
        phiDCCB = 20.5;
        sum = phiXLHD + phiDCCB + (soKenh * 7.5);
        result.value = `Mã khách hàng: ${maKH}; Tiền cáp: $${new Intl.NumberFormat('en-US').format(sum)}`;
    } else {
        phiXLHD = 15;
        phiDCCB += tinhSoKetNoi(phiDCCB);
        sum = phiXLHD + phiDCCB + (soKenh * 50);
        result.value = `Mã khách hàng: ${maKH}; Tiền cáp: $${new Intl.NumberFormat('en-US').format(sum)}`;
    }
}

