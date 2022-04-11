import React from "react"
import ReactDOM from "react-dom"
import Header from './components/Header.js'
import Main from './components/Main.js'
import Footer from './components/Footer.js'
import "./style.css"

function Page() {
    return (
        <div className="all">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

ReactDOM.render(<Page />, document.getElementById("root"))