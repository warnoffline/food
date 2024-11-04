import React, { memo, useCallback } from 'react';
import s from './Pagination.module.scss';
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
      className={s.root__prev}
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
        <button key={1} className={s.root__page} onClick={() => handlePageChange(1)}>
          <Text view="p-l">1</Text>
        </button>,
      );
    }

    if (currentPage > 3) {
      buttons.push(
        <Text view="p-l" weight="medium" className={s.root__ellipsis} key="ellipsis-start">
          ...
        </Text>,
      );
    }

    for (let page = startPage; page <= endPage; page++) {
      buttons.push(
        <button
          key={page}
          className={`${s.root__page} ${currentPage === page ? s['root__page-active'] : ''}`}
          onClick={() => handlePageChange(page)}
        >
          <Text view="p-l">{page}</Text>
        </button>,
      );
    }

    if (endPage < totalPages - 1) {
      buttons.push(
        <Text view="p-l" weight="medium" className={s.root__ellipsis} key="ellipsis-end">
          ...
        </Text>,
      );
    }

    if (endPage < totalPages) {
      buttons.push(
        <button key={totalPages} className={s.root__page} onClick={() => handlePageChange(totalPages)}>
          <Text view="p-l">{totalPages}</Text>
        </button>,
      );
    }

    return buttons;
  };

  const renderNextButton = () => (
    <button
      key="next"
      className={s.root__next}
      onClick={() => handlePageChange(currentPage + 1)}
      disabled={currentPage === totalPages}
    >
      <BackArrowIcon fill="none" stroke={currentPage === totalPages ? 'secondary' : 'primary'} width={32} height={32} />
    </button>
  );

  return (
    <div className={s.root}>
      <div className={s.root__prevGroup}>{renderPrevButton()}</div>
      <div className={s.root__pageGroup}>{renderPageButtons()}</div>
      <div className={s.root__nextGroup}>{renderNextButton()}</div>
    </div>
  );
};

export default memo(Pagination);
