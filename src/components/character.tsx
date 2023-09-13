import "../scss/character.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react";
import React from "react";
import oven from "./images/oven.png"
import Modal from 'react-modal';

export default function Character ({onCharacterSelect}){
    const navigate = useNavigate();
    const [select, setSelected] = useState();
    const [img, setImg] = useState('');
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const customStyles = {
        content: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            outline: 'none',
            height: '20rem'
        },
      };

    const characters = [
        {"id": 1,
        "name": "CONE CONNOISSEUR",
        "description": "FOOD CRITIC",
        "body": "sponsored by gordon ramsey.",
        "picture": "https://i.imgur.com/auvhIzT.png"
    },
    {"id": 2,
        "name": "DLT",
        "description": "DADDY LONG TENTACLES",
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
        "body": "it's not him it's you.",
        "picture": "https://i.imgur.com/WZWgMwj.png"
    },
    {"id": 8,
        "name": "DONUT BANDIT",
        "description": "BANDIT",
        "body": <div>on her way to steal your <strike>man</strike> donuts.</div>,
        "picture": "https://i.imgur.com/8QXPedJ.png"
    },
    ]

    const onSelect = (id, picture) => {
        setSelected(id);
        setImg(picture);
        const character = characters.find(char => char.id === id);
        setSelectedCharacter(character);
        setModalOpen(true);
      };

      const closeModal = () => {
        onCharacterSelect(selectedCharacter)
        navigate('/game');
      };

    

      return (
        <>
          <div>
            <h1 className="text-[50px] text-[#ce6985]">CHOOSE YOUR DIABETES</h1>
            <div className="flex ml-[10%] pt-16 mr-4 flex-wrap gap-[12rem] pb-8">
              {characters.map((character) => (
                <div className="animate-bounce hover:animate-spin"><div
                  key={character.id}
                  className={`cakes ${select === character.id ? "selected" : ""}`}
                  onClick={() => onSelect(character.id, character.picture)}
                >
                  <img
                    src={select === character.id ? character.picture : oven}
                    key={character.picture}
                    height={100}
                    width={100}
                    alt="oven"
                  />
                </div>
                </div>
              ))}
            </div>
            <Character onCharacterSelect={handleCharacterSelect} />
          </div>
          <Modal isOpen={modalOpen} className=" border-[15px] bg-[#ffb4c9] rounded-[5%] border-[#ce6985]" style={customStyles} onRequestClose={closeModal} contentLabel="Character Modal">
            {selectedCharacter && (
              <div className="flex flex-wrap bg-[#ffb4c9]">
                 <img className="w-[25%] ml-2 mt-2 rounded-[50%] items-center border-4 border-[#ce6985] bg-[#ed92ac]" src={selectedCharacter.picture}  height={100}
                    width={100} alt={selectedCharacter.name} />
                    <div className="flex flex-col gap-8">
                <h2 className="mt-4 bg-[#ce6985] w-full ml-[10%]">{selectedCharacter.name}</h2>
                <p className="text-[#ce6985] text-sm ml-[10%]">{selectedCharacter.description}</p>
                </div>
                <p className="text-sm mt-12 ml-2">{selectedCharacter.body}</p>
                <button className="w-[14rem] rounded-[5%] ml-[20%] hover:border-2 hover:border-[#ce6985] mt-6 bg-[#ce6985] hover:bg-[#f993b0]" onClick={closeModal}>LET'S PLAY</button>
              </div>
            )}
          </Modal>
        </>
      );
    }
    
    
    
    

