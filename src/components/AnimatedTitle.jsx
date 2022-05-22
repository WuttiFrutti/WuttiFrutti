import { useState } from "react";
import { Heading } from 'react-bulma-components';
import { useInterval } from "usehooks-ts";


const randomColor = () => Math.floor(Math.random() * 16777215).toString(16);

const AnimatedTitle = ({ text }) => {


    return <Heading style={{ display: 'flex', fontSize: '5em' }}>
        <div className="animated-title">{text && [...text].map((char, i) => <ColoredLetter key={i} letter={char} />)}</div>
    </Heading>
}

export const ColoredLetter = ({ letter }) => {
    const [color, setColor] = useState(randomColor())
    const [bottom, setBottom] = useState(0);
    const [rotating, setRotating] = useState(300);


    useInterval(() => setColor(randomColor()), rotating)

    return <div
        className="colored-letter"
        style={{ color: `#${color}`, }}
        onMouseEnter={() => {
            if (!rotating) {
                setColor(randomColor())
            }
            setBottom(20)
        }}
        onClick={() => {
            if (rotating) {
                setRotating(null);
            } else {
                setRotating(200)
            }
        }}
        onMouseLeave={() => setBottom(0)}
    >
        <div style={{ bottom: `${bottom}px` }}>{letter}</div>
    </div>
}



export default AnimatedTitle;