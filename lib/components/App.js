import React from 'react';

import ArticlesList from './ArticleList';

class App extends React.Component {

  state = this.props.store.getState();
 
  render(){
    return (
      <div>
        <ArticlesList
          articles={this.state.articles}
          store={this.props.store}
        />

      </div>
    );
  }
} 
export default App;