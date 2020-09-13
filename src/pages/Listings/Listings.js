import React from 'react';
import { useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';
import { LISTINGS } from '../../util/queries';
import Layout from '../../components/Layout';
import Listing from '../../components/Listing/Listing';
import { Loading } from '../../styles';

export default function Listings() {
  const { loading, error, data } = useQuery(LISTINGS);

  if (loading) {
    return (
      <Layout>
        <Loading />
      </Layout>
    );
  }

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <h1 style={{ textAlign: 'center' }}>Listings</h1>
      {data.listings.map(listing => (
        <Link
          key={listing.id}
          to={`/listings/${listing.id}`}
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <Listing listing={listing} />
        </Link>
      ))}
    </Layout>
  );
}
