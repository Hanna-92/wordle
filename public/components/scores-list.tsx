import type { FunctionalComponent } from 'preact'
import type { Score } from '../models'
import { ScoreItem } from './score-item'
import styles from './scores-list.module.css'
import { WordleItem } from './wordle-item'

type Props = {
  scores: Score[]
}

export const ScoresList: FunctionalComponent<Props> = ({ scores }) => {
  if (scores.length === 0) {
    return <p>No scores.</p>
  }

  return (
    <ul class={styles.list}>
      {/*scores.map(score => <ScoreItem key={score.id} score={score} />)*/}
      {scores.map(score => <WordleItem score={score} />)}
    </ul>
  )
}
