import React from 'react';
import ReactDOM from 'react-dom';
import './css/styles.css'

//COMPONENTS
import Header from './components/header';



const App = () => {
    return (<div>
                <Header/>
            </div>    )
}

ReactDOM.render(<App/>, document.querySelector('#root'));