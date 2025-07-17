import React from "react";
import { fetchExternalData, Post } from "../utils/api";
import { GetStaticProps } from 'next';

interface HomeProps {
  data: Post | null;
  error?: string;
}

const Home: React.FC<HomeProps> = ({ data, error }) => {
  return (
    <div>
      <h1>Welcome to Simple Next.js Project</h1>
      {error && <p>Error: {error}</p>}
      {data ? (
        <div>
          <h2>{data.title}</h2>
          <p>{data.body}</p>
        </div>
      ) : (
        <p>No data available.</p>
      )}
    </div>
  );
};

export const getStaticProps: GetStaticProps<HomeProps> = async () => {
  try {
    const data = await fetchExternalData();
    return { props: { data }, revalidate: 10 };
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
    return { props: { data: null, error: errorMessage } };
  }
}

export default Home;
