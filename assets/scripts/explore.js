// explore.js

window.addEventListener('DOMContentLoaded', init);
var synth = window.speechSynthesis;

function init() {
  var voicesSelect = document.getElementById('voice-select');
  var voicesList = [];
  var faceImg = document.querySelectorAll('img')[0];
  var currentVoice;

  const button = document.querySelector('button');

  voicesSelect.addEventListener('change', (event) => {
    currentVoice = event.target.value;
    });

  setTimeout( () => {
    voicesList = synth.getVoices();
    voicesSelect = addVoicesToOptions(voicesList, voicesSelect);
  }, 50);

  button.addEventListener('click', event => {
    var textInput = document.getElementById('text-to-speak');
    var utterance = new SpeechSynthesisUtterance(textInput.value);
    if (currentVoice == undefined) {
      return;
    }
    for (var i = 0; i < voicesList.length; i++) {
      if(voicesList[i].name == currentVoice) {
        utterance.voice = voicesList[i];
      }
    }
    synth.speak(utterance);
    utterance.addEventListener('start', function(event) {
      faceImg.setAttribute('src', './assets/images/smiling-open.png');
    });
    utterance.addEventListener('end', function(event) {
      faceImg.setAttribute('src', './assets/images/smiling.png');
    })
  })
}



function addVoicesToOptions(arr, select) {
  for (var i = 0; i< arr.length; i++) {
    var voice = arr[i].name;
    var el = document.createElement('option');
    el.textContent = voice;
    el.vale = voice;
    select.appendChild(el);
  }
  return select;
}