console.log('yeap');


const servicesHTML = document.querySelector('.services');
console.log(servicesHTML);
const servicesButtonHTML = document.querySelector('.services-button');
console.log(servicesButtonHTML);
servicesButtonHTML.addEventListener('click', () => {
    console.log('Click button');
    servicesHTML.classList.toggle('hidden');
    servicesHTML.classList.toggle('border-red');
})

const scrollUp = document.querySelector('.scroll');
const scrollButtonHTML = document.querySelector('.scrollButton');
console.log(scrollButtonHTML);
scrollButtonHTML.addEventListener('click', () => {
    console.log('Click button');
    window.scrollTo(0, 1);

    // этот код меняет поведение прокрутки на "smooth"
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
})