import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import {
  StyledForm,
  StyledFileBtn,
  StyledField,
  StyledSubmit,
} from './AddForm.styled';

function AddForm() {
  return (
    <div>
      <StyledForm>
        <StyledFileBtn>
          <label htmlFor='image'>
            <FontAwesomeIcon icon={faImages} />
            <span>Add an image</span>
          </label>
          <input type='file' name='image' id='image' />
        </StyledFileBtn>
        <StyledField>
          <label htmlFor='title'>Property Title</label>
          <input
            type='text'
            name='title'
            id='title'
            placeholder='Enter property title'
          />
        </StyledField>
        <StyledField>
          <label htmlFor='address'>Property Address</label>
          <input
            type='text'
            name='street'
            id='street'
            placeholder='Enter street address'
          />
          <input
            type='text'
            name='line2'
            id='line2'
            placeholder='Address line 2'
          />
          <input type='text' name='city' id='city' placeholder='City' />
          <input
            type='text'
            name='province'
            id='province'
            placeholder='Province'
          />
          <input
            type='text'
            name='postCode'
            id='postCode'
            placeholder='Postal/Zip Code'
          />
        </StyledField>
        <StyledField>
          <label htmlFor='description'>Describe your property</label>
          <textarea
            name='description'
            id='description'
            placeholder='Enter a description for your property'
          />
        </StyledField>
        <StyledSubmit type='submit'>Submit</StyledSubmit>
      </StyledForm>
    </div>
  );
}

export default AddForm;
