import React from "react";
import Heading from "../../Heading";
import Counter from "../../Inputs/Counter";

const InfoRent = ({ setCustomValue, guestCount, roomCount, bathroomCount }: any) => {
    return <div className="flex flex-col gap-8">
        <Heading
            title="Share some basics about your place"
            subtitle="What amenities do you have"
        />
        <Counter
            title="Guests"
            subtitle="How many guests do you allow?"
            value={guestCount}
            onChange={(value) => setCustomValue('guestCount', value)}
        />
        <hr />
        <Counter
            onChange={(value) => setCustomValue('roomCount', value)}
            value={roomCount}
            title="Rooms"
            subtitle="How many rooms do you have?"
        />
        <hr />
        <Counter
            onChange={(value) => setCustomValue('bathroomCount', value)}
            value={bathroomCount}
            title="Bathrooms"
            subtitle="How many bathrooms do you have?"
        />
    </div>;
};

export default InfoRent;
