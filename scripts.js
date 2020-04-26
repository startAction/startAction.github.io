'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const importantMessage = document.querySelector('.importantMessage');
  const important = document.querySelector('.important');
  const modal1Wrap = document.querySelector('.modal1Wrap');
  const wrongAnswer = document.querySelector('#wrongAnswer');

  body.style.opacity = '1';
  body.style.background = '#4CAF50';

  setTimeout(() => {
    importantMessage.style.display = 'block';
  }, 50000)

  setInterval(() => {
    if (important.classList.contains('showImportant')) {
      important.classList.remove('showImportant');
    } else {
      important.classList.add('showImportant');
    }
  }, 500);

  important.addEventListener('click', () => {
    importantMessage.style.display = 'none';
    modal1Wrap.style.opacity = 1;
    modal1Wrap.style.visibility = 'visible';

    wrongAnswer.addEventListener('click', () => {
      modal1Wrap.style.opacity = 0;
      modal1Wrap.style.visibility = 'hidden';
    });
  });
});

const menuAction = () => {
  const keysInfo = document.querySelector('.keysInfo');
  const sandwich = document.querySelector('.sandwich');
  const line1 = document.querySelector('#line1');
  const line2 = document.querySelector('#line2');
  const line3 = document.querySelector('#line3');
  const keyNames = document.querySelectorAll('.keyWrap');
  const modal = document.querySelector('.modal');

  sandwich.addEventListener('click', () => {
    line1.classList.toggle('line1');
    line2.classList.toggle('line2');
    line3.classList.toggle('line3');
    keysInfo.classList.toggle('show');

    let time = 1;
    for (let i = 0 ; i < keyNames.length; i++) {
      setInterval(() => {
        keyNames[i].classList.add('show');
      }, 500 * time);
      time++;
    }

    setTimeout(() => {
      modal.style.marginLeft = '0px';
    }, 8000);
    setTimeout(() => {
      modal.style.marginLeft = '-35%';
    }, 15000);
    setTimeout(() => {
      modal.style.display = 'none';
    }, 16000);
  });

  keyShow();

};


const keyShow = () => {
  const keyNames = document.querySelectorAll('.key');
  const drums = document.querySelectorAll('.drums > div');

  for (let i = 0; i < keyNames.length; i++) {

    keyNames[i].addEventListener('mouseover', function() {
      let keyLetter = keyNames[i].getAttribute('data-k');

      for (let j = 0; j < drums.length; j++ ) {
        let drum = drums[j].getAttribute('data-d');
        if (keyLetter === drum) {
          drums[j].classList.add('hit');
        }
      }
    });

    keyNames[i].addEventListener('mouseleave', function() {
      let keyLetter = keyNames[i].getAttribute('data-k');

      for (let j = 0; j < drums.length; j++ ) {
        let drum = drums[j].getAttribute('data-d');
        if (keyLetter === drum) {
          drums[j].classList.remove('hit');
        }
      }
    });
  }
};

document.addEventListener('keydown', function(e) {
  let key = e.key;
  let keyLetter = document.querySelector('[data-k='+key+']');
  let drum = document.querySelector('[data-d='+key+']');
  let audio = document.querySelector('[data-a='+key+']');
  if (drum) {
    drum.classList.add('hit');
    keyLetter.classList.add('hitLetter');
    setTimeout(() => {
      drum.classList.remove('hit');
      keyLetter.classList.remove('hitLetter');
    }, 100);

    audio.currentTime = 0;
    audio.play();
  }
});


menuAction();
