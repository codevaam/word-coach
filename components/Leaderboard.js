// import bankruptcy from '../public/bankruptcy.png'

const Leaderboard = (props) => {
    return (
        <div className="list-group-item shadow-sm">
            <div className="row">
                <div className="col-2 px-5">
                    <div className="player-rank">#1</div>
                </div>
                <div className="col-7 px-5">
                    <p className="player-name m-0 text-left">Player One</p>
                </div>
                <div className="col-3 px-5">
                    <p className="player-points m-0">
                        <img
                            src="https://i.ibb.co/qm1hpzG/bankruptcy.png"
                            alt=""
                            className="float-left"
                            style={{ width: "40%" }}
                        />{" "}
                        60
                        </p>
                </div>
            </div>
        </div>
    )
}

export default Leaderboard