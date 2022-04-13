import { FaFeatherAlt } from 'react-icons/fa';
import React, { useState } from 'react';

function Contact() {

  const handleSubmit = (e) => {
    console.log('form submitted');
  }

  return (
    <main className="contact">

      <h1>Contactez-nous</h1>

      <div className="us">

        <div className="coordonates">
          <div>Phone: +44(0)7774926245</div>
          <div>Address:<br />Stewart Miller Swamp Soccer
            Cumbrae view,<br />
            North Campbell Road,<br />
            Innellan,
            SbArgyll, PA23
            Scotland,
            United Kingdom
          </div>
        </div>

        <img src="https://swampsoccer.co.uk/wp-content/uploads/2021/04/2009-Mr-Mrs-Swamp-Soccer.jpg" alt="A picture of us"></img>

      </div>

      <h2>Envoyez-nous un message <FaFeatherAlt /></h2>
      <form className="message" onSubmit={handleSubmit}>

        <div className="row">
          <input id="name" type="text" placeholder="Nom" required />
          <input id="email" type="email" placeholder="Adresse de courriel" required />
        </div>

        <textarea id="message" placeholder="Message" required />
        <div className="buttons">
          <button className="swarm-btn">Envoyer</button>
        </div>

      </form>
      
    </main>

  );
  
}

export default Contact;
