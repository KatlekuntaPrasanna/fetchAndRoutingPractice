import {Component} from 'react'
import Loader from 'react-loader-spinner'
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css'
import BlogItem from '../BlogItem'
import './index.css'

class BlogList extends Component {
  state = {
    isLoader: true,
    blogsData: [],
  }

  componentDidMount() {
    this.getBlog()
  }

  getBlog = async () => {
    const response = await fetch('https://apis.ccbp.in/blogs')
    const data = await response.json()
    const updatedData = data.map(each => ({
      id: each.id,
      title: each.title,
      imageUrl: each.image_url,
      avatarUrl: each.avatar_url,
      author: each.author,
      topic: each.topic,
    }))

    this.setState({blogsData: updatedData, isLoader: false})
  }

  render() {
    const {blogsData, isLoader} = this.state
    return (
      <div className="blog-list-container">
        {isLoader ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
          </div>
        ) : (
          blogsData.map(each => <BlogItem key={each.id} blogData={each} />)
        )}
      </div>
    )
  }
}

export default BlogList
