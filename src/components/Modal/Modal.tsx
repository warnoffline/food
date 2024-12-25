import React, { memo, useCallback, useEffect } from 'react';
import Text from '../Text';
import s from './Modal.module.scss';
import { motion, AnimatePresence } from 'framer-motion';

type ModalProps = {
  open: boolean;
  onClose: () => void;
  title?: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
};

const modalVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.8 },
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
    <AnimatePresence>
      {open && (
        <motion.div
          className={s.root__overlay}
          onMouseDown={handleOverlayMouseDown}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className={s.root__content}
            onMouseDown={(e) => e.stopPropagation()}
            variants={modalVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default memo(Modal);
