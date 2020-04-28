

const employeeImage = document.getElementsByClassName('image-box');
const employeeInfo = document.getElementsByClassName('employee-info');


// Fetch Functions
fetch('https://randomuser.me/api/?results=12')
    .then(response => response.json())
    .then((data) => console.log(data.results.picture))



//Helper Functions

/*function generateRandomImages(data) {

    const html = 
    `
    <img src = '${data}'>
    
    `;

    employeeImage.innerHTML = html;

}*/

//Event Listeners