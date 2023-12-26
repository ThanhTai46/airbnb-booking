import React from "react";
import { useLoginModal } from "../hooks/useLoginModal";
import { CircularProgress, Modal } from "@nextui-org/react";

const Loading = () => {
    const { isOpen } = useLoginModal()
    return <Modal isOpen={isOpen} >
        <CircularProgress aria-label="Loading..." />
    </Modal>;
};

export default Loading;
