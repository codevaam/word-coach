import Head from 'next/head';
import Link from 'next/link';
import { Row, Col, Container } from 'react-bootstrap';
import {GoogleLogout} from 'react-google-login'
import Router from 'next/router';
// import '../styles/index.css';

import Card from '../components/Card'
const logout = () => {
  Router.push('/login')
}

const Home = () => (
  <div className="container">
    <Head>
      <title>Create Next App</title>
      <link rel="icon" href="/favicon.ico" />
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
        crossOrigin="anonymous"
      />
    </Head>
    <GoogleLogout
      clientId="854332407368-a8hm1e15v8qc7epntk1443tu9q2dm8m6.apps.googleusercontent.com"
      buttonText="Logout"
      onLogoutSuccess={logout}
    >
    </GoogleLogout>
    <main>
      <h1 className="title">
        Welcome to <a href="#">Word Coach</a>
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
    </main>

    <style jsx>{`
      {/* .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      } */}

      main {
        padding: 5rem 0;
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

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

      .title,
      .description {
        text-align: center;
      }

      .description {
        line-height: 1.5;
        font-size: 1.5rem;
      }

      

      @media (max-width: 600px) {
        .grid {
          width: 100%;
          flex-direction: column;
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
  </div>
)

export default Home
