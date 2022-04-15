import { FaFeatherAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaHome, FaPhoneAlt, FaPaperPlane  } from "react-icons/fa";

function Contact() {

  const handleSubmit = (e) => {
    console.log('form submitted');
  }


  // Add the "focus" class when the input gets focus
  // & remove it when the input lost focus
  const inputs = document.querySelectorAll(".input");

  // When the input gets focus, we need to select it's parent,
  // then we need to add the "focus" class to it 
  function focusFunction() {
    let parent = this.parentNode;
    parent.classList.add("focus");
  }

  function blurFunction() {
    let parent = this.parentNode;
    // Let the "focus" class when the input is not empty even it lost focus
    if (this.value == "") {
      parent.classList.remove("focus");
    }

  }


  inputs.forEach(input => {
    input.addEventListener("focus", focusFunction);
    // Same thing for lost focus, we'll add a blur event listener,
    // then we'll select it's parent, except this time, we'll remove the "focus" class
    input.addEventListener("blur", blurFunction);
  });




  return (
    // <main className="contact">

    //   <h1>Contactez-nous</h1>

    //   <div className="container">

    //     <div className="us">

    //       <div className="coordonates">
    //         <div>Phone: +44(0)7774926245</div>
    //         <div>Address:<br />,<br />
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
          <div className="contact__container__form--info">
            <h3 className="contact__info--title">Foot 2 boue</h3>
            <p className="contact__info--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            <div className="contact__info__items">

              <div className="contact__info__items--item">
                < FaHome className="icon" />
                <p>
                  Stewart Miller Swamp Soccer
                  Cumbrae view
                </p>
              </div>

              <div className="contact__info__items--item">
                < FaPhoneAlt className="icon" />
                <p>
                  06 34 67 98 12
                </p>
              </div>

              <div className="contact__info__items--item">
                < FaPaperPlane className="icon" />
                <p>
                  lorem@gmail.com
                </p>
              </div>

            </div>
          </div>

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

              <div className="contact__form--input-container">
                <input type="text" name="email" className="input"></input>
                <label for="">Email</label>
                <span>Email</span>
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
