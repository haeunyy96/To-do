// set up the elements we're going to add event listeners to
const formElement = document.querySelector('form');
const inputElement = document.querySelector('input');
const ulElement = document.querySelector('ul');

formElement.addEventListener('submit', function (event) {
    // prevent the default behavior of a form
    event.preventDefault();
    // capture the user's input
    const task = inputElement.value;

    // if there is something in the input
    // if js evaluates the value of task to be true or truthy
    // / js, if you HAD to, would you say task is truthy or falsy?

    if (task && task != ' ') {
        // clear the input
        inputElement.value = '';
        // group that input text with a checkbox
        const listItem = document.createElement('li');
        listItem.innerHTML = `<i class="far fa-square"></i>`;
        // this is how it looks now: <li><i class="far fa-square"></i></li>
        const p = document.createElement('p');
        p.textContent = task;
        // <p>whatever was in the input</p>
        listItem.appendChild(p);
        // listItem looks like this now:
        // <li><i + p> </li>
        // append the text and checkbox to the ul when the user hits enter
        ulElement.appendChild(listItem);
    }


});

// be able to check tasks on click
// be able to uncheck tasks on click
ulElement.addEventListener('click', function (event) {
    // check or uncheck te box depending on what it already is
    // toggle the box
    updateToDo(event.target);
})

function updateToDo(element) {
    // find out the first class in the list
    // we know our i elements have far as a first class, so check if this one does
    const firstClass = element.classList[0];
    if (firstClass === 'far') {
        element.classList.toggle('fa-square');
        element.classList.toggle('fa-check-square');
        element.parentElement.classList.toggle('text-muted');
    }
}

// 

// const changeTheme = document.querySelectorAll('input[name=season]:checked').value 
// console.log(changeTheme);