const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];
const newLi = document.createElement(`li`);
const picture = document.createElement(`img`);
picture.setAttribute(`url`, 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
picture.setAttribute(`alt`,'White and Black Long Fur Cat');
newLi.insertAdjacentHTML("beforeBegin", picture);
const elsePicture = document.createElement(`img`);
elsePicture.setAttribute(`url`, 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
elsePicture.setAttribute(`alt`, 'Orange and White Koi Fish Near Yellow Koi Fish');
newLi.insertAdjacentHTML("beforeBegin", elsePicture);
const secondImg = document.createElement(`img`);
secondImg.setAttribute(`url`, 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260');
secondImg.setAttribute(`alt`,'Group of Horses Running');
newLi.insertAdjacentHTML("beforeBegin", secondImg);

// const addImages = document.setAttributes(``)
// addImages
const setEl = document.querySelector(`.gallery`)
setEl.insertAdjacentHTML("beforeBegin", newLi);

