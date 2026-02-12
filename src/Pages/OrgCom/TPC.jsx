import tracks from "../../info/Tracks"

export default function TPC() {
    return (
        <div className="page orgCom">
            <div className="tracks">
                {
                    tracks.map((track, index) => (
                        <div className="track" key={index}>
                            <div className="trackTitle">
                                <h3>{track.title}</h3>
                                <p>{track.sub}</p>
                            </div>

                            <div className="trackChairs">
                                <h4>Track Chairs</h4>
                                <div>
                                    {
                                        track.chairs.map((chair, index) => (
                                            <div key={index}>
                                                <span><strong>{chair.name}</strong></span>
                                                <span>{chair.des}</span>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>

            <br />
            <br />
            <h2>Review Committee</h2>

            <ul className="reviewCom">
                <li><span>Something</span> and something</li>
            </ul>
        </div>
    )
}
