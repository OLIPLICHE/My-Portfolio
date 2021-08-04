const myTopMenu = document.getElementById('menuId');
const closeIcon = document.getElementById('closeMenu');
const openIcon = document.getElementById('humbergerShape');

function menuClose() {
  myTopMenu.style.left = '-110%';
}

function menuOpen() {
  myTopMenu.style.left = '0';
}

document.querySelectorAll('.claList').forEach((item) => {
  item.addEventListener('click', () => {
    myTopMenu.style.left = '-110%';
  });
});

closeIcon.addEventListener('click', menuClose);
openIcon.addEventListener('click', menuOpen);
