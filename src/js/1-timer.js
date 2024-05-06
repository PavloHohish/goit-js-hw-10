import flatpickr from 'flatpickr';
import iziToast from 'izitoast';
import 'flatpickr/dist/flatpickr.min.css';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
const startBtn = document.getElementById('start-button');
const datetimePicker = document.getElementById('datetime-picker');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    userSelectedDate = selectedDates[0];
    const currentDate = new Date();
    startBtn.disabled = !(userSelectedDate > currentDate);
    if (userSelectedDate <= currentDate) {
      iziToast.error({
        title: 'Error',
        message: 'Please choose a future date.',
        position: 'topRight',
      });
      return;
    }
  },
};

flatpickr(datetimePicker, options);

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function addLeadingZero(value) {
  return String(value).padStart(2, '0');
}

startBtn.addEventListener('click', () => {
  const currentDate = new Date();
  let timeLeft = userSelectedDate - currentDate;

  startBtn.disabled = true;
  datetimePicker.disabled = true;

  const timerInterval = setInterval(() => {
    const { days, hours, minutes, seconds } = convertMs(timeLeft);

    document.querySelector('[data-days]').textContent = addLeadingZero(days);
    document.querySelector('[data-hours]').textContent = addLeadingZero(hours);
    document.querySelector('[data-minutes]').textContent =
      addLeadingZero(minutes);
    document.querySelector('[data-seconds]').textContent =
      addLeadingZero(seconds);

    timeLeft -= 1000;

    if (timeLeft < 0) {
      clearInterval(timerInterval);
      datetimePicker.disabled = false;
    }
  }, 1000);
});
