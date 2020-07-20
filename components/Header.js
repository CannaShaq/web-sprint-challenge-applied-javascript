// STEP 1: Create a Header component.
// -----------------------
// Write a function that returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
    header = document.createElement('div');
    date = document.createElement('span');
    title = document.createElement('h1');
    temp = document.createElement('span');

    header.appendChild(date);
    header.appendChild(title);
    header.appendChild(temp);


    header.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    date.textContent = "March 28,2020";
    title.textContent = "Lambda Times";
    temp.textContent = "98";

    return header;
}


const headerComp = Header();
const headContainer = document.querySelector('.header-container');

headContainer.appendChild(headerComp);
