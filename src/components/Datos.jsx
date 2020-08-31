import React from 'react'
import './../App.css'

function Datos ({cita,autor,tw}) {
    return(
        <div id="quote-box">
            <div class="notification">
                <label className="title is-1 purple" id="text">"{cita}"</label>
                <br/>
                <br/>
                <label className="title is-3 purple" id="author">-{autor}</label>
                <div>
                    <a href="/" className="buttons has-addons is-right">
                        <button className="button is-danger is-rounded" id="new-quote">New Quote</button>
                    </a>
                </div>
                <a href={tw} className="buttons " target="_blank" id="tweet-quote">
                <button className="button primary">
                    <span className="icon">
                    <i className="fa fa-twitter" ></i>
                    </span>
                </button>
                </a>
            </div>
        </div>
    );
}

export default Datos;