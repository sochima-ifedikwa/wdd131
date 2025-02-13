const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...

    {
        templeName: "Okinawa Japan",
        location: "Matsumoto, Okinawa, Japan",
        dedicated: "2023, November, 12",
        area: 12437,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/okinawa-japan-temple/okinawa-japan-temple-40845-main.jpg",
    },
    {
        templeName: "Lubbock Texas",
        location: "Lubbock, Texas, United States",
        dedicated: "2002, April, 21",
        area: 16598,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/lubbock-texas-temple/lubbock-texas-temple-13996-main.jpg",
    },
    {
        templeName: "Dallas Texas",
        location: "Dallas, Texas, United States",
        dedicated: "1989, March, 5",
        area: 44207,
        imageUrl:
        "https://churchofjesuschristtemples.org/assets/img/temples/dallas-texas-temple/dallas-texas-temple-55240-main.jpg",
    },

]; 


const header = document.querySelector("#selectedMenu");
const links = document.querySelectorAll("a");
const nav = document.querySelector("nav");
const ul = document.querySelector('ul');
const menuButton = document.querySelector("#menu");
const templeContainer = document.querySelector(".figure-container")

menuButton.addEventListener('click', () => {
    nav.classList.toggle('show');
    ul.classList.toggle('show');
    menuButton.classList.toggle('show');
});

const cardTemplate = (temple) => {
    let loadingType = "lazy";

    return `<div class="temple-card">
            <h2>${temple.templeName}</h2>
            <p><span>LOCATION: </span>${temple.location}</p>
            <p><span>DEDICATED: </span>${temple.dedicated}</p>
            <p><span>SIZE: </span>${temple.area.toLocaleString()} sq ft</p>
            <img src="${temple.imageUrl}" alt="${
        temple.templeName}" loading="${loadingType}" />
            </div>`;
};

const filterTemples = (category) => {
    if (category === "Old"){
        return temples.filter((temple) => temple.dedicated < "1900");
    }
    else if (category === "New"){
        return temples.filter((temple) => temple.dedicated > "2000");
    }
    else if (category === "Large"){
        return temples.filter((temple) => temple.area > 90000);
    }
    else if (category === "Small"){
        return temples.filter((temple) => temple.area < 10000);
    }
    else {
        return temples //return all temples for "Home"
    }
};

const displayTemples = (filteredTemples) => {
  // map through and display temple card
    templeContainer.innerHTML = filteredTemples.map(cardTemplate).join("");
};

// Display all temples by default
displayTemples(temples);

[...links].map((link) => {
    // default header value
    header.textContent = "Home";

  // add an event listener to update header value
    link.addEventListener("click", () => {
        const category = link.textContent.trim();     
        header.textContent = link.title;
        const filteredTemples = filterTemples(category);
        displayTemples(filteredTemples);
        // close menu on small screens once link selected
        if (window.innerWidth < 659) {
            nav.classList.toggle("show");
            ul.classList.toggle("show");
            menuBtn.classList.toggle("show");
        }
    });
});