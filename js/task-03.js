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

// function createli(){
// let li = document.createElement('li');
// const pictureTitle = document.createElement('img');
// pictureTitle.innerHTML = `<img src:${images[0].url} alt:${images[1].alt} >`
// // const value = images.someProperty;
// li.insertAdjacentHTML(`afterbegin`, `${pictureTitle}`);
// for (let i=0; i<3; i++) { 
// // document.getElementsByClassName(`gallery`)[0].appendChild(li);
// // document.getElementsByClassName(`gallery`)[1].appendChild(li);
// // document.getElementsByClassName(`gallery`)[2].appendChild(li);
// document.getElementsByClassName(`gallery`)[0].appendChild(li.cloneNode(true));
// }
// }
// console.log(createli());
const createli = document.querySelector(`.gallery`);
const doGalleryCard = ({ url, alt } = {}) => {

  return `<li><img src="${url}"  alt="${alt}" ></li>`;
  
};
const galleryLiElements = images
  .map((pic) => {
    return doGalleryCard(pic);
  })
console.log(galleryLiElements);
createli.insertAdjacentHTML(`beforeend`, galleryLiElements);