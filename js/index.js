areaOptions = document.getElementById('chooseAreaOption');
studentOptions = document.getElementById('chooseStudentOption');

radioAY = document.getElementById('rdAYes');
radioAN = document.getElementById('rdANo');

radioSY= document.getElementById('rdSYes');
radioSN = document.getElementById('rdSNo');

noti = document.getElementById('txtNotiOp');
totalMark = document.getElementById('txtTotal');

function checkRadioArea() {
    if(radioAY.checked == true){
        areaOptions.disabled = false;
    }else if(radioAN.checked == true){
        areaOptions.disabled = true;
    }
}

function checkRadioStudent() {
    if(radioSY.checked == true){
        studentOptions.disabled = false;
    }else if(radioSN.checked == true){
        studentOptions.disabled = true;
    }
}

function checkInput(first,second,third) {
    if(first > 10 || second > 10 || third > 10){
        return false;
    }
    return true;
}

function getTotalMark(first,second,third) {
    var result = 0;
    total = firstsub + secondsub + thirdsub;
    if(checkInput(first,second,third) == true){
        // area | student = no
        if(radioAN.checked == true && radioSN.checked == true || radioAY.checked == false && radioSY.checked == false){
           result = total;
        }
        // are = yes | studen = no
        else if(radioAY.checked == true && radioSY.checked == false || radioAN.checked == false && radioSN.checked == true){
            switch (areaOptions.value) {
                case 'opText':
                    txtNotiOp.innerHTML = 'Please select options area';
                    break;
                case 'opA':
                    result = total + 2;
                    break;
                case 'opB':
                    result = total + 1;
                    break;
                case 'opC':
                    result = total + 0.5;
                    break;
            }
        }
        // are = no | student = yes
        else if(radioAY.checked == false && radioSY.checked == true || radioAN.checked == true && radioSN.checked == false){
            switch (studentOptions.value) {
                case 'opText':
                    txtNotiOp.innerHTML = 'Please select options student';
                    break;
                case 'op1':
                    result = total + 2.5;
                    break;
                case 'op2':
                    result = total + 1.5;
                    break;
                case 'op3':
                    result = total + 1;
                    break;
            }
        }
        // are = yes | student = yes
        else if(radioAY.checked == true && radioSY.checked == true || radioAN.checked == false && radioSN.checked == false){
            if(areaOptions.value == 'opText'){
                txtNotiOp.innerHTML = 'Please select options area';
            }
            else if(studentOptions.value == 'opText'){
                txtNotiOp.innerHTML = 'Please select options student';
            }
            // A
            else if((areaOptions.value == 'opA') && (studentOptions.value == 'op1')){
                result = total + 4.5;
            }
            else if((areaOptions.value == 'opA') && (studentOptions.value == 'op2')){
                result = total + 3.5;
            }
            else if((areaOptions.value == 'opA') && (studentOptions.value == 'op3')){
                result = total + 3;
            }
            // B
            else if((areaOptions.value == 'opB') && (studentOptions.value == 'op1')){
                result = total + 3.5;
            }
            else if((areaOptions.value == 'opB') && (studentOptions.value == 'op2')){
                result = total + 2.5;
            }
            else if((areaOptions.value == 'opB') && (studentOptions.value == 'op3')){
                result = total + 2;
            }
            // C
            else if((areaOptions.value == 'opC') && (studentOptions.value == 'op1')){
                result = total + 3;
            }
            else if((areaOptions.value == 'opC') && (studentOptions.value == 'op2')){
                result = total + 2;
            }
            else if((areaOptions.value == 'opC') && (studentOptions.value == 'op3')){
                result = total + 1.5;
            }
        }
        return result;
    }else{
        txtNotiOp.innerHTML = 'Subject should not larger than 10';
    }
}

