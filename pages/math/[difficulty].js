import { useRouter } from 'next/router';
import Head from 'next/head';
import Header from '../../components/Header';
import axios from 'axios';
import React, { Component } from 'react';
import * as MyScriptJS from 'myscript';

const editorStyle = {
    'minWidth': '100px',
    'minHeight': '100px',
    'width': '100vw',
    'height': 'calc(100vh - 190px)',
};

class App extends Component {
    constructor(props) {
        
        super(props);
        this.state = ({
            questions: '',
            questionNo: 0,
            current: '',
            eq: ''
        })
    }
    render() {
        return (
            <div className="container">
                <Head>
                    <Header />
                </Head>
                <center>
                    <h1>Difficulty: {this.state.difficulty}</h1>
                    <h3>Question: {this.state.current}</h3>
                    {/* <h4>Part of Speech: {this.state.partOfSpeech}</h4>
                    <p>Definition: {this.state.definition}</p> */}
                    <button onClick={() => { this.editor.clear() }}>Clear</button>
                    <button onClick={this.checkAns}>Check</button>
                </center>

                <div style={editorStyle} ref="editor" >
                <div class="toast"></div>
                </div>
            </div>
        );
    }
    componentDidMount() {
        let loc = window.location.toString();
        loc = loc.split('/')
        console.log(loc)
        this.setState({difficulty: loc[4]})
        axios.get(`http://localhost:8080/math/${loc[4]}`)
            .then(res => {
                this.setState({ questions: res.data })
            }).then(this.dispWord)
        this.editor = MyScriptJS.register(this.refs.editor, {
            recognitionParams: {
                type: 'MATH',
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
            let word = this.state.questions[qno];
            String.prototype.replaceAt = function (index, replacement) {
                return this.substr(0, index) + replacement + this.substr(index + replacement.length);
            }
            const index = Math.floor(Math.random() * (word.length - 1) + 1)
            this.setState({ currentAns: word.charAt(index) });
            this.setState({ current: word })
            // console.log(this.state.definitions)
            // this.setState({ definition: this.state.definitions[qno].definition})
            // this.setState({ partOfSpeech: this.state.definitions[qno].partOfSpeech})
        }
    }
    checkAns = () => {
        
        // let input = this.editor.export();
        // console.log(input)
        // input = input.toLowerCase()
        // if (this.state.currentAns == input) {
        //     if (this.state.questionNo > 4) {
        //         alert("You finished the quiz, thanks")
        //     }
        //     else {
        //         this.setState({ questionNo: ++this.state.questionNo })
        //         this.editor.clear()
        //         this.dispWord()
        //         alert("correct ans")
        //     }
        // }
        // else {
        //     this.editor.clear()
        //     alert("try again")
        // }
    }
}

export default App;