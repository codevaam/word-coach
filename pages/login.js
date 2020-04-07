import Head from 'next/head';
import { GoogleLogin, GoogleLogout } from 'react-google-login';
import Router from 'next/router';
import axios from 'axios';

const checkExists = () => {

}

const responseGoogle = (response) => {
    if (response) {
        console.log(response.profileObj.email)
        localStorage.setItem('email', response.profileObj.email);
        axios.post("http://localhost:8080/users/checkUser", {
            email: localStorage.getItem('email')
        }).then(res => {
            if (res.data.length == 0) {
                console.log(res.data)
                Router.push('/register')
            }
            else {
                console.log(res.data)
                Router.push('/')
            }
        })
    }
}

const LoginPage = () => {
    return (
        <div className="bg-login">
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
            <main className="text-center">
                <div className="title">EDU APP</div>
                <div className="desc-text">Develop your reasoning and thinking ability in all different subjects on a single platform</div>
                <GoogleLogin
                    clientId="854332407368-a8hm1e15v8qc7epntk1443tu9q2dm8m6.apps.googleusercontent.com"
                    onSuccess={responseGoogle}
                    isSignedIn={true}
                    cookiePolicy={'single_host_origin'}
                />
            </main>

            {/* <button onClick={checkExists}>check</button> */}
            <style jsx global>{`
                html {
                    overflow: hidden;
                }    
            `}
            </style>
            <style jsx>{`
            .bg-login {
                height: 100vh;
                width: auto;
                background-image: url('https://i.ibb.co/XYJzThX/bg1920.png');
            }     
            .title {
                font-size: 4rem;
                color: white;
                box-shadow: 5px;
                font-weight: bold;
                padding-top: 15%;
            }
            .desc-text {
                font-size: 2rem;
                color: white;
                margin-bottom: 2rem;
                text-align: center;
            }
            `}
            </style>
        </div>
    )
}

export default LoginPage