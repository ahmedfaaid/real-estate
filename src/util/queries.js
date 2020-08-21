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
      disposition
      price
      image {
        id
        path
      }
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
      disposition
      price
      image {
        id
        path
      }
      longitude
      latitude
    }
  }
`;

export const IMAGES = gql`
  query Images {
    images {
      id
      path
    }
  }
`;

export const IMAGE = gql`
  query Image($id: string) {
    image(id: $id) {
      id
      path
    }
  }
`;
