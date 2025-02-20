const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        averagerating: 4.5,
    },
    {
        id: "fc-2050",
        name: "power laces",
        averagerating: 4.7,
    },
    {
        id: "fs-1987",
        name: "time circuits",
        averagerating: 3.5,
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        averagerating: 3.9,
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        averagerating: 5.0,
    },
];

const submitBtn = document.querySelector('input[type="submit"]');
const productName = document.querySelector("#productname");

// create dropdown template
const dropdownTemplate = (product) => {
    return `<option value="${product.id}">${product.name}</option>`
}

// display dropdowns
const displayDropdowns = (products) => {
    productName.innerHTML += products.map(dropdownTemplate).join('');
}

// get current count value
const getCount = () => {
    return JSON.parse(localStorage.getItem('counter')) || 0;
}

// set count
const setCount = (count) => {
    localStorage.setItem('counter', JSON.stringify(count));
}

// Populate the product dropdown
displayDropdowns(products);

// update localStorage on submit
submitBtn.addEventListener('click', (event) => {
    const form = document.querySelector('form');
    // check to ensure all fields are filled
    if(form.checkValidity()){
        let counter = getCount();
        counter++;
        setCount(counter);
    } else {
        event.preventDefault(); // prevent form submission if invalid fields
        alert('Please fill out all fields');
    }
});