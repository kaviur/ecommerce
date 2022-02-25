import axios from 'axios';
import Page from '../../components/Page';

export async function getServerSideProps({req, query}){

  //console.log(req.query);
  const {data:product} = await axios.get(`http://${req.headers.host}/api/productos/item?slug=${query.id}`)
  //const product = await ProductItem.json()

  return {
      props:{
        product,
        slug:query.id
      }
  }
}

export default function Index({product,slug}) {

    return (
    <Page>
      <p>Hola {product[0].name}</p>
      {console.log(product)}
      {/* <Products products={product}/> */}
    </Page>
  )
}
