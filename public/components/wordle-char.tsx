import type { FunctionalComponent } from 'preact'
import styles from './wordle-char.module.css'
import { WordleCharValue } from './wordle-row'

type WordleCharProps = {
  charVal: WordleCharValue
}

const valToStyle = (charVal: WordleCharValue) => {
  switch (charVal) {
    case 'correct':
      return styles.correct
    case 'misplaced':
      return styles.misplaced
    case 'incorrect':
      return styles.incorrect
  }
}

export const WordleChar: FunctionalComponent<WordleCharProps> = ({ charVal }) => (
  <div class={`${styles.wchar} ${valToStyle(charVal)}`} />
)
