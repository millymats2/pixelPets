import jelly from "./images/jelly.png"

function Jelly () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">DADDY LONG TENTACLES</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={jelly} height={100} width={100} alt="Jelly" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">SHRINK</h3>
                <h5 className="words">wisdom comes from within... the tentacles</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Jelly