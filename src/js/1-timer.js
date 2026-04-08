//* Import =======================================================================

//#region 
import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";
//#endregion

//* Refs =======================================================================

//#region 
const refs = {
    inputElem: document.getElementById('datetime-picker'),
    btnStartElem: document.querySelector('button[data-start]'),
    timerDElem: document.querySelector('span[data-days]'),
    timerHElem: document.querySelector('span[data-hours]'),
    timerMElem: document.querySelector('span[data-minutes]'),
    timerSElem: document.querySelector('span[data-seconds]'),
}
//#endregion

//* DOMContentLoaded ============================================================

//#region 
refs.btnStartElem.disabled = true;
refs.btnStartElem.style.marginTop = '10px';
//#endregion

//* Timer =======================================================================

//#region using library flatpickr-------------------------------------------------
let userSelectedDate;
const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
    onClose(selectedDates) {
     if (selectedDates[0] <= new Date()) {
         iziToast.error({
             title: "Error",
             message: "Please choose a date in the future",
         });
         userSelectedDate = null;
         refs.btnStartElem.disabled = true;
     } else {
         userSelectedDate = selectedDates[0];
         refs.btnStartElem.disabled = false;
     }
  },
};
flatpickr(refs.inputElem, options);
//#endregion


//#region Timer-btn-addlistener --------------------------------------------------
refs.btnStartElem.addEventListener('click', () => {
    if (!userSelectedDate) return;
    refs.btnStartElem.disabled = true;
    refs.inputElem.disabled = true;
    let diff = userSelectedDate - Date.now();
    updateText()
    const intervalId = setInterval(() => {
        diff = userSelectedDate - Date.now()
        if (diff <= 0) {
            clearInterval(intervalId);
            clearText()
            refs.inputElem.disabled = false;
        }
        updateText()
    }, 1000);

    function updateText() {
        const markup = convertMs(diff);
        refs.timerDElem.textContent = markup.days;
        refs.timerHElem.textContent = markup.hours;
        refs.timerMElem.textContent = markup.minutes;
         refs.timerSElem.textContent = markup.seconds;
    }

    function clearText() {
        refs.timerDElem.textContent = '00';
        refs.timerHElem.textContent = '00';
        refs.timerMElem.textContent = '00';
         refs.timerSElem.textContent = '00';
    }
})


//#endregion



//#region fn ms --------------------------------------------------
function convertMs(ms) {
 if (ms < 0) ms = 0;
  let days = Math.floor(ms / (1000 * 60 * 60 * 24));
  let hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((ms / (1000 * 60)) % 60);
  let seconds = Math.floor((ms / 1000) % 60);

  days = days < 10 ? '0' + days : days;
  hours = hours < 10 ? '0' + hours : hours;
  minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;
    const objRes = {
        days: `${days}`,
        hours: `${hours}`,
        minutes: `${minutes}`,
        seconds: `${seconds}`,
    }
  return objRes;
}
//#endregion

//*=======================================================================