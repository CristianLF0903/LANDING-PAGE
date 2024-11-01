import ButtonPrimary from './Button'

function HeadLine ({ title, paragraph, btnText }) {
  const classTitle = `text-${title.color} font-bold text-6xl tracking-wider`
  const classP = `text-${paragraph.color} text-lg my-7 relative`
  return (
    <div>
      <h2 className={classTitle} dangerouslySetInnerHTML={{ __html: title.content }} />
      <p className={classP}>{paragraph.content}</p>
      <ButtonPrimary>{btnText}</ButtonPrimary>
    </div>
  )
}

export default HeadLine
