import React from 'react'

const Form = ({onAdd}) => {
    const handleSubmit = e => {
        e.preventDefault();
        onAdd({
            id: Date.now(),
            name: e.target.name.value,
            number: e.target.number.value
        });
        e.target.reset();
    }

    return (
        <form onSubmit={handleSubmit}>
            <label></label>
            <input type='text' name="name"></input>
            <label></label>
            <inpur type="text" name="number"></inpur>
            <button type='submit'>Add contact</button>
      </form>
  )
}

export default Form