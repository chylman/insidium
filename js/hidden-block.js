const currentDate = new Date();
const fromWednesdayToSaturday = document.querySelectorAll('[data-from-wednesday-to-saturday]');
const fromSundayToWednesday = document.querySelectorAll('[data-from-sunday-to-wednesday]');

if (currentDate.getDay() >= 4 && currentDate.getDay() < 7) {
    fromSundayToWednesday.forEach(item => {
        item.classList.add('hidden')
    })
} else {
    fromWednesdayToSaturday.forEach(item => {
        item.classList.add('hidden')
    })
}
