import prisma from "@/app/libs/prismadb"

interface IParams {
    listingId?: string;
}


export default async function getReservations(params: IParams) {
    try {
        const {listingId} = params
        const query: any = {};

        if(listingId) {
            query.listingId = listingId;
        }

        const reservations = await prisma.reservations.findMany({
            where: query,
            include: {
                listings: true
            }
        })


        return reservations;
    } catch (error: any) {
        throw new Error(error);
    }
}