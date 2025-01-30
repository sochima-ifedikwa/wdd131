const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list')





//create a click event lister for the add Chapter button
button.addEventListener('click', function() {

    const li = document.createElement('li'); // Create a li element that will hold each entries chapter title and an associated delete button
    const deleteButton = document.createElement('button'); // Create a delete button for each entry

    if (input.value.trim() !== '') {
        li.textContent = input.value;
        deleteButton.textContent = '❌';
        li.append(deleteButton);
        list.append(li);
        
    } else {
        alert('Please enter a chapter title');
        input.focus();
    }

    deleteButton.addEventListener('click', function() {
        list.removeChild(li)
        input.focus();
    });

    input.value = ""
    input.focus();
});

