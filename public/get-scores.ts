import type { ScoresResponse } from './models'
import { getRealScoresFromNetwork } from './real-responses'
import { getAllInitialResponse } from './test-responses'

export async function getScores(): Promise<ScoresResponse> {
  console.debug('getting scores…')

  // TODO: const response = await getRealScoresFromNetwork(…)
  const response = await getRealScoresFromNetwork()//await getAllInitialResponse()

  if (response.ok) {
    const json = await response.json()
    return json as ScoresResponse
  } else {
    throw new Error('failed to get scores')
  }
}
