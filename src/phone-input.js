import React from 'react';
import './index.css';

const PhoneInput = () => {
  return (
    <div className='form-group'>
      <label htmlFor='phone-input'>Phone Number</label>
      <input placeholder='8 Digits' type='text' />
    </div>
  );
};

export default PhoneInput;
