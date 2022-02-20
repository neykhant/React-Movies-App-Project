//jshint ignore:start
import React from 'react';
import _ from 'lodash';
import propTypes from 'prop-types';


const Paginate = (props) => {
    const { itemCount, pageSize, currentPage ,onPageChange } = props;

    const totalPage = Math.ceil( itemCount/pageSize); //3
    if(totalPage === 1) return null;

    const pages = _.range(1, totalPage + 1);

    return ( 
        <nav>
            <ul className='pagination'>
                {pages.map(page => <li key={page} className={currentPage === page ? 'page-item active' : 'page-item'}>
                    <button className='page-link' onClick={() =>onPageChange(page)}>
                        {page}
                    </button>
                </li>)}
            </ul>
        </nav>
     );
}

Paginate.propTypes = {
    itemCount: propTypes.number.isRequired,
    pageSize: propTypes.number.isRequired,
    currentPage: propTypes.number.isRequired,
    onPageChange: propTypes.func.isRequired,
};
 

export default Paginate;