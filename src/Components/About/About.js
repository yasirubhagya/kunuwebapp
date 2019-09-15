import React from 'react';
import TopNavigation from '../../Layout/Layout';

import Test from './Test';


class About extends React.Component{
    render(){
        return(
            <div>
                <TopNavigation/>
                <Test/>

            </div>
        );
    }
}

export default About;