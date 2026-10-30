import { Check } from 'lucide-react'
import { pipeline } from '../data/skills.js'
import { useInView } from './Reveal.jsx'

function PipelineStep({ item, index }) {
  const [ref, inView] = useInView({ threshold: 0.6, rootMargin: '0px 0px -12% 0px' })
  return (
    <li ref={ref} className={`pipe-step ${inView ? 'is-passed' : ''}`}>
      <span className="pipe-step__node" aria-hidden="true">
        <Check size={16} strokeWidth={3} />
      </span>
      <span className="pipe-step__num" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <div className="pipe-step__body">
        <h3 className="pipe-step__title">{item.title}</h3>
        <p className="pipe-step__text">{item.text}</p>
      </div>
      <p className="pipe-step__gate">
        <span className="pipe-step__gate-label">Contrôle</span>
        {item.gate}
      </p>
    </li>
  )
}

export function Pipeline() {
  return (
    <ol className="pipeline">
      {pipeline.map((item, index) => (
        <PipelineStep key={item.step} item={item} index={index} />
      ))}
    </ol>
  )
}
