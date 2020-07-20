// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//

//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


axios.get('https://lambda-times-backend.herokuapp.com/articles')
.then(response => {
   // console.log(response);
    Object.keys(response.data.articles).forEach(subject => {
        response.data.articles[subject].forEach(attribute => {
            document.querySelector('.cards-container').append(Card(attribute))
        })
    })
})

.catch(error => {
    console.log(error);
})

function Card (data) {



    // Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>

    const card = document.createElement('div');
    const headline = document.createElement('div');
    const auth = document.createElement('div');
    const imgContainer = document.createElement('div');
    const image = document.createElement('img');
    const authSpan = document.createElement('span');

    card.appendChild(headline);
    card.appendChild(auth);
    auth.appendChild(imgContainer);
    imgContainer.append(image);
    auth.appendChild(authSpan);

    card.classList.add('card');
    headline.classList.add('headline');
    auth.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = data.headline;
    image.src = data.authorPhoto;
    authSpan.textContent = data.authorName;

    card.addEventListener("click", () => {
        console.log(headline.textContent);
    })

    return card;
}