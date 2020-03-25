import { useRouter } from 'next/router';
import Head from 'next/head';
import { Row, Button } from 'react-bootstrap';
import Header from '../../components/Header';
import CanvasDraw from 'react-canvas-draw';
import { useEffect, useRef, useState } from 'react';
import axios from 'axios';
import { randomBytes } from 'crypto';

// const checkAns = () => {
//     var c = ReactDOM.findDOMNode(CanvasDraw)
//     window.open(c.toDataURL("image/png"));
// }


const Questions = () => {
    let [res, updateRes] = useState([]);
    let [ques, updateQues] = useState(0);
    useEffect(() => {
        axios.get('http://localhost:8080/eng/')
            .then(res => {
                const arr = [];
                for (var i in res.data) {
                    arr.push(res.data[i].word)
                }
                // console.log(arr)
                updateRes(arr)
            })
    }, [])
    const clearScreen = () => {
        console.log(saveableCanvas)
        saveableCanvas.current.clear()
    }
    const saveImg = () => {
        const coords = JSON.parse(saveableCanvas.current.getSaveData())
        console.log(coords.lines[0].points)
        // axios.post('http://localhost:8080/eng/check', ())
    }
    const dispWord = () => {
        if (res.length !== 0) {
            let word = res[ques];
            String.prototype.replaceAt = function (index, replacement) {
                return this.substr(0, index) + replacement + this.substr(index + replacement.length);
            }
            const index = Math.floor(Math.random()*(word.length-1)+1)
            return word.replaceAt(index, '_')
        }
    }
    const nextQues = () => {
        if(ques<4) {
            updateQues(ques+1)
        }
    }
    const prevQues = () => {
        if(ques>0) {
            updateQues(ques-1)
        }
    }
    const router = useRouter();
    const { difficulty } = router.query;
    let saveableCanvas = useRef(null);
    return (
        <div className="container">
            <Head>
                <Header />
            </Head>
            <h1>Difficulty: {difficulty}</h1>
            <h3>Word: {dispWord()}</h3>
            <CanvasDraw ref={saveableCanvas} />
            <Row>
                <button className="nav" onClick={prevQues}>&larr;</button>
                <button onClick={clearScreen}>Clear</button>
                <button className="nav" onClick={nextQues}>&rarr;</button>
            </Row>
            <button onClick={saveImg}>Check</button>
            <style jsx>{`
            .container {
                min-height: 100vh;
                padding: 0 0.5rem;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
              }
              button {
                  background-color: lightgreen;
                  margin-top: 1rem;
                  padding: 0.5rem 1.5rem 0.5rem 1.5rem;
                  color: white;
                  font-size: 1.2rem;
                  text-transform: uppercase;
              }
              button:hover {
                  background-color: rgba(0,255,0,0.9);
                  transition: 1s;
              }
              h3 {
                  text-transform: uppercase;
              }
            `}
            </style>
        </div>
    )
}

export default Questions