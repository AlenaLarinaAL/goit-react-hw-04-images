import React, { useState, useEffect } from 'react';
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

export const App = () => {
  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [showButton, setShowButton] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (!query) return;
    setIsLoading(true);
    setShowButton(false);
    const getImages = async () => {
      try {
        const { hits, totalHits } = await fetchImages(query, page);

        if (!hits.length) {
          notify();
          return;
        }

        setImages(prevImg => [...prevImg, ...hits]);
        setShowButton(page < Math.ceil(totalHits / 12));
      } catch (error) {
        toast.error(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    getImages();
  }, [query, page]);

  const handleFormSubmit = query => {
    setQuery(query);
    setPage(1);
    setImages([]);
  };

  const renderImages = () => setPage(prevPage => prevPage + 1);

  const openModal = (src, alt) => {
    setShowModal({ src, alt });
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <>
      <ToastContainer autoClose={3000} />
      <Section>
        <Searchbar onSubmit={handleFormSubmit} />

        {isLoading && <Spinner />}

        {images.length > 0 && (
          <ImageGallery images={images} openModal={openModal} />
        )}

        {showModal && (
          <Modal
            src={showModal.src}
            alt={showModal.alt}
            closeModal={closeModal}
          />
        )}

        {showButton && <Button onClick={renderImages} />}
      </Section>
    </>
  );
};
