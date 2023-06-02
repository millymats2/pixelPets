import bunny from "./images/bunny.png"

function Bunny () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">DONUT BANDIT</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={bunny} height={100} width={100} alt="Bunny" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">BANDIT</h3>
                <h5 className="words">on her way to steal your <strike>man</strike> donuts.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Bunny