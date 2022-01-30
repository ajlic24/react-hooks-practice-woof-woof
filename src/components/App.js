import React, { useEffect, useState } from "react";
import DogCard from "./DogCard";
import Filter from "./Filter";
import DogPic from "./DogPic";

function App() {
  const [dogs, setDogs] = useState([])
  const [toShow, setToShow] = useState({})
  const [isGood, setIsGood] = useState(false)

  useEffect(() => {
    fetch(`http://localhost:3001/pups`)
      .then(r => r.json())
      .then(data => setDogs(data))
  }, [])

  function onClick(obj) {
    setToShow(obj)
  }

  function onFilter() {
    setIsGood(!isGood)
  }

  const filtered = dogs.filter(dog => isGood ? (dog.isGoodDog === true) : true)

  function onGoodOrBad(obj) {
    const newDogs = [...dogs].map(dog => (dog.id === obj.id) ? obj : dog)
    setToShow(obj)
    setDogs(newDogs)
  }

  return (
    <>
      <Filter onFilter={onFilter} isGood={isGood} />
      <div id="dog-bar">
        {filtered.map(dog => <DogCard key={dog.id} dog={dog} onClick={onClick} />)}
      </div>
      <DogPic toShow={toShow} onGoodOrBad={onGoodOrBad} />
    </>
  );
}

export default App;
