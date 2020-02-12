import React from "react";
import PropTypes from 'prop-types'
import SlugButton from'./SlugButton'
import styles from "./ArticleListItem.module.css";



const ArticleListItem = props => {
    return (
        <div className={styles.container}>
            <h2 className = {styles.header}>{props.article.title}</h2>
            <p className = {styles.p}>{props.article.shortText}</p>
            <p className = {styles.time} datetime={props.article.pubYear}>
            {props.article.pubDate}<SlugButton article={props.article}></SlugButton>
            </p>
        </div>
    );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;