const modal = document.getElementById('custom-modal');
const closeButton = document.querySelector('.closed');
const openModal = document.querySelectorAll('.open-modal');


const openModalWindow = () => {
    modal.style.display = 'flex';
}

closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});


window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});


const userPhoneInput = document.getElementById('userPhone');

userPhoneInput.addEventListener('input', function(e) {
    let x = this.value.replace(/\D/g, '');
    let formattedNumber = '+7 (';

    if (x.length > 1) {
        formattedNumber += x.substring(1, 4);
    }
    if (x.length >= 5) {
        formattedNumber += ') ' + x.substring(4, 7);
    }
    if (x.length >= 8) {
        formattedNumber += '-' + x.substring(7, 9);
    }
    if (x.length >= 10) {
        formattedNumber += '-' + x.substring(9, 11);
    }

    this.value = formattedNumber;
});