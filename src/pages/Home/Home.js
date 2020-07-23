import React from 'react';
import Layout from '../../components/Layout';
import Map from '../../components/Map/Map';
import PostButton from '../../components/PostButton/PostButton';

function Home() {
  return (
    <Layout>
      <Map />
      <PostButton />
    </Layout>
  );
}

export default Home;
