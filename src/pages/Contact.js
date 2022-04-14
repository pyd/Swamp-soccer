import { FaFeatherAlt } from 'react-icons/fa';
import React, { useState } from 'react';

function Contact() {

  const handleSubmit = (e) => {
    console.log('form submitted');
  }

  return (
    // <main className="contact">
      
    //   <h1>Contactez-nous</h1>

    //   <div className="container">

    //     <div className="us">

    //       <div className="coordonates">
    //         <div>Phone: +44(0)7774926245</div>
    //         <div>Address:<br />Stewart Miller Swamp Soccer
    //           Cumbrae view,<br />
    //           North Campbell Road,<br />
    //           Innellan,
    //           SbArgyll, PA23
    //           Scotland,
    //           United Kingdom
    //         </div>
    //       </div>

    //       <img src="https://swampsoccer.co.uk/wp-content/uploads/2021/04/2009-Mr-Mrs-Swamp-Soccer.jpg" alt="A picture of us"></img>

    //     </div>

    //     <div className="form-container"> 

    //       < h2>Envoyez-nous un message <FaFeatherAlt /></h2>

    //       <form onSubmit={handleSubmit}>

    //         <div className="row">
    //           <input id="name" type="text" placeholder="Nom" required />
    //           <input id="email" type="email" placeholder="Adresse de courriel" required />
    //         </div>

    //         <textarea id="message" placeholder="Message" required />
    //         <div className="buttons">
    //           <button className="swarm-btn">Envoyer</button>
    //         </div>

    //       </form>

    //     </div>

    //   </div>
      
    // </main>

  // );
  <div className="contact">
    <div className="contact__container">
      <div className="contact__container__form">
        <div className="contact__container__form--info"></div>

        <div className="contact__container__form--form">
          
          <form action="index.html">
            <h3 className="contact__form--title">Nous contacter</h3>

            <div className="contact__form--input-container focus">
              <input type="text" name="name" className="input"></input>
              <label for="">Nom de l'utilisateur</label>
              <span>Nom de l'utilisateur</span>
            </div>
            
            <div className="contact__form--input-container">
              <input type="tel" name="phone" className="input"></input>
              <label for="">Téléphone</label>
              <span>Téléphone</span>
            </div>

            <div className="contact__form--input-container textarea">
              <textarea name="message" className="input"></textarea>
              <label className="label" for="">Message</label>
              <span>Message</span>
            </div>

            <input type="submit" value="Envoyer" className="btn" />

          </form>

        </div>
      </div>
    </div>

  </div>
  )
}

export default Contact;
