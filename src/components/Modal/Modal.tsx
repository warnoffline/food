import React, { memo, useCallback, useEffect } from 'react';
import Text from '../Text';
import s from './Modal.module.scss';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

const Modal: React.FC<ModalProps> = ({ open, onClose, title, children, actions }) => {
  const handleOverlayMouseDown = useCallback(
    (e: React.MouseEvent) => {
      e.stopPropagation();
      onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      {open && (
        <div className={s.root__overlay} onMouseDown={handleOverlayMouseDown}>
          <div className={s.root__content} onMouseDown={(e) => e.stopPropagation()}>
            <div className={s.root__header}>
              {title && (
                <Text view="title" className={s.root__title}>
                  {title}
                </Text>
              )}
              <button className={s['root__btn-close']} onClick={onClose}>
                &times;
              </button>
            </div>
            <div className={s.root__body}>{children}</div>
            {actions && <div className={s.root__actions}>{actions}</div>}
          </div>
        </div>
      )}
    </>
  );
};

export default memo(Modal);
