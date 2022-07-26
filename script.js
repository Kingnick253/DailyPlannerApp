const m = moment();

console.log(m.format('MMMM Do YYYY, h:mm:ss a'));
window.setInterval(function () {
    $('#currentDay').html(moment().format('ddd MM/DD/YYYY H:mm:ss'))
}, 1000);