"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import { useRentModal } from '@/app/hooks/useRentModal'
import CategoryRent from './components/CategoryRent'
import { FieldValues, useForm } from 'react-hook-form'
import next from 'next'
import LocationRent from './components/LocationRent'
import InfoRent from './components/InfoRent'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}
const RentModal = () => {
    const rentModal = useRentModal()
    const { register,
        handleSubmit,
        setValue,
        getValues,
        watch,
        formState: { errors } }
        = useForm<FieldValues>({
            defaultValues: {
                category: '',
                location: null,
                guestCount: 1,
                roomCount: 1,
                bathroomCount: 1,
                imageSrc: '',
                price: 1,
                title: '',
                description: '',
            }
        })
    const [step, setStep] = useState(STEPS.CATEGORY)
    const category = watch('category');
    const guestCount = watch("guestCount");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");

    const location = watch("location");
    const [body, setBody] = useState<any>();

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
            shouldDirty: true,
            shouldTouch: true,
            shouldValidate: true
        })
    }

    const onBack = () => {
        setStep(value => value - 1)
    }

    const onNext = () => {
        setStep(value => value + 1)
    }

    const actionLabel = useMemo(() => {
        if (step === STEPS.PRICE) {
            return 'Create'
        }
        return 'Next'
    }, [step])

    const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
            return undefined
        }

        return 'Back'
    }, [step]);

    useMemo(() => {
        switch (step) {
            case STEPS.CATEGORY:
                setBody(<CategoryRent setCustomValue={setCustomValue} category={category} />)
                break;
            case STEPS.LOCATION:
                setBody(<LocationRent setCustomValue={setCustomValue} location={location} />)
                break;
            case STEPS.INFO:
                setBody(<InfoRent setCustomValue={setCustomValue} guestCount={guestCount} roomCount={roomCount} bathroomCount={bathroomCount} />)
                break;
            default:
                break;
        }
    }, [step, location, guestCount, roomCount, bathroomCount])
    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={onNext}
            title='Airbnb your home'
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            body={body}
        />
    )
}

export default RentModal