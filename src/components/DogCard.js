

function DogCard({dog, onClick}) {

    function handleClick() {
        onClick(dog)
    }

    return ( 
       <>
           <span onClick={handleClick} >{dog.name}</span>
       </>
   )

}

export default DogCard