const React = require('react');
const ReactDOM = require('react-dom');

const App = React.createClass({
  getInitialState () {
      console.log('getInitialState');
      return {
        textToDisplay: 'Hello World'
      };
  },

  componentDidMount () {
    console.log('componentDidMount');

    // this.state.textToDisplay = 'Something new';
    const that = this; //Work around for ES5.  'this' is not in scope in 'function'
                    // replace function with =>, and should work
    setTimeout( () => { // 'fat arrow' method inherits scope
      this.setState({
        textToDisplay: 'Hello Baca'
      });
    }, 2000);
  },

  _handleInputChange(e) {
    this.setState({
      textToDisplay: e.target.value
    });
  },

  render() {
    console.log('render');
    return (
      <div className="name" >
        <input
          onChange={this._handleInputChange}
          type="text" value={ this.state.textToDisplay } />

        {this.state.textToDisplay}</div> // the {} are a way to access javascript
      //Gotchas----All tags must be closed---Also, 'css' class is not class, it's 'className'
    );
  }
});
//important to wrap in brackets below, want to pass in as JSX
ReactDOM.render(<App />, document.getElementById('my-app'));



console.log('Hello World!');
