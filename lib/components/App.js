import React from 'react';

import ArticlesList from './ArticleList';

import DataApi from 'state-api';
import {data} from '../testData';



const api = new DataApi(data);

class App extends React.Component {
  constructor(){
    super();
    this.state = {
      articles: api.getArticles(),
      authors: api.getAuthors(),
    };
    console.log(this.state);
  }
  articleActions = {
    lookupAuthor: authorId => this.state.authors[authorId],
  };
  render(){
    return (
      <div>
        <ArticlesList
          articles={this.state.articles}
          articleActions={this.articleActions}
        />

      </div>
    );
  }
}
export default App;