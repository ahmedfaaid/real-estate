import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LISTINGS, IMAGES } from '../../util/queries';
import Layout from '../../components/Layout';
import Listing from '../../components/Listing/Listing';

export default function Listings() {
  const {
    loading: listingsLoading,
    error: listingsError,
    data: listingsData
  } = useQuery(LISTINGS);
  const {
    loading: imageLoading,
    error: imageError,
    data: imageData
  } = useQuery(IMAGES);

  if (listingsLoading || imageLoading) return <p>Loading...</p>;

  if (listingsError || imageError)
    return <p>Error: {listingsError.message || imageError.message}</p>;

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Listings</h1>
      {listingsData.listings.map(listing => {
        const [listingImage] = imageData.images.filter(
          image => image.id === listing.imageId
        );

        return (
          <Link
            key={listing.id}
            to={`/listings/${listing.id}`}
            style={{ textDecoration: 'none', color: 'inherit' }}
          >
            <Listing listing={listing} image={listingImage} />
          </Link>
        );
      })}
    </Layout>
  );
}
