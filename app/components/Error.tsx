"use client";

interface ErrorInterface {
  message: string | undefined;
}
const Error: React.FC<ErrorInterface> = ({ message }) => {
  return message ? (
    <div className="text-red-500 text-[13px] leading-[17px]">{message}</div>
  ) : null;
};

export default Error;
