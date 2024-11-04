import HeadLine from './Headline'
import ImgContainer from './ImageContainer'

function Section({headline, imgContainer, className, id}) {
    return (
        <section className={className} id={id}>
          <HeadLine
            title={headline.title}
            paragraph={headline.paragraph}
            btnText={headline.btnText}
          />
          { imgContainer ? 
            <ImgContainer
                src={imgContainer.src}
                alt={imgContainer.alt}
                sizes={imgContainer.sizes}
            /> : null}
        </section>
    )
}

export default Section