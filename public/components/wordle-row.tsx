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

  // Iterate through the target and check the guess characters

  const values = Array<WordleCharValue>(target.length).fill('incorrect')

  for(var i = 0; i < target.length; i++) {
    const c = target.charAt(i)
      if(guess.charAt(i) === c) {
        values[i] = 'correct'
      } else {
        const chars = guess.split('')
        for(var j = 0; j <chars.length; j++) {
          const attempt = chars[j]
          if(c === attempt && values[j] === 'incorrect') {
            values[j] = 'misplaced'
            break;
          }
      }
    }
  }

  // const values = guess.split('').map((c, i) => {
  //   if (target.charAt(i) === c) {
  //     return 'correct'
  //   } else if (target.indexOf(c) !== -1) {
  //     return 'misplaced'
  //   }
  //   return 'incorrect'
  // })
  return (
    <div class={styles.row}>
      {values.map((val, i) => <WordleChar charVal={val} letter={guess.charAt(i)}/>)}
    </div>
  )
}
