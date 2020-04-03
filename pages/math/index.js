import Header from '../../components/Header'

import Card from '../../components/Card'
import { Container, Row, Col } from 'react-bootstrap';

const Home = () => (
    <div className="container">
        <Header title="General Maths" />
        <main>
            <center><h2>General Maths</h2></center>
                <Row className="justify-content-center">
                    <Col md={4}><Card to="/math/easy" title="Easy" description="Basic level addition, multiplication calculations" /></Col>
                    <Col md={4}><Card to="/math/medium" title="Medium" description="Solving basic and medium level equations" /></Col>
                    <Col md={4}><Card to="/math/hard" title="Hard" description="Higher level math equations and calculations" /></Col>
                </Row>
        </main>
    </div>
)

export default Home;