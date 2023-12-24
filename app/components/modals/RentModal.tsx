"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import { useRentModal } from '@/app/hooks/useRentModal'
import CategoryRent from './components/CategoryRent'
import { FieldValues, useForm } from 'react-hook-form'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 3,
    IMAGES = 4,
    DESCRIPTION = 5,
    PRICE = 6
}
const RentModal = () => {
    const rentModal = useRentModal()
    const { register,
        handleSubmit,
        setValue,
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
    const [body, setBody] = useState();

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

    useEffect(() => {
        switch (step) {
            case STEPS.CATEGORY:
                setStep(STEPS.CATEGORY)
                break;
            default:
                break;
        }
    }, [body])
    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={rentModal.onClose}
            title='Airbnb your home'
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            body={<CategoryRent setCustomValue={setCustomValue} category={category} />}
        />
    )
}

export default RentModal