import React, {useState} from "react";

function CreatePassForm({onResponse}){
    const [passForm, setPassForm] = useState({name: '', website:''})

    function updatePassForm(key,value){
        const updatedForm = {...passForm, [key]:value};
        setPassForm(updatedForm);
    }

    function handleSubmit(e){
        e.preventDefault();
        fetch(`http://localhost:9292/passes`, {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(passForm)
        })
        .then(r => r.json())
        .then(onResponse)     
    }
    return(
        <form>
            <h2>Add Pass</h2>
            <label>Museum or Facility Name:</label>
            <input 
                value={passForm.name}
                onChange={e=>updatePassForm('name', e.target.value)} 
                type='text'>
            </input>
            <label>Website:</label>
            <input 
                value={passForm.website}
                onChange={e=>updatePassForm('website', e.target.value)} type='text'>
            </input>
            <input onClick={handleSubmit} type='submit'/>
        </form>
    )
}

export default CreatePassForm