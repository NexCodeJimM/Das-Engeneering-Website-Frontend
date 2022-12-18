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
            <p className='p-description'>
                Project Management specialists are responsible for overseeing the successful execution of construction 
                projects. They work with clients, contractors, and other stakeholders to ensure projects are completed 
                on time and within budget. Key responsibilities include defining project scope, creating schedules and 
                budgets, coordinating the work of contractors and professionals, and managing changes to the project. 
                A bachelor's degree in construction management or a related field is often preferred, as is experience 
                in the construction industry. Strong communication, problem-solving, and organizational skills are 
                essential for this role.
            </p>
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