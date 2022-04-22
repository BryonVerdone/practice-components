import React from 'react';
import './index.css';

const DateInput = () => {
  return (
    <div className='form-group'>
      <label htmlFor='phone-input'>Date of birth</label>
      <input placeholder='6 digits (ddmmyy)' type='text' />
    </div>
  );
};

export default DateInput;
