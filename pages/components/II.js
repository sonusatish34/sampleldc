// pages/index.js
"use client"
import React, { useState } from 'react';

export default function II({ data }) {
    // const [data,setData] = useState(null);
    console.log(data,"sataa");
  return (
    <div>
      <h1>Data fetched with ISR:</h1>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
    </div>
  );
}

export async function getStaticProps() {

    const requestOptions = {
        method: "GET",
        redirect: "follow"
      };
      
      fetch("https://jsonplaceholder.typicode.com/posts", requestOptions)
        .then((response) => response.text())
        .then((result) => console.log(result))
        .catch((error) => console.error(error));
  
  return {
    props: {
      data,
    },
    revalidate: 10, // In seconds
  };
}
