import React from "react";

function Passes({passes, onPassClick}){
    const listOfPasses = passes.map(pass => {
        return(
            <li onClick={() => onPassClick(pass.id)}  key={pass.id}>
                {pass.name}
            </li>
        )
    })

    return(
        <ul>
            <h2>Museum Passes: </h2>
            {listOfPasses}
        </ul>
    )
}

export default Passes