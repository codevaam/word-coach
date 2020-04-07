import Head from 'next/head';
import Link from 'next/link';
import { Row, Col } from 'react-bootstrap';
import { GoogleLogout } from 'react-google-login'
// import TopNav from '../components/TopNav'
// import '../styles/index.css';

import Card from '../components/AddCard'
import TopNav from '../components/TopNav';

const Home = () => (
  <div className="bg">
    <Head>
      <title>Explore</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
    </Head>

    <TopNav />
    <main className="container">
      <h1 className="title text-white">
        Multiplayer rooms
      </h1>
      <Row>
        <Col>
          <Card
            to="/english"
            title="English Vocabulary"
            description="Improve your english vocabulary daily by exposure to new words on a daily basis, with interactive exercise" />
        </Col>
        <Col>
          <Card to="/math"
            to="/math"
            title="General Maths"
            description="Practice basic mathematics like addition, subtraction, multiplication, division and get faster at equations" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            to="/english"
            title="English Vocabulary"
            description="Improve your english vocabulary daily by exposure to new words on a daily basis, with interactive exercise" />
        </Col>
        <Col>
          <Card to="/math"
            to="/math"
            title="General Maths"
            description="Practice basic mathematics like addition, subtraction, multiplication, division and get faster at equations" />
        </Col>
      </Row>
      <Row>
        <Col>
          <Card
            to="/english"
            title="English Vocabulary"
            description="Improve your english vocabulary daily by exposure to new words on a daily basis, with interactive exercise" />
        </Col>
        <Col>
          <Card to="/math"
            to="/math"
            title="General Maths"
            description="Practice basic mathematics like addition, subtraction, multiplication, division and get faster at equations" />
        </Col>
      </Row>
    </main>

    <style jsx>{`
      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title {
        text-align: center;
      }

      

      @media (max-width: 753px) {
        .title {
          font-size: 2rem;
        }
        
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div >
)

export default Home
