//------------------------------------- 
//  MAIN VARIABLES
//-------------------------------------

const employeeBox = document.getElementsByClassName('employee-box');
const modal = document.getElementsByClassName('modal-container')[0];
//Arrow Buttons
const previousEmployee = document.getElementsByClassName('left-arrow-btn'[0]);
const nextEmployee = document.getElementsByClassName('right-arrow-btn')[0];
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

//Function creates iterates through the Json data from the Api & adds HTML with employee details to the dom//
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

      document.querySelectorAll('.card').forEach((card, index) => {
        card.addEventListener('click', (event) => {
            employeeModal(data.results[index]);
            
           /* document.querySelector('.right-arrow-btn').addEventListener('click', () => {
                employeeModal(data.results[index + 1]);
              })

            document.querySelector('.left-arrow-btn').addEventListener('click', () => {
                employeeModal(data.results[index - 1]);
             })*/

        });

      });

 
    }



//------------------------------------- 
// Employee Modal Popup
//-------------------------------------


    function employeeModal(employee) {

       modal.innerHTML = 
       `
       <div class="modal-content">
        <span class="close-button">&times;</span>
        <img src="${employee.picture.large}" alt="">
        <h2>${employee.name.first} ${employee.name.last}</h2>
        <p>${employee.email}</p>
        <p>${employee.location.city}</p>
        <span class="left-arrow-btn">&#8678;</span>
        <span class="right-arrow-btn">&#8680;</span>
        <p>${employee.cell}</p>
        <address>${employee.location.street.number}, ${employee.location.street.name}, 
        ${employee.location.city}, ${employee.location.state}, 
        ${employee.location.postcode}</address>
        <p>11.10.1991</p> 
       </div>`;

       modal.style.display = 'block';


        //Event Listener to Cancel Modal When User Clicks "X"
       const modalCancel = document.getElementsByClassName('close-button')[0];

        modalCancel.addEventListener('click', () => {
            modal.style.display = 'none';
        })


        //Event Listener To Move to next or previous employee
        modal.addEventListener('click', (event) => {
     
            if(event.target.className == 'right-arrow-btn'){
                console.log('The RIGHT Arrow is Working');
            }

            if(event.target.className == 'left-arrow-btn'){
                console.log('The LEFT Arrow is Working');
            }

        })

}











