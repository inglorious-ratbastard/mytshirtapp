import React, { Component } from 'react';
import ProjectList from './ProjectList'; 
import { connect } from 'react-redux'; 

class Project extends Component {
    render() {
        console.log(this.props)
        const { designs } = this.props
        return (
            <div className="container mb-5">
                <div className="row">
                    <div className="project-list">
                        {designs && designs.map(design => {
                            return (
                                <ProjectList design={design} key={design.id} />  
                            )
                        })}
                        
                    </div>
                </div>
            </div>
        )
    }
}

const mapStatetoProps = (state) => {
   return {
       designs: state.design.designs
   }
}
 
export default connect(mapStatetoProps)(Project)