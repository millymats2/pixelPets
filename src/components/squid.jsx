import squid from "./images/squid.png"

function Squid () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">WAFERS</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={squid} height={100} width={100} alt="Squid" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">LAWYER</h3>
                <h5 className="words">he only has one weak spot... don't touch the wafers.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Squid