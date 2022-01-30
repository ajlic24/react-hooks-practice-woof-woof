
function DogPic({toShow, onGoodOrBad}) {
    const {id, name, image, isGoodDog} = toShow

    function handleClick() {

        fetch(`http://localhost:3001/pups/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({...toShow, isGoodDog: !isGoodDog})
        })
            .then(r => r.json())
            .then(data => onGoodOrBad(data))
    }

    return (
        <div id="dog-summary-container">
            <h1>DOGGO:</h1>
            <div id="dog-info">
                <img src={image} alt={name} />
                <h2>{name}</h2>
                <button onClick={handleClick} >{isGoodDog ? 'GoodDog!' : 'Bad Dog!'}</button>
            </div>
        </div>
    )
}

export default DogPic