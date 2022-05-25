import ImageGallery from "components/ImageGallery/ImageGallery"
import Button from "components/Button/Button";
import Searchbar from "components/Searchbar/Searchbar";
import Loader from "components/Loader/Loader";
import { Component } from "react";
const axios = require('axios').default;
export default class App extends Component {
  state = {
    page: 1,
    key: "",
    loading: false,
    error: null,
    items: []
  }
  async componentDidUpdate(prevProps, prevState) {
    if (this.state.key !== prevState.key || this.state.page > prevState.page) {
      this.setState({
        loading: true,
        error: null
      });
      try {
        const response = await axios.get(`https://pixabay.com/api/?q=${this.state.key}&page=${this.state.page}&key=27028263-30a4c0e676d46eddbf4883679&image_type=photo&orientation=horizontal&per_page=12`)
        this.state.key === prevState.key
          ? this.setState((prev) => {
            return { items: [...prev.items, ...response.data.hits], loading: false }
          })
          : this.setState({ items: response.data.hits, loading: false })
      } catch (error) {
        this.setState({
          loading: false,
          error: error.message
        })
      }
    }

  }
  loadMore = () => {
    this.setState((prev) => {
      return {
        page: prev.page + 1
      }
    })
  }
  setKey = (data) => {
    this.setState({ key: data, page: 1 })
  }
  render() {
    const { items, loading } = this.state
    return (
      <div >
        <Searchbar
          onSubmit={this.setKey} />
        {Boolean(items.length) && <ImageGallery
          items={items} />}
        {Boolean(items.length) && !loading && <Button onClick={this.loadMore} />}
        <Loader boolean={this.state.loading} />
      </div >
    )
  };
};
