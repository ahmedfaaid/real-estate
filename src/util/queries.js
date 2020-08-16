import { gql } from '@apollo/client';

export const LISTINGS = gql`
  query Listings {
    listings {
      id
      title
      address1
      address2
      city
      province
      postalCode
      description
      longitude
      latitude
    }
  }
`;

export const LISTING = gql`
  query Listing($id: String!) {
    listing(id: $id) {
      id
      title
      address1
      address2
      city
      province
      postalCode
      description
      longitude
      latitude
    }
  }
`;
