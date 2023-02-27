import { ScrabbleValues } from '../types/scrabbleValues'

const scrabbalizeWord = (word: string): number => {
  const cleanWord = word.replace(/\s/g, '').toLowerCase()

  return cleanWord.split('').reduce((acc: number, letter: string) => {
    const letterScore = ScrabbleValues[letter] || 0
    return (acc += letterScore)
  }, 0)
}

export default scrabbalizeWord
