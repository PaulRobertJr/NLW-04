import { useContext } from 'react'
import styles from '../styles/components/ChallengeBox.module.css'
import { ChallengesContext } from '../contexts/ChallengesContext'


export function ChallengeBox() {

  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext)
 

  function handleChallengeSucceeded() {
    completeChallenge()
    
  }

  function handleChallengeFailed() {
    resetChallenge()
    
  }

  return(
    <div className={styles.challengeBoxContainer}>
      { activeChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe {activeChallenge.amount} xp</header>

          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt=""/>
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>

          <footer>
            <button 
            className={styles.challengeFailedButton} 
            type="button"
            onClick={handleChallengeFailed}
            >
              Falhei
            </button>
            <button 
            className={styles.challengeSucceededButton} 
            type="button"
            onClick={handleChallengeSucceeded}
            >
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level Up"/>
            Avance de level completando desafios
          </p>
        </div>
      )}
    </div>
  )
}