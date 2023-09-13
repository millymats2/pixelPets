import React, { useState, useEffect } from 'react';
import Character from './character'

interface GameProps {
  playerOPicture: string | null;
}

type Player = 'X' | 'O' | null;

const initialBoard: Player[] = Array(9).fill(null);

const Game: React.FC<GameProps> = ({ playerOPicture }) => {
  const [board, setBoard] = useState<Player[]>(initialBoard);
  const [currentPlayer, setCurrentPlayer] = useState<Player>('X');
  const [winner, setWinner] = useState<Player | null>(null);
  const [selectedCharacterPicture, setSelectedCharacterPicture] = useState(null);
  
  const handleCharacterSelect = (selectedCharacter) => {
    if (selectedCharacter) {
      setSelectedCharacterPicture(selectedCharacter.picture);
    }
  };

  useEffect(() => {
    if (currentPlayer === 'O' && !winner) {
      setTimeout(() => {
        const emptySquares = board
          .map((square, index) => (square === null ? index : -1))
          .filter((index) => index !== -1);

        if (emptySquares.length > 0) {
          const randomIndex = Math.floor(Math.random() * emptySquares.length);
          const computerMove = emptySquares[randomIndex];
          makeMove(computerMove);
        }
      }, 1000);
    }
  }, [board, currentPlayer, winner]);

  const makeMove = (index: number) => {
    if (board[index] || winner) {
      return;
    }

    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    checkWinner(newBoard);
  };

  const checkWinner = (currentBoard: Player[]) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        setWinner(currentBoard[a]);
        return;
      }
    }

    if (!currentBoard.includes(null)) {
      // It's a draw
      setWinner('Draw');
    }
  };

  const renderSquare = (index: number) => {
    return (
      <button className="square" onClick={() => makeMove(index)}>
        {board[index]}
      </button>
    );
  };

  const status = winner ? `Winner: ${winner}` : `Next player: ${currentPlayer}`;

  return (
    <div>
      <div className="status">{status}</div>
      <div className="board">
        {Array(3)
          .fill(null)
          .map((_, row) => (
            <div className="board-row" key={row}>
              {Array(3)
                .fill(null)
                .map((_, col) => renderSquare(row * 3 + col))}
            </div>
          ))}
      </div>
      <Game playerOPicture={selectedCharacterPicture} /> 
    </div>
  );
};

export default Game;

