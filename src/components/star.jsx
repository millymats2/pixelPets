import star from "./images/star.png"

function Star () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">GINGER 'O SNAP</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={star} height={100} width={100} alt="Star" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">NICE GUY</h3>
                <h5 className="words">it's not him it's you.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Star