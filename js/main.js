
let inputButton = document.querySelectorAll('#team button'),
    thebox = document.querySelector('#info-team'),
    theImg = document.querySelector('#info'),
    currentBoxButton = null;

let ourBeer = document.querySelectorAll('#m-selling img'),
    theBeer = document.querySelector('#beer-text'),
    currentBeer = null;


const buttonImages = {
  "spencer": "../images/matrix.png",
  "haem": "../images/lightbulb.png",
};

    function getboxData() {
      console.log('Hey Team!');
        if (currentBoxButton === this) { 
            thebox.style.display = "none";
            currentBoxButton = null;
            console.log('Bye Team');
          } else {
            thebox.style.display = "block";
            thebox.querySelector('.ib-title').textContent = squad[this.dataset.member].title;
            thebox.querySelector('.ib-heading').textContent = squad[this.dataset.member].name;
            thebox.querySelector('.ib-text').textContent = squad[this.dataset.member].bio;
            currentBoxButton = this;
          }

        var buttonId = this.id;
        var imgUrl = buttonImages[buttonId];
        theImg.style.backgroundImage = "url(" + imgUrl + ")";
    }

    function getbeerData() {
      console.log('hey java');
      if (currentBeer === this) {
        theBeer.style.display = 'none';
        currentBeer = null;
      } else {
        theBeer.style.display = "block";
        theBeer.querySelector('.beer-title').textContent = beer[this.dataset.member].name;
        theBeer.querySelector('.sell-text').textContent = beer[this.dataset.member].about;
        currentBeer = this;
      }
    }
    

    inputButton.forEach(button => button.addEventListener('click', getboxData));

    ourBeer.forEach(beer => beer.addEventListener('click', getbeerData));
