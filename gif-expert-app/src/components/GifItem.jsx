
// Lo que está entre corchete es la desestructuración que viene de la props en GifGrid
export const GifItem = ({title, url,id,price}) => {

    console.log(title, url,id)

  return (
    <div className="card">
      <img src={url} alt={title} />
      <p>{title}</p>
      {/* <small>{price}</small> */}
    </div>
  )
}
