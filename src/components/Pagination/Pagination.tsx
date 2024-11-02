import React from 'react';
import styles from './Pagination.module.scss';
import BackArrowIcon from '../icons/BackArrowIcon';
import Text from '../Text';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      onPageChange(page);
    }
  };

  const renderPrevButton = () => (
    <button
      key="prev"
      className={styles['btn-prev']}
      onClick={() => handlePageChange(currentPage - 1)}
      disabled={currentPage === 1}
    >
      <BackArrowIcon fill="none" stroke={currentPage === 1 ? 'secondary' : 'primary'} width={32} height={32} />
    </button>
  );
  const renderPageButtons = () => {
    const buttons = [];
    const startPage = Math.max(1, currentPage - 1);
    const endPage = Math.min(totalPages, currentPage + 2);

    if (currentPage > 2) {
      buttons.push(
        <button key={1} className={styles['btn-page']} onClick={() => handlePageChange(1)}>
          <Text view="p-18">1</Text>
        </button>,
      );
    }

    if (currentPage > 3) {
      buttons.push(
        <Text view="p-18" weight="medium" className={styles['ellipsis']} key="ellipsis-start">
          ...
        </Text>,
      );
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={`${styles['btn-page']} ${currentPage === page ? styles['active'] : ''}`}
          onClick={() => handlePageChange(page)}
        >
          <Text view="p-18">{page}</Text>
        </button>,
      );
    }

    if (endPage < totalPages - 1) {
      buttons.push(
        <Text view="p-18" weight="medium" className={styles['ellipsis']} key="ellipsis-end">
          ...
        </Text>,
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <button key={totalPages} className={styles['btn-page']} onClick={() => handlePageChange(totalPages)}>
          <Text view="p-18">{totalPages}</Text>
        </button>,
      );
    }

    return buttons;
  };

  const renderNextButton = () => (
    <button
      key="next"
      className={styles['btn-next']}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <BackArrowIcon fill="none" stroke={currentPage === totalPages ? 'secondary' : 'primary'} width={32} height={32} />
    </button>
  );

  return (
    <div className={styles['pagination']}>
      <div className={styles['prev-group']}>{renderPrevButton()}</div>
      <div className={styles['page-group']}>{renderPageButtons()}</div>
      <div className={styles['next-group']}>{renderNextButton()}</div>
    </div>
  );
};

export default Pagination;
