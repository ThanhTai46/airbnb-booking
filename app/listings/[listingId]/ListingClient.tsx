"use client"
import ListingHead from "@/app/components/listings/ListingHead";
import ListingInfo from "@/app/components/listings/ListingInfo";
import { categories } from "@/app/components/navbar/Categories";
import { Reservations } from "@prisma/client";
import React, { useMemo } from "react";

interface ListingClientProps {
    listing: any;
    reservation?: Reservations;
    currentUser: any
}

const ListingClient = ({ listing, currentUser }: ListingClientProps) => {
    const category = useMemo(() => {
        return categories.find((items) =>
            items.label === listing.category);
    }, [listing.category]);

    return <div className="max-w-screen-lg mx-auto">
        <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.localtionValue}
            id={listing.id}
            currentUser={currentUser}
        />
        <div
            className="
              grid 
              grid-cols-1 
              md:grid-cols-7 
              md:gap-10 
              mt-6
            "
        >
            <ListingInfo
                user={listing.user}
                category={category}
                description={listing.description}
                roomCount={listing.roomCount}
                guestCount={listing.guestCount}
                bathroomCount={listing.bathroomCount}
                locationValue={listing.localtionValue}
            />
            <div
                className="
                order-first 
                mb-10 
                md:order-last 
                md:col-span-3
              "
            >
                {/* <ListingReservation
                    price={listing.price}
                    totalPrice={totalPrice}
                /> */}
            </div>
        </div>
    </div>;
};

export default ListingClient;
