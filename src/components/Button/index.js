/**
 * Keep Coding!
 * Created by admin on 2019/7/8.
 */
 import React from 'react';
 import PropTypes from 'prop-types';
 import '../../css/Button/index.css'

const Button = ({text,className}) => <button className={className}>{text}</button>;

Button.propTypes ={
    text:PropTypes.any

};

export default Button;

