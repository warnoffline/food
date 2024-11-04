import React, { memo, useCallback } from 'react';
import styles from './Pagination.module.scss';
import BackArrowIcon from '../icons/BackArrowIcon';
import Text from '../Text';

type PaginationProps = {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
};

const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = useCallback(
    (page: number) => {
      if (page >= 1 && page <= totalPages) {
        onPageChange(page);
      }
    },
    [onPageChange, totalPages],
  );

  const renderPrevButton = () => (
    <button
      key="prev"
      className={styles['pagination__btn-prev']}
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
        <button key={1} className={styles['pagination__btn-page']} onClick={() => handlePageChange(1)}>
          <Text view="p-l">1</Text>
        </button>,
      );
    }

    if (currentPage > 3) {
      buttons.push(
        <Text view="p-l" weight="medium" className={styles['pagination__ellipsis']} key="ellipsis-start">
          ...
        </Text>,
      );
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={`${styles['pagination__btn-page']} ${currentPage === page ? styles['pagination__btn-page--active'] : ''}`}
          onClick={() => handlePageChange(page)}
        >
          <Text view="p-l">{page}</Text>
        </button>,
      );
    }

    if (endPage < totalPages - 1) {
      buttons.push(
        <Text view="p-l" weight="medium" className={styles['pagination__ellipsis']} key="ellipsis-end">
          ...
        </Text>,
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <button
          key={totalPages}
          className={styles['pagination__btn-page']}
          onClick={() => handlePageChange(totalPages)}
        >
          <Text view="p-l">{totalPages}</Text>
        </button>,
      );
    }

    return buttons;
  };

  const renderNextButton = () => (
    <button
      key="next"
      className={styles['pagination__btn-next']}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <BackArrowIcon fill="none" stroke={currentPage === totalPages ? 'secondary' : 'primary'} width={32} height={32} />
    </button>
  );

  return (
    <div className={styles['pagination']}>
      <div className={styles['pagination__prev-group']}>{renderPrevButton()}</div>
      <div className={styles['pagination__page-group']}>{renderPageButtons()}</div>
      <div className={styles['pagination__next-group']}>{renderNextButton()}</div>
    </div>
  );
};

export default memo(Pagination);
