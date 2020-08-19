import { gql } from '@apollo/client';

export const ADD_LISTING = gql`
  mutation CreateListing($input: ListingInput!) {
    createListing(input: $input) {
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
    }
  }
`;
