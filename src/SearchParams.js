import React, { useState } from "react";
import { ANIMALS } from "@frontendmasters/pet";
import useDropdown from "./useDropdown";

const SearchParams = () => {
  // const location = "Seattle, WA";

  const [location, setLocation] = useState("Seattle, WA");
  // const [animal, setAnimal] = useState("dog");
  const [breed, setBreed] = useState("");
  const [breeds, setBreeds] = useState([]);

  const [animal, setAnimal, AnimalDropdown] = useDropdown(
    "animal",
    "dog",
    ANIMALS
  );

  const onChangeHandler = e => {
    setLocation(e.target.value);
  };

  return (
    <div className="search-params">
      <form>
        <label htmlFor="location">
          Location:
          <input
            onChange={onChangeHandler}
            type="text"
            id="location"
            value={location}
            placeholder={location}
          />
        </label>
        {/* <label htmlFor="animal">
          Animal:
          <select
            id="animal"
            value={animal}
            onChange={e => setAnimal(e.target.value)}
            onBlur={e => setAnimal(e.target.value)}
          >
            {ANIMALS.map(animal => (
              <option
                value={animal}
                key={animal.replace(" ", "").toLowerCase()}
              >
                {animal}
              </option>
            ))}
          </select>
        </label> */}
        <AnimalDropdown />
        <label htmlFor="breed">
          breed:
          <select
            id="breed"
            value={breed}
            onChange={e => setBreed(e.target.value)}
            onBlur={e => setBreed(e.target.value)}
            disabled={breed.length === 0}
          >
            {breeds.map(breedString => (
              <option
                value={breedString}
                key={breedString.replace(" ", "").toLowerCase()}
              >
                {breedString}
              </option>
            ))}
          </select>
        </label>
        <button type="button">Submit</button>
      </form>
    </div>
  );
};

export default SearchParams;
