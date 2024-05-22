import { useEffect } from "react";
import useWordle from "../hooks/useWordle";
import Grid from "../Grid";
import Keypad from "../Keypad";

function Wordle({solution}) {
    const {turn, currentGuess, guesses, isCorrect, usedKeys, handleKeyUp} = useWordle(solution);

    useEffect(() => {
        window.addEventListener('keyup', handleKeyUp);

        return () => window.removeEventListener('keyup', handleKeyUp);
    }, [handleKeyUp]);

    return ( 
        <div>
            <Grid currentGuess={currentGuess} turn={turn} guesses={guesses}/>
            <Keypad usedKeys={usedKeys}/>
        </div>
     );
}
 
export default Wordle;