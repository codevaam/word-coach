import Header from '../../components/Header'
import Head from 'next/head';
import TopNav from '../../components/TopNav';

import SubjectCard from '../../components/SubjectCard'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
    <div className="bg">
        <Head>
            <title>Easy vocabulary</title>
            <link rel="icon" href="/favicon.ico" />
            <link
                rel="stylesheet"
                href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                crossOrigin="anonymous"
            />
        </Head>
        <TopNav />
        <main className="container mt-5">
            <center><h2 className="text-light">English Vocabulary</h2></center>
            <Row className="justify-content-center">
                <Col md={4}><SubjectCard to="/english_vocabulary/easy" title="Easy" description="For non native speakers/beginners" /></Col>
                <Col md={4}><SubjectCard to="/english_vocabulary/medium" title="Medium" description="Day-to-day use words vocabulary" /></Col>
                <Col md={4}><SubjectCard to="/english_vocabulary/hard" title="Hard" description="Higher level english vocabulary" /></Col>
            </Row>
        </main>
        {/* <style jsx>{`
            .bg {
                height: 100vh;
                width: auto;
                background-image: url('https://i.ibb.co/GP5Dh2h/889.jpg');
                background-size: cover;
            }    
        `}
        </style> */}
    </div>
)

export default Home;