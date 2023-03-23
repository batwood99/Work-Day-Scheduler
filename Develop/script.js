var today = dayjs();
$('#currentDay').text(today.format('dddd MMM D, YYYY'));

var h9FormEl = $('#hour-9-container');
var h10FormEl = $('#hour-10-container');
var h11FormEl = $('#hour-11-container');
var h12FormEl = $('#hour-12-container');
var h13FormEl = $('#hour-13-container');
var h14FormEl = $('#hour-14-container');
var h15FormEl = $('#hour-15-container');
var h16FormEl = $('#hour-16-container');
var h17FormEl = $('#hour-17-container');
var h9TaskEl = $('#hour-9-text');
var h10TaskEl = $('#hour-10-text');
var h11TaskEl = $('#hour-11-text');
var h12TaskEl = $('#hour-12-text');
var h13TaskEl = $('#hour-13-text');
var h14TaskEl = $('#hour-14-text');
var h15TaskEl = $('#hour-15-text');
var h16TaskEl = $('#hour-16-text');
var h17TaskEl = $('#hour-17-text');

function readH9TasksFromStorage() {
    var H9Tasks = localStorage.getItem('H9Tasks')
    if (H9Tasks) {
        H9Tasks = JSON.parse(H9Tasks);
    } else {
        H9Tasks = [];
    }
    return H9Tasks;
}

function saveH9TasksToStorage(H9Tasks) {
    localStorage.setItem('H9Tasks', JSON.stringify(H9Tasks));
}

function printH9TaskData() {
    H9TasksDisplayEl.empty();


var H9Tasks = readH9TasksFromStorage();

for (var i = 0; i < H9Tasks.length; i += 1) {
    var H9Tasks = H9Tasks[i];

    var rowEl = $('<textarea');

}

}
