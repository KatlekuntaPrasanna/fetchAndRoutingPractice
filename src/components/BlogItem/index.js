import {Link} from 'react-router-dom'
import './index.css'

const BlogItem = props => {
  const {blogData} = props
  const {id, title, imageUrl, avatarUrl, author, topic} = blogData
  return (
    <Link to={`/blogs/${id}`} className="item-link-container">
      <div className="item-container">
        <img src={imageUrl} alt={`item${id}`} className="image" />
        <div className="item-info">
          <p className="item-topic">{topic}</p>
          <h1 className="item-title">{title}</h1>
          <div className="avatar-info">
            <img src={avatarUrl} alt={`avatar${id}`} className="avatar" />
            <p className="author">{author}</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
export default BlogItem
