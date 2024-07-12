let codebox = document.querySelector('.codebox');
let qrcode = document.querySelector('.qrcode');
let qrtext = document.querySelector('#qrtext');

function GenerateQR(){
    qrcode.src ="/QR CODE/image/qrcode.png" + qrtext.value;
    codebox.classList.remove("code");
    
}