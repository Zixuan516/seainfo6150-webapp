import React from "react";
import PropTypes from 'prop-types'

const ArticleListItem = props => {
    return (
        <div>
            <h2>{props.article.title}</h2>
            <p>{props.article.shortText}</p>
            <p datetime={props.article.pubYear}>{props.article.pubDate}<button onClick={() => alert(props.article.slug)}>show article slug</button></p>
        </div>
    );
};

ArticleListItem.propTypes = {
  article: PropTypes.object.isRequired
};

export default ArticleListItem;