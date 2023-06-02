import cone from "./images/cone.png"

function Cone () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">CONE CONNOISSEUR</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={cone} height={100} width={100} alt="Cone" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">FOOD CRITIC</h3>
                    <h5 className="words">sponsored by gordon ramsey.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Cone