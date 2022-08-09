// 3D scrolled

let zSpacing = -1000,
  lastPos = zSpacing / 5,
  $frames = document.getElementsByClassName('frame'),
  frames = Array.from($frames),
  zVals = [];

window.onscroll = function () {
  let top = document.documentElement.scrollTop,
    delta = lastPos - top;
  //   console.log('1');

  lastPos = top;
  //   console.log('2');
  frames.forEach(function (n, i) {
    zVals.push(i * zSpacing + zSpacing);
    // console.log('3');
    zVals[i] += delta * -5.5;
    // console.log('4');
    let frame = frames[i],
      transform = `translateZ(${zVals[i]}px)`,
      opacity = zVals[i] < Math.abs(zSpacing) / 1.8 ? 1 : 0;
    // console.log('5');
    frame.setAttribute('style', `transform: ${transform}; opacity: ${opacity}`);
    // console.log('6');
    // console.log(zVals);
  });
};

window.scrollTo(0, 1);

// AUDIO
let soundbutton = document.querySelector('.soundbutton'),
  audio = document.querySelector('.audio');

soundbutton.addEventListener('click', (e) => {
  soundbutton.classList.toggle('paused');
  audio.paused ? audio.play() : audio.pause();
});

window.onfocus = function () {
  soundbutton.classList.contains('paused') ? audio.pause() : audio.play();
};

window.onblur = function () {
  audio.pause();
};
