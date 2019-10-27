(function(){
  let screenItem = document.querySelectorAll('.f-screen__item');
  let count = 0.5;
  screenItem.forEach(item => {
    item.style.animationDelay = count + 's'
    count+= 0.2
  })
})()