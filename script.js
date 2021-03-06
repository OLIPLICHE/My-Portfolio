/* eslint-disable max-len */
const store = [
  {
    id: 1,
    name: 'Restaurant-App',
    img: 'image/restoApp.png',
    companyName: 'CANOPY',
    job: 'Front End Dev',
    year: 2021,
    description: 'This website App displays meals information from Sea food. It also allows users to submit their comments and likes for their favorite dish. All data is preserved thanks to the external MealsDB API, and involvement API.',
    tags: ['html', 'api', 'JS', 'Webpack'],
    seeLive: 'https://olipliche.github.io/JS-Capstone/dist/',
  },

  {
    id: 2,
    name: 'Math magicians app',
    img: 'image/calc.png',
    companyName: 'CANOPY',
    job: 'Lead Developer',
    year: 2021,
    description: 'I developed a React application called the Math magicians app and UI of the calculator. This calculator app works at 100%. ',
    tags: ['React', 'Reactjs', 'javaScript'],
    seeLive: 'https://paka-math-magicians.netlify.app/',
  },

  {
    id: 3,
    name: 'space-travellers-hub',
    img: 'image/space1.png',
    companyName: 'Air-Space',
    job: 'Full Stack Dev',
    year: 2021,
    description: 'Space Travelers Hub is a web application for a company that provides commercial and scientific space travel services. The application will allow users to book rockets and join selected space missions.',
    tags: ['react', 'redux', 'api', 'JS'],
    seeLive: 'https://space-travelers-hub45.herokuapp.com/',
  },

  {
    id: 4,
    name: 'Multi-Post Stories',
    img: 'image/Snapshoot_Portfolio(3).svg',
    companyName: 'FACEBOOK',
    job: 'Full Stack Dev',
    year: 2015,
    description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it 1960s with the releaLorem Ipsum is simply dummy text of the printing.',
    tags: ['html', 'Ruby on rails', 'css', 'javaScript'],
    seeLive: 'https://raw.githack.com/OLIPLICHE/My-Portfolio/mobileJs/index.html',
  },
];

const boxes = document.querySelector('.boxes');

store.forEach((item) => {
  boxes.innerHTML += `<li class="card-work">
    <a data-index-number=${item.id} class="portfolio-img" href="#">
      <img  src=${item.img} alt="tonic" />
    </a>
  <div class="right-content">
    <div class="title">
      <h2>${item.name}</h2>
    </div>
    <div class="info">
      <span>${item.companyName}</span>
      <span><img src="Counter.png" alt="counter" /></span>
      <span>${item.job}</span>
      <span><img src="Counter.png" alt="counter" /></span>
      <span>${item.year}</span>
    </div>
    <div class="detail">
      <p>
        ${item.description}
      </p>
    </div>
    <ul class="languages">
    ${(function technoUsed() {
    return item.tags.map((technology) => `<li><a href="#">${technology}</a></li>`).join('');
  }())}
  
    </ul>
    <div class="see-project">
      <a class="btn" data-index-number=${item.id} href="">See Project</a>
    </div>
  </div>
</li> `;
});

const cardPopupWindow = document.querySelector('.card-popup-window');
const seeProjectBtn = document.querySelectorAll('.see-project .btn');
const seeProjectImg = document.querySelectorAll('.card-work .portfolio-img');
const closedWind = document.querySelector('.card-popup-window .popup-main-container .main-container .close');

seeProjectImg.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
  });
});

[seeProjectBtn].forEach((item) => {
  item.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      cardPopupWindow.classList.add('open-pop-up');
      const filteredCard = store.filter((card) => card.id === Number(link.dataset.indexNumber));
      const title = document.querySelector('.card-popup-window .popup-main-container .main-container .title h2');
      const info = document.querySelectorAll('.card-popup-window .main-container .info span');
      const img = document.querySelector('.card-popup-window .main-container .portfolio-img img');
      const detail = document.querySelector('.card-popup-window .main-container .detail p');
      const techno = document.querySelector('#lang');
      const links = document.querySelectorAll('.card-popup-window .main-container .links a');

      title.innerHTML = filteredCard[0].name;
      img.src = filteredCard[0].img;
      detail.innerHTML = filteredCard[0].description;

      for (let i = 0; i < Array.from(info).length; i += 1) {
        if (i === 0) {
          info[i].innerHTML = filteredCard[0].companyName;
        } else if (i === 2) {
          info[i].innerHTML = filteredCard[0].job;
        } else if (i === 4) {
          info[i].innerHTML = filteredCard[0].year;
        }
      }

      const technologiesChild = [...techno.childNodes];
      technologiesChild.forEach((child, index) => {
        techno.removeChild(technologiesChild[index]);
      });
      filteredCard[0].tags.forEach((item) => {
        const techItem = document.createElement('li');
        const techLink = document.createElement('a');
        techLink.href = '#';
        techLink.innerText = item;
        techItem.appendChild(techLink);
        techno.appendChild(techItem);
      });
      links[0].href = filteredCard[0].seeLive;
    });
  });
});

closedWind.addEventListener('click', () => {
  cardPopupWindow.classList.remove('open-pop-up');
});