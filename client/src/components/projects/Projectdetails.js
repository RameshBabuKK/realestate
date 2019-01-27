import React from "react";

class Projectdetails extends React.Component {
    
    constructor(props) {
        super(props);
        console.log(props)
    }

    render() {
        return(
            <div> 
                <h4>{ this.props.projectId.projtitle}</h4> 
                <p>
                   Owner: {this.props.projectId.projowner}
                </p>
                <p>
                   Cost: {this.props.projectId.projcost}
                </p>
                <p>
                   Area: {this.props.projectId.projarea}
                </p>
            </div>
        );
    }
    
}

export default Projectdetails;
