function Nav() {
  return (
    <nav className="nav">
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </nav>
  )
}

function Form() {
  return (
    <form>
      <div className="form-controls">
        <div className="form-control">
          <label htmlFor="top-text">Top text</label>
          <input type="text" id="top-text"/>
        </div>
        <div className="form-control">
          <label htmlFor="bottom-text">Bottom text</label>
          <input type="text" id="bottom-text"/>
        </div>
      </div>
      <button className="form-submit">Get a new meme image</button>
    </form>
  )
}


function App() {
  return (
    <div className="main-container">
      <Nav/>
      <div className="inner-container">
        <Form/>
      </div>
    </div>
  )
}

export default App
