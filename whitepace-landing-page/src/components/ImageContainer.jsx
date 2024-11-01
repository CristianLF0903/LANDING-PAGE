function ImgContainer ({ src, alt, sizes }) {
  return (
    <div className={sizes}>
      <img src={src} alt={alt} style={{ maxWidth: '100%', height: 'auto' }} />
    </div>
  )
}

export default ImgContainer
