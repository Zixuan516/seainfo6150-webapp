import React from "react";
import PropTypes from "prop-types";
import './ArticleImage.module.css';


const ArticleImage = props => {
  return (
    <img src= {props.url} alt={props.title} />
  );
};

ArticleImage.propTypes = {
  url: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
};
export default ArticleImage;