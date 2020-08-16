import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LISTINGS } from '../../util/queries';
import Layout from '../../components/Layout';
import Listing from '../../components/Listing/Listing';

export default function Listings() {
  const { loading, error, data } = useQuery(LISTINGS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Listings</h1>
      {data.listings.map(listing => (
        <Link
          to={`/${listing.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Listing key={listing.id} listing={listing} />
        </Link>
      ))}
    </Layout>
  );
}
