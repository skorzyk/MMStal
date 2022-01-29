import React from "react";
import { useForm, ValidationError } from "@formspree/react";

import "../styles/Contact.css";

function Contact() {
  const [state, handleSubmit] = useForm("xzboezkz");
  if (state.succeeded) {
    return (
      <>
        <h2 className="contact__title" data-aos={"fade-up"}>
          Kontakt
        </h2>
        <div className="form--container" data-aos={"fade-up"}>
          <p className="form__desc">
            Dziękujemy za wysłanie formularza. Skontaktujemy się z Tobą jak
            najszybciej!
          </p>
        </div>
        <div className="contact--container" data-aos={"fade-up"}>
          <div className="contact__single">
            <h4 className="contact__name">
              Marcin <span className="contact__surname">Piszczek</span>
            </h4>
            <a href="tel:667-045-533" className="contact__number">
              667-045-533
            </a>
          </div>
          <div className="contact__single">
            <h4 className="contact__name">
              Adam <span className="contact__surname">Boruta</span>
            </h4>
            <a href="tel:575-255-700" className="contact__number">
              575-255-700
            </a>
          </div>
          <div className="contact__adres">
            <p className="contact__name-company">MMSTAL</p>
            <a href="mailto:biuro@mmstal.pl" className="contact__mail">
              biuro@mmstal.pl
            </a>
            <p className="contact__street">ul. Jagodowa 11</p>
            <p className="contact__code">32-052 Radziszów</p>
          </div>
        </div>
      </>
    );
  }
  return (
    <>
      <h2 className="contact__title" data-aos={"fade-up"}>
        Kontakt
      </h2>
      <div className="form--container" data-aos={"fade-up"}>
        <p className="form__desc">
          Zachęcamy do kontaktu, telefonicznie lub poprzez formularz dostępny
          poniżej. Odpowiemy na Wasze pytania.
        </p>
        <form onSubmit={handleSubmit}>
          <div className="input__wrapper">
            <input
              type="email"
              name="email"
              id="email"
              className="input__contact"
              placeholder="Twój adres e-mail"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <label htmlFor="email" className="input__label">
              Twój adres e-mail
            </label>
          </div>
          <div className="input__wrapper">
            <input
              type="text"
              name="topic"
              id="topic"
              className="input__contact"
              placeholder="Temat wiadomości"
              required
            />
            <ValidationError
              prefix="Topic"
              field="topic"
              errors={state.errors}
            />
            <label htmlFor="email" className="input__label">
              Temat wiadomości
            </label>
          </div>
          <textarea
            name="message"
            placeholder="Wiadomość"
            className="textarea__contact"
            required
          ></textarea>
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
          <button
            disabled={state.submitting}
            type="submit"
            className="button__contact"
          >
            Wyślij wiadomość
          </button>
        </form>
      </div>
      <div className="contact--container" data-aos={"fade-up"}>
        <div className="contact__single">
          <h4 className="contact__name">
            Marcin <span className="contact__surname">Piszczek</span>
          </h4>
          <a href="tel:667-045-533" className="contact__number">
            667-045-533
          </a>
        </div>
        <div className="contact__single">
          <h4 className="contact__name">
            Adam <span className="contact__surname">Boruta</span>
          </h4>
          <a href="tel:575-255-700" className="contact__number">
            575-255-700
          </a>
        </div>
        <div className="contact__adres">
          <p className="contact__name-company">MMSTAL</p>
          <a href="mailto:biuro@mmstal.pl" className="contact__mail">
            biuro@mmstal.pl
          </a>
          <p className="contact__street">ul. Jagodowa 11</p>
          <p className="contact__code">32-052 Radziszów</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
