import './NoticePage.css'
import PostCard from '../Cards/PostCard.jsx'

const NoticePage = () => {

  const newsData = [
    { id: 1, title: 'Titulo Noticia 1', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta ratione voluptatem ea expedita voluptates sapiente ut itaque, sequi architecto reiciendis corporis placeat mollitia aperiam possimus eaque dignissimos nobis tenetur.' },
    { id: 2, title: 'Título Noticia 2', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta ratione voluptatem ea expedita voluptates sapiente ut itaque, sequi architecto reiciendis corporis placeat mollitia aperiam possimus eaque dignissimos nobis tenetur.'},
    { id: 3, title: 'Título Noticia 3', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta ratione voluptatem ea expedita voluptates sapiente ut itaque, sequi architecto reiciendis corporis placeat mollitia aperiam possimus eaque dignissimos nobis tenetur.'},
    { id: 4, title: 'Título Noticia 4', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta ratione voluptatem ea expedita voluptates sapiente ut itaque, sequi architecto reiciendis corporis placeat mollitia aperiam possimus eaque dignissimos nobis tenetur.Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dicta ratione voluptatem ea expedita voluptates sapiente ut itaque, sequi architecto reiciendis corporis placeat mollitia aperiam possimus eaque dignissimos nobis tenetur.'}
  ];

return (
    <div className="noticePage">
        <div className='notTitle'>
            <h1>NOTICIES</h1>
        </div>
        <div className="postCards-container">
          {newsData.map ((news) => 
          <PostCard key={news.id} title={news.title} content={news.content} />
          )}
      </div>
    </div>
  );
}

export default NoticePage;