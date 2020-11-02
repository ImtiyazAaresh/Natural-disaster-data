// function retrive_fun() {
//   var num = document.forms["retrive_form"]["retrive_no"].value;
//   if (num == "") {
//     alert("Name must be filled out");
//     return false;
//   }
//   else{
//     fetch('/profile/retrive_redis', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({Value: num}),
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       retrive_display(data);
//     })
//     .catch((error) => {
//       console.log('Error:', error);
//     }); 
//     return false;
//   }
// }


// ----------------------------------------------table-------------------------------------------------
function example_table() {
   var fir = document.forms["tableForm"]["tableIdFir"].value;
   var sec = document.forms["tableForm"]["tableIdSec"].value;
   fetch('/profile/example_table', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({First: fir,Second: sec}),
   })
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data);
     var headers = ["Entity","Code","Year","NumberTerroristIncidents"];
     example_table_disp(data,headers);
   })
   .catch((error) => {
     console.error('Error:', error);
   }); 
   return false;
}

function example_table_disp(data,headers) {
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";
   var outputHTML = "";
   outputHTML += "<table>";
   outputHTML += "<tr>";
   for(var i=0;i<headers.length;i++){
     outputHTML += "<th>" + headers[i]  + "</th>";
   }
   outputHTML += "</tr>";
   for (var i = 0; i < data.length; i++) {
           outputHTML += "<tr>";
           for(var j=0;j<headers.length;j++){
               outputHTML += "<td>" + data[i][headers[j]].value +  "</td>";
           }
           outputHTML += "</tr>";
       
   }
   outputHTML += "</table>";
   // output our html
   document.getElementById("output_div").innerHTML = outputHTML;
   }

// ----------------------------------------------table-------------------------------------------------

  // ------------------------------------------------bar-------------------------------------------------

function example_bar() {
   var fir = document.forms["barForm"]["barIdFir"].value;
   var sec = document.forms["barForm"]["barIdSec"].value;
  fetch('/profile/bar_example', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({First: fir,Second: sec}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    example_bar_disp(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 
  return false;
}

function example_bar_disp(data1) {  
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";
  var result =[];
  for(var i=0;i<data1.length;i++)
  {
  var data_final ={};
  data_final["x"] = data1[i].year.value;
  data_final["y"] = data1[i].count.value;
  result.push(data_final);
  }
  console.log(result);

  $(document).ready(function() {
    var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
    };
    var title = {
       text: 'Data in bar chart'   
    };
    var tooltip = {
       pointFormat: '{point.x}: <b>{point.y}</b>'
    };
    var plotOptions = {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          
          dataLabels: {
            
             enabled: true,
            format: '<b>{point.x}</b>: {point.y:} ',
             style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                'black'
             }
          }
       }
    };
    
    var series = [{
       type: 'column',
       name: 'Bar display',
       colorByPoint:true,
       data: result
    }];
    var json = {};   
    json.chart = chart; 
    json.title = title;     
    json.tooltip = tooltip;  
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container').highcharts(json);  
 }); 
  }


// ------------------------------------------------bar-------------------------------------------------
    // ----------------------------------------------pie-------------------------------------------------
function example_pie() {
   var fir = document.forms["pieForm"]["pieIdFir"].value;
   var sec = document.forms["pieForm"]["pieIdSec"].value;
  fetch('/profile/pie_example', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({First: fir,Second: sec}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    example_pie_disp(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 
  return false;
}
  /////////////////////////////pie graph display example
function example_pie_disp(data1) {   
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";
  var total=0;
  for(var i=0;i<data1.length;i++)
  {
    total = total + data1[i].count.value;
  }

  var result =[];
  for(var i=0;i<data1.length;i++)
  {
  var data_final =[];
  data_final[0] = String(data1[i].year.value);
  data_final[1] = data1[i].count.value;
  result.push(data_final);
  }
  console.log(result);

  $(document).ready(function() {
    var chart = {
       plotBackgroundColor: null,
       plotBorderWidth: null,
       plotShadow: false
    };
    var title = {
       text: 'Data in pie chart'   
    };
    var tooltip = {
       pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
    };
    var plotOptions = {
       pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          
          dataLabels: {
            
             enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
             style: {
                color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
                'black'
             }
          }
       }
    };
    
    var series = [{
       type: 'pie',
       name: 'Browser share',
       data: result
    }];
    var json = {};   
    json.chart = chart; 
    json.title = title;     
    json.tooltip = tooltip;  
    json.series = series;
    json.plotOptions = plotOptions;
    $('#container').highcharts(json);  
 });
    }

// ----------------------------------------------pie-------------------------------------------------
// ----------------------------------------------scatter-------------------------------------------------
function example_scatter() {
   var fir = document.forms["scatterForm"]["scatIdFir"].value;
   var sec = document.forms["scatterForm"]["scatIdSec"].value;
   fetch('/profile/example_graph', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({First: fir,Second: sec}),
   })
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data);
     example_scatter_disp(data);
   })
   .catch((error) => {
     console.error('Error:', error);
   }); 
   return false;
}

