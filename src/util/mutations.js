import { gql } from '@apollo/client';

export const ADD_LISTING = gql`
  mutation CreateListing($input: ListingInput!, $image: Upload!) {
    createListing(input: $input, image: $image) {
      id
      title
      address1
      address2
      city
      province
      postalCode
      description
      disposition
      price
      image {
        id
      }
    }
  }
`;
