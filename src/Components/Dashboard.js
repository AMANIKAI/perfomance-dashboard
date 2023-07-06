import React from 'react';


import Navbar from './Navbar';
import KpiCards from './KpiCards';
import Table from './Table';
import Logo from './Logo';


function Dashboard() {
    return (
        <React.Fragment>
            <Navbar/>
            <KpiCards/>
            <Table/>
            <Logo/>
        </React.Fragment>
    );
}

export default Dashboard;