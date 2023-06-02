import oyster from "./images/oyster.png"

function Oyster () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">CREAM PIE</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={oyster} height={100} width={100} alt="Oyster" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">AIRHEAD</h3>
                <h5 className="words">the lights are on but no one's home.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Oyster