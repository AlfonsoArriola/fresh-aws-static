import './App.css';

function App() {
  return (
    <div className="App">
      <header>
        <h1> Fresh City: Cold Weather Listings 2023 </h1>
      </header>
        <div className="Message">
          <p>
            <b>Welcome!</b> Please excuse the mimimal look of the site as we prepare for the Spring 2023 season.  The data listed was checked last Winter, but do call ahead before visiting any location.   
          </p>
        </div>
        <div>
          <iframe src="https://www.google.com/maps/d/embed?mid=1-w7k9lj6oUvW2ePNenWdjfNp6nmrnr8&hl=en&ehbc=2E312F" width="640" height="480" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
        </div>
        <address>
          By <a href="freshcityny@gmail.com">Web Master</a>
        </address>
    </div>
  );
}

export default App;
