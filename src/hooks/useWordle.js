import { useState } from "react"

const useWordle = (solution) => {
    const [turn, setTurn] = useState(0);
    const [currentGuess, setCurrentGuess] = useState('');
    const [guesses, setGuesses] = useState([...Array(6)]);
    const [history, setHistory] = useState([]);
    const [isCorrect, setIsCorrect] = useState(false);
    const [usedKeys, setUsedKeys] = useState({});

    const formatGuess = () => {
        let solutionArray = [...solution];
        let formattedGuess = [...currentGuess].map((l) => {
            return {key: l, color: 'grey'};
        });
        formattedGuess.forEach((l, i) => {
            if (solutionArray[i] === l.key) {
                formattedGuess[i].color = 'green';
                solutionArray[i] = null;
            }
        });
        formattedGuess.forEach((l, i) => {
            if (solutionArray.includes(l.key) && l.color !== 'green') {
                formattedGuess[i].color = 'yellow';
                solutionArray[solutionArray.indexOf(l.key)] = null;
            }
        });

        return formattedGuess;
    }

    const addNewGuess = (guess) => {
        if (currentGuess === solution) {
            setIsCorrect(true);
        }
        setGuesses((prev) => {
            let newGuesses = [...prev];
            newGuesses[turn] = guess;
            return newGuesses;
        });
        setHistory((prev) => {
            return [...prev, currentGuess];
        })
        setTurn((prev) => {
            return prev + 1;
        })

        setUsedKeys((prevUsedKeys) => {
            let newKeys = {...prevUsedKeys};

            guess.forEach((l) => {
                console.log(l);
                const currentColor = newKeys[l.key];
                console.log(currentColor);

                if (l.color === 'green') {
                    newKeys[l.key] = 'green';
                    return
                }
                if (l.color === 'yellow' && currentColor !== 'green') {
                    newKeys[l.key] = 'yellow';
                    return
                }
                if (l.color === 'grey' && (currentColor !== 'green' || currentColor !== 'yellow')) {
                    newKeys[l.key] = 'grey';
                    return
                }
            })
            return newKeys;
        })

        setCurrentGuess('');
    }

    const handleKeyUp = ({key}) => {
        if (key === "Enter" || key === "enter") {
            if (turn > 5) {
                return;
            }
            if (history.includes(currentGuess)) {
                return;
            }
            if (currentGuess.length !== 5) {
                return;
            }
            const formatted = formatGuess();
            addNewGuess(formatted);
        }

        if (key === 'Backspace' || key === 'delete') {
            setCurrentGuess((prev) => {
                return prev.slice(0, -1);
            });
            return;
        }

        if (/^[A-Za-z]$/.test(key)) {
            if (currentGuess.length < 5) {
                setCurrentGuess((prev) => {
                    return prev + key;
                });
            }
        } 
    }

    return {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp};
}
 
export default useWordle;