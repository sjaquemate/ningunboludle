import { getGuessStatuses } from './statuses'
import { solutionIndex } from './words'
import { MAX_CHALLENGES } from '../constants/settings'

export const shareStatus = (
  guesses: string[],
  lost: boolean,
  isHardMode: boolean,
  isDarkMode: boolean,
  isHighContrastMode: boolean,
  handleShareToClipboard: () => void
) => {
  const textToShare =
    `boludle.com #${solutionIndex} ${lost ? 'X' : guesses.length
    }/${MAX_CHALLENGES}${isHardMode ? '*' : ''}\n\n` +
    generateEmojiGrid(guesses, getEmojiTiles(isDarkMode, isHighContrastMode)) +
    '\n\n' +
    '#boludle'

  navigator.clipboard.writeText(textToShare)
  handleShareToClipboard()
}

export const generateEmojiGrid = (guesses: string[], tiles: string[]) => {
  return guesses
    .map((guess) => {
      const status = getGuessStatuses(guess)
      return guess
        .split('')
        .map((_, i) => {
          switch (status[i]) {
            case 'correct':
              return tiles[0]
            case 'present':
              return tiles[1]
            default:
              return tiles[2]
          }
        })
        .join('')
    })
    .join('\n')
}

const getEmojiTiles = (isDarkMode: boolean, isHighContrastMode: boolean) => {
  let tiles: string[] = []
  tiles.push(isHighContrastMode ? '🟧' : '🟩')
  tiles.push(isHighContrastMode ? '🟦' : '🟨')
  tiles.push(isDarkMode ? '⬛' : '⬜')
  return tiles
}
