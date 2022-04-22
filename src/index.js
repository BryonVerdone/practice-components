import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Heading from './heading.js';
import PhoneInput from './phone-input';
import DateInput from './date-input.js';
function LoginForm() {
  return (
    <>
      <section className='form-container'>
        <article>
          <Heading />
          <PhoneInput />
          <DateInput />
        </article>
      </section>
    </>
  );
}

ReactDOM.render(<LoginForm />, document.getElementById('root'));
