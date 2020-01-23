import MasterPage from './../Componentes/Master';
import fetch from 'isomorphic-unfetch';
import Precio from '../Componentes/Precio';
import Noticias from '../Componentes/Noticias'
const Index = (props) => (
  <MasterPage>
    <div className="row">
      <div className="col-12">
        <h2>Precio del bitcoin</h2>
        <Precio
          precio={props.precioBitcoin.quotes.USD}
        />
      </div>
      <div className="col-md-8">
        <h2>Noticias sobre Bitcoin</h2>
        <Noticias 
          Noticias={props.Noticias}
        />
      </div>
      <div className="col-md-4">
        <h2>Próximos eventos Bitcoin</h2>
        {console.log(props.Eventos)}

      </div>
    </div>
  </MasterPage>

);
Index.getInitialProps = async () => {
  const precio = await fetch(`https://api.coinmarketcap.com/v2/ticker/1/`);
  const Noticias = await fetch(`https://newsapi.org/v2/everything?q=bitcoin&sortBy=publishedAt&apikey=dfe65b928a8b45abb028e0c589924bbc&language=es`)
  const Eventos = await fetch(`http://www.eventbriteapi.com/v3/events/search/?q=Bitcoin&sort_by=date&token=6DPLGRUC2JHSDSE26GV3&locale=es_ES`)
  
  
  const resPrecio = await precio.json();
  const resNoticias = await Noticias.json();
  const resEventoss = await Eventos.json();
  return {
    precioBitcoin: resPrecio.data,
    Noticias: resNoticias.articles,
    Eventos:resEventoss
  };

}


export default Index;