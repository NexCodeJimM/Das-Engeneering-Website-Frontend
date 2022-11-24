import React from 'react';

import './ProjectManagement.scss';

const ProjectManagement = () => {
  return (
    <div className='pm-main-container'>
        <div className="pm-header">
            <div className="header-img-container"/>

            <div className="pm-title">
                <h2>Project Management</h2>
                <div className="divider" />
            </div>
        </div>

        <div className="pm-body-content">
            <p>Below are the list of services we offer:</p>

            <ul>
                <li>Development of detailed project plans.</li>
                <li>Establishing a project team.</li>
                <li>Planning and scheduling.</li>
                <li>Drafting of contracts.</li>
                <li>Cost control.</li>
                <li>Executing projects.</li>
                <li>Data analysis.</li>
                <li>Management of the procurement process.</li>
                <li>Resource management.</li>
                <li>Project close out.</li>
            </ul>
        </div>
    </div>
  )
}

export default ProjectManagement;