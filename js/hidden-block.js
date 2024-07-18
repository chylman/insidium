const currentDate = new Date();
const fromWednesdayToSaturday = document.querySelectorAll('[data-from-wednesday-to-saturday]');
const fromSundayToWednesday = document.querySelectorAll('[data-from-sunday-to-wednesday]');

if (currentDate.getDay() >= 4 && currentDate.getDay() < 7) {
    fromMondayToWednesday.forEach(item => {
        item.classList.add('hidden')
    })
} else {
    fromWednesdayToSunday.forEach(item => {
        item.classList.add('hidden')
    })
}
