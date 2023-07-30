import React, { Component } from 'react';
import {
  Section,
  Searchbar,
  ImageGallery,
  Button,
  Spinner,
  Modal,
} from 'components';
import { fetchImages } from 'services/Api';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const notify = () => {
  toast.info(
    'There are not any images for your request...Please make another one'
  );
};

export class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    totalPages: 1,
    largeImage: null,
    isLoading: false,
    showButton: false,
  };

  componentDidUpdate(_, prevState) {
    const { query: prevQuery, page: prevPage } = prevState;
    const { query, page } = this.state;

    if (page !== prevPage || query !== prevQuery) {
      this.getImages();
    }
  }

  async getImages() {
    const { query, page, images } = this.state;

    this.setState({ isLoading: true, showButton: false });

    try {
      const { hits, totalHits } = await fetchImages(query, page);

      if (!hits.length) {
        notify();
        return;
      }

      this.setState({
        images: [...images, ...hits],
        showButton: this.state.page < Math.ceil(totalHits / 12),
      });
    } catch (error) {
      toast.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  }

  handleFormSubmit = query => {
    this.setState({ query, page: 1, images: [] });
  };

  setLargeImageURL = url => {
    this.setState({ largeImage: url });
  };

  renderImages = () => {
    this.setState(state => ({ page: state.page + 1 }));
  };

  render() {
    const { images, isLoading, largeImage, showButton } = this.state;

    return (
      <>
        <ToastContainer autoClose={3000} />
        <Section>
          <Searchbar onSubmit={this.handleFormSubmit} />

          {isLoading && <Spinner />}

          {images.length > 0 && (
            <ImageGallery images={images} onClick={this.setLargeImageURL} />
          )}

          {largeImage && (
            <Modal
              url={largeImage}
              onClose={() => this.setLargeImageURL(null)}
            />
          )}

          {showButton && <Button onClick={this.renderImages} />}
        </Section>
      </>
    );
  }
}
