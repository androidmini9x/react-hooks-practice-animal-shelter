import React from "react";

import Pet from "./Pet";

function PetBrowser({pets, onAdoptPet}) {

  const petsList = pets.map(pet => {
    return <Pet key={pet.id} onAdoptPet={onAdoptPet} pet={pet} />
  });

  return <div className="ui cards">{petsList}</div>;
}

export default PetBrowser;
