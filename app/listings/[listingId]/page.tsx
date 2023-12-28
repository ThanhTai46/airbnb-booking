import getListingById from "@/app/actions/getListingById";
import ListingClient from "./ListingClient";
import getCurrentUser from "@/app/actions/getCurrentUser";
import Container from "@/app/components/Container";
import getReservations from "@/app/actions/getReservations";

interface IParams {
    listingId?: string;
}

const ListingPage = async ({ params }: { params: IParams }) => {
    const listing = await getListingById({
        listingId: params.listingId as string
    });

    const reservations = await getReservations({
        listingId: params.listingId as string
    })
    const currentUser = await getCurrentUser();
    console.log('reservations: ', reservations);

    return (
        <Container >
            <div className=" max-w-screen-lg 
          mx-auto">
                <ListingClient currentUser={currentUser} listing={listing}></ListingClient>
            </div>
        </Container>
    )
};

export default ListingPage;
