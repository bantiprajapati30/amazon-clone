import React from 'react';

function NotFoundPage(props) {

    return (
        <div className='no-page-container'>
            <div>
              <h1>Something went Wrong</h1>
              <div className='btn-container'><a href='/' className='primary-btn'>Back</a></div>
            </div>
        </div>
    );
}

export default NotFoundPage;