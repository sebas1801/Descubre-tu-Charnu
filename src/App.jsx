
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrasesList from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFronArray'


const arrBackground = [1, 2, 3, 4]

function App() {

  const initialPhrase = randomElementFromArray(phrasesList)
  const initialPath = randomElementFromArray(arrBackground)

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  const [pathRandom, setPathRandom] = useState(initialPath)

  const objStyle = {
    backgroundImage: `url('/fortuna-1/fondo${pathRandom}.jpg')`
  }

  return (
    <div style={objStyle} className='app'>
      <h1>Galleta de la fortuna</h1>
      <section className='box'>
        <ButtonPhrase 
      setPhraseRandom={setPhraseRandom}
      setPathRandom={setPathRandom}
      arrBackground={arrBackground}
      />
      <PhrasesCard phraseRandom={phraseRandom} />
      </section>
      <section className='footer'>
        <p>
          Autor: {phraseRandom.author}
        </p>
      </section>
      
    </div>
  )
}

export default App
