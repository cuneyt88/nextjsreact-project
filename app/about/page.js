"use client"
import React, { useState } from 'react'
import Head from 'next/head';
import styles from '../page.module.css'

const About = () => {

    const [message, setMessage] = useState('');

  const fetchData = async () => {
      try {
      const response = await fetch(`/api/hello`,{
           headers:{
              Accept:"application/json",
              method: "GET",
          }
      });
      const data = await response.json();
      setMessage(data.message);
      } catch (error) {
      console.error('Error fetching data:', error);
      setMessage('Error fetching data');
      }
  };

  return (
    <main className={styles.main}>
        <Head>
        <title>My Awesome Next.js App</title>
        <meta name="description" content="Bu web uygulaması, Next.js ile oluşturulmuştur." />
        <meta name="keywords" content="Next.js, React, SEO, dragAndDrop, Web Development" />
        <meta name="author" content="cuneytari" />
        <link rel="icon" href="/favicon.ico" />

        {/* Twitter Card etiketleri */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:creator" content="@cuneytari" />
        <meta name="twitter:title" content="My Awesome Next.js App" />
        <meta name="twitter:description" content="Bu web uygulaması, Next.js ile oluşturulmuştur." />
        <meta name="twitter:image" content="/twitter-card-image.jpg" />
      </Head>

        <div>
            <p>About</p>
            <button onClick={fetchData}>Fetch Data from API</button>
            <p>{message}</p>
        </div>
    </main>
  )
}

export default About