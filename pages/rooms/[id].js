import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import React, { Component } from 'react';
import Navbar from '../../components/TopNav';
import Chat from '../../components/Chat';
import Leaderboard from '../../components/Leaderboard';



class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            numbers: [],
            questionNo: 0,
            current: 0,
            currentAns: null,
            eq: '',
            html: ''
        })
    }
    render() {
        return (
            <div className="bg">
                <Navbar />
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
                <div className="row no-gutters mt-3 px-5">
                    <h2 className="text-white">{this.state.current}</h2>
                    {/* <div>
                        <button className="my-2" onClick={this.checkAns}>Check</button>
                        <button className="my-2 ml-3" onClick={() => { this.editor.clear() }}>Clear</button>
                    </div> */}
                </div>
                <h4 className="text-center text-white">Increasing order numbers</h4>
                <div className="row no-gutters">
                    <div className="col mx-2 side-div">
                        <h3 className="text-center m-3">Users &rarr;</h3>
                        <Leaderboard />
                    </div>
                    <div className="col bg-white">
                        <div className="row">
                            {this.state.html}
                        </div>
                    </div>
                    <div className="col mx-2 side-div">
                        <h3 className="text-center m-3">Chat &rarr;</h3>
                        <Chat />
                    </div>
                </div>
                <style jsx>{`
                    .side-div {
                        background-color: white;
                        height: 80vh;
                    }
                    button {
                        border-color: transparent;
                        background-color: lightgreen;
                    }
                `}
                </style>
            </div>
        );
    }
    componentDidMount() {
        let loc = window.location.toString();
        loc = loc.split('/')
        // console.log(loc)
        this.setState({ difficulty: loc[4] })
        axios.get(`http://localhost:8080/kids/numbers`)
            .then(res => {
                this.setState({ numbers: res.data })
            }).then(this.dispNums)
    }

    dispNums = () => {
        if (this.state.numbers.length !== 0) {
            let html = [];
            for (var i in this.state.numbers) {
                html.push((
                    <div className="col" key={i}>
                        <div className="row justify-content-center">
                            <svg width="10px" height="100px">
                                <line x1="0" y1="10" x2="0" y2="100" stroke="black" />
                            </svg>
                        </div>
                        <div className="row justify-content-center">
                        <button className="number-btn" onClick={this.checkAns}>{this.state.numbers[i]}</button>
                        </div>
                        <style jsx>{`
                            .number-btn {
                                background-color: lightgreen;
                                border-radius: 50%;
                                padding: 1rem;
                                border-style: none;
                            }
                        `}</style>
                    </div>
                ))
            }
            this.setState({numbers: this.state.numbers.sort((a, b) => a - b)})
            console.log(this.state.numbers)
            this.setState({currentAns: this.state.numbers[this.state.current]})
            this.setState({html: html})
        }
    }
    checkAns = () => {
        let numbers = this.state.numbers
        let current = this.state.current
        let e = event.target;
        console.log(e)
        if(e.innerText == this.state.currentAns) {
            console.log("correct")
            this.setState({currentAns: numbers[++current]})
            this.setState({current: current})
            e.style.display = "none";
            axios.post('http://localhost:8080/users/addScore')
            if(current == 1) {
                alert("Succesfully completed quiz")
                history.back()
            }
        }
        else {
            console.log(this.state.currentAns)
            console.log("false")
        }
    }
}

export default App;