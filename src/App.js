

import React, { Component } from 'react';

    import './App.css';
    import Header from '././components/Header';// eslint-disable-next-line
    import Post from '././components/Post';
    class App extends Component {
      render() {
        return (
        <div classname= "App">
          
            <Header />
            <section classname= "App">
                <Post nickname="Chris" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Moving the community!" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              <Post nickname="OG" avatar="https://www.laravelnigeria.com/img/chris.jpg" caption="Holding a mic" image="https://pbs.twimg.com/media/DOXI0IEXkAAkokm.jpg" />
              {/* more posts */}
            </section>
            <div>
          <Post />
        </div>
        </div>
          
        );
      }
    }
    export default App;

/*import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/
