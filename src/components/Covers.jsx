import qrPath from '../assets/qr-path.txt?raw'

// Visuels dessinés pour les projets sans capture exploitable.

function FaceArt() {
  const outline = '150,48 196,56 232,84 248,126 250,172 238,216 214,254 182,278 150,286 118,278 86,254 62,216 50,172 52,126 68,84 104,56'
  const mesh = [
    [150, 48, 104, 96], [150, 48, 196, 96], [104, 96, 196, 96], [68, 84, 104, 96], [232, 84, 196, 96],
    [52, 126, 104, 96], [248, 126, 196, 96], [104, 96, 110, 140], [196, 96, 190, 140], [150, 96, 150, 196],
    [110, 140, 150, 150], [190, 140, 150, 150], [50, 172, 110, 140], [250, 172, 190, 140], [110, 140, 118, 214],
    [190, 140, 182, 214], [150, 196, 118, 214], [150, 196, 182, 214], [118, 214, 150, 232], [182, 214, 150, 232],
    [62, 216, 118, 214], [238, 216, 182, 214], [118, 214, 118, 278], [182, 214, 182, 278], [150, 232, 150, 286],
    [86, 254, 118, 214], [214, 254, 182, 214],
  ]
  const nodes = [
    [104, 96], [196, 96], [110, 140], [190, 140], [150, 150], [150, 196], [118, 214], [182, 214], [150, 232],
    [52, 126], [248, 126], [50, 172], [250, 172], [62, 216], [238, 216], [86, 254], [214, 254], [150, 286],
    [118, 278], [182, 278], [68, 84], [232, 84], [150, 48], [150, 96],
  ]
  return (
    <svg className="art" viewBox="0 0 480 300" role="img" aria-label="Maillage de points posé sur un visage">
      <g transform="translate(90 -18)">
        <polygon points={outline} className="art__line" />
        {mesh.map(([x1, y1, x2, y2], i) => (
          <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} className="art__line art__line--faint" />
        ))}
        <path d="M88 128q22-14 44 0q-22 12-44 0zM168 128q22-14 44 0q-22 12-44 0z" className="art__line" />
        {nodes.map(([cx, cy], i) => (
          <circle key={i} cx={cx} cy={cy} r="3.2" className="art__fill" />
        ))}
      </g>
      <path d="M126 22h-34v34M354 22h34v34M126 278h-34v-34M354 278h34v-34" className="art__frame" />
    </svg>
  )
}

function ReceiptArt() {
  const rows = [
    ['Menu 01', '2 500'],
    ['Menu 04', '3 000'],
    ['Boisson', '1 000'],
  ]
  return (
    <svg className="art" viewBox="0 0 480 300" role="img" aria-label="Ticket de caisse terminé par un QR code">
      <path d="M150 0h180v286l-15-10-15 10-15-10-15 10-15-10-15 10-15-10-15 10-15-10-15 10-15-10-15 10z" className="art__paper" />
      <text x="240" y="30" textAnchor="middle" className="art__ticket art__ticket--head">
        CAISSE
      </text>
      <path d="M168 42h144" className="art__rule" />
      {rows.map(([name, price], i) => (
        <g key={name}>
          <text x="168" y={62 + i * 18} className="art__ticket">
            {name}
          </text>
          <text x="312" y={62 + i * 18} textAnchor="end" className="art__ticket">
            {price}
          </text>
        </g>
      ))}
      <path d="M168 108h144" className="art__rule" />
      <text x="168" y="126" className="art__ticket art__ticket--head">
        TOTAL
      </text>
      <text x="312" y="126" textAnchor="end" className="art__ticket art__ticket--head">
        6 500
      </text>
      <g transform="translate(190 140) scale(2.7)">
        <path d={qrPath} className="art__qr" />
      </g>
    </svg>
  )
}

function Match3Art() {
  const size = 44
  const board = [
    'ABCADB',
    'CADBCA',
    'BAAACD',
    'ACBDBC',
  ]
  const matched = new Set(['2-1', '2-2', '2-3'])
  const shape = (kind, x, y, on) => {
    const cx = x + size / 2
    const cy = y + size / 2
    const className = on ? 'art__fill' : 'art__gem'
    if (kind === 'A') return <circle cx={cx} cy={cy} r="14" className={className} />
    if (kind === 'B') return <rect x={cx - 12} y={cy - 12} width="24" height="24" className={className} />
    if (kind === 'C') return <path d={`M${cx} ${cy - 16}l16 16-16 16-16-16z`} className={className} />
    return <path d={`M${cx} ${cy - 15}l15 26h-30z`} className={className} />
  }
  return (
    <svg className="art" viewBox="0 0 480 300" role="img" aria-label="Grille de jeu match-3 avec trois pièces alignées">
      <g transform="translate(108 62)">
        {board.map((row, r) =>
          [...row].map((kind, c) => {
            const x = c * size
            const y = r * size
            const on = matched.has(`${r}-${c}`)
            return (
              <g key={`${r}-${c}`}>
                <rect x={x} y={y} width={size} height={size} className="art__cell" />
                {shape(kind, x, y, on)}
              </g>
            )
          }),
        )}
        <rect x={size - 3} y={2 * size - 3} width={size * 3 + 6} height={size + 6} className="art__select" />
      </g>
    </svg>
  )
}

const artworks = { face: FaceArt, receipt: ReceiptArt, match3: Match3Art }

export function ProjectCover({ project, priority = false }) {
  const { cover } = project
  if (cover.art) {
    const Art = artworks[cover.art]
    return (
      <div className="cover cover--art">
        <Art />
      </div>
    )
  }
  return (
    <div className={`cover ${cover.fit === 'contain' ? 'cover--contain' : ''}`}>
      <img
        src={cover.src}
        alt={cover.alt}
        width={cover.width}
        height={cover.height}
        loading={priority ? 'eager' : 'lazy'}
        decoding="async"
      />
    </div>
  )
}
