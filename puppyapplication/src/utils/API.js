import axios from "axios";

// Export an object containing methods we'll use for accessing the Dog.Ceo API

export default {
    getRandomDog: function () {
        return axios.get("https://dog.ceo/api/breeds/image/random");
    },
    getDogsOfBreed: function (breed) {
        return axios.get("https://dog.ceo/api/breed/" + breed + "/images");
    },
    getBaseBreedsList: function () {
        return axios.get("https://dog.ceo/api/breeds/list");
    }
};

//we're going to export a method called get random dog which is going to make a GET request from the link provided in the instructions