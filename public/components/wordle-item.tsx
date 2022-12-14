import type { FunctionalComponent } from 'preact'
import {useState} from 'preact/hooks'
import type { Score } from '../models'
import styles from './wordle-item.module.css'
import { WordleRow } from './wordle-row'

type Props = {
  score: Score
}


/**
 * Difficult test case: 
 * 
 * Target: Nymph
 * Guess : Mommy 
 * 
 * Middle m should be green because it was in the correct spot 
 * Other m's should be incorrect because there was only one m and it has already been used
 */
export const WordleItem: FunctionalComponent<Props> = ({ score }) => {
  if(score.id) {
    console.log('debug')
  }
  const [collapsed, setCollapsed] = useState(false)
  const solved = score.tries[score.tries.length - 1] === score.word
  const failed = !solved && score.tries.length === 6
  let style = styles.attempted
  if (solved) { style = styles.completed }
  else if (failed) { style = styles.failed }
  return (
    <div class={`${styles.wordle} ${style} ${collapsed ? styles.collapsed : ''}`} onClick={() => setCollapsed(!collapsed)}>
      <div class={styles.headercontainer}>
        <h2 class={styles.header}>Puzzle {score.id} ({score.tries.length}/6)</h2>
        {solved && <i class='fa-solid fa-check'></i>}
        {failed && <i class='fa-solid fa-circle-xmark'></i>}
        {!solved && !failed && <i class='fa-solid fa-ellipsis'></i>}
      </div>
      {score.tries.map(val => <WordleRow guess={val} target={score.word} />)}
      <em>{score.date}</em>
    </div>
  )
}
