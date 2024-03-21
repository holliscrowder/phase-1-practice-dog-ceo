console.log("%c HI", "color: firebrick");

// load images
document.addEventListener("DOMContentLoaded", () => {
  // add dog images to the DOM
  const addDog = (dog) => {
    const dogImage = document.createElement("img");
    dogImage.src = dog;
    dogImage.alt = "dog image";

    const dogContainer = document.querySelector("#dog-image-container");
    dogContainer.append(dogImage);
  };

  // fetch dog images from API via GET request
  const fetchDogs = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/image/random/4");
    const dogsJSON = await response.json();
    const dogs = dogsJSON.message;

    // add dogs to the DOM
    for (const dog of dogs) {
      addDog(dog);
    }
  };
  fetchDogs();

  // add dog breeds to the DOM
  const addBreed = (breed) => {
    const dogBreed = document.createElement("li");
    dogBreed.textContent = breed;

    // change dog breed colors upon click
    dogBreed.addEventListener("click", (event) => {
      event.target.classList.toggle("active");
    });

    const dogBreedList = document.querySelector("#dog-breeds");
    dogBreedList.append(dogBreed);
  };

  // fetch dog breeds from API via GET request
  const fetchBreeds = async () => {
    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const breedsJSON = await response.json();
    const dogBreeds = Object.keys(breedsJSON.message);

    for (const breed of dogBreeds) {
      addBreed(breed);
    }
  };
  fetchBreeds();
});
