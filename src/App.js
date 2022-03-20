import React, { useState, useEffect } from "react"
import Main from "./components/Main"
import Footer from "./components/Footer"

export default function App() {
    const [advice, setAdvice] = useState({ id: 0, advice: "..." })

    useEffect(() => {
        getAdvice()
    }, [])

    useEffect(() => {
        document.getElementById("advice-button").classList.add("pointer-events-none", "bg-gray-500")
        document.getElementById("advice-button").classList.remove("bg-fem-neon-green")
        setTimeout(() => {
            document.getElementById("advice-button").classList.remove("pointer-events-none", "bg-gray-500")
            document.getElementById("advice-button").classList.add("bg-fem-neon-green")
        }, 2000)
    }, [advice])

    function getAdvice() {
        fetch("https://api.adviceslip.com/advice")
            .then(res => res.json())
            .then(data => setAdvice(data.slip))
    }

    return (
        <div>
            <Main advice={advice} getAdvice={getAdvice} />
            <Footer />
        </div>
    )
}