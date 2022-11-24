import React from 'react';

import './ServicesTabs.scss';

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { ProjectManagement, EquipmentRental, CommercialBrookers } from '../../pages/services/container';

const ServicesTabs = () => {
  return (
    <div className="tabs-main-container">
        <Tabs>
            <TabList>
                <Tab>
                    <p>Project Management</p>
                </Tab>

                <Tab>
                    <p>Heavy & Light Machinery & Equipment Rental</p>
                </Tab>

                <Tab>
                    <p>Commercial Brokers</p>
                </Tab>
            </TabList>

            <TabPanel>
                <div className="panel-content">
                    <h2><ProjectManagement /></h2>
                </div>
            </TabPanel>

            <TabPanel>
                <div className="panel-content">
                    <EquipmentRental />
                </div>
            </TabPanel>

            <TabPanel>
                <div className="panel-content">
                    <CommercialBrookers />
                </div>
            </TabPanel>
        </Tabs>
    </div>
  )
}

export default ServicesTabs