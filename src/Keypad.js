import { useEffect, useState } from "react";

const Keypad = ({usedKeys}) => {
    const [letters, setLetters] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3001/letters')
        .then(res => res.json())
        .then(data => {
            setLetters(data);
        })
    }, [])

    // const handleKeyPress = (e) => {
    //     let key = e.target.textContent;
        
    // }

    return ( 
        <div className="keypad">
            {letters && letters.map((l) => {
                const color = usedKeys[l.key];
                console.log(color);
                return (
                    l.key === 'delete' ? <div key={l.key} className={"keyboard-button wide " + color}>{l.key}</div> :
                    l.key === 'enter' ? <div key={l.key} className={"keyboard-button wide " + color}>{l.key}</div> :
                    l.id >= 11 && l.id <= 19 ? <div key={l.key} className={"keyboard-button second " + color}>{l.key}</div> :
                    l.id >= 20 ? <div key={l.key} className={"keyboard-button third " + color}>{l.key}</div> :
                    <div key={l.key} className={"keyboard-button " + color}>{l.key}</div>
                )
            })}
        </div>
     );
}
 
export default Keypad;