import octopus from "./images/octopus.png"

function Octopus () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">HANGRY CHERRY</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={octopus} height={100} width={100} alt="Octopus" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">FELON</h3>
                <h5 className="words"> CHERRIES CHERRIES CHERRIES!!</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Octopus