import Head from 'next/head';
import TopNav from '../components/TopNav';
import axios from 'axios'
import { useEffect, useState } from 'react';
import Card from '../components/AddCard';
import SubjectCard from '../components/SubjectCard';


const Profile = () => {
    const [myCourses, updateMy] = useState('');
    const [allCourses, updateAll] = useState('');
    const [user, updateUser] = useState('')
    useEffect(() => {
        axios.get(`http://localhost:8080/users/getUser`, {
            params: {
                email: localStorage.getItem('email')
            }
        }).then(res => {
            updateUser(res.data)
            console.log(user)
        })
        axios.get(`http://localhost:8080/users/allCourses`)
            .then(res => {
                updateAll(res.data);
                console.log(res.data)
                localStorage.setItem('courses', JSON.stringify(res.data))
            })
        axios.get(`http://localhost:8080/users/myCourses`, {
            params: {
                email: localStorage.getItem('email')
            }
        }).then(res => {
            updateMy(res.data)
        })

    }, [])

    const renderMy = () => {
        let cards = [];
        for (var i in myCourses) {
            let link = myCourses[i].subject.toLowerCase().replace(' ', '_')
            cards.push((
                <div className="col-md-3">
                    <SubjectCard
                        to={link}
                        title={myCourses[i].subject}
                    />
                </div>
            ))
        }
        return cards
    }

    const renderAll = () => {
        let cards = [];
        for (var i in allCourses) {
            cards.push((
                <div className="col-md-4">
                    <Card
                        to={allCourses[i].subject}
                        title={allCourses[i].subject}
                        description={allCourses[i].description}
                    />
                </div>
            ))
        }
        return cards
    }

    return (
        <div className="bg-profile">
            <TopNav />
            <Head>
                <title>Dashboard</title>
                <link rel="icon" href="/favicon.ico" />
                <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
                    crossOrigin="anonymous"
                />
            </Head>
            <div className="p-3 user-section">
                {/* <img className="bgimg" src={require('../public/bg1920.png')}></img> */}
                <div className="row mx-5">
                    <p className="name">Devam Trivedi</p>
                    <button className="edit-button ml-auto mt-3 mb-1">Edit profile</button>
                </div>
                <div className="row mx-5">
                    <p className="username">@d3vam</p>
                    <p className="points ml-auto">Points: 245</p>
                </div>
            </div>
            <div className="mx-5">
                <h3 className="mt-5">My Courses</h3>
                <div className="row no-gutters px-3">
                    {renderMy()}
                </div>
                <hr />
                <h3 className="mt-3">Explore</h3>
                <div className="row no-gutters px-3">
                    {renderAll()}
                </div>
            </div>
            <style jsx>{`
                .user-section {
                    background-image: url('https://cdn.kastatic.org/images/profile/backgrounds/bg-magenta.jpg');
                    background-size: cover;
                }
                .name {
                    color: white;
                    font-size: 1.5rem;
                }
                .username {
                    color: white;
                    text-decoration: underline;
                }
                .edit-button {
                    background-color: transparent;
                    border-style: solid;
                    border-color: white;
                    border-width: 0.2px;
                    color: white;
                    padding: 0px 10px 0px 10px;
                }
                .points {
                    color: white;
                }
            `}</style>
        </div>
    )
}

export default Profile;