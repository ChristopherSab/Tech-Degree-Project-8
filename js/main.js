

const employeeBox = document.getElementsByClassName('employee-box');
const modal = document.getElementsByClassName('modal-container')[0];
const url = 'https://randomuser.me/api/?results=12';


//------------------------------------- 
//  FETCH FUNCTIONS
//-------------------------------------

fetch(url)
.then((response) => response.json())
.then(createEmployee)

//------------------------------------- 
//  HELPER FUNCTIONS
//-------------------------------------

//Function creates iterates through the Json data from the Api & adds HTML with employee details to the dom
function createEmployee(data) {

      for(let i=0; i < data.results.length; i++) {
        employeeBox[i].innerHTML =   
        
            `<div class ="card">
            <div class="image-box">
                <img src="${data.results[i].picture.medium}" alt="">
            </div>
            <div class="employee-info">
                <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
                <p>${data.results[i].email}<p>
                <p>${data.results[i].location.city}</p>
            </div>
            </div>`; 
      }  

      employeeBox.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', () => {
          modal(data[index]);
        });
      });
    }


    const employeeModal = (data) => {

       modal.innerHTML = 
       `
       <div class="modal-content">
        <span class="close-button">&times;</span>
        <img src="${data.results[i].picture.large}" alt="">
        <h2>${data.results[i].name.first} ${data.results[i].name.last}</h2>
        <p>${data.results[i].email}</p>
        <p>${data.results[i].location.city}</p>
        <span class="left-arrow-btn">&#8678;</span>
        <span class="right-arrow-btn">&#8680;</span>
        <p>${data.results[i].cell}</p>
        <address>${data.results[i].location.street.number}, ${data.results[i].location.street.name}, 
        ${data.results[i].location.city}, ${data.results[i].location.state}, 
        ${data.results[i].location.postcode}</address>
        <p>11.10.1991</p> 
       </div>
       `;

       modal.style.display = 'block';
    };


 

//------------------------------------- 
// Employee Modal Popup
//-------------------------------------




//Get Cancel Button
const modalCancel = document.getElementsByClassName('close-button')[0];

//Left Arrow Button
const previousEmployee = document.getElementsByClassName('left-arrow-btn'[0]);

//Right Arrow Button
const nextEmployee = document.getElementsByClassName('right-arrow-btn')[0];

