import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from './ArticleListItem'
import styles from "./ArticleList.module.css";

const ArticleList = props => {
  return (
    <section className={styles.container}>
      {props.articles.map(article => (
        <div key={article.slug}><ArticleListItem article={article}/></div>
      ))}
    </section>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
