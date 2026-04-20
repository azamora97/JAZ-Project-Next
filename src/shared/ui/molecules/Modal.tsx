// ✅ Client Component — usa useState
"use client";

import { createContext, useContext, useState, ReactNode } from "react";

interface ModalContextType {
  isOpen: boolean;
  open: () => void;
  close: () => void;
}

const ModalContext = createContext<ModalContextType | null>(null);

function useModal() {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("Los componentes modales deben usarse dentro de <Modal>");
  }
  return context;
}

function Modal({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <ModalContext.Provider
      value={{
        isOpen,
        open: () => setIsOpen(true),
        close: () => setIsOpen(false),
      }}
    >
      {children}
    </ModalContext.Provider>
  );
}

function ModalTrigger({ children }: { children: ReactNode }) {
  const { open } = useModal();

  return (
    <div onClick={open} className="modal-trigger">
      {children}
    </div>
  );
}

function ModalContent({ children }: { children: ReactNode }) {
  const { isOpen, close } = useModal();

  if (!isOpen) return null;

  return (
    <div className="modal-wrapper">
      <div className="modal-overlay" onClick={close} />
      <div className="modal-content"> {children} </div>
    </div>
  );
}

function ModalHeader({ children }: { children: ReactNode }) {
  return <div className="modal-header">{children}</div>;
}

function ModalBody({ children }: { children: ReactNode }) {
  return <div className="modal-body">{children}</div>;
}

function ModalFooter({ children }: { children: ReactNode }) {
  return <div className="modal-footer">{children}</div>;
}

function ModalClose({ children }: { children: ReactNode }) {
  const { close } = useModal();

  return (
    <div onClick={close} className="modal-close">
      {children}
    </div>
  );
}

// Compound
Modal.Trigger = ModalTrigger;
Modal.Content = ModalContent;
Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;
Modal.Close = ModalClose;

export default Modal;
