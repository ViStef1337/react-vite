import { useEffect, useState } from 'react';
import { PhotosForm } from '../../components/PhotosComps/PhotosForm/PhotosForm.jsx';
import { getPhotos } from '../../service/photosAPI.js';
import { PhotosList } from '../../components/PhotosComps/PhotosList/PhotosList.jsx';
import { LoadMoreButton } from '../../components/LoadMoreButton.jsx';
import { Loader } from '../../components/PhotosComps/Loader/Loader.jsx';
import { ModalImage } from '../../components/PhotosComps/ModalImage/ModalImage.jsx';
import styles from './Photos.module.css';

export const Photos = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loading, setIsLoadig] = useState(false);
  const [showloadMore, setShowLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgModalSrc, setImgModalSrc] = useState('');

  useEffect(() => {
    if (!query) {
      return;
    }
    async function fetchData() {
      setIsLoadig(true);
      try {
        const { photos, total_results, per_page } = await getPhotos(
          query,
          page,
        );
        setPhotos(prevPhotos => [...prevPhotos, ...photos]);
        setShowLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoadig(false);
      }
    }
    fetchData();
  }, [query, page]);

  const onSubmit = text => {
    setQuery(text);
    setPhotos([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };

  const imgOnClickModal = src => {
    console.log(src);
    setShowModal(true);
    setImgModalSrc(src);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className={styles.div}>
      <PhotosForm onSubmit={onSubmit} />
      {loading && <Loader />}
      <PhotosList photos={photos} imgOnClickModal={imgOnClickModal} />
      {showloadMore && <LoadMoreButton onClick={handleLoadMore} />}
      {showModal && (
        <ModalImage
          largeImgSrc={imgModalSrc}
          closeModal={closeModal}
          showModal={showModal}
        />
      )}
    </div>
  );
};
