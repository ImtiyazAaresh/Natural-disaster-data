
  
//search function  for image
function search(id) {
var columnName = id;
  var value = document.getElementById(id).value;

fetch('/profile/search', {
  method: 'POST', // or 'PUT'
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({Name: columnName, Value: value}),
})
.then(response => response.json())
.then(data => {
  console.log('Success:', data);
  appendData(data);
})
.catch((error) => {
  console.error('Error:', error);
});
}

//search function for keyword
function searchnamekey(id) {
  var columnName = id;
  var value = document.getElementById(id).value;
  
  fetch('/profile/searchnamekey', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({Name: columnName, Value: value}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    appendData_key(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }


  //search function for salary picture
function search_sal(check,id) {
  var columnName = id;
  var value = document.getElementById(check).value;
  
  fetch('/profile/searchsal', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({Name: columnName, Value: value}),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
    appendData(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
  }


  //delete function to delete name
  function searchdel(id) {
    var value = document.getElementById(id).value;
    
    fetch('/profile/delete', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({Value: value}),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    }
//function to replace photo of name
    function replacephoto(na,pic) {
      var name = document.getElementById(na).value;
      var pic = document.getElementById(pic).value;
      
      fetch('/profile/updatephoto', {
        method: 'POST', // or 'PUT'
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({Name: name, Value: pic}),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
      }
//replace keyword of name
      function replacekeyword(na,pic) {
        var name = document.getElementById(na).value;
        var pic = document.getElementById(pic).value;
        
        fetch('/profile/replacekeyword', {
          method: 'POST', // or 'PUT'
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({Name: name, Value: pic}),
        })
        .then(response => response.json())
        .then(data => {
          console.log('Success:', data);
        })
        .catch((error) => {
          console.error('Error:', error);
        });
        }

//display pictures for names and creating div
function appendData(data) {
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
         div.innerHTML =  data[i].NAME + "  ";
         div.appendChild(img);
    mainContainer.appendChild(div);
  }
}

//display keywords for names and creating div
function appendData_key(data) {
  document.getElementById("myData").innerHTML = "";
  var mainContainer = document.getElementById("myData");
  for (var i = 0; i < data.length; i++) {
    var div = document.createElement("div");
    div.style.padding = '20px';
         div.innerHTML =  data[i].NAME + "          " + data[i].KEYWORK;
    mainContainer.appendChild(div);
  }
}


    


