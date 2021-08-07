const store = {
  object1: {
    name: 'Tonic',
    img: 'image/Snapshoot_Portfolio.svg',
    companyName: 'CANOPY',
    job: 'Back End Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  object2: {
    name: 'Multi-Post Stories',
    img: 'image/Snapshoot_Portfolio(3).svg',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  object3: {
    name: 'Facebook 360',
    img: 'image/Snapshoot_Portfolio(2).svg',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },

  object4: {
    name: 'Uber Navigation',
    img: 'image/SnapshootPortfolio(1).svg',
    companyName: 'Uber',
    job: 'Lead Developer',
    year: 2018,
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate. ',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
  },
};

const nameID = document.getElementById('name');
const img = document.getElementById('img');
const companyName = document.getElementById('companyName');
const job = document.getElementById('job');
const year = document.getElementById('store');
const description = document.getElementById('description');
const tags = document.getElementById('tags');
const button1 = document.querySelector('#btn-1');
const button2 = document.querySelector('#btn-2');
const button3 = document.querySelector('#btn-3');
const button4 = document.querySelector('#btn-4');
const btnClosePop = document.querySelector('.popup-close-btn');
const popupOverlay = document.querySelector('.popup-overlay');
const popup = document.getElementById('popup');

function switchOnPopUp() {
  popup.classList.remove('hidden');
}

function changePopup(order) {
  tags.innerHTML = '';
  const object = store[`object${order}`];
  nameID.innerHTML = object.name;
  img.src = object.img;
  companyName.innerHTML = object.companyName;
  job.innerHTML = object.job;
  year.innerHTML = object.year;
  description.innerHTML = object.description;
  const tagsLength = object.tags.length;
  for (let i = 0; i < tagsLength; i += 1) {
    const element = document.createElement('li');
    element.innerHTML = `${object.tags[i]}`;
    tags.appendChild(element);
  }
  switchOnPopUp();
}

function switchOfPopUp() {
  popup.classList.add('hidden');
}

button1.addEventListener('click', () => {
  switchOnPopUp();
  changePopup(1);
});

button2.addEventListener('click', () => {
  switchOnPopUp();
  changePopup(2);
});

button3.addEventListener('click', () => {
  switchOnPopUp();
  changePopup(3);
});

button4.addEventListener('click', () => {
  switchOnPopUp();
  changePopup(4);
});

popupOverlay.addEventListener('click', switchOfPopUp);
btnClosePop.addEventListener('click', switchOfPopUp);