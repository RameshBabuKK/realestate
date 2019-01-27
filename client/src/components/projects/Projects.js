import React, {Component} from 'react';
import axios from 'axios';
import './projects.css'
import Projectdetails from './Projectdetails';
import { withRouter } from 'react-router-dom';

class Projects extends Component {
    state = {
        projects: [],
        projectid: {},
        selectedProject: false
    };
    componentDidMount () {
        axios.get('http://localhost:5000/api/allprojects')
            .then(res => {
                this.setState({
                    projects: res.data
                })
                console.log(this.state.projects.length);
            })
    }
    
    getDetails = (list) => {
        console.log("Get Details - " + list );
        this.setState({
            projectid: list,
            selectedProject: true
        })
    }

    newProject = () => {
        let path = `newproject`;
        this.props.history.push(path);
    }

    updateProject = () => {
        let path = `updateproject`;
        this.props.history.push(path);
    }
    render() {
        const { projects } = this.state;
        const projectlist = projects.length ? 
                            (
                                projects.map(listproject => {
                                    return (
                                        <div 
                                            className="collection" 
                                            key={ listproject._id }>
                                                <div 
                                                    className="collection-item cursor_pointer"
                                                    onClick={ this.getDetails.bind(this, listproject) }>
                                                    <span >
                                                        { listproject.projtitle }
                                                    </span>
                                                </div>
                                        </div>
                                    )
                                })
                                ) : (<div className="collection-item center-align">No project listed...</div>)
        
        return(
            <div className="container">
                <h4>Project list</h4>
                    <div className="row">
                        <button className="waves-effect waves-light blue btn"
                                onClick={this.newProject}>New project</button>
                    </div>
                    <div className="row">
                        <div className="col s2">
                                {projectlist}
                        </div>
                        {this.state.selectedProject ? 
                            (
                                <div className="col s9">
                                    <div className="card blue-grey darken-3">
                                        <div className="card-content white-text">
                                            <Projectdetails projectId={this.state.projectid}/>
                                        </div>
                                        <div className="card-action green light-5">
                                            <button 
                                            className="waves-effect waves-light left orange btn"
                                            onClick={this.updateProject}>Edit details</button>
                                            <button 
                                            className="waves-effect waves-light right red btn">
                                            Delete project</button>
                                        </div>
                                    </div>
                                </div>
                            )
                        : (<div className="col s9 center-align bold_text purple-text draken-5">Select from the list</div>)
                        }
                    </div>
        </div>
        )
    }
} 

export default withRouter(Projects);

