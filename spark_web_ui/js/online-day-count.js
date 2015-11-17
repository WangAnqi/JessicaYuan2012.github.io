
var lines = [[]];

function returnInt(element){
  return parseInt(element,10);
}

function processData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    var headers = allTextLines[0].split(',');
    for (var i=1; i<allTextLines.length; i++) {
        var data = allTextLines[i].split(',');
        if (data.length == headers.length) {
            for (var j=0; j<headers.length; j++) {
            	if (lines[j] == undefined){
            		lines[j] = [];
                }
                lines[j].push(data[j].replace(/\"/g, ""));
            }
        }
    }
    //console.log(lines);
}

var lineChartData = {
	labels : ["1","2","3","4","5","6","7","8","9"],
	datasets : [
		{
			label: "Online Day Count",
			fillColor : "rgba(220,220,220,0.2)",
			strokeColor : "rgba(220,220,220,1)",
			pointColor : "rgba(220,220,220,1)",
			pointStrokeColor : "#fff",
			pointHighlightFill : "#fff",
			pointHighlightStroke : "rgba(220,220,220,1)",
			data : lines[1].map(returnInt).slice(0,9)
		},
	]
}



$(document).ready(function() {
		//process csv data
        $.ajax({
            type: "GET",
            url: "data/OnlineDayCount/part-00000",
            dataType: "text",
            success: function(data) {processData(data);}
         });

        //draw chart
    	var ctx = document.getElementById("test-chart").getContext("2d");
		window.myLine = new Chart(ctx).Line(lineChartData, {
			responsive: true
		});
    });