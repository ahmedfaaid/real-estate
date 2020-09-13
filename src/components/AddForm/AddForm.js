import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { ADD_LISTING } from '../../util/mutations';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImages, faCheckSquare } from '@fortawesome/free-solid-svg-icons';
import { geocode } from '../../util/geocode';
import {
  FormContainer,
  StyledForm,
  StyledFileBtn,
  StyledField,
  StyledSubmit
} from './AddForm.styled';
import { Loading } from '../../styles';

function AddForm() {
  const [formData, setFormData] = useState({});
  const [listingImage, setListingImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const [createListing] = useMutation(ADD_LISTING, {
    onCompleted: listing => listing
  });

  const history = useHistory();

  const handleImageChange = event => {
    setListingImage(event.target.files[0]);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async event => {
    setLoading(true);

    event.preventDefault();

    const [longitude, latitude] = await geocode(formData);

    const createdListing = await createListing({
      variables: {
        image: listingImage,
        input: {
          ...formData,
          price: parseFloat(parseFloat(formData.price).toFixed(2)),
          longitude,
          latitude
        }
      }
    });

    // TODO: Add image upload

    setFormData({});

    const { id } = createdListing.data.createListing;

    history.push(`/listings/${id}`);

    setLoading(false);

    return createdListing;
  };

  if (loading) return <Loading />;

  return (
    <FormContainer>
      <StyledForm onSubmit={handleSubmit}>
        <StyledFileBtn>
          <label htmlFor='image'>
            <FontAwesomeIcon icon={listingImage ? faCheckSquare : faImages} />
            <span>{listingImage ? `Image Added` : `Add an image`}</span>
          </label>
          <input
            type='file'
            name='image'
            id='image'
            onChange={e => handleImageChange(e)}
          />
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
          <StyledField>
            <label htmlFor='Disposition'>Disposition</label>
            <select
              name='disposition'
              id='disposition'
              onChange={handleChange}
              defaultValue=''
            >
              <option value='' disabled>
                Select your option
              </option>
              <option value='rent'>Rental</option>
              <option value='sale'>For Sale</option>
            </select>
          </StyledField>
          <StyledField>
            <label htmlFor='price'>Price</label>
            <input
              type='number'
              name='price'
              id='price'
              placeholder='Enter price'
              onChange={handleChange}
            />
          </StyledField>
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
