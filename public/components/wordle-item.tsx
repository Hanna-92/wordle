import type { FunctionalComponent } from 'preact'
import type { Score } from '../models'
import { WordleRow } from './wordle-row'
import styles from './wordle-item.module.css'

type Props = {
  score: Score
}

export const WordleItem: FunctionalComponent<Props> = ({ score }) => {
    const solved = score.tries[score.tries.length - 1] === score.word
    const failed = !solved && score.tries.length === 6
    let style = styles.attempted
    if(solved) style = styles.completed;
    else if (failed) style = styles.failed;
    return (
        <div class={`${styles.wordle} ${style}`}>
            <div class={styles.headercontainer}>
                <h2 class={styles.header}>Puzzle {score.id} ({score.tries.length}/6)</h2>
                {solved && <i class="fa-solid fa-check"></i>}
                {failed && <i class="fa-solid fa-circle-xmark"></i>}
                {!solved && !failed && <i class="fa-solid fa-ellipsis"></i>}
            </div>
            {score.tries.map(val => 
                <WordleRow guess={val} target={score.word}/>
            )}
        <em>{score.date}</em>
        </div>
    )
}

