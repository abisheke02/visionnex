import { useRef, useCallback } from 'react'

/**
 * Drop-in wrapper that adds premium hover effects to any card.
 * Sets --mx / --my CSS vars on mousemove for the radial spotlight.
 * All visual styling lives in .hover-card CSS rules in index.css.
 */
export default function HoverCard({ tag: Tag = 'div', className = '', style, children, ...rest }) {
  const ref = useRef(null)

  const handleMouseMove = useCallback((e) => {
    const el = ref.current
    if (!el) return
    const { left, top, width, height } = el.getBoundingClientRect()
    el.style.setProperty('--mx', `${((e.clientX - left) / width) * 100}%`)
    el.style.setProperty('--my', `${((e.clientY - top) / height) * 100}%`)
  }, [])

  const handleMouseLeave = useCallback(() => {
    const el = ref.current
    if (!el) return
    el.style.setProperty('--mx', '50%')
    el.style.setProperty('--my', '50%')
  }, [])

  return (
    <Tag
      ref={ref}
      className={`hover-card ${className}`.trim()}
      style={{ '--mx': '50%', '--my': '50%', ...style }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...rest}
    >
      {children}
    </Tag>
  )
}
