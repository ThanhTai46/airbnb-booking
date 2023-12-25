import React from "react";
import Heading from "../../Heading";
import ImageUpload from "../../ImageUpload";

const UploadImageRent = ({ setCustomValue, imageSrc }: any) => {
    return <div className="flex flex-col gap-8">
        <Heading
            title="Add a photo of your place"
            subtitle="Show guests what your place looks like!"
        />
        <ImageUpload
            onChange={(value) => setCustomValue('imageSrc', value)}
            value={imageSrc}
        />
    </div>;
};

export default UploadImageRent;
