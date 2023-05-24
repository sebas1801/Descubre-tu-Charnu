import getRandomElementFromArray from '../utils/randomElementFronArray'
import phraseList from '../utils/phrases.json'
import './buttonPhrase.css'

const ButtonPhrase = ({setPhraseRandom, setPathRandom, arrBackground}) => {

    const handleRandomPhrase = () => {
        const newRandomPhrase = getRandomElementFromArray(phraseList)
        setPhraseRandom(newRandomPhrase)
        const newPath = getRandomElementFromArray(arrBackground)
        setPathRandom(newPath)
    }
  return (
    <button className='button' onClick={handleRandomPhrase}>
        Probar mi suerte
    </button>
  )
}

export default ButtonPhrase
