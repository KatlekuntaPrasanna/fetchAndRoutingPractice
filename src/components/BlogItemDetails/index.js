import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import './index.css'

class BlogItemDetails extends Component {
  state = {
    blogdata: {},
    isLoader: true,
  }

  componentDidMount() {
    this.getBlogs()
  }

  getBlogs = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await response.json()
    const updatedData = {
      title: data.title,
      imageUrl: data.image_url,
      content: data.content,
      avatarUrl: data.avatar_url,
      author: data.author,
    }
    console.log(updatedData)

    this.setState({blogdata: updatedData, isLoader: false})
  }

  renderBlogDetails() {
    const {blogdata} = this.state
    const {title, author, imageUrl, avatarUrl, content} = blogdata
    return (
      <div className="blog-container">
        <h2 className="blog-title">{title}</h2>
        <div className="author-container">
          <img src={avatarUrl} alt={author} className="author-image" />
          <p className="author-name">{author}</p>
        </div>
        <img src={imageUrl} alt={title} className="blog-image" />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    const {isLoader} = this.state
    return (
      <div>
        {isLoader ? (
          <Loader type="TailSpin" color="#00BFFF" width={50} height={50} />
        ) : (
          this.renderBlogDetails()
        )}
      </div>
    )
  }
}

export default BlogItemDetails
