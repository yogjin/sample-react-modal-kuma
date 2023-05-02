import React, { PropsWithChildren, ReactElement, useState } from 'react';
import './styles.css';

type Props = {
  trigger: ReactElement;
};

export const KumaModal = ({ trigger, children }: PropsWithChildren<Props>) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      {React.cloneElement(trigger, { onClick: handleOpenModal })}
      {isModalOpen && (
        <div className="modal-overlay" onClick={handleCloseModal}>
          <div className="modal" onClick={(e) => e.stopPropagation()}>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
