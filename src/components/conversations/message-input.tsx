"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  placeholder: string;
  id: string;
  type?: boolean;
  required?: boolean;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
}
export default function MessageInput({}: MessageInputProps) {
  return <div>MessageInput</div>;
}
