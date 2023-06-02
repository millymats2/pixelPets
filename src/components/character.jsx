import bunny from "./images/bunny.png"
import cone from "./images/cone.png"
import jelly from "./images/jelly.png"
import octopus from "./images/octopus.png"
import oyster from "./images/oyster.png"
import pancake from "./images/pancake.png"
import squid from "./images/squid.png"
import star from "./images/star.png"
import "./character.scss"

function Character (){
    
    return (
    <div>
    <h1 className="character-name">PICK YOUR POISON</h1>
    <div className="character">
       <div class="card"><img src={bunny} height={100} width={100} alt="Bunny"/> <h5>donut bandit</h5></div>
        <div class="card"><img src={cone} height={100} width={100} alt="Cone"/> <h5>cone connoisseur</h5></div>
        <div class="card"><img src={jelly} height={100} width={100} alt="Jelly"/><h5>daddy long tentacles</h5></div>
        <div class="card"><img src={octopus} height={100} width={100} alt="Octopus"/><h5>hangry cherry</h5></div>
        <div class="card"><img src={oyster} height={100} width={100} alt="Oyster"/><h5>cream pie</h5></div>
        <div class="card"><img src={pancake} height={100} width={100} alt="Pancake"/><h5>mr. butters</h5></div>
        <div class="card"><img src={squid} height={100} width={100} alt="Squid"/><h5>wafers</h5></div>
        <div class="card"><img src={star} height={100} width={100} alt="Star"/><h5>ginger 'o snap</h5></div>
    </div>
    </div>
    )
}

export default Character