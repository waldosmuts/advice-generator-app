import React, { useState, useEffect } from "react"
import patternDivider from "./images/pattern-divider-mobile.svg"
import diceIcon from "./images/icon-dice.svg"

export default function App() {
    const [advice, setAdvice] = useState({})

    useEffect(() => {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }, [])



    return (
        <main className="flex justify-center items-center min-h-screen px-4">
            <div className="bg-fem-dark-gray-blue rounded-lg flex flex-col items-center pt-10 pb-16 px-6 w-full max-w-md relative">
                <h1 className="text-fem-neon-green uppercase font-manrope text-xxs tracking-wide-af">Advice #{advice.id}</h1>
                <p className="text-fem-light-cyan text-2xl tracking-wide text-center font-bold font-manrope mt-5">&ldquo;{advice.advice}&rdquo;</p>
                <img className="mt-6" src={patternDivider} alt="" />
                <button className="bg-fem-neon-green p-5 rounded-full absolute -bottom-8"><img src={diceIcon} alt="dice" /></button>
            </div>
        </main>
    )
}