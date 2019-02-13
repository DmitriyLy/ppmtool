import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectTask from './ProjectTasks/ProjectTask'


class Backlog extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-secondary text-white">
                                <h3>TO DO</h3>
                            </div>
                        </div>

                        <ProjectTask/>

                        <div className="card mb-1 bg-light">

                            <div className="card-header text-primary">
                                ID: projectSequence -- Priority: priorityString
                            </div>
                            <div className="card-body bg-light">
                                <h5 className="card-title">project_task.summary</h5>
                                <p className="card-text text-truncate ">
                                    project_task.acceptanceCriteria
                                </p>
                                <Link to={""} className="btn btn-primary">
                                    View / Update
                                </Link>

                                <button className="btn btn-danger ml-4">
                                    Delete
                                </button>
                            </div>
                        </div>

                        {
                            //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                        }
                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-primary text-white">
                                <h3>In Progress</h3>
                            </div>
                        </div>
                        {

                            //<!-- SAMPLE PROJECT TASK STARTS HERE -->

                            //<!-- SAMPLE PROJECT TASK ENDS HERE -->

                        }


{
                            //<!-- SAMPLE PROJECT TASK STARTS HERE -->
                        }
                        <div className="card mb-1 bg-light">

                            <div className="card-header text-primary">
                                ID: projectSequence -- Priority: priorityString
                            </div>
                            <div className="card-body bg-light">
                                <h5 className="card-title">project_task.summary</h5>
                                <p className="card-text text-truncate ">
                                    project_task.acceptanceCriteria
                                </p>
                                <Link to={""} className="btn btn-primary">
                                    View / Update
                                </Link>

                                <button className="btn btn-danger ml-4">
                                    Delete
                                </button>
                            </div>
                        </div>

                        {
                            //<!-- SAMPLE PROJECT TASK ENDS HERE -->
                        } 


                    </div>
                    <div className="col-md-4">
                        <div className="card text-center mb-2">
                            <div className="card-header bg-success text-white">
                                <h3>Done</h3>
                            </div>
                        </div>

                        {

                            //<!-- SAMPLE PROJECT TASK STARTS HERE -->

                            //<!-- SAMPLE PROJECT TASK ENDS HERE -->

                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Backlog;
