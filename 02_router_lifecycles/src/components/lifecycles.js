import React, {PureComponent} from 'react';

class Life extends PureComponent {

    state = {
        title: 'Life cycles'
    }

    // componentWillMount() {
    //     console.log('Will Mount');      
    // }

    // componentWillUpdate(){
    //     console.log('Before update'); 
    // }

    // componentDidUpdate(){
    //     console.log('After Update'); 
    // }

    // shouldComponentUpdate(nextProps, nextState) {
    //     if(nextState.title === this.state.title){
    //         return false
    // }
    //     return true;
    // }

    // componentWillReceiveProps() {
    //     console.log('Before Receive Props');
    // }

    // componentWillUnmount(){
    //     console.log('Unmount'); 
    // }
    
    render() {
        console.log('RENDER');
        return(
            <div>
                <h3>{this.state.title}</h3>
                <div onClick={() => this.setState({
                    title: 'something else'
                })}>Click to change
                </div>
            </div>
        )
    }

    // componentDidMount() {
    //     console.log('Did Mount');
    //     document.querySelector('h3').style.color='red';
    // }
}

export default Life;