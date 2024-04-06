import {useState, useEffect} from "react";

function Header() {
  return (
    <header className="header">
      <h1>Meme Generator</h1>
      <p>React Course - Project 3</p>
    </header>
  )
}

function Main() {
  const [templates, setTemplates] = useState([]);
  useEffect(() => {
    console.log("getting data...")
    fetch("https://api.memegen.link/templates")
      .then((res) => res.json())
      .then((data) => setTemplates(data))
  }, [])

  const [templateIndex, setTemplateIndex] = useState(null)
  const [topText, setTopText] = useState('Shut up')
  const [bottomText, setBottomText] = useState('And take my money')

  function formHandler(e) {
    e.preventDefault()
    const randomIndex = Math.floor(Math.random() * templates.length)
    setTemplateIndex(randomIndex)
    const t = templates[randomIndex]
    setTopText(t.example.text[0])
    setBottomText(t.example.text[1])
  }

  let imgURL = "/images/default.png"

  if (templateIndex) {
    const template = templates[templateIndex];
    imgURL = template.blank
  }

  return (
    <div className="inner-container">
      <form className="form" onSubmit={formHandler}>
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
        <img src={imgURL} alt=""/>
        <p className="image-text image-top-text">{topText}</p>
        <p className="image-text image-bottom-text">{bottomText}</p>
      </div>
    </div>
  )
}


function App() {
  return (
    <div className="main-container">
      <Header/>
      <Main/>
    </div>
  )
}

export default App
