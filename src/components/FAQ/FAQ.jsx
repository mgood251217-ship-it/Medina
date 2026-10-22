import { useId, useState } from 'react'
import Icon from '../Icon/Icon.jsx'
import Title from '../Title/Title.jsx'
import './FAQ.css'

export default function FAQ({
  items = [],
  title,
  subtitle,
  titleProps = {},
  multiple = false,
  defaultOpenId,
  background = 'var(--content)',
  questionColor = 'var(--primary-active)',
  answerColor = 'var(--text-secondary)',
  radius = 12,
  gap = 16,
  onToggle,
  className = '',
  style,
  ...props
}) {
  const groupId = useId()
  const [openIds, setOpenIds] = useState(() => defaultOpenId == null ? [] : [defaultOpenId])

  const toggleItem = (item, itemId) => {
    const isOpen = openIds.includes(itemId)
    setOpenIds(isOpen
      ? openIds.filter((id) => id !== itemId)
      : multiple ? [...openIds, itemId] : [itemId])
    onToggle?.(item, !isOpen)
  }

  return (
    <div
      className={`faq ${className}`.trim()}
      style={{
        '--faq-background': background,
        '--faq-question-color': questionColor,
        '--faq-answer-color': answerColor,
        '--faq-radius': typeof radius === 'number' ? `${radius}px` : radius,
        '--faq-gap': typeof gap === 'number' ? `${gap}px` : gap,
        ...style,
      }}
      {...props}
    >
      {title && (
        <div className="faq__heading">
          <Title {...titleProps} title={title} subtitle={subtitle} />
        </div>
      )}
      <div className="faq__items">
        {items.map((item, index) => {
          const itemId = item.id ?? index
          const isOpen = openIds.includes(itemId)
          const questionId = `${groupId}-question-${index}`
          const answerId = `${groupId}-answer-${index}`

          return (
            <div
              key={itemId}
              className={`faq__item${isOpen ? ' faq__item--open' : ''}`}
            >
              <button
                type="button"
                className="faq__question"
                id={questionId}
                aria-expanded={isOpen}
                aria-controls={answerId}
                onClick={() => toggleItem(item, itemId)}
              >
                <span>{item.question}</span>
                <span className="faq__indicator" aria-hidden="true">
                  <Icon name="plus" className="faq__plus" size={22} />
                  <Icon name="minus" className="faq__minus" size={22} />
                </span>
              </button>
              <div
                className="faq__panel"
                id={answerId}
                aria-labelledby={questionId}
                aria-hidden={!isOpen}
                inert={!isOpen}
              >
                <div className="faq__answer">
                  <div className="faq__answer-content">
                    {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                  </div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
