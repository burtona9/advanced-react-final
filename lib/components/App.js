import React from 'react';

import ArticlesList from './ArticleList';

class App extends React.Component {

  state = {
    articles: this.props.initialData.articles,
    authors: this.props.initialData.authors,
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