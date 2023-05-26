
import { useState } from 'react'
import './App.css'
import ButtonPhrase from './components/ButtonPhrase'
import PhrasesCard from './components/PhrasesCard'
import phrasesList from './utils/phrases.json'
import randomElementFromArray from './utils/randomElementFronArray'



function App() {

  const initialPhrase = randomElementFromArray(phrasesList)
  

  const [phraseRandom, setPhraseRandom] = useState(initialPhrase)
  

  
  return (
    <div  className='app'>
      <article className='logo_img'>
        <img src="/fortuna-1/Transparente.png" alt="" />
      </article >
      <h1>Descubre los sabores de Charnú</h1>
      <section className='box'>
        <ButtonPhrase 
      setPhraseRandom={setPhraseRandom}
      
    
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
