

 
 new Swiper('.hero__slider', {
    slidesPerView: 2, 
    spaceBetween: 10,
    loop: true,
    navigation: {
    prevEl: '.hero__slider-btn_prev',
    nextEl: '.hero__slider-btn_next',
   },
   autoplay: {
    delay: 3000,
   },
   breakpoints: {
    320: {
        
        slidesPerView: 1,
    },
    560: {
        spaceBetween: 8,
    }
   }
});

// 

const calcForm = document.querySelector('.js-calc-form');
const totalSquare = document.querySelector('.js-square');
const totalPrice = document.querySelector('.js-total-price');
const calcResultWrapper = document.querySelector('.calc__result-wrapper');
const btnSubmit = document.querySelector('.js-submit');
 
const tariff = {
economy: 500,
comfort:550 ,
premium:700,    
};


calcForm.addEventListener('input', () => {

    if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        btnSubmit.disabled = false
    } else {
        btnSubmit.disabled = true
    }

});

calcForm.addEventListener('submit', (event) => {
 event.preventDefault();
  

   if (calcForm.width.value > 0 && calcForm.length.value > 0) {
        const squere = calcForm.width.value * calcForm.length.value;
        const price = squere * tariff[calcForm.tariff.value];

        calcResultWrapper.style.display = 'block';

        totalSquare.textContent =`${squere} кв.м`;
        totalPrice.textContent =`${price} rub.`;

   }
});

// modal window

const modalController = ({modal, btnOpen, btnClose, time = 300}) => {
    const buttonElems = document.querySelectorAll(btnOpen);
    const modalElem = document.querySelector(modal);
  
    modalElem.style.cssText = `
      display: flex;
      visibility: hidden;
      opacity: 0;
      transition: opacity ${time}ms ease-in-out;
    `;
  
    const closeModal = event => {
      const target = event.target;
  
      if (
        target === modalElem ||
        (btnClose && target.closest(btnClose)) ||
        event.code === 'Escape'
        ) {
        
        modalElem.style.opacity = 0;
  
        setTimeout(() => {
          modalElem.style.visibility = 'hidden';
        }, time);
  
        window.removeEventListener('keydown', closeModal);
      }
    }
  
    const openModal = () => {
      modalElem.style.visibility = 'visible';
      modalElem.style.opacity = 1;
      window.addEventListener('keydown', closeModal)
    };
  
    buttonElems.forEach(btn => {
      btn.addEventListener('click', openModal);
    });
  
    modalElem.addEventListener('click', closeModal);
  };
  
  modalController ({
    modal: '.modal', 
    btnOpen: '.js-order', 
    btnClose: '.modal__close',
});
// modal window end!



let king = 'King Balon the 6th';
king = 6;


console.log(king);