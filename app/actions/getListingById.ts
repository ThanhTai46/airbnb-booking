import prisma from "@/app/libs/prismadb";

export default async function getListingById(params: {listingId: string}) {
    try {
        const { listingId } = params;
        const listing = await prisma.listing.findUnique({
            where: {
                id: listingId
            },
            include: {
                user: true
            }
        })

        if(!listing) {
            return null
        }
        return {
            ...listing,
            createdAt: listing.created_at.toString(),
            updatedAt: listing.updated_at.toISOString(),
            emailVerified: listing.user.emailVerified?.toString() || null,
        }
    } catch (error: any) {
        throw new Error(error)
    }
}