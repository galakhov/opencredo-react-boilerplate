import React from 'react';
import ReactCSSTransitionReplace from 'react-css-transition-replace';
import PropTypes from 'prop-types';

class BackgroundImagesSwapper extends React.Component {

  static propTypes = {
    children: PropTypes.node,
    style: PropTypes.object,
  }

  state = {
    count: React.Children.count(this.props.children),
    index: 0,
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState({ index: this.state.index + 1 >= this.state.count ? 0 : this.state.index + 1 });
    }, 4000);
  }

  handleTime = () => {
    /*
    this.setState({fading: true}); // fade out
    this.timer = setTimeout(_ => {
      this.setState({msg: 'Some new text'}); // swap the text
      this.setState({fading: false}); // fade back in
    }, 500); // animation timing offset
    */
  }

  /* handleClick = () => {
    const index = this.state.index + 1
    this.setState({index: index >= React.Children.count(this.props.children) ? 0 : index})
  } */

  render() {
    const content = React.Children.toArray(this.props.children);
    // const {msg, fading} = this.state; // operates with handleTime
    // https://stackoverflow.com/questions/35492454/fade-out-in-text-when-changing-in-react

    const { style = {} } = this.props;

    const newStyle = {
      ...style,
      cursor: 'default',
      height: '1280px',
    };

    // <ReactCSSTransitionReplace {...this.props} style={newStyle} onClick={this.handleClick}>

    /*
    // inside of return()
    <h1 className={`${fading ? 'faded' : ''}`}>
      {msg}
    </h1>
    */

    return (
      <ReactCSSTransitionReplace {...this.props} style={newStyle}>
        {content[this.state.index]}
      </ReactCSSTransitionReplace>
    );
  }
}

export default BackgroundImagesSwapper;
