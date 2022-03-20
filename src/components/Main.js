import React from "react"
import patternDividerMobile from "../images/pattern-divider-mobile.svg"
import patternDividerDesktop from "../images/pattern-divider-desktop.svg"
import diceIcon from "../images/icon-dice.svg"

export default function Main(props) {
    return (
        <main className="flex justify-center items-center min-h-screen px-4">
            <div className="bg-fem-dark-gray-blue rounded-xl md:rounded-2xl flex flex-col items-center pt-10 pb-16 px-6 shadow-2xl w-full max-w-lg relative">
                <h1 className="text-fem-neon-green uppercase font-manrope font-medium md:font-bold text-xxs md:text-xs tracking-wide-af">Advice #{props.advice.id}</h1>
                <blockquote className="text-fem-light-cyan text-2xl md:text-2/5xl tracking-wide text-center font-bold font-manrope mt-5">&ldquo;{props.advice.advice}&rdquo;</blockquote>
                <img className="mt-6" src={window.innerWidth < 500 ? patternDividerMobile : patternDividerDesktop} alt="" />
                <button id="advice-button" onClick={props.getAdvice} className="bg-fem-neon-green p-5 rounded-full absolute -bottom-8 cursor-pointer focus:outline-none active:outline-none hover:shadow-glow transition"><img src={diceIcon} alt="dice" /></button>
            </div>
        </main>
    )
}