function example_scatter_disp(data1) {
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";
   var result =[];
 for(var i=0;i<data1.length;i++)
 {
 var data_final ={};
 data_final["x"] = data1[i].year.value;
 data_final["y"] = data1[i].pre.value;
 result.push(data_final);
 }
 console.log(result);

 $(document).ready(function() {
   var chart = {
      plotBackgroundColor: null,
      plotBorderWidth: null,
      plotShadow: false
   };
   var title = {
      text: 'Data in scatter chart'   
   };
   var tooltip = {
      pointFormat: '{point.x}: <b>{point.y}</b>'
   };
   var plotOptions = {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         
         dataLabels: {         
            enabled: true,
           format: '<b>{point.x}</b>: {point.y} ',
            style: {
               color: (Highcharts.theme && Highcharts.theme.contrastTextColor)||
               'black'
            }
         }
      }
   };
   
   var series = [{
      type: 'scatter',
      name: 'Scatter view',
      colorByPoint:true,
      data: result
   }];
   var json = {};   
   json.chart = chart; 
   json.title = title;     
   json.tooltip = tooltip;  
   json.series = series;
   json.plotOptions = plotOptions;
   $('#container').highcharts(json);  
});
}

 // ------------------------------------------------scatter-------------------------------------------------

  // ------------------------------------------------multiple bar-------------------------------------------------

  function example_bar_multiple() {
   var fir = document.forms["barmulForm"]["barmulIdFir"].value;
   var sec = document.forms["barmulForm"]["barmulIdSec"].value;

  fetch('/profile/bar_example_multiple', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({First: fir,Second: sec}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    example_bar_mulp_disp(data,fir,sec);
  })
  .catch((error) => {
    console.error('Error:', error);
  }); 
  return false;
}

function example_bar_mulp_disp(data1,first,second) {  
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";
   //for x axis values
   fir=parseInt(first);
   sec=parseInt(second);
   firstValue = fir;
   var cata =[];
for(var i=0;i<=sec-fir;i++)
{
   cata[i] = firstValue;
   firstValue++;
}
// console.log(cata);
//for x axis values
/////////////////////////y axis value
var result =[];
for(var i=0;i<data1.length;i=i+cata.length)
{
   var data_final ={};
   var data_array = [];
   data_final["name"] = data1[i].Entity.value;
   
   for(var j=0;j<cata.length;j++)
   {
      data_array[j] = data1[j+i].Prevalence.value;
   }
   data_final["data"] = data_array;
   result.push(data_final);
   
}
console.log(result);
/////////////////////////y axis value
  Highcharts.chart('container', {
   chart: {
       type: 'column'
   },
   title: {
       text: 'Monthly Average Rainfall'
   },
   subtitle: {
       text: 'Source: WorldClimate.com'
   },
   xAxis: {
       categories: cata,//add x axis values
       crosshair: true
   },
   yAxis: {
       min: 0,
       title: {
           text: 'Rainfall (mm)'
       }
   },
   tooltip: {
       headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
       pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
           '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
       footerFormat: '</table>',
       shared: true,
       useHTML: true
   },
   plotOptions: {
       column: {
           pointPadding: 0.2,
           borderWidth: 0
       }
   },
   series: result
});
  }


// ------------------------------------------------multiple bar-------------------------------------------------
// ----------------------------------------------hist-------------------------------------------------
function example_hist() {
   var fir = document.forms["histForm"]["histIdFir"].value;
   var sec = document.forms["histForm"]["histIdSec"].value;
   fetch('/profile/example_hist', {
     method: 'POST', // or 'PUT'
     headers: {
       'Content-Type': 'application/json',
     },
     body: JSON.stringify({First: fir,Second: sec}),
   })
   .then(response => response.json())
   .then(data => {
     console.log('Success:', data);
     example_hist_display(data);
   })
   .catch((error) => {
     console.error('Error:', error);
   }); 
   return false;
}

function example_hist_display(data1) {   console.log(data1);
   document.getElementById("output_div").innerHTML = "";
   document.getElementById("container").innerHTML = "";

var cata =[];
var data_val =[];
var data_obj ={};
var sere =[];
for(var i=0;i<data1.length;i++)
{
   cata[i] = data1[i].year.value;
   data_val[i] = data1[i].count.value;
}
data_obj["name"]= 'Data';
data_obj["data"]= data_val;
sere.push(data_obj);
console.log(sere);
Highcharts.chart('container', {
   chart: {
     type: 'column'
   },
   title: {
     text: 'Histogram using a column chart'
   },
   subtitle: {
     text: ''
   },
   xAxis: {
     categories: cata,
     crosshair: true
   },
   yAxis: {
     min: 0,
     title: {
       text: ''
     }
   },
   tooltip: {
     headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
     pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
       '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
     footerFormat: '</table>',
     shared: true,
     useHTML: true
   },
   plotOptions: {
     column: {
       pointPadding: 0,
       borderWidth: 0,
       groupPadding: 0,
       shadow: false
     }
   },
   series: sere
 });
 
}

 // ------------------------------------------------hist-------------------------------------------------

    //////////////////////IN D3////////////////////////////////////////////

    ///example data aaresh
