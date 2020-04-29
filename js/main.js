

const employeeImage = document.getElementsByClassName('image-box');
const employeeInfo = document.getElementsByClassName('employee-info');
const employeeBox = document.getElementsByClassName('employee-box');
const url = 'https://randomuser.me/api/?results=12';


// Fetch Function
    fetch(url)
    .then((response) => response.json())
    .then(function(data) {
        
        data.results.forEach(person => {

            p =  `<div class="image-box">
            <img src="${person.picture.medium}" alt="">
            </div>
            <div class="employee-info">
            <h2>${person.name.first} ${person.name.last}</h2>
            <p>${person.email}</p>
            <p>${person.location.city}</p>
            </div>`;

            console.log(p);

            for(let i =0; i < data.results.length; i++){
                employeeBox[i].innerHTML = p;
            }
            


        })
        
    })



    