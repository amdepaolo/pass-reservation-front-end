import React from "react";

function Passes({passes, onPassClick}){
    const listOfPasses = passes.map(pass => {
        return(
            <tr key={pass.id}>
                <td>{pass.name}</td>
                <td>{pass.website}</td>
                <td><button  onClick={() => onPassClick(pass.id)} >Select</button></td>
            </tr>
        )
    })

    return(
        <div className="panel">
            <h2>Museum Passses:</h2>
            <table>
                <thead>
                    <tr>
                        <td>Facility Name</td>
                        <td>Facility Website</td>
                        <td> </td>
                    </tr>
                </thead>
                {listOfPasses}
            </table>
        </div>
        
    )
}

export default Passes