document.getElementById('btnCheck').addEventListener('click',function () {
    benchmark = parseFloat(Math.abs(document.getElementById('txtBenchmark').value));
    firstsub = parseFloat(Math.abs(document.getElementById('txtFSubject').value));
    secondsub = parseFloat(Math.abs(document.getElementById('txtSSubject').value));
    thirdsub = parseFloat(Math.abs(document.getElementById('txtTSubject').value));
    if(firstsub == 0 && secondsub == 0 && thirdsub == 0){
        totalMark.innerHTML = getTotalMark(firstsub,secondsub,thirdsub)
        txtNotiOp.innerHTML = 'Check your mark';
    }else if(getTotalMark(firstsub,secondsub,thirdsub) >= benchmark){
        totalMark.innerHTML = getTotalMark(firstsub,secondsub,thirdsub);
        txtNotiOp.innerHTML = 'Pass';
    }else{
        totalMark.innerHTML = getTotalMark(firstsub,secondsub,thirdsub)
        txtNotiOp.innerHTML = 'Fail';
    }
});


// --------------------------------

const gia50KWDau = 500;
const gia50KWKe = 650;
const gia150KWKe = 850;
const gia100KWKe = 1100;
const conLai = 1300;

document.getElementById('btnCal').addEventListener('click', function () {
    nameX = document.getElementById('txtName').value;
    number = +(Math.abs(document.getElementById('txtKW').value));
    document.getElementById('txtNamex').innerHTML = nameX;
    document.getElementById('txtTotalx').innerHTML = tinhTien(number);
});

function tinhTien(soKW) {
    total = 0;
    if(soKW <= 0) {
        console.log('x');
    }else if(soKW <= 50){
        total = tinhGia50KWDau(soKW, gia50KWDau);
    }else if(soKW > 50 && soKW <= 100){
        first = tinhGia50KWDau(50, gia50KWDau);
        second = tinhGia50KWKe(soKW, gia50KWKe);
        total = first + second;
    }else if(soKW >100 && soKW <= 250){
        first = tinhGia50KWDau(50, gia50KWDau);
        second = tinhGia50KWKe(100, gia50KWKe);
        third = tinhGia150KWKe(soKW, gia150KWKe);
        total = first + second + third;
    }else if(soKW > 250 && soKW <= 350){
        first = tinhGia50KWDau(50, gia50KWDau);
        second = tinhGia50KWKe(100, gia50KWKe);
        third = tinhGia150KWKe(250, gia150KWKe);
        four = tinhGia100KWKe(soKW,gia100KWKe);
        total =  first + second + third + four;
    }else{
        first = tinhGia50KWDau(50, gia50KWDau);
        second = tinhGia50KWKe(100, gia50KWKe);
        third = tinhGia150KWKe(250, gia150KWKe);
        four = tinhGia100KWKe(350,gia100KWKe);
        five = tinhGiaConLai(soKW, conLai)
        total = first + second + third + four + five;
    }
    return total;
}

function tinhGia50KWDau(soKW, giaTien50KWDau) {
    var reuslt = 0;
    result = soKW * giaTien50KWDau;
    return result;
}

function tinhGia50KWKe(soKW, giaTien50KWKe) {
    var reuslt = 0;
    result = (soKW - 50) * giaTien50KWKe;
    return result;
}

function tinhGia150KWKe(soKW, giaTien150KWKe) {
    var reuslt = 0;
    result = (soKW - 100) * giaTien150KWKe;
    return result;
}

function tinhGia100KWKe(soKW, giaTien100KWKe) {
    var reuslt = 0;
    result = (soKW - 250) * giaTien100KWKe;
    return result;
}
function tinhGiaConLai(soKW, giaTienConLai) {
    var reuslt = 0;
    result = (soKW - 350) * giaTienConLai;
    return result;
}


// // function tinhTienOptimize(soKW) {
//   var tong = 0;
//   if (soKW >= 0) {
//     for(var i = 0; i<4; i++) {
//       if (soKW > mocTinh[i]) {
//         tong += mocTinh[i] * tienDien[i];
//         soKW -= mocTinh[i];
//       } else {
//         tong += soKW * tienDien[i];
//         soKW -= mocTinh[i];
//       }
//     }
//     tong += soKW > 0 ? soKW * tienDien[4]:0;
//   }
//   return tong
// }