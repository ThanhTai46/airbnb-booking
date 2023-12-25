"use client"

import React, { useMemo } from 'react'
import Heading from '../../Heading'
import CountrySelect from '../../Inputs/CountrySelect'
import dynamic from 'next/dynamic'

interface Props {
    location?: any
    setCustomValue: (id: string, value: any) => void,
    latlng?: []
}

const LocationRent = ({ location, setCustomValue }: Props) => {
    const Map = useMemo(() => dynamic(() => import('../../Map'), {
        ssr: false
    }), [location]);

    return (
        <div className="flex flex-col gap-8">
            <Heading
                title="Where is your place located?"
                subtitle="Help guests find you!"
            />

            <CountrySelect onChange={(value) => setCustomValue('location', value)} />

            <Map center={location?.latlng} />
        </div>
    )
}

export default LocationRent