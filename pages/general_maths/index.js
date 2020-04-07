import Header from '../../components/Header'
import Head from 'next/head'

import SubjectCard from '../../components/SubjectCard'
import { Container, Row, Col } from 'react-bootstrap';
import TopNav from '../../components/TopNav';

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
            <center><h2 className="text-light">General Maths</h2></center>
            <Row className="justify-content-center">
                    <Col md={4}><SubjectCard to="/general_maths/easy" title="Easy" description="Basic level addition, multiplication calculations" /></Col>
                    <Col md={4}><SubjectCard to="/general_maths/medium" title="Medium" description="Solving basic and medium level equations" /></Col>
                    <Col md={4}><SubjectCard to="/general_maths/hard" title="Hard" description="Higher level math equations and calculations" /></Col>
                </Row>
        </main>
    </div>
)

export default Home;