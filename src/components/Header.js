import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

const Header = (props) => {


    return (

        <header className='header'>
            <h1>{props.title}</h1>
            <Button color={props.showAdd ? 'red' : 'green'} text={!props.showAdd ? 'Add' : 'Close'} onClick={props.onAdd}></Button>
        </header>
    )
}

Header.defaultProps = {
    title: 'Task Tracker',
}

Header.propTypes = {
    title: PropTypes.string,
    onAdd: PropTypes.func,
    showAdd: PropTypes.bool
};


export default Header;