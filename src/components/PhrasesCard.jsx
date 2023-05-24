import './phrasesCard.css'

const PhrasesCard = ({phraseRandom}) => {
  return (
    <div className="card">
      <p >
        {phraseRandom.phrase}
      </p>
    </div>
  )
}

export default PhrasesCard
