// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const selectPicture = document.getElementById('horn-select');
  const jsConfetti = new JSConfetti();
  const button = document.querySelector('button');

  var audio = document.querySelector('audio')
  var isPartyHorn = false;
  var validHornSelected = false;
  var slider = document.getElementById('volume');
  var audioImg = document.querySelectorAll('img')[1];
  var selectHorn = document.querySelectorAll('option')[0]

  selectHorn.selected = true;
  slider.value = 50;
  audio.volume = 0.5;
  
  selectPicture.addEventListener('change', (event) => {
    var img = document.querySelector('img');
    if (event.target.value == "car-horn") {
      img.setAttribute("src", "./assets/images/car-horn.svg");
      audio.setAttribute('src', './assets/audio/car-horn.mp3');
      isPartyHorn = false;
      validHornSelected = true;
    }
    else if (event.target.value == 'air-horn') {
      img.setAttribute('src', "./assets/images/air-horn.svg");
      audio.setAttribute('src', './assets/audio/air-horn.mp3');
      isPartyHorn = false;
      validHornSelected = true;
    }
    else if (event.target.value == 'party-horn') {
      img.setAttribute('src', './assets/images/party-horn.svg');
      audio.setAttribute('src', './assets/audio/party-horn.mp3')
      isPartyHorn = true;
      validHornSelected = true;
    }
  });


  slider.addEventListener( 'input', function() {
    if (slider.value == 0) {
      audioImg.setAttribute('src', './assets/icons/volume-level-0.svg');
      audio.volume = slider.value;
    }
    else if (slider.value > 0 && slider.value < 33) {
      audioImg.setAttribute('src', './assets/icons/volume-level-1.svg');
      audio.volume = slider.value / 100;
    }
    else if (slider.value >= 33 && slider.value < 67) {
      audioImg.setAttribute('src', './assets/icons/volume-level-2.svg');
      audio.volume = slider.value / 100;
    }
    else {
      audioImg.setAttribute('src', './assets/icons/volume-level-3.svg');
      audio.volume = slider.value / 100;
    }
  });


  button.addEventListener('click', event => {
    if (validHornSelected) {
      audio.play();
      if (isPartyHorn) {
        jsConfetti.addConfetti();
        isPartyHorn = false;
      }
    };
  });

}