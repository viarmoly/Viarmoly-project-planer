import React from 'react';

const ProjectDetails = (props) => {
    console.log(props);
    const id = props.match.params.id;
    return (
        <div className='container section project-details'>
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae blanditiis id illo ipsa quo soluta tempore. Dolorem dolores est et eum necessitatibus quisquam sequi tempora? Expedita itaque labore nulla sed?</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by th Viarmoly</div>
                    <div>2nd September, 2am</div>
                </div>
            </div>
        </div>
    );
};

export default ProjectDetails;
