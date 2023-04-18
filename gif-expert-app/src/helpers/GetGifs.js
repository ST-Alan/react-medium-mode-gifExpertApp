export const GetGifs = async(category)=>{

    // const url=`https://api.rainforestapi.com/request?api_key=286681EBA8984592B7A988D746A11F55&type=search&amazon_domain=amazon.com&search_term=${category}`
    // const resp= await fetch(url)
    // const {search_results}= await resp.json()
    // console.log('data await resp.json()',search_results)


    const url=`https://api.rainforestapi.com/request?api_key=286681EBA8984592B7A988D746A11F55&type=search&amazon_domain=amazon.com&search_term=${category}&page=1&max_page=1`

    // Para medir el tiempo al iniciar
    const startTime = performance.now();
    // console.log('startTime',startTime)

    const resp= await fetch(url)

    //Para medir el tiempo de respuesta de la API al finalizar
    const endTime = performance.now();
    const responseTime = endTime - startTime;
    console.log(`Response time: ${responseTime} milliseconds`);

    const {search_results}= await resp.json()

    console.log('data await resp.json()',search_results)

      //Api de gif
      // const url=`https://api.giphy.com/v1/gifs/search?api_key=lmPXFwA0NiwrgXicePsNZzyjIe4Ww9CC&q=${category}&limit=10`
      // const resp= await fetch(url)
      // const {data}= await resp.json()
      // console.log('data await resp.json()',data)



    // Para API de Rainforest
      const gifs = search_results.map(img=>({
        id: img.asin,
        title: img.title,
        url: img.image,
        // price: img.price.name?img.raw:'El precio viene en otro valor'
      }))


    // código para buscar gifs
    // const gifs = data.map(img=>({
    //   id: img.id,
    //   title: img.title,
    //   url: img.images.downsized_medium.url
    // }))

    // console.log('search_results_2',search_results)
    console.log('Gifs', gifs)
    
    
    // Con esto quería pasar el tiempo de demora del API a los otros componentes
    return{
      gifs,
      responseTime
    }

//Este es el normal
// return gifs
}