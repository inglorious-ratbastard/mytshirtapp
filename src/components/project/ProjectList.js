import React from 'react';
const imgBase = "https://res.cloudinary.com/dkkgmzpqd/image/upload/v1545217305/T-shirt%20Images/"

const ProjectLists = ({design}) => {
    return(
        <div className="item text-center">
            <div className="card card-body">
                <img className="img-fluid" src={`${imgBase}${design.tshirtcolor}`} alt="t-shirt" />
                <p>{design.name}</p>
                <button className="btn btn-primary btn-sm">View Design</button>
            </div>
        </div>
    )
}

export default ProjectLists