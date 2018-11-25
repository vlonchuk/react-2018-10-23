import React, { Component } from 'react'
import ArticleList from '../components/article-list'
import Article from '../components/article'
import { Route } from 'react-router-dom'
import { Consumer as TranslateConsumer } from '../contexts/translate'

class ArticlesRoute extends Component {
  render() {
    return (
      <div>
        <ArticleList />
        <Route path="/articles/:id" children={this.getArticle} />
      </div>
    )
  }
  getArticle = ({ match }) => {
    return !match ? (
      <TranslateConsumer>
        {(dictionary) => (
          <Route
            path="/articles"
            exact
            render={() => <h2>{dictionary.SELECT_ARTICLE}</h2>}
          />
        )}
      </TranslateConsumer>
    ) : (
      <Article id={match.params.id} key={match.params.id} isOpen />
    )
  }
}

export default ArticlesRoute
