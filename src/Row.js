function Row({guess, currentGuess}) {
    if (guess) {
        return (
            <div className="row past">
                {guess.map((l, i) => (
                    <div key={i} className={`${l.color} on-flip`}>{l.key}</div>
                ))}
            </div>
        )
    }

    if (currentGuess) {
        // let letters = [...Array(5)];
        // let n = currentGuess.length;
        // for (let i = 0; i < n; i++) {
        //     letters[i] = currentGuess[i];
        // }
        let letters = currentGuess.split('');

        return(
            <div className="row current">
                {letters.map((l, i) => (
                    <div key={i} className="filled">{l}</div>
                ))}
                {[...Array(5 - letters.length)].map((_, i) => (
                    <div key={i}></div>
                ))}
            </div>
        )
    }

    return ( 
        <div className="row">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}
 
export default Row;