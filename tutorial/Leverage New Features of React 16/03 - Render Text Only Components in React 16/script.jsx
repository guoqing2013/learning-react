
const Comment = ({ text }) => {
    // const emojifiedText = text
    // .replace(':)', '😊')
    // .replace(':D', '😀')
    // .replace(':(', '🙁');
    // return emojifiedText;
    return 12323
};

class App extends React.Component {
    render() {
      return (
        <div>
          <Comment text="Today we are sailing home :)" />
        </div>
      );
    }
}
  
  ReactDOM.render(<App />, document.getElementById('root'));
  