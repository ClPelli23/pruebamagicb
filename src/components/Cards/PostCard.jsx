import { PropTypes } from 'prop-types';
import './PostCard.css'
import {format} from 'date-fns';


const PostCard = ({ title, content, created_at }) => {

  const formattedDate = created_at ? format(new Date(created_at), 'dd/MM/yyyy HH:mm:ss'): ' ' ;

  return(
    <div className='post-card'>
      <h2>{title}</h2>
      <p>{content}</p>
      <p>Fecha de creación {formattedDate}</p>
      {/* Agregar más elementos segun sea necesario*/}
    </div>
  );
};

PostCard.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  created_at: PropTypes.string.isRequired,
};


export default PostCard;
