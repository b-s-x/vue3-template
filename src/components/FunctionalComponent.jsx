const propTypes = {
  value: {
    type: Number,
    default: 0,
  },
};

const App = (props, context) => {
  return <div> FC: {props.value} </div>
}

App.props = propTypes;
export default App;
