import React, { useState } from 'react'
import InputBlock from '../components/InputBlock'


const inputsInfo = [
    {
        id : "username-input",
        name : "nom-utilisateur",
        placeHolder : "Nom d'utilisateur",
        required : true
    },
    {
        id : "password-input",
        name : "motPasse",
        placeHolder : "Mot de passe",
        required : true
    },
]


const FormPage = () => {
    const [inputsValues, setInputsValues] = useState({});

    const handleChange = (e)=> {
        const inputName = e.target.name;
        const value = e.target.value;

        setInputsValues({...inputsValues, [inputName] : value});
        console.log(inputsValues);
    }
  return (
    <div className='form-page'>
        <div className="signupSection">
            <div className="info">
              <i className="icon ion-ios-ionic-outline" aria-hidden="true" />
              <h1>TOURNOI</h1>
              <img className='image-1' src='images/ftball.png'/>
            </div>
            <form className="signupForm" name="signupform">
              <h2>Espace Chef d'Équipe</h2>
              <div  className="noBullet">
              {inputsInfo.map((input, key)=> {
                return  <InputBlock 
                            key={input.name + key}
                            id={input.id}
                            name={input.id}
                            type={input.type? input.type : "text"}
                            required={input.required}
                            placeholder={input.placeHolder}
                            value={inputsValues[input.name]}
                            onChange={handleChange}
                        />
              })}
              <button type="submit" id="connect-btn" name="connect" alt="connect" value="connect">
              Se Connecter
              </button>
              </div>
            </form>
        </div>
    </div>
  )
}

export default FormPage
