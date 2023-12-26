"use client"

import React, { useEffect, useMemo, useState } from 'react'
import Modal from './Modal'
import { useRentModal } from '@/app/hooks/useRentModal'
import CategoryRent from './components/CategoryRent'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import LocationRent from './components/LocationRent'
import InfoRent from './components/InfoRent'
import UploadImageRent from './components/UploadImageRent'
import DescriptionRent from './components/DescriptionRent'
import PriceRent from './components/PriceRent'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useRouter } from 'next/navigation'
import { useLoading } from '@/app/hooks/useLoading'

enum STEPS {
    CATEGORY = 0,
    LOCATION = 1,
    INFO = 2,
    IMAGES = 3,
    DESCRIPTION = 4,
    PRICE = 5
}
const RentModal = () => {
    const { onOpen, onClose } = useLoading();
    const rentModal = useRentModal()
    const {
        register,
        handleSubmit,
        reset,
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
    const imageSrc = watch('imageSrc');
    const category = watch('category');
    const guestCount = watch("guestCount");
    const roomCount = watch("roomCount");
    const bathroomCount = watch("bathroomCount");
    const title = watch("title");
    const description = watch("description");
    const price = watch("price");

    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const location = watch("location");
    const [body, setBody] = useState<React.ReactElement>();

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

    const onSubmit: SubmitHandler<FieldValues> = async (data) => {
        if (step !== STEPS.PRICE) {
            return onNext()
        }

        setIsLoading(true);
        await axios.post('/api/listings', data)
            .then(() => {
                toast.success('Listing created!');
                router.refresh();
                reset();
                setStep(STEPS.CATEGORY)
                onOpen();
                rentModal.onClose();
            })
            .catch(() => {
                toast.error('Something went wrong.');
            })
            .finally(() => {
                onClose();
                setIsLoading(false);
            })
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
            case STEPS.IMAGES:
                setBody(<UploadImageRent setCustomValue={setCustomValue} imageSrc={imageSrc} />)
                break;
            case STEPS.DESCRIPTION:
                setBody(<DescriptionRent isLoading={isLoading} register={register} errors={errors} />)
                break;
            case STEPS.PRICE:
                setBody(<PriceRent isLoading={isLoading} register={register} errors={errors} />)
                break;
            default:
                break;
        }
    }, [step, location, guestCount, roomCount, bathroomCount, imageSrc, title, description, price, category])
    return (
        <Modal
            isOpen={rentModal.isOpen}
            onClose={rentModal.onClose}
            onSubmit={handleSubmit(onSubmit)}
            title='Airbnb your home'
            secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
            actionLabel={actionLabel}
            secondaryActionLabel={secondaryActionLabel}
            body={body}
        />
    )
}

export default RentModal