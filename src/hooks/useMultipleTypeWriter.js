import useTypeWriter from "react-typewriter-hook"
import { useState, useEffect } from 'react';
import { useTimeout } from "usehooks-ts";


const useMultipleTypeWriter = (words, options = {}) => {
    const [currentWord, setCurrentWord] = useState(0);
    const [direction, setDirection] = useState(true);
    const text = useTypeWriter(words[currentWord], options)
    const [delay, setDelay] = useState(null);

    useTimeout(() => {
        if (words[currentWord + 1] !== undefined) {
            setDirection(false);
            setCurrentWord(currentWord + 1);
        }
        setDelay(null)
    }, delay)

    useEffect(() => {
        if (direction) {
            if (text === words[currentWord]) {
                setDelay(options.wordDelay || 1000);
            }
        } else {
            if (text?.length === 0) {
                setDirection(true)
            }
        }

    }, [text, words, currentWord, options, direction])

    return text;
}

export default useMultipleTypeWriter;