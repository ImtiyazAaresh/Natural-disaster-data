//GIVES LARGEST N QUAKES--PASS N
function maxnumber() {
  var value = document.forms["max_mag"]["maxnum"].value;
  if (value == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/maxnumber', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value: value}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      var headers = ["ID","MAG","TYPE"];
      showTableData(data,headers);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//------------------------------------------------------------------------------------------------------------//
//GIVES COORDINATES AND RANGE IN KM--GIVES EARTHQUAKES IN THAT RANGE
function range_lat_long() {
  var lat = document.forms["dis_lat_long"]["lat_num"].value;
  var long = document.forms["dis_lat_long"]["long_num"].value;
  var range = document.forms["dis_lat_long"]["range_num"].value;
    console.log(lat + "" + long + "" +range);
  if (lat == "" || long == "" || range == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/lan_lon_range', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({latitude: lat,longitude: long,Range: range}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data[0]);
      var headers = ["DISTANCE","ID","MAG"];
      showTableData(data,headers)
     // range_data_call(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//------------------------------------------------------------------------------------------------------------//
//GIVE DATES AND MAG--SHOWS DATA BETWEEN THAT DATES
function date_cal_mag() {
  var dat1 = document.forms["mag_for_dates"]["dat1"].value;
  var dat2 = document.forms["mag_for_dates"]["dat2"].value;
  var mag = document.forms["mag_for_dates"]["dat_mag"].value;
  console.log(dat1 + dat2);
  if (dat1 == "" || dat2 == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/daterangecal', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Date1: dat1,Date2: dat2,Mag: mag}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      var headers = ["ID","MAG"];
      showTableData(data,headers)
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}   


//------------------------------------------------------------------------------------------------------------//
//GIVE DAYS AND DISPLAYS COUNT OF MAGS
function count_mag_fun() {
  var days = document.forms["count_of_mags"]["count_mag"].value;
  console.log(days);
  if (days == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/count_of_mag', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Day: days}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      var headers = ["COUNT","RANGE"];
      showTableData(data,headers)
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}   

//------------------------------------------------------------------------------------------------------------//
//GIVE LOCATIOIN 1 and LOCATION 2 DETAILS AND RANGE
function high_loc1_loc2() {
  var loc1_lat = document.forms["high_form_loc"]["loc1_lan"].value;
  var loc1_lon = document.forms["high_form_loc"]["loc1_lon"].value;
  var loc2_lat = document.forms["high_form_loc"]["loc2_lan"].value;
  var loc2_lon = document.forms["high_form_loc"]["loc2_lon"].value;
  var range = document.forms["high_form_loc"]["range_high_loc"].value;


  if (range == "") {
    alert("Name must be filled out");
    return false;
  }
  else{{
    ///First location call
    fetch('/profile/lac_lon_mac_cal', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({lat1: loc1_lat,lon1: loc1_lon,lat2: loc2_lat,lon2: loc2_lon,ran: range}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      high_loc_ran(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }
    return false;
  }
}   

//display keywords for names and creating div
function high_loc_ran(data) {
  document.getElementById("myData").innerHTML = "";
  var div = document.createElement("div");
  div.style.padding = '20px';
  var mainContainer = document.getElementById("myData");
  var len1 = data[0][1];
  var len2 = data[0][2];
  div.innerHTML =  "No of earthquakes in location-1 is " + len1 +" and " + "  No of earthquakes in location-2 is " + len2;
  mainContainer.appendChild(div);
}
//------------------------------------------------------------------------------------------------------------//
//GIVES COORDINATES AND RANGE IN KM--GIVES MAX MAG OF EARTHQUAKE
function get_lat_lon_max() {
  var lat = document.forms["max_mag_lat_lon"]["lat_max_mag"].value;
  var long = document.forms["max_mag_lat_lon"]["long_max_mag"].value;
  var range = document.forms["max_mag_lat_lon"]["range_max_mag"].value;
  if (lat == "" || long == "" || range == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/lan_lon_range', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({latitude: lat,longitude: long,Range: range}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      high_loc_max_mag(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
} 

//display keywords for names and creating div
function high_loc_max_mag(data) {
  document.getElementById("myData").innerHTML = "";
  var div = document.createElement("div");
  div.style.padding = '20px';
  var mainContainer = document.getElementById("myData");
  div.innerHTML = "ID of highest MAG is   :" + data[0].ID + "     MAG is  " + data[0].MAG;
  mainContainer.appendChild(div);
}

///////////////////////////////////DISPLAY DATA IN TABLES/////////////////////////////////////
function showTableData(data,headers) {
  console.log(data);
  document.getElementById("myData").innerHTML = "";
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
              outputHTML += "<td>" + data[i][headers[j]] +  "</td>";
          }
          outputHTML += "</tr>";
      
  }
  outputHTML += "</table>";
  // output our html
  document.getElementById("output_div").innerHTML = outputHTML;
  }
  
