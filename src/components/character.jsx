import bunny from "./images/bunny.png"
import cone from "./images/cone.png"
import creb from "./images/creb.png"
import jelly from "./images/jelly.png"
import octopus from "./images/octopus.png"
import oyster from "./images/oyster.png"
import pancake from "./images/pancake.png"
import squid from "./images/squid.png"
import star from "./images/star.png"
import turtle from "./images/turtle.png"

function Character (){
    
    return (
    <div>
        <img src={bunny} height={100} width={100} alt="Bunny"/> <h4>donut bandit</h4>
        <img src={cone} height={100} width={100} alt="Cone"/> <h4>cone connoisseur</h4>
        <img src={creb} height={100} width={100} alt="Creb"/><h4>donut bandit</h4>
        <img src={jelly} height={100} width={100} alt="Jelly"/><h4>donut bandit</h4>
        <img src={octopus} height={100} width={100} alt="Octopus"/><h4>donut bandit</h4>
        <img src={oyster} height={100} width={100} alt="Oyster"/><h4>donut bandit</h4>
        <img src={pancake} height={100} width={100} alt="Pancake"/><h4>donut bandit</h4>
        <img src={squid} height={100} width={100} alt="Squid"/><h4>donut bandit</h4>
        <img src={star} height={100} width={100} alt="Star"/><h4>donut bandit</h4>
        <img src={turtle} height={100} width={100} alt="Turtle"/><h4>donut bandit</h4>
    </div>
    )
}

export default Character