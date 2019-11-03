// animation for first screen
console.log(document.querySelector('.f-screen').scrollHeight);
(function () {
  const mainScreen = document.querySelector('.f-screen')
  const screenItem = document.querySelectorAll('.f-screen__item');
  let count = 0.5;
  window.onload = function () {
    mainScreen.style.height = mainScreen.scrollHeight + 'px';
    console.log(mainScreen.scrollHeight);
    
    screenItem.forEach(item => {
      item.style.animationDelay = count + 's'
      count += 0.2
    })
  }
})();
// fixed header
(function () {
  let header = document.querySelector('.header');
  window.addEventListener('scroll', function () {
    pageYOffset > 100 ? header.classList.add('scrolled') : header.classList.remove('scrolled')
  })
})();
// animation scroll
(function () {
  let links = document.querySelectorAll('[href^="#"]');
  let V = 0.8;
  let scrollPrevent = 55;
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function (e) {
      e.preventDefault();
      let w = window.pageYOffset;
      let hash = this.href.replace(/[^#]*(.*)/, '$1');
      let t = document.querySelector(hash).getBoundingClientRect().top - scrollPrevent;
      let start = null;
      requestAnimationFrame(step);
      function step(time) {
        if (start === null) start = time;
        let progress = time - start,
          r = (t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t));
        window.scrollTo(0, r);
        if (r != (w + t)) {
          requestAnimationFrame(step)
        } else {
          location.hash = hash
        }
      }
    }, false);
  }
})();


let imgs = document.querySelectorAll('.about-bg__content img')
let count = 0
imgs.forEach(img=> {
  img.style.animationDelay = count + 's'
  count += 0.6
})