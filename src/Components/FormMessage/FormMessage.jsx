import React from 'react';
import'./FormMessage.scss'

function FormMessage() {
    return (
        <fieldset className="contact-form-mail">
            <legend>Votre message</legend>
            <label htmlFor="object"> Objet du mail* </label>
            <input type="text" name="object" id="object" required />
            <label htmlFor="mail-content"> Votre message* </label>
            <textarea name="mail-content" id="mail-content" required />
        </fieldset>
    );
}

export default FormMessage;
