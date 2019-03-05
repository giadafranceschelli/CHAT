//GRAFICO 1
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff);

function drawStuff() {
var data = new google.visualization.arrayToDataTable([
    ['Move', 'Percentage'],
    ["pc nuovi registrati oggi", 0],
    ["pc con modifiche black list", 0],
    ["pc con modifiche hw", 64],
    ["pc con modifiche sw", 105],
]);


var options = {
    width: 650,
    legend: { position: 'none' },
    // chart: {
    // title: 'Aggiornamenti odierni Net.Inventory',
    // subtitle: '' },
    axes: {
    x: {
        0: { side: 'bottom', label: ''} // Top x-axis.
    }
    },
    bar: { groupWidth: "90%" },
};

var chart = new google.charts.Bar(document.getElementById('top_x_div'));
// Convert the Classic options to Material options.
chart.draw(data, google.charts.Bar.convertOptions(options));
};

//GRAFICO 2
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff2);

function drawStuff2() {
var data = new google.visualization.arrayToDataTable([
    ['Move', 'Percentage'],
    ["inseriti manualmente", 7],
    ["agent ultima ver.(3.016)", 287],
    ["agent non aggiornati", 3]
]);

var options = {
    width: 650,
    legend: { position: 'none' },
    // chart: {
    // title: 'Aggiornamenti odierni Net.Inventory',
    // subtitle: '' },
    axes: {
    x: {
        0: { side: 'bottom', label: ''} // Top x-axis.
    }
    },
    bar: { groupWidth: "90%" }
};
var chart = new google.charts.Bar(document.getElementById('top_x_div2'));
chart.draw(data, google.charts.Bar.convertOptions(options));
};

//GRAFICO 3
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff3);

function drawStuff3() {
var data = new google.visualization.arrayToDataTable([
    ['Move', 'Percentage'],
    ["Allarmi critici", 7],
    ["Allarmi di media entità", 5]
]);

var options = {
    width: 650,
    legend: { position: 'none' },
    // chart: {
    // title: 'Aggiornamenti odierni Net.Inventory',
    // subtitle: '' },
    axes: {
    x: {
        0: { side: 'bottom', label: ''} // Top x-axis.
    }
    },
    bar: { groupWidth: "90%" }
};
var chart = new google.charts.Bar(document.getElementById('top_x_div3'));
chart.draw(data, google.charts.Bar.convertOptions(options));
};

//GRAFICO 4
google.charts.load('current', {'packages':['bar']});
google.charts.setOnLoadCallback(drawStuff4);

function drawStuff4() {
var data = new google.visualization.arrayToDataTable([
    ['Move', 'Percentage'],
    ["Device end of support", 16],
    ["Device and of sale", 17],
    ["IOS end of support", 9],
    ["IOS end of sale", 9]
]);

var options = {
    width: 650,
    legend: { position: 'none' },
    // chart: {
    // title: 'Aggiornamenti odierni Net.Inventory',
    // subtitle: '' },
    axes: {
    x: {
        0: { side: 'bottom', label: ''} // Top x-axis.
    }
    },
    bar: { groupWidth: "90%" }
};
var chart = new google.charts.Bar(document.getElementById('top_x_div4'));
chart.draw(data, google.charts.Bar.convertOptions(options));
};
