

const employeeImage = document.getElementsByClassName('image-box');
const employeeInfo = document.getElementsByClassName('employee-info');
const employeeBox = document.getElementsByClassName('employee-box');
const url = 'https://randomuser.me/api/?results=12';


// Fetch Function
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {

      for(let i=0; i < data.results.length; i++) {

        employeeBox[i].innerHTML =   
        
            `<div class="image-box">
                <img src="${data.results[i].picture.medium}" alt="">
            </div>
            <div class="employee-info">
                <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
                <p>${data.results[i].email}</p>
                <p>${data.results[i].location.city}</p>
            </div>`;
            console.log(data.results[i]);  
      }  
    })