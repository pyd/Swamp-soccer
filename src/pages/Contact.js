import { FaFeatherAlt } from 'react-icons/fa';
import React, { useState } from 'react';
import { FaHome, FaPhoneAlt, FaPaperPlane, FaFacebook, FaTwitter, FaInstagram  } from "react-icons/fa";

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
    <div className="contact">
      <div className="contact__container">
        <div className="contact__container__form">
          <div className="contact__container__form--info">
            <h3 className="contact__info--title">Foot 2 boue</h3>
            <p className="contact__info--text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.
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

            <div className="social-media">
            <p>Connectez vous à nous : </p>
            <div className="social-icons">

              <a href="#">
                <FaFacebook />
              </a>

              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaInstagram />
              </a>

            </div>
          </div>
          </div>



          <div className="contact__container__form--form">

            <form onSubmit={handleSubmit} action="index.html">
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
