import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Контакты</h2>
      <p>Вы можете связаться с нами по телефону или электронной почте:</p>
      <ul>
        <li>Телефон: +7 (123) 456-78-90</li>
        <li>Email: info@vkusnaytina.ru</li>
      </ul>
    </section>
  );
}

export default Contact;