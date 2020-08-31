import React, {Component} from 'react';
import Cita from './Cita';
import axios from 'axios';

class ListaCita extends Component {
    state = {
        aleatorio : ""
      }    
    
    componentDidMount() {
        axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
        .then(res => {
        let Autordata = res.data.quotes;
        let num = Autordata.length;
        let aleatorio= Autordata[Math.floor(Math.random() * num)]
        this.setState({
        aleatorio
        })
    })
    .catch(console.log)
}
    render() {
        const {aleatorio} = this.state;
        return(
            <Cita aleatorio={aleatorio} />
        )
    }
}

export default ListaCita;