import styles from "./Keywords.module.css";

type Keyword = {
  word: string;
  translation: string;
};

type KeywordsProps = {
  data: Keyword[];
};

const Keywords: React.FC<KeywordsProps> = ({ data }) => {
  if (!data || data.length === 0) return null;

  return (
    <div className={styles.keywordsWrapper}>
      <h4 className={styles.title}>Keywords</h4>
      <ul className={styles.list}>
        {data.map((item, index) => (
          <li key={index} className={styles.item}>
            <span className={styles.word}>{item.word}</span>
            <span className={styles.translation}>{item.translation}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
