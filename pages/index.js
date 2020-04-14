import Head from 'next/head';
import Link from 'next/link';
import Modal from 'react-modal';
import TopNav from '../components/TopNav';
import { useState, useReducer, useEffect } from 'react';
import axios from 'axios';
import Router from 'next/router';


const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    borderRadius: '5%'
  }
};

const Home = () => {
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modal2IsOpen, setIsOpen2] = useState(false);
  const [pswClass, changeClass] = useState('form-group d-none')
  const [publicRooms, setPublicRooms] = useState([])
  const [filterInput, setFilterInput] = useReducer(
    (state, newState) => ({ ...state, ...newState }), {
    roomName: "",
    roomType: "Public",
    password: "",
    limit: 4,
    subject: "English vocabulary",
    joinName: "",
    joinPassword: ""
  })

  useEffect(() => {
    axios.get(`http://localhost:8080/rooms/publicList`)
      .then(res => {
        setPublicRooms(res.data)
      })
  }, [])

  const handleFilterInputs = event => {
    const { name, value } = event.target;
    setFilterInput({ [name]: value })
    if (name == 'roomType') {
      if (value == 'Private') {
        changeClass('form-group d-block');
      }
      else {
        changeClass('form-group d-none')
      }
    }
  }

  const openModal = () => {
    setIsOpen(true);
  }
  const openModalJoin = () => {
    setIsOpen2(true);
  }
  const closeModalCreate = () => {
    setIsOpen(false)
  }
  const closeModalJoin = () => {
    setIsOpen2(false)
  }
  const getRooms = () => {
    let arr = []
    for (var i in publicRooms) {
      arr.push((
        <div className="single-room px-5 pt-1">
          <div className="row">
            <h3>{publicRooms[i].subject}</h3>
            <button onClick={joinPublicRoom} name={publicRooms[i].name} className="btn btn-success ml-auto">Join</button>
          </div>
          <p>* People: {publicRooms[i].userlimit}</p>
          <style jsx>{`
            .single-room {
              color: black;
              background-color: white;
            }
            `}
          </style>
        </div>
      ))
    }
    return arr
  }

  const createRoom = () => {
    // console.log(process.env.API_URL)
    axios.post(`http://localhost:8080/rooms/create`, {
      name: filterInput.roomName,
      type: filterInput.roomType,
      password: filterInput.password,
      limit: filterInput.limit,
      subject: filterInput.subject
    }).then(res => {
      if (res.data.message == 'success') {
        Router.push(`/rooms/${filterInput.roomName}`)
      }
      else {
        alert("Can't create custom rooms now")
      }
    })
  }

  const joinPublicRoom = () => {
    console.log(event.target)
    Router.push(`/rooms/${event.target.name}`)
  }

  const joinRoom = () => {
    axios.post(`http://localhost:8080/rooms/join`, {
      name: filterInput.joinName,
      password: filterInput.joinPassword
    }).then(res => {
      if (res.data == true) {
        Router.push(`/rooms/${filterInput.joinName}`)
      }
      else {
        alert("wrong password or room")
      }
    })
  }
  return (
    <div className="bg">
      <Head>
        <title>Explore</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>

      <TopNav />
      <main className="container">
        <h1 className="title text-white">
          Multiplayer rooms
      </h1>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModalCreate}
          style={customStyles}
          contentLabel="Create new room"
          ariaHideApp={false}
        >
          <div className="row modal-topbar">
            <h5 className="pl-2">Create custom room</h5>
            {/* <img src={require('../public/close.png')} onClick={closeModalCreate} className="close-icon ml-auto" /> */}
          </div>
          <div className="form-group">
            <label>Room name</label>
            <input type="text" className="form-control" name="roomName" placeholder="Room 123" onChange={handleFilterInputs} />
          </div>
          <div className="form-group">
            <label>Room type</label>
            <select className="form-control" name="roomType" onChange={handleFilterInputs}>
              <option>Public</option>
              <option>Private</option>
            </select>
          </div>
          <div className={pswClass}>
            <label>Password</label>
            <input type="text" className="form-control" name="password" placeholder="Room password" onChange={handleFilterInputs} />
          </div>
          <div className="form-group">
            <label>Limit</label>
            <select name="limit" className="form-control" onChange={handleFilterInputs}>
              <option>4</option>
              <option>6</option>
              <option>8</option>
              <option>10</option>
            </select>
          </div>
          <div className="form-group">
            <label>Subject</label>
            <select name="subject" className="form-control" onChange={handleFilterInputs}>
              <option>English Vocabulary</option>
              <option>General Maths</option>
            </select>
          </div>

          <button onClick={createRoom} className="btn btn-success">Create</button>

        </Modal>

        <Modal
          isOpen={modal2IsOpen}
          onRequestClose={closeModalJoin}
          style={customStyles}
          contentLabel="Create new room"
          ariaHideApp={false}
        >
          <div className="row modal-topbar">
            <h5 className="pl-2">Join private room</h5>
            {/* <img src={require('../public/close.png')} onClick={closeModalJoin} className="close-icon ml-auto" /> */}
          </div>
          <div className="form-group">
            <label>Room name</label>
            <input type="text" className="form-control" name="joinName" placeholder="Room 123" onChange={handleFilterInputs} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="text" className="form-control" name="joinPassword" placeholder="Room password" onChange={handleFilterInputs} />
          </div>
          <button onClick={joinRoom} className="btn btn-success">Join</button>
        </Modal>


        <div className="row justify-content-center">
          <button onClick={openModal} className="btn btn-primary mr-2">Create +</button>
          <button onClick={openModalJoin} className="btn btn-success ml-2">Join &rarr;</button>
        </div>

        <div className="room-container mt-3 mx-auto">
          <h2 className="pt-3 pl-3">Public rooms</h2>
          {getRooms()}
        </div>
      </main>

      <style jsx>{`
      .close-icon {
        height: 30px;
      }
      .room-container {
        background-color: rgba(255,255,255,0.2);
        border-radius: 2rem;
        width: 70%;
        min-height: 70vh;
        color: white;
      }
      
      a {
        color: inherit;
        text-decoration: none;
      }

      .title a {
        color: #0070f3;
        text-decoration: none;
      }

      .title a:hover,
      .title a:focus,
      .title a:active {
        text-decoration: underline;
      }

      .title {
        margin: 0;
        line-height: 1.15;
        font-size: 4rem;
      }

      .title {
        text-align: center;
      }

      

      @media (max-width: 753px) {
        .title {
          font-size: 2rem;
        }
        
      }
    `}</style>

      <style jsx global>{`
      html,
      body {
        padding: 0;
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
    </div >
  )
}

export default Home
