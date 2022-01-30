
function Filter({isGood, onFilter}) {

    return (
        <div id="filter-div">
            <button id="good-dog-filter" onClick={onFilter} >Filter good dogs: {isGood ? 'ON' : 'OFF'}</button>
        </div>
    )
}

export default Filter