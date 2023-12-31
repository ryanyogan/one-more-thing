"use client";

import Image from "next/image";
import Modal from "../ui/modal";

interface ImageModalProps {
  src?: string | null;
  isOpen?: boolean;
  onClose: () => void;
}

export default function ImageModal({ src, isOpen, onClose }: ImageModalProps) {
  if (!src) {
    return null;
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="image" className="object-cover" fill src={src} />
      </div>
    </Modal>
  );
}
