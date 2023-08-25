import { useNavigate } from "react-router-dom";
import octopus from "./images/octopus.png"


function Home (){
    var seconds = 1.5;
    var foo; 
    const navigate = useNavigate();

function redirect() {
    navigate(`/character`);
}

function updateSecs() {
    seconds--;
    if (seconds == -3.5) {
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
    <div className="flex items-center flex-col">
        <h1 className="text-[60px] pb-2 text-[#ce6985]">SEA SCOUNDRELS</h1>
        <div className="h-[10%] w-[20%] rounded-[50%] items-center border-4 border-[#ce6985] bg-[#ed92ac]">
            <div className="animate-bounce flex justify-center">
            <img src={octopus} height={150} width={150} alt="Cherry"/> 
                </div>
                </div>
            <h1 className="text-[16px] text-[#ce6985] pt-[2rem]">please hold while we whip up some goodies...</h1>
     
    </div>
    )
}

export default Home