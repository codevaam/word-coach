import Header from '../../components/Header'

import Card from '../../components/Card'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
    <div className="container">
        <Header title="English Vocabulary" />
        <main>
            <center><h2>English Vocabulary</h2></center>
            <Container>
                <Row className="justify-content-center">
                    <Col md={4}><Card to="/english/easy" title="Easy" description="For non native speakers/beginners" /></Col>
                    <Col md={4}><Card to="/english/medium" title="Medium" description="Day-to-day use words vocabulary" /></Col>
                    <Col md={4}><Card to="/english/hard" title="Hard" description="Higher level english vocabulary" /></Col>
                </Row>
            </Container>
        </main>
        <style jsx>{`
        .container {
        min-height: 100vh;
        padding: 0 0.5rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }  
      
        `}
        </style>
    </div>
)

export default Home;