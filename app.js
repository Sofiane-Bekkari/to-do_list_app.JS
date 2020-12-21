// ***** SECTION ITEMS ******
const alert = document.querySelector('.alert');
const form = document.querySelector('.do-form');
const doValue = document.getElementById('do');
//console.log(doValue.value);
const submitBtn = document.querySelector('.submit-btn');
const container = document.querySelector('.do-container');
const list = document.querySelector('.do-list');
const clearBtn = document.querySelector('.clear-btn');


// EDIT OPTION
let editElement;
let editFlag = false;
let editID = "";


// ***** EVENT LISTENERS *****

// ***** SUBMIT FORM *****
form.addEventListener("submit", addItem);

// clear items
clearBtn.addEventListener('click', clearItems);

// ***** FUNCTIONS ******
function addItem(e) {
    e.preventDefault();
    const value = doValue.value;
    // come up with unique ID
    const id = new Date().getTime().toString();

    // check if there value or editing
    if ( value !== '' && editFlag === false){
        //*** ADD ITEM ***//
        const element = document.createElement('article');
        // add class
        element.classList.add('do-item');
        // add id
        const attr = document.createAttribute('data-id');
        attr.value = id; 
        element.setAttributeNode(attr);
        element.innerHTML = `<p class="title">${value}</p>
        <!--btns side-->
        <div class="btn-container">
            <!--eidt btn-->
            <button type="button" class="edit-btn">
                <i class="fas fa-edit"></i>
            </button>
            <!--remove btn-->
            <button type="button" class="remove-btn">
                <i class="fas fa-trash"></i>
            </button>
        </div>`
        // btn edit & delete
        const deleteBtn = element.querySelector('.remove-btn');
        const editBtn = element.querySelector('.edit-btn');
        deleteBtn.addEventListener('click', deleteItem );
        editBtn.addEventListener('click', editItem );
        // append child
        list.appendChild(element);
        // show container 
        container.classList.add('show-do-container');
        // add alert
        displayAlert('added to the list', "success");
        // add to local storage
        addToLocalStorage(id, value);
        // set back to default 
        setBackToDefault();
    }
    else if ( value !== '' && editFlag === true){
       editElement.innerHTML = value;
       displayAlert('change item', 'success');
       // edit on local storage
       //editlocalStorage(editID, value);
       setBackToDefault();
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

// clear item 
function clearItems(){
    const items = document.querySelectorAll('.do-item');
    
    if (items.length > 0) {
        items.forEach(function(item){
            list.removeChild(item);
        });
    }
    container.classList.remove('show-do-container');
    displayAlert('list is clear', 'danger');
    setBackToDefault();
    //localStorage.removeItem('list');
};

// delete function
function deleteItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(id);
    list.removeChild(element);

    if (list.children.length === 0){
        container.classList.remove('show-do-container');
    }

    displayAlert('delete item', 'danger');
    setBackToDefault();
    // remove form local storage
    removeFromLocalStorage();
};
// edit function
function editItem(e){
    const element = e.currentTarget.parentElement.parentElement;
    // set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    console.log(editElement);
    // set form value
    doValue.value = editElement.innerHTML
   editFlag = true;
   editID = element.dataset.id;
   submitBtn.textContent = "edit"
};

// set back to default
function setBackToDefault(){
   doValue.value = "";
   editFlag = false;
   editID = "";
   submitBtn.textContent = "submit";
};
// ***** LOCAL STORGE *****
function addToLocalStorage(){
    //console.log('Add to local storage');
};
function removeFromLocalStorage(id){};
function editLocalStorage(id, value){};

// ****** SETUP ITEMS *******