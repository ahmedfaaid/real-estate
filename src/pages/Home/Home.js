import React from 'react';
import { useQuery } from '@apollo/client';
import { LISTINGS } from '../../util/queries';
import Layout from '../../components/Layout';
import Map from '../../components/Map/Map';
import PostButton from '../../components/PostButton/PostButton';

function Home() {
  const { loading, error, data } = useQuery(LISTINGS);

  if (loading) return <p>Loading...</p>;

  if (error) return <p>Error: {error.message}</p>;

  return (
    <Layout>
      <Map listings={data.listings} />
      <PostButton />
    </Layout>
  );
}

export default Home;
