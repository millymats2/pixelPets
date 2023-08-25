import "../scss/character.scss"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useState } from "react";
import React from "react";
import cake from "./images/cake.png"
import Modal from 'react-modal';


export default function Character (){
    const navigate = useNavigate();
    const [select, setSelected] = useState();
    const [img, setImg] = useState('');
    const [modalOpen, setModalOpen] = useState(false); 
    const [selectedCharacter, setSelectedCharacter] = useState(null);

    const characters = [
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
    ]

    const onSelect = (id, picture) => {
        setSelected(id);
        setImg(picture);
        const character = characters.find(char => char.id === id);
        setSelectedCharacter(character);
        setModalOpen(true);
      };
    
      const closeModal = () => {
        setModalOpen(false);
        setSelectedCharacter(null);
      };
    

      return (
        <>
          <div>
            <h1 className="text-[50px] text-[#ce6985]">CHOOSE YOUR DIABETES</h1>
            <div className="flex ml-[10%] pt-16 mr-4 flex-wrap gap-[12rem] pb-8">
              {characters.map((character) => (
                <div
                  key={character.id}
                  className={`cakes ${select === character.id ? "selected" : ""}`}
                  onClick={() => onSelect(character.id, character.picture)}
                >
                  <img
                    src={select === character.id ? character.picture : cake}
                    key={character.picture}
                    height={100}
                    width={100}
                    alt="cake"
                  />
                </div>
              ))}
            </div>
          </div>
          <Modal isOpen={modalOpen} className="bg-[#ce6985]" onRequestClose={closeModal} contentLabel="Character Modal">
            {selectedCharacter && (
              <div className="overflow-scroll bg-[#ce6985]">
                <h2>{selectedCharacter.name}</h2>
                <p>{selectedCharacter.description}</p>
                <p>{selectedCharacter.body}</p>
                <img src={selectedCharacter.picture}  height={100}
                    width={100} alt={selectedCharacter.name} />
                <button onClick={closeModal}>Close</button>
              </div>
            )}
          </Modal>
        </>
      );
    }
    
    
    
    