// function example_aaresh() {

//     fetch('/profile/example_graph', {
//       method: 'POST', // or 'PUT'
//       headers: {
//         'Content-Type': 'application/json',
//       }
//     })
//     .then(response => response.json())
//     .then(data => {
//       console.log('Success:', data);
//       example_disp(data);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     }); 
//     return false;
// }
// //https://www.d3-graph-gallery.com/intro_d3js.html
// //dot graph display example
// function example_disp(data1) {
// // Create data
// //var data = [ {x:10, y:20}, {x:40, y:90}, {x:80, y:50} ]
// var data = [];
//   var margin = {top: 10, right: 40, bottom: 30, left: 30},
//     width = 500 - margin.left - margin.right,
//     height = 400 - margin.top - margin.bottom;

// // append the svg object to the body of the page
// var svG = d3.select("#scatter_area")
//   .append("svg")
//     .attr("width", width + margin.left + margin.right)
//     .attr("height", height + margin.top + margin.bottom)
//   .append("g")
//     .attr("transform",
//           "translate(" + margin.left + "," + margin.top + ")");

// // X scale and Axis
// var x = d3.scaleLinear()
//     .domain([15, 25])         // This is the min and the max of the data: 0 to 100 if percentages
//     .range([0, width]);       // This is the corresponding value I want in Pixel
// svG
//   .append('g')
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x));

// // X scale and Axis
// var y = d3.scaleLinear()
//     .domain([1980, 2012])         // This is the min and the max of the data: 0 to 100 if percentages
//     .range([height, 0]);       // This is the corresponding value I want in Pixel

// svG
//   .append('g')
//   .call(d3.axisLeft(y));

//   for(var i=0; i<data1.length;i++)
//   {
//       var obj = {};
//       obj["x"] = data1[i].pre.value;
//       obj["y"]=data1[i].year.value;
//       data.push(obj);
//   }
  
// svG
//   .selectAll(".whatever")
//   .data(data)
//   .enter()
//   .append("circle")
//     .attr("cx", function(d){ return x(d.x) })
//     .attr("cy", function(d){ return y(d.y) })
//     .attr("r", 7)
  
// }

// ///////////////////bar graph example-----------------------------------------------------------------
// function example_BAR() {
//   fetch('/profile/bar_example', {
//     method: 'POST', // or 'PUT'
//     headers: {
//       'Content-Type': 'application/json',
//     }
//   })
//   .then(response => response.json())
//   .then(data => {
//     console.log('Success:', data);
//     example_bar_disp(data);
//   })
//   .catch((error) => {
//     console.error('Error:', error);
//   }); 
//   return false;
// }
// //https://bl.ocks.org/d3noob/bdf28027e0ce70bd132edc64f1dd7ea4
// //bar graph display example
// function example_bar_disp(data1) {   
// var data = [];
//   var margin = {top: 20, right: 20, bottom: 30, left: 40},
// width = 960 - margin.left - margin.right,
// height = 500 - margin.top - margin.bottom;

// // set the ranges
// var x = d3.scaleBand()
//       .range([0, width])
//       .padding(0.1);
// var y = d3.scaleLinear()
//       .range([height, 0]);
      

// var svg = d3.select("#scatter_area").append("svg")
// .attr("width", width + margin.left + margin.right)
// .attr("height", height + margin.top + margin.bottom)
// .append("g")
// .attr("transform", 
//       "translate(" + margin.left + "," + margin.top + ")");

// for(var i=0; i<data1.length;i++)
// {
//     var obj = {};
//     obj["Count"] = data1[i].count.value;
//     obj["Year"]=data1[i].year.value;
//     data.push(obj);
// }

// // Scale the range of the data in the domains
// x.domain(data.map(function(d) { return d.Count; }));//replace range
// y.domain([1960, d3.max(data, function(d) { return d.Year; })]);//replaced range

// // append the rectangles for the bar chart
// svg.selectAll(".bar")
//   .data(data)
// .enter().append("rect")
//   .attr("class", "bar")
//   .attr("x", function(d) { return x(d.Count); })
//   .attr("width", x.bandwidth())
//   .attr("y", function(d) { return y(d.Year); })
//   .attr("height", function(d) { return height - y(d.Year); });

// // add the x Axis
// svg.append("g")
//   .attr("transform", "translate(0," + height + ")")
//   .call(d3.axisBottom(x));

// // add the y Axis
// svg.append("g")
//   .call(d3.axisLeft(y));
//   }
