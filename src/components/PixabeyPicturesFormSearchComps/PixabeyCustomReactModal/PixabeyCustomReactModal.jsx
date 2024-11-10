import ReactModal from 'react-modal';

export const PixabeyCustomReactModal = ({
  showModal,
  closeModal,
  imgModalSrc,
}) => {
  return (
    <ReactModal
      isOpen={showModal}
      onRequestClose={closeModal} // Закриває модальне вікно при натисканні поза ним або натисканні клавіші Esc
      contentLabel="Картинка в модальному вікні"
    >
      <button onClick={closeModal} style={{ marginBottom: '10px' }}>
        Закрити
      </button>
      <img src={imgModalSrc} alt="Модальне зображення" />
    </ReactModal>
  );
};
