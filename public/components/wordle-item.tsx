import type { FunctionalComponent } from 'preact'
import type { Score } from '../models'
import { WordleRow } from './wordle-row'
import styles from './wordle-item.module.css'

type Props = {
  score: Score
}

export const WordleItem: FunctionalComponent<Props> = ({ score }) => (
    <div class={styles.wordle}>
        <h2 class={`${styles.header} ${score.tries[score.tries.length - 1] === score.word ? styles.completed : styles.attempted}`}>Wordle {score.id}</h2>
        {score.tries.map(val => 
            <WordleRow guess={val} target={score.word}/>
        )}
       <em>{score.date}</em>
    </div>
)

