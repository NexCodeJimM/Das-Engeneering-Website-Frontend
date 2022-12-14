import React from 'react';

import './IconTable.scss';

import { GiSmashArrows } from 'react-icons/gi';
import { RiUserStarFill } from 'react-icons/ri';
import { ImUserTie } from 'react-icons/im';
import { FaClipboardList } from 'react-icons/fa';

import { FeatureIcons } from '../../../../../../components';

const IconTable = () => {
  return (
    <div className="IT-main-conatiner">
        <div className="top-table">
            <FeatureIcons 
                icon={<GiSmashArrows />}
                title="Responsive"
            />

            <FeatureIcons 
                icon={<RiUserStarFill />}
                title="Resourceful"
            />

            <FeatureIcons 
                icon={<ImUserTie />}
                title="Professional"
            />

            <FeatureIcons 
                icon={<FaClipboardList />}
                title="Organized"
            />
        </div>
    </div>
  )
}

export default IconTable;