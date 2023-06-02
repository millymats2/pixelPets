import { useNavigate } from "react-router-dom";

function Home (){
    var seconds = 1.5;
    var foo; 
    const navigate = useNavigate();

function redirect() {
    navigate(`/character`);
}

function updateSecs() {
    seconds--;
    if (seconds == -1.5) {
        clearInterval(foo);
        redirect();
    }
}

function countdownTimer() {
    foo = setInterval(function () {
        updateSecs()
    }, 1000);
}

countdownTimer();
    return (
    <div>
        <div className="home"> 
            <div class="progress">   
            <div class="color"><h2 class="sea"> sea sprinkles</h2></div>
        </div>
        </div>
    </div>
    )
}

export default Home