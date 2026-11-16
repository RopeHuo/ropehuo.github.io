const GLYPHS: Record<string, string[]> = {
  R: ['11110', '10001', '10001', '11110', '10100', '10010', '10001'],
  O: ['01110', '10001', '10001', '10001', '10001', '10001', '01110'],
  P: ['11110', '10001', '10001', '11110', '10000', '10000', '10000'],
  E: ['11111', '10000', '10000', '11110', '10000', '10000', '11111'],
  H: ['10001', '10001', '10001', '11111', '10001', '10001', '10001'],
  U: ['10001', '10001', '10001', '10001', '10001', '10001', '01110'],
}

const WORD = 'ROPEHUO'
const LETTER_WIDTH = 5
const SPACING = 1
const WIDTH = WORD.length * (LETTER_WIDTH + SPACING) - SPACING

const dots: { x: number; y: number }[] = []

WORD.split('').forEach((letter, letterIndex) => {
  GLYPHS[letter].forEach((row, y) => {
    row.split('').forEach((cell, x) => {
      if (cell === '1') {
        dots.push({ x: letterIndex * (LETTER_WIDTH + SPACING) + x, y })
      }
    })
  })
})

export function DotWordmark({ className = '' }: { className?: string }) {
  return (
    <svg
      viewBox={`0 0 ${WIDTH} 7`}
      className={className}
      fill="currentColor"
      aria-hidden="true"
      shapeRendering="crispEdges"
    >
      {dots.map((dot) => (
        <rect
          key={`${dot.x}-${dot.y}`}
          x={dot.x + 0.14}
          y={dot.y + 0.14}
          width="0.72"
          height="0.72"
        />
      ))}
    </svg>
  )
}
