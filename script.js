let step = 0;

let oldX = 0;


const createAndScatterStars = () => {
  const starsCount = 6;
  for (let i = 0; i < starsCount; i++) {
    const star = document.createElement('div');
    star.classList.add('stars');
    const x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    if (y < 400) y += 200;
    star.style.left = `${x}px`;
    star.style.bottom = `${y}px`;
    document.body.append(star);
  }

}

createAndScatterStars();

const moon = document.querySelector('.moon');
const darkSide = document.querySelector('.dark-side');
const land = document.querySelector('.land');
const button = document.querySelector('button');
const stars = document.querySelectorAll('.stars');
const windows = document.querySelector('.windows');
const house = document.querySelector('.house');
const decoration = document.querySelector('.decoration');


function elementDrag(e) {
  e.preventDefault();
  let newX = e.clientX;

  let darkSideNewX = newX - moon.getBoundingClientRect().left;

  darkSideNewX = Math.max(darkSideNewX, 0);
  darkSideNewX = Math.min(darkSideNewX, moon.offsetWidth - darkSide.offsetWidth);

  darkSide.style.transform = `translateX(${darkSideNewX}px)`;
}

darkSide.addEventListener('mousedown', dragMouseDown);

function dragMouseDown(e) {
  e.preventDefault();
  oldX = e.clientX;
  document.addEventListener('mousemove', elementDrag);
  document.addEventListener('mouseup', closeDragElement);
}

const eventListener = () => {
  moon.style.transform = 'translateY(200px)';
  button.style.transform = 'translateY(700px)';
  land.style.transform = 'translateY(500px)';
  stars.forEach(star =>
    star.style.transform = 'translateY(60px)'
  )
}

const houseEventListener = () => {
  decoration.style.display = "block";
  setTimeout(() => {
    decoration.style.transform = 'translateY(0)';
  }, 500)
}

function closeDragElement() {
  document.removeEventListener('mousemove', elementDrag);
  document.removeEventListener('mouseup', closeDragElement);

  setTimeout(() => {
    button.innerText = "Ramadan Mubarak! 🌙";
    button.style.color = "#caa94d";
    button.style.backgroundColor = "#111625";
    button.style.cursor = "default";
    moon.style.transform = 'translateY(-150%)';
    button.style.transform = 'translateY(0)';
    land.style.transform = 'translateY(0)';
    stars.forEach(star => {
      star.style.transform = 'translateY(0px)'
    })
    windows.style.backgroundColor = "#caa94d";
    windows.style.boxShadow = "0px 0px 10px 10px #caa94d40";
    house.addEventListener('click', houseEventListener);
    house.style.cursor = "pointer";
    button.removeEventListener('click', eventListener);
  }, 1500);
}

button.addEventListener('click', eventListener)


