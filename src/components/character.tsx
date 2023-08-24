import "../scss/character.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react";
import React from "react";

export default function Character (){
    const navigate = useNavigate();

    const[character] =useState ([
        {"id": 1,
        "name": "CONE CONNOISSEUR",
        "description": "FOOD CRITIC",
        "body": "sponsored by gordon ramsey.",
        "picture": "https://i.imgur.com/auvhIzT.png"
    },
    {"id": 2,
        "name": "DADDY LONG TENTACLES",
        "description": "SHRINK",
        "body": "wisdom comes from within... the tentacles.",
        "picture": "https://i.imgur.com/L6PuG3b.png"
    },
    {"id": 3,
        "name": "HANGRY CHERRY",
        "description": "FELON",
        "body": "CHERRIES CHERRIES CHERRIES!!",
        "picture": "https://i.imgur.com/8tXQ4Dq.png"
    },
    {"id": 4,
        "name": "CREAM PIE",
        "description": "AIRHEAD",
        "body": "the lights are on but no one's home.",
        "picture": "https://i.imgur.com/SVvcXvK.png"
    },
    {"id": 5,
        "name": "MR. BUTTERS",
        "description": "GUY NEXT DOOR",
        "body": "you might have to butter him up a little first.",
        "picture": "https://i.imgur.com/zXknf3u.png"
    },
    {"id": 6,
        "name": "WAFERS",
        "description": "LAWYER",
        "body": "he only has one weak spot... don't touch the wafers.",
        "picture": "https://i.imgur.com/dTILzbf.png"
    },
    {"id": 7,
        "name": "GINGER 'O SNAP",
        "description": "NICE GUY",
        "body": "sit's not him it's you.",
        "picture": "https://i.imgur.com/WZWgMwj.png"
    },
    {"id": 8,
        "name": "DONUT BANDIT",
        "description": "BANDIT",
        "body": <div>on her way to steal your <strike>man</strike> donuts.</div>,
        "picture": "https://i.imgur.com/8QXPedJ.png"
    },
    ])
    return (
    <>
    <h1 className="character-name">PICK YOUR POISON</h1>
    
    </>
    )
}

