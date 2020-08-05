import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_LISTING } from '../../util/mutations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages } from '@fortawesome/free-solid-svg-icons';
import { geocode } from '../../util/geocode';
import {
  FormContainer,
  StyledForm,
  StyledFileBtn,
  StyledField,
  StyledSubmit,
} from './AddForm.styled';

function AddForm() {
  const [formData, setFormData] = useState({});

  const [createListing] = useMutation(ADD_LISTING, {
    onCompleted: listing => listing,
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    event.preventDefault();

    const [longitude, latitude] = await geocode(formData);

    const createdListing = await createListing({
      variables: {
        input: {
          ...formData,
          longitude,
          latitude,
        },
      },
    });

    // TODO: Push to added listing page
    // TODO: Add image upload

    setFormData({});

    return createdListing;
  };

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
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
            onChange={handleChange}
            placeholder='Enter property title'
          />
        </StyledField>
        <StyledField>
          <label htmlFor='address'>Property Address</label>
          <input
            type='text'
            name='address1'
            id='address1'
            onChange={handleChange}
            placeholder='Enter street address'
          />
          <input
            type='text'
            name='address2'
            id='address2'
            onChange={handleChange}
            placeholder='Address line 2'
          />
          <input
            type='text'
            name='city'
            id='city'
            onChange={handleChange}
            placeholder='City'
          />
          <input
            type='text'
            name='province'
            id='province'
            onChange={handleChange}
            placeholder='Province'
          />
          <input
            type='text'
            name='postalCode'
            id='postalCode'
            onChange={handleChange}
            placeholder='Postal/Zip Code'
          />
        </StyledField>
        <StyledField>
          <label htmlFor='description'>Describe your property</label>
          <textarea
            name='description'
            id='description'
            onChange={handleChange}
            placeholder='Enter a description for your property'
          />
        </StyledField>
        <StyledSubmit type='submit'>Submit</StyledSubmit>
      </StyledForm>
    </FormContainer>
  );
}

export default AddForm;
