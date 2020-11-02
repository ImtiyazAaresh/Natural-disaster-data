// ----------------------------------------------------------------------------------------------------------
//77777777777777777777777777777777777777777
function retrive_fun() {
  var num = document.forms["retrive_form"]["retrive_no"].value;
  if (num == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/retrive_redis', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value: num}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      retrive_display(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    }); 
    return false;
  }
}
//GIVE no of time and get time
function retrive_display(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  //added to display time taken
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Time taken is " + data[data.length-1].timeTaken + " ms";
  mainContainer.appendChild(div)
  // added to display time taken
  for (var i = 0; i < data.length-1; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Year is " + data[i].year.value + "  ;No of incidents is " + data[i].NumberTerroristIncidents.value+ "  ;Place is " + data[i].Entity.value;
    mainContainer.appendChild(div);
  }
}


// 88888888888888888888888888888888888888888888888888
function lat_lat_fun() {
  var lat1 = document.forms["lat_lat_form"]["loc1_lan"].value;
  var lat2 = document.forms["lat_lat_form"]["loc2_lan"].value;
  if (lat1 == "" || lat2== "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/lat1_lat2_data', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1,Latitude2: lat2}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      lat_lat_display(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function lat_lat_display(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  //added to display time taken
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Time taken is " + data[data.length-1].timeTaken + " ms";
  mainContainer.appendChild(div)
  // added to display time taken
  for (var i = 0; i < data.length-1; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Year is " + data[i].year.value + "  ;No of incidents is " + data[i].NumberTerroristIncidents.value+ "  ;Place is " + data[i].Entity.value;
    mainContainer.appendChild(div);
  }
}


// 9999999999999999999999999999999999999999999999
function p1_p2_fun() {
  var lat1 = document.forms["p1_p2_form"]["p1_data"].value;
  var lat2 = document.forms["p1_p2_form"]["p2_data"].value;
  if (lat1 == "" || lat2== "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/p1_p2_data', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1,Latitude2: lat2}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      p1_p2_dis(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function p1_p2_dis(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  //added to display time taken
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Time taken is " + data[data.length-1].timeTaken + " ms";
  mainContainer.appendChild(div)
  // added to display time taken
  for (var i = 0; i < data.length-1; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Count is " + data[i].count.value + "  ;Entity is " + data[i].Entity.value;
    mainContainer.appendChild(div);
  }
}


//10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10 10
function lat_lat_db_fun() {
  var lat1new = document.forms["lat_lat_db_form"]["db_lan_1"].value;
  var lat2new = document.forms["lat_lat_db_form"]["db_lan_2"].value;
  var timnew = document.forms["lat_lat_db_form"]["no_of_times_db"].value;
  if (lat1new == "" || lat2new == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/lat1_lat2_db_data', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1new,Latitude2: lat2new,Timesn: timnew}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      lat_lat_db_display(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function lat_lat_db_display(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Total time taken is "+ data[data.length-1].Totaltime + " ms";
  mainContainer.appendChild(div)
  for (var i = 0; i < data.length-1; i++) 
  {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Year is " + data[i].year.value + "  ;Place is " + data[i].Entity.value+ "  ;No of times " + data[i].NumberTerroristIncidents.value;
    mainContainer.appendChild(div);
  }
}


//GIVE Latitude 1 and latitude 2 and no of times only DB DETAILS
function per_db_fun() {
  var lat1new = document.forms["per_db_form"]["per1"].value;
  var lat2new = document.forms["per_db_form"]["per2"].value;
  var timnew = document.forms["per_db_form"]["per_no_db"].value;
  if (lat1new == "" || lat2new == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/per_values_sql', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1new,Latitude2: lat2new,Timesn: timnew}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      per_db_display(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function per_db_display(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Total time taken is "+ data[data.length-1].Totaltime + " ms";
  mainContainer.appendChild(div)
  for (var i = 0; i < data[0].length-1; i++) 
  {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Count is " + data[0][i].count.value + "  ;Entity is " + data[0][i].Entity.value;
    mainContainer.appendChild(div);
  }
}

// 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11  11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 11 
function lat_lat_db_func() {
  var lat1new = document.forms["lat_lat_db_formc"]["db_lan_1c"].value;
  var lat2new = document.forms["lat_lat_db_formc"]["db_lan_2c"].value;
  var timnew = document.forms["lat_lat_db_formc"]["no_of_times_dbc"].value;
  if (lat1new == "" || lat2new == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/aaresh', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1new,Latitude2: lat2new,Timesn: timnew}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      lat_lat_db_displayc(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function lat_lat_db_displayc(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Total time taken is "+ data[data.length-1].Totaltime + " ms";
  mainContainer.appendChild(div)
  for (var i = 0; i < data[0].length-1; i++) 
  {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Year is " + data[0][i].year.value + "  ;Place is " + data[0][i].Entity.value+ "  ;No of times " + data[0][i].NumberTerroristIncidents.value;
    mainContainer.appendChild(div);
  }
}


//GIVE Latitude 1 and latitude 2 and no of times only DB DETAILS
function per_db_func() {
  var lat1new = document.forms["per_db_formc"]["per1c"].value;
  var lat2new = document.forms["per_db_formc"]["per2c"].value;
  var timnew = document.forms["per_db_formc"]["per_no_dbc"].value;
  if (lat1new == "" || lat2new == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/per_values_sqlc', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Latitude1: lat1new,Latitude2: lat2new,Timesn: timnew}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      per_db_display(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
  }
}

//display keywords for names and creating div
function per_db_displayc(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML = "Total time taken is "+ data[data.length-1].Totaltime + " ms";
  mainContainer.appendChild(div)
  for (var i = 0; i < data[0].length-1; i++) 
  {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  "Count is " + data[0][i].count.value + "  ;Entity is " + data[0][i].Entity.value;
    mainContainer.appendChild(div);
  }
}


////vishnu exam

function findArtist() {
  var name = document.forms["artist"]["x1"].value;
  if (name == "") {
    alert("Name must be filled out");
    return false;
  }
  else{
    fetch('/profile/retrive', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Name: name}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      retrive_display(data);
    })
    .catch((error) => {
      console.log('Error:', error);
    }); 
    return false;
  }
}

function retrive_display(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
    var img = document.createElement('img'); 
    var img_url = "/images/" + data[i].image;
    img.src =  img_url;
    img.style.height = '100px';
    img.style.width = '100px';
         div.innerHTML =  data[i].name + "  " + data[i].biography;
         div.appendChild(img);
    mainContainer.appendChild(div);
  }
}

<div id="myData">  </div>
