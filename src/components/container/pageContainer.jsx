import React from 'react';
import "./pageContainer.scss";

const PageContainer = ({children}) => {
    return (
        <div className='pageContainer'>
            {children}
        </div>
    )
}

export default PageContainer;