// ***** SECTION ITEMS ******
const alert = document.querySelector('.alert');
const form = document.querySelector('.do-form');
const doValue = document.getElementById('do');
//console.log(doValue.value);
const submitBtn = document.querySelector('submit-btn');
const container = document.querySelector('do-container');
const list = document.querySelector('do-list');
const clearBtn = document.querySelector('clear-btn');


// EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";


// ***** EVENT LISTENERS *****

// ***** SUBMIT FORM *****
form.addEventListener("submit", addItem);

// ***** FUNCTIONS ******
function addItem(e) {
    e.preventDefault();
    const value = doValue.value;
    // come up with unique ID
    const id = new Date().getTime().toString();

    // check if there value or editing
    if ( value !== '' && editFlag === false){
        console.log("add item to a list");
    }
    else if ( value !== '' && editFlag === true){
        console.log("editing");
    }
    else {
        displayAlert('please enter value', "danger");
    }

}

// *** Alert Function *** //
function displayAlert(text, action){

    alert.textContent = text
    alert.classList.add(action);

// ** remove alert ** //
    setTimeout(function (){
        alert.textContent = "";
        alert.classList.remove(action);
    }, 1000);
}





// ***** LOCAL STORGE *****


// ***** SETUP ITEMS *****