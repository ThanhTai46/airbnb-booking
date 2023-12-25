import React from "react";
import Heading from "../../Heading";
import Input from "../../Inputs/input";

const DescriptionRent = ({ isLoading, register, errors }: any) => {
    return <div className="flex flex-col gap-8">
        <Heading
            title="How would you describe your place?"
            subtitle="Short and sweet works best!"
        />

        <Input
            id="title"
            label="Title"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
        />
        <hr />
        <Input
            id="description"
            label="Description"
            disabled={isLoading}
            register={register}
            errors={errors}
            required
        />
    </div>;
};

export default DescriptionRent;
