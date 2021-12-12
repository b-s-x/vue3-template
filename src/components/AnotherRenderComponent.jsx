import { defineComponent } from 'vue'

const propTypes = {
  value: {
    type: Number,
    default: 0,
  },
};

const App = defineComponent({
  render(props) {
    return (
      <div>AnotherRenderComponent: { props.value } </div>
    )
  }
})

App.name = 'App'
App.props = propTypes;
export default App;
