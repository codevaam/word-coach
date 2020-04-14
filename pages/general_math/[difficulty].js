import { useRouter } from 'next/router';
import Head from 'next/head';
import axios from 'axios';
import React, { Component } from 'react';
import * as MyScriptJS from 'myscript';
import { evaluate } from 'mathjs';
import Navbar from '../../components/TopNav';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';


const editorStyle = {
    'minWidth': '100px',
    'minHeight': '100px',
    'height': 'calc(100vh - 190px)',
    'backgroundColor': 'white'
};

class App extends Component {
    constructor(props) {
        super(props);
        this.state = ({
            questions: [],
            questionNo: 0,
            current: '',
            eq: ''
        })
    }
    renderTime = (value) => {
        if (value === 0) {
            return <div className="timer">Too lale...</div>;
        }
        else {
            return (
                <div className="text-center">{value}</div>
            );
        }
    };
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

                    <CountdownCircleTimer className="justify-content-center"
                        onComplete={() => {
                            alert("Too late");
                            this.editor.clear();
                            this.setState({ questionNo: ++this.state.questionNo })
                            this.dispWord();
                            return [true, 1]
                        }}
                        size={50}
                        renderTime={this.renderTime}
                        isPlaying={this.state.playing}
                        durationSeconds={15}
                        colors={[
                            ['#004777', .33],
                            ['#F7B801', .33],
                            ['#A30000']
                        ]}
                        key={this.state.questionNo}
                    />
                    {/* <h4>Part of Speech: {this.state.partOfSpeech}</h4>
                    <p>Definition: {this.state.definition}</p> */}
                    <div>
                        <button className="my-2" onClick={this.checkAns}>Check</button>
                        <button className="my-2 ml-3" onClick={() => { this.editor.clear() }}>Clear</button>
                    </div>
                </div>
                <h4 className="text-center text-white">Fill in the blank space</h4>
                <div className="row no-gutters">
                    <div className="col mx-2 side-div">
                        <h3 className="text-center m-3">Progress &rarr;</h3>
                    </div>
                    <div className="col mx-2" style={editorStyle} ref="editor" ></div>
                    <div className="col mx-2 side-div">
                        <h3 className="text-center m-3">Leaderboard &rarr;</h3>
                    </div>
                </div>
                <style jsx>{`
                    .side-div {
                        background-color: white;
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
        console.log(loc)
        this.setState({ difficulty: loc[4] })
        axios.get(`http://localhost:8080/math/${loc[4]}`)
            .then(res => {
                this.setState({ questions: res.data })
            }).then(this.dispWord)
        this.editor = MyScriptJS.register(this.refs.editor, {
            recognitionParams: {
                type: 'TEXT',
                protocol: 'WEBSOCKET',
                apiVersion: 'V4',
                server: {
                    scheme: 'https',
                    host: 'webdemoapi.myscript.com',
                    applicationKey: '1463c06b-251c-47b8-ad0b-ba05b9a3bd01',
                    hmacKey: '60ca101a-5e6d-4159-abc5-2efcbecce059',
                },
            },
        });
        //https://github.com/MyScript/MyScriptJS/blob/master/examples/v4/websocket_math_iink.html
        //https://github.com/MyScript/myscript-math-web#documentation
        //https://myscript.github.io/myscript-math-web/src/demo-app/examples/non-version-specific/handle_exports.html
        // this.editor.addEventListener("exported", (evt) => {
        //     const exports = evt.detail.exports;
        //     console.log(exports)
        // })
        window.addEventListener("resize", () => { this.editor.resize() });
    }

    dispWord = () => {
        if (this.state.questions.length !== 0) {
            let qno = this.state.questionNo;
            let ques = this.state.questions[qno];
            console.log(evaluate(ques))
            this.setState({ currentAns: evaluate(ques) })
            this.setState({ current: ques })
            // console.log(this.state.definitions)
            // this.setState({ definition: this.state.definitions[qno].definition})
            // this.setState({ partOfSpeech: this.state.definitions[qno].partOfSpeech})
        }
    }
    checkAns = () => {
        let input = this.editor.exports['text/plain'];
        console.log(input)
        input = parseInt(input);
        if (this.state.questionNo == 4) {
            alert("You finished the quiz, thanks")
        }
        else {
            if (this.state.currentAns == input) {
                this.setState({ questionNo: ++this.state.questionNo })
                this.editor.clear()
                this.dispWord()
                alert("correct ans")
            }
            else {
                this.editor.clear()
                alert("try again")
            }
        }
    }
}

export default App;