// import { authOptions } from "@/pages/api/auth/[...nextauth]";
// import { getServerSession } from "next-auth";
// import prisma from "@/app/libs/prismadb";
// import { useSession } from "next-auth/react";

// export async function getSession() {
//   return await getServerSession(authOptions);
// }

// export default async function getCurrentUser() {
//   try {
//     const session = await getSession();

//     if (!session?.user?.email) {
//       return null;
//     }

//     const currentUser = await prisma.user.findUnique({
//       where: {
//         email: session.user.email as string,
//       },
//     });

//     const getAllUser = await prisma.user.findMany()
//     console.log("🚀 ~ file: getCurrentUser.ts:24 ~ getCurrentUser ~ getAllUser:", getAllUser)

//     if (!currentUser) {
//       return null;
//     }

//     return getAllUser;
//   } catch (error: any) {
//     return null;
//   }
// }
