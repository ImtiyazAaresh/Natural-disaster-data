function ValueSearch(name)
{
  var value = document.getElementById(name).value;
  console.log("Initial data is" +value);
if(value%2==0){
var ar="even";
}
else if(value%2==1){
  var ar="odd";
}
else{
  var ar="fish";
}
console.log("Initial output is" +ar);
disp_data(ar);
}

function disp_data(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  var div = document.createElement("div");
  div.style.padding = '20px';
  div.innerHTML =  data;
    mainContainer.appendChild(div);
}

//question 7
function room_range() {
  var range1 = document.forms["r_form"]["r_id1"].value;
  var range2 = document.forms["r_form"]["r_id2"].value;
    fetch('/profile/room_num_range', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value1: range1,Value2: range2}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      room_range_disp(data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}

function room_range_disp(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
    var img = document.createElement('img'); 
    var img_url = "/images/" + data[i].PICTURE;
    img.src =  img_url;
    img.style.height = '100px';
    img.style.width = '100px';
         div.innerHTML =  "Name is "+data[i].NAME +"  and Caption is "+data[i].CAPTION;
         div.appendChild(img);
    mainContainer.appendChild(div);
  }
}

///question 8
function name_change_id() {
  var range1 = document.forms["nc_form"]["name"].value;
  var range2 = document.forms["nc_form"]["id"].value;
    fetch('/profile/name_pic_id', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value1: range1,Value2: range2}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}

function name_pic_change_id() {
  var range1 = document.forms["p_form"]["picture"].value;
  var range2 = document.forms["p_form"]["room"].value;
    fetch('/profile/name_pic_room', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value1: range1,Value2: range2}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    }); 
    return false;
}
