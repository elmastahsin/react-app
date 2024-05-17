import React, {FormEvent, useRef, useState} from 'react';

const Form = () => {
    const [person, setPerson] = useState({
        name: '',
        age: 0
    })
    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(person);

    }
    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3"><label htmlFor="name" className="form-label">NAME</label>
                <input onChange={(event) => setPerson({...person, name: event.target.value})} id="name" type="text"
                       className="form-control"/>
            </div>
            <div className="mb-3"><label htmlFor="age" className="form-label"></label>
                <input onChange={(event) => setPerson({...person, age: parseInt(event.target.value)})} id="age"
                       type="number"
                       className="form-control"/>
            </div>
            <button className="btn btn-primary">SUBMIT</button>
        </form>
    );
};

export default Form;