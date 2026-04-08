//* Import ====================================================================

//#region 
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
//#endregion

//* Refs ====================================================================

//#region 
const refs = {
    formElem: document.querySelector('.form'),
}
//#endregion

//* Form ====================================================================

//#region 
refs.formElem.addEventListener('submit', handleFormElemSubmit);

function handleFormElemSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const formStorage = {
        makeChoose: formData.get('state'),
        delay: Number(formData.get('delay')),
    }

    if (formStorage.delay <= 0) {
        iziToast.error({ message: `❌ ${formStorage.delay}ms is invalid value` });
        return;
    };
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // If ---------------------------------------
            if (formStorage.makeChoose === 'fulfilled') {
                resolve(formStorage.delay)
            }
            // Else -------------------------------------
            else {
                reject(formStorage.delay)
            };
    
        }, formStorage.delay)
    });


    promise
        .then((delay) => {
      
                    iziToast.success({
                        message: `✅ Fulfilled promise in ${delay}ms`,
                        icon: '',
                        iconText: '',
                    })
         
        })
        .catch((delay) => {
                    iziToast.error({
                        message: `❌ Rejected promise in ${delay}ms`,
                        icon: '',
                        iconText: ''
                    })
        })
};
//#endregion

//*  ====================================================================
