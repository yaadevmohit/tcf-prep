import styles from './ScoreCard.module.css';

type ScoreCardProps = {
  currentScore: number;
  totalScore: number;
};

const ScoreCard: React.FC<ScoreCardProps> = ({currentScore, totalScore}) => {
    return (
        <div className={styles.scoreCard}>
            <h2>Score Card</h2>
            <p>Current Score: {currentScore}</p>
            <p>Total Score: {totalScore}</p>
        </div>
    )
}

export default ScoreCard;