console.log('js is working');

let inputButton = document.querySelectorAll('#team button'),
    thebox = document.querySelector('#info-team'),
    theImg = document.querySelector('#info'),
    currentBoxButton = null;

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

    inputButton.forEach(button => button.addEventListener('click', getboxData));
