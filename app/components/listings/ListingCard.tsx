"use client"

import useCountries from "@/app/hooks/useCountries";
import { Listing, Reservations, User } from "@prisma/client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useCallback, useMemo } from "react";
import HeartButton from "../HeartButton";
import Button from "../Button";
import { format } from "date-fns";

interface ListingCardProps {
    data: Listing;
    reservation?: Reservations;
    onAction?: (id: string) => void
    disabled?: boolean
    actionLabel?: string
    actionId?: string
    currentUser: any
}
export const ListingCard: React.FC<ListingCardProps> = ({
    data,
    reservation,
    onAction,
    disabled,
    actionId = "",
    currentUser,
    actionLabel
}) => {
    const router = useRouter();

    const handleCancel = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()

        if (disabled) {
            return;
        }

        onAction?.(actionId)
    }, [disabled, onAction, actionId])

    const price = useMemo(() => {
        if (reservation) {
            return reservation.totalPrice;
        }

        return data.price;
    }, [reservation, data.price])

    const reservationDate = useMemo(() => {
        if (!reservation) {
            return null;
        }

        const start = new Date(reservation.startDate);
        const end = new Date(reservation.endDate);

        return `${format(start, 'PP')} - ${format(end, 'PP')}`;
    }, [reservation])

    const { getCountryByValue } = useCountries();

    const location = getCountryByValue(data.localtionValue)
    return <div onClick={() => router.push(`/listings/${data.id}`)}
        className="col-span-1 cursor-pointer group"
    >
        <div className="w-full flex flex-col gap-2 relative">
            <div>{data.title}</div>
            <div className="aspect-square w-full h-[250px] relative overflow-hidden rounded-xl">
                <Image fill alt="Listing" src={data.imageSrc} className="object-cover w-full h-full group-hover:scale-110 transition" />
                <div className="absolute top-3 right-3">
                    <HeartButton currentUser={currentUser} listingId={data.id} />
                </div>
            </div>
            <div className="font-semibold text-lg">
                {location?.region}, {location?.label}
            </div>
            <div className="font-light text-neutral-500">
                {reservationDate || data.category}
            </div>
            <div className="flex flex-row items-center gap-1">
                <div className="font-semibold">
                    $ {price}
                </div>
                {!reservation && (
                    <div className="font-light">night</div>
                )}
            </div>
            {onAction && actionLabel && (
                <Button
                    disabled={disabled}
                    small
                    label={actionLabel}
                    onClick={handleCancel}
                />
            )}
        </div>
    </div >;
};
