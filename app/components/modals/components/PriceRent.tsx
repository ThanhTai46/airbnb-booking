import React from "react";
import Heading from "../../Heading";
import Input from "../../Inputs/input";

const PriceRent = ({ isLoading, register, errors }: any) => {
    return <>
        <div className="flex flex-col gap-8">
            <Heading
                title="Now, set your price"
                subtitle="How much do you charge per night?"
            />
            <Input
                id="price"
                label="Price"
                formatPrice
                type="number"
                disabled={isLoading}
                register={register}
                errors={errors}
                required
            />
        </div>
    </>;
};

export default PriceRent;
