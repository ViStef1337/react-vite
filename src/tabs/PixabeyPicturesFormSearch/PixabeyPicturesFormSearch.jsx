import { PixabeyPhotosForm } from '../../components/PixabeyPicturesFormSearchComps/PixabeyPhotosForm/PixabeyPhotosForm.jsx';
import { useEffect, useState } from 'react';
import { getImages } from '../../service/PixabeyPhotosAPI.js';
import { PixabeyPhotosList } from '../../components/PixabeyPicturesFormSearchComps/PixabeyPhotosList/PixabeyPhotosList.jsx';
import { LoadMoreButton } from '../../components/LoadMoreButton.jsx';
import styles from './PixabeyPicturesFormSearch.module.css';
import { PixabeyCustomReactModal } from '../../components/PixabeyPicturesFormSearchComps/PixabeyCustomReactModal/PixabeyCustomReactModal.jsx';

export const PixabeyPicturesFormSearch = () => {
  const [query, setQuery] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [loadMore, setLoadMore] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [imgModalSrc, setImgModalSrc] = useState('');

  const onSubmit = text => {
    setQuery(text);
    setPhotos([]);
    setPage(1);
  };

  const onClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    if (!query) {
      return;
    }

    async function fetchData() {
      try {
        const { hits, total_results, per_page } = await getImages(query, page);
        setPhotos(prevPhotos => [...prevPhotos, ...hits]);
        setLoadMore(page < Math.ceil(total_results / per_page));
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, [query, page]);

  const openModal = src => {
    setShowModal(true);
    setImgModalSrc(src);
  };

  const closeModal = () => {
    setShowModal(false);
    setImgModalSrc('');
  };

  return (
    <div className={styles.div}>
      <PixabeyCustomReactModal
        showModal={showModal}
        closeModal={closeModal}
        imgModalSrc={imgModalSrc}
      />

      <PixabeyPhotosForm addTask={onSubmit} />
      <PixabeyPhotosList photos={photos} openModal={openModal} />
      {loadMore && <LoadMoreButton onClick={onClick} />}
    </div>
  );
};
