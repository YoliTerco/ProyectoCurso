import Noticia from './Noticia';
const Noticias = (props) => {
  return (
    <div className="row">
      {props.Noticias.map((noticia) => (
        <Noticia
          key={noticia.url}
          Noticia={noticia}
        />
      ))}
    </div>
  );
}
export default Noticias;