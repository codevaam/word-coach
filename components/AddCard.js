import Link from 'next/link'
import { useState } from 'react'
import axios from 'axios'


const Card = (props) => {
    const [bgColor, changeColor] = useState('white')
    const Added = () => {
        const target = event.target;
        let subject = target.parentElement.firstChild.innerText
        subject = subject.substring(0, subject.length - 2)
        axios.post('http://localhost:8080/users/addCourse', {
            email: localStorage.getItem('email'),
            subject: subject
        }).then((res) => {
            if (res) {
                target.innerText = 'Added'
                changeColor('lightgreen')
                alert("This course has been added to your dashboard")
                console.log(bgColor)
            }
            else {
                alert("Course wasn't added, please try again")
            }
        })
    }
    return (
        <div className="card">
            {/* <Link href={props.to} query={props.title}>
                <a className="card"> */}
            <h3 className="title">{props.title} &rarr;</h3>
            <p className="description">{props.description}</p>
            <button className="border-success w-50 align-self-center mt-3 p-2" style={{ backgroundColor: bgColor }} onClick={Added}> Add +</button>
            {/* </a>
            </Link> */}
            <style jsx>{`
                .card {
                    margin: 1rem;
                    padding: 1.5rem;
                    text-align: center;
                    color: inherit;
                    text-decoration: none;
                    border: 1px solid #eaeaea;
                    border-radius: 10px;
                    transition: color 0.15s ease, border-color 0.15s ease;
                }
    
                .card:hover,
                .card:focus,
                .card:active {
                    color: #0070f3;
                    border-color: #0070f3;
                }
    
                .title {
                    margin: 0 0 1rem 0;
                    font-size: 1.5rem;
                }
    
                .description {
                    margin: 0;
                    font-size: 1.25rem;
                    line-height: 1.5;
                }
                @media(max-width: 750px) {
                    .title {
                        font-size: 1.2rem;
                    }
                    .description {
                        font-size: 1rem;
                    }
                }
                `}
            </style>
        </div>
    )
}

export default Card