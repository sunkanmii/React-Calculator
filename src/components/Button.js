import React, {Component} from 'react';

class Button extends Component{
    // constructor(props){
    //     super(props);
    // }

    render(){
        return(
            <div>
                <button class="calc-button">{this.props.symbol}</button>
            </div>
        );
    }
}

export default Button;