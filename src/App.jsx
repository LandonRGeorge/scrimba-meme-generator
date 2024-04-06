import {useState} from "react";

function Nav() {
  return (
    <nav className="nav">
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </nav>
  )
}

function Main() {
  const [topText, setTopText] = useState('Shut up')
  const [bottomText, setBottomText] = useState('And take my money')
  return (
    <div className="inner-container">
      <form className="form">
        <div className="form-controls">
          <div className="form-control">
            <label htmlFor="form-top-text">Top text</label>
            <input type="text" id="form-top-text" value={topText} onChange={e => setTopText(e.target.value)}/>
          </div>
          <div className="form-control">
            <label htmlFor="form-bottom-text">Bottom text</label>
            <input type="text" id="form-bottom-text" value={bottomText} onChange={e => setBottomText(e.target.value)}/>
          </div>
        </div>
        <button className="form-submit">Get a new meme image</button>
      </form>
      <div className="image">
        <img src="/src/assets/default.png" alt=""/>
        <p className="image-text image-top-text">{topText}</p>
        <p className="image-text image-bottom-text">{bottomText}</p>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="main-container">
      <Nav/>
      <Main/>
    </div>
  )
}

export default App
