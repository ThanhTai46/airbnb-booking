import React from 'react'
import Heading from '../../Heading'

const LocationRent = () => {
    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="Where is your place located?"
                subtitle="Help guests find you!"
            />
            {/* <CountrySelect
                value={location}
                onChange={(value) => setCustomValue('location', value)}
            />
            <Map center={location?.latlng} /> */}
        </div>
    )
}

export default LocationRent