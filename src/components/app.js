import React, { Component } from 'react'
import UserForm from './user-form'
import Filters from './filters'
import Counter from './counter'
import { Route, Switch, Redirect } from 'react-router-dom'
import ArticlesRoute from '../routes/articles'
import CommentsPage from '../routes/comments-page'
import Menu, { MenuItem } from './menu'
import { Provider as AuthProvider } from '../contexts/auth'
import {
  Provider as TranslateProvider,
  Consumer as TranslateConsumer,
  dictionaries
} from '../contexts/translate'

export default class App extends Component {
  state = {
    userName: '',
    lang: dictionaries.ru
  }

  handleUserChange = (userName) => this.setState({ userName })
  handleLangChange = (event) => {
    let selectedIndex = event.target.selectedIndex
    let newLang = selectedIndex === 0 ? dictionaries.ru : dictionaries.en
    this.setState({ lang: newLang })
  }

  render() {
    return (
      <AuthProvider value={{ userNameFromContext: this.state.userName }}>
        <TranslateProvider value={this.state.lang}>
          <div>
            <div>
              <select onChange={this.handleLangChange}>
                <option selected>Русский</option>
                <option>English</option>
              </select>
            </div>
            <UserForm
              onChange={this.handleUserChange}
              value={this.state.userName}
            />
            <TranslateConsumer>
              {(dictionary) => (
                <Menu>
                  <MenuItem to="/counter">{dictionary.COUNTER}</MenuItem>
                  <MenuItem to="/filters">{dictionary.FILTERS}</MenuItem>
                  <MenuItem to="/articles">{dictionary.ARTICLES}</MenuItem>
                  <MenuItem to="/comments/1">{dictionary.COMMENTS}</MenuItem>
                </Menu>
              )}
            </TranslateConsumer>

            <Switch>
              <Redirect from={'/'} to={'/articles'} exact />
              <Route path="/counter" exact component={Counter} strict />
              <Route path="/filters" component={Filters} />
              <Route path="/articles/new" render={() => <h2>New Article</h2>} />
              <Route path="/articles" component={ArticlesRoute} />
              <Route path="/comments" component={CommentsPage} />
              <Route path="/error" render={() => <h1>Error page</h1>} />
            </Switch>
          </div>
        </TranslateProvider>
      </AuthProvider>
    )
  }
}
