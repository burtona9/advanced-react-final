import React from 'react';
import PropTypes from 'prop-types';
import ArticlesList from './ArticleList';


class App extends React.Component {
  static childContextTypes = {
    store: PropTypes.object
  }
  getChildContext(){
    return {
      store: this.props.store
    };
  }
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