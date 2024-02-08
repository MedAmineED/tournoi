import React from 'react'

const InputBlock = ({id, type, name, required, onChange, value, placeholder }) => {
  return (
    <div className='input-block'>
      <label htmlFor={id}></label>
      <input type={type? type : "text"} className="inputFields" 
                    id={id} 
                    name={name} 
                    placeholder={placeholder} 
                    required = {required}
                    onChange={(e)=> {onChange(e)}}
                    value={value}
                    />
    </div>
  )
}

export default InputBlock
