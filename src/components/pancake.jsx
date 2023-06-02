import pancake from "./images/pancake.png"

function Pancake () {
    return (
        <div className="Bunny">
            <div className="bunny-title">
                <h1 className="character-name">MR. BUTTERS</h1>
                </div>
             <div class="cardbunny">
                <div className="bunny-des">
                <img src={pancake} height={100} width={100} alt="Pancake" className="bunny-img"/>
                <div className="desc">
                <h3 className="title">GUY NEXT DOOR</h3>
                <h5 className="words">you might have to butter him up a little first.</h5>
                </div>
                </div>
             </div>
        </div>
    )
}

export default Pancake