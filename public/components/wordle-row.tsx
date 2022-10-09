import type { FunctionalComponent } from 'preact'
import { WordleChar } from './wordle-char'
import styles from './wordle-row.module.css'

type Props = {
  target: string
  guess: string
}

export type WordleCharValue =
  | 'correct'
  | 'misplaced'
  | 'incorrect'

export const WordleRow: FunctionalComponent<Props> = ({ target, guess }) => {
  const values = guess.split('').map((c, i) => {
    if (target.charAt(i) === c) {
      return 'correct'
    } else if (target.indexOf(c) !== -1) {
      return 'misplaced'
    }
    return 'incorrect'
  })
  return (
    <div class={styles.row}>
      {values.map(val => <WordleChar charVal={val} />)}
    </div>
  )
}
