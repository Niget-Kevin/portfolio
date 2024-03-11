import React from 'react';
import'./FormCoordinates.scss'

function FormCoordinates() {
    return (
        <fieldset className="coordinates">
            <legend>Vos coordonnées</legend>
            <div className="coordinates__name">
                <label htmlFor="lastname"> Votre nom* </label>
                <input type="text" name="lastname" id="lastname" required />
                <label htmlFor="firstname"> Votre prénom* </label>
                <input type="text" name="firstname" id="firstname" required />
            </div>
            <div className="coordinates__datas">
                <label htmlFor="email"> Votre e-mail* </label>
                <input type="email" name="email" id="email" required />
                <label htmlFor="tel"> Votre téléphone</label>
                <input type="tel" name="tel" id="tel"  />
            </div>
        </fieldset>
    );
}

export default FormCoordinates;
