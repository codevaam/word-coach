import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';



const Upload = () => {
    const answerInput = () => {
        let a = 97;
        let i = event.target.value;
        console.log(i)
        let arr = []
        while (i != 0) {
            let char = String.fromCharCode(a)
            arr.push((
                <input type="text" name={char} className="form-control mt-1" placeholder={char} />
            ))
            i--
            a++;
        }
        updateInput(arr)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        let formData = [];
        const link = event.target[0].value;
        console.log(event.target[2])
        for(var i=2; i<event.target.length-1; i++) {
            formData.push(event.target[i].value)
        }
        console.log(formData)
        axios.post(`http://localhost:8080/admin/upload`, {
            imgUrl: link,
            data: formData
        }).then(res => {
            console.log(res)
        })
    }
    const [inputs, updateInput] = useState([])
    return (
        <div className="container mt-5">
            <Head>
                <title>Upload image</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </Head>
            <form onSubmit={handleSubmit}>
                URL: <input type="text" className="form-control" placeholder="input the link url" />
                Number of labels: <select className="form-control" onChange={answerInput}>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                    <option>6</option>
                    <option>7</option>
                    <option>8</option>
                    <option>9</option>
                    <option>10</option>
                </select>
                Answer:
            {inputs}
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default Upload