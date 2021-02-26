import { ChallengesContext } from '../contexts/ChallengesContext';
import { useContext } from 'react';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext);
    return (
        <div className={styles.profileContainer}>
            
            <img src="https://github.com/PaulRobertJr.png" alt="Robert"/>
            <div>
                <strong>Robert Junior</strong>
                <p>
                    <img src="icons/level.svg" alt="Level"/>
                    Level {level}
                    </p>
            </div>
        </div>
        
    );
}