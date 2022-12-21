window.pets = [];
const pushPet = pet => {
  window.pets.push(pet);
  Pet.renderAll();
}

class Pet {
  constructor(name,
    species, age, color, breed, favoriteFood, favoriteToy, featured = false, special = false) {
    this.name = name;
    this.species = species;
    this.age = age;
    this.color = color;
    this.breed = breed;
    this.favoriteFood = favoriteFood;
    this.favoriteToy = favoriteToy;
    this.featured = featured;
    this.special = special;
  }

  generateCard() {

      const featuredClass = this.featured ? 'featured-pet' : '';
      const specialClass = this.special ? 'special-pet' : '';

    return `
      <div class="pets__card ${featuredClass} ${specialClass}">
        <h2 class="pets__card__title">${this.name}</h2>
        <p class="pets__card__info">Species: ${this.species}</p>
        <p class="pets__card__info">Age: ${this.age}</p>
        <p class="pets__card__info">Color: ${this.color}</p>
        <p class="pets__card__info">Breed: ${this.breed}</p>
        <p class="pets__card__info">Favorite Food: ${this.favoriteFood}</p>
        <p class="pets__card__info">Favorite Toy: ${this.favoriteToy}</p>
        <button type="button" class="pets__card__button">More Info</button>
      </div>
    `;
  }

  static renderAll() {
    const petsGrid = document.querySelector('.pets__grid');
    if (!petsGrid) return;

    petsGrid.innerHTML = '';
    window.pets.forEach(pet => {
      petsGrid.innerHTML += pet.generateCard();
    });
  }
}

const petData = fetch('assets/data/pets.json')
.then(response => response.json())
.then(data => {

  //sort the data alphabetically and featured status
  data.sort((a, b) => {
    if(a.featured && !b.featured) {
      return -1;
    } else if (!a.featured && b.featured) {
      return 1;
    } else {
      return (a.name > b.name ? 1 : -1);
    }
    });

  data.forEach(pet => {
    pushPet(new Pet(
      pet.name,
      pet.species,
      pet.age,
      pet.color,
      pet.breed,
      pet.favoriteFood,
      pet.favoriteToy,
      pet.featured,
      pet.special
    ));
  });

  //Add event listener to buttons and opening modal

  const buttons = document.querySelectorAll('.pets__card__button');
  const modalContainer = document.querySelector('.modalContainer');
  const modalButton = document.querySelector('.modal__button');

  for(let i = 0; i < buttons.length; i++){
    buttons[i].addEventListener('click', () => {
      modalContainer.classList.add('show')
    });
  }

  //closing modal
  modalButton.addEventListener('click', () => {
    modalContainer.classList.remove('show')
  })


});