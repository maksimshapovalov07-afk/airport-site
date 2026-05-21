var flights = [
    { type: 'arrival', flight: 'SU1234', destination: 'Москва', time: '10:30', status: 'Прибыл' },
    { type: 'arrival', flight: 'SU1235', destination: 'Москва', time: '11:15', status: 'Прибывает' },
    { type: 'arrival', flight: 'EK131', destination: 'Дубай', time: '12:15', status: 'По расписанию' },
    { type: 'arrival', flight: 'TK413', destination: 'Стамбул', time: '14:45', status: 'Задержка 20 мин' },
    { type: 'arrival', flight: 'FJ532', destination: 'Нанди', time: '16:20', status: 'По расписанию' },
    { type: 'arrival', flight: 'SU6789', destination: 'СПб', time: '18:00', status: 'По расписанию' },
    { type: 'departure', flight: 'SU5678', destination: 'Сочи', time: '09:00', status: 'Идёт посадка' },
    { type: 'departure', flight: 'EY789', destination: 'Абу-Даби', time: '11:30', status: 'Регистрация' },
    { type: 'departure', flight: 'SU4321', destination: 'Владивосток', time: '13:55', status: 'По расписанию' },
    { type: 'departure', flight: 'BA873', destination: 'Лондон', time: '15:40', status: 'Задержка' },
    { type: 'departure', flight: 'LH901', destination: 'Мюнхен', time: '17:20', status: 'По расписанию' },
    { type: 'departure', flight: 'SU1111', destination: 'Калининград', time: '19:00', status: 'Регистрация' }
];

var currentType = 'arrival';

function showArrivals() {
    currentType = 'arrival';
    renderTable();
}

function showDepartures() {
    currentType = 'departure';
    renderTable();
}

function renderTable() {
    var filtered = [];
    for (var i = 0; i < flights.length; i++) {
        if (flights[i].type == currentType) {
            filtered[filtered.length] = flights[i];
        }
    }
    
    var html = '';
    for (var i = 0; i < filtered.length; i++) {
        html = html + '<tr>';
        html = html + '<td>' + filtered[i].flight + '</td>';
        html = html + '<td>' + filtered[i].destination + '</td>';
        html = html + '<td>' + filtered[i].time + '</td>';
        html = html + '<td>' + filtered[i].status + '</td>';
        html = html + '</tr>';
    }
    
    document.getElementById('flightBody').innerHTML = html;
    document.getElementById('stats').innerHTML = '📋 Найдено рейсов: ' + filtered.length;
}

function searchFlights() {
    var searchText = document.getElementById('searchInput').value.toLowerCase();
    var rows = document.querySelectorAll('#flightBody tr');
    for (var i = 0; i < rows.length; i++) {
        var text = rows[i].innerText.toLowerCase();
        if (text.indexOf(searchText) > -1) {
            rows[i].style.display = '';
        } else {
            rows[i].style.display = 'none';
        }
    }
}

function updateTime() {
    var now = new Date();
    var hours = now.getHours();
    var minutes = now.getMinutes();
    var seconds = now.getSeconds();
    if (hours < 10) hours = '0' + hours;
    if (minutes < 10) minutes = '0' + minutes;
    if (seconds < 10) seconds = '0' + seconds;
    document.getElementById('currentTime').innerHTML = hours + ':' + minutes + ':' + seconds;
}

updateTime();
setInterval(updateTime, 1000);
renderTable();