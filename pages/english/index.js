import Header from '../../components/Header'
import Head from 'next/head';

import Card from '../../components/Card'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
    <div className="container">
        <Header />
        <main>
            <center><h2>English Vocabulary</h2></center>
            <Row className="justify-content-center">
                <Col md={4}><Card to="/english/easy" title="Easy" description="For non native speakers/beginners" /></Col>
                <Col md={4}><Card to="/english/medium" title="Medium" description="Day-to-day use words vocabulary" /></Col>
                <Col md={4}><Card to="/english/hard" title="Hard" description="Higher level english vocabulary" /></Col>
            </Row>
        </main>
    </div>
)

export default Home;