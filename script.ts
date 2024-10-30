import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  /** CLIENT READ OPERATIONS
   * 
   *   
                          // **DELETING ALL USERS**
                          //   await prisma.user.deleteMany();

                          // **CREATING USERS WITH SELECT AND INCLUDE**
                          //   const users = await prisma.user.create({
                          //     data: [
                          //       {
                          //         name: "Dzenis",
                          //         email: "dzenis@gmail.com",
                          //         age: 27,
                          //       },
                          //       {
                          //         name: "Sally",
                          //         email: "sally@gmail.com",
                          //         age: 27,
                          //       },
                          //     ],
                          //     select: {
                          //       name: true,
                          //       userPreference: { select: { id: true } },
                          //     },
                          //     // include: {
                          //     //   userPreference: true,
                          //     // },
                          //   });

                          // **CREATING MULTIPLE USERS AT ONCE**
                          //   await prisma.user.createMany({
                          //     data: [
                          //       {
                          //         name: "Sally",
                          //         age: 13,
                          //         email: "sally@test2.com",
                          //       },
                          //     ],
                          //   });

                          // **FINDING A UNIQUE USER BY COMPOSITE KEY**
                          //   const user = await prisma.user.findUnique({
                          //     where: {
                          //       age_name: {
                          //         age: 27,
                          //         name: "Dzenis",
                          //       },
                          //     },
                          //   });

                          // **FINDING THE FIRST USER THAT MATCHES A CONDITION**
                          //   const user = await prisma.user.findFirst({
                          //     where: {
                          //       name: "Sally",
                          //     },
                          //   });

                          // **FINDING MANY USERS WITH COMPLEX CONDITIONS**
                          // const user = await prisma.user.findMany({
                          // where: {
                          // writtenPosts: {
                          //   every: {
                          //     title: "test",
                          //   },
                          //   none: {
                          //     title: "test",
                          //   },
                          //   some: {
                          //     title: "test",
                          //   },
                          // },

                          // userPreference: {
                          //   emailUpdates: true,
                          // },

                          // NOT: { email: { startsWith: "sally" } },

                          //   OR: [{ email: { startsWith: "sally" } }, { age: { gt: 20 } }],

                          //   AND: [
                          //     {
                          //       email: {
                          //         startsWith: "Dzenis",
                          //       },
                          //     },
                          //     { name: "Sally" },
                          //   ],

                          //   name: "Sally",

                          //   email: {
                          //     startsWith: "Dzenis",
                          //     // endsWith: "@test1.com",
                          //     // contains: "@gmail.com",
                          //   },

                          //   age: { gte: 20 },
                          //   age: { gt: 20 },
                          //   age: { lte: 20 },
                          //   age: { lt: 20 },

                          //   name: "Sally",
                          //   name: { notIn: ["Sally", "Dzenis"] },
                          //   name: { in: ["Sally", "Dzenis"] },
                          //   name: { not: "Sally" },
                          //   name: { equals: "Sally" },
                          // },
                          // distinct: ["name"],
                          // orderBy: {
                          //   age: "desc",
                          // },
                          // take: 2,
                          // skip: 1,
                          // });
   */
  /**
   * CLIENT UPDATE OPERATIONS
   * 
   * 
   * 
                          // const user = await prisma.user.update({
                          //   where: {
                          //     email: "sally@test3.com",
                          //   },
                          //   data: {
                          //     // email: "dzenis@gmail.com",
                          //     userPreference: {
                          //       connect: {
                          //         id: "3cf7d748",
                          //       },
                          //     },
                          //   },
                          // });
   */
  /**
   * CLIENT DELETE OPERATIONS
   *
   *  // const user = await prisma.user.deleteMany({
      //   where: {
      //     // email: "dzenis@gmail.com",
      //     age: { gt: 20 },
      //   },
      // });
   */
}

main()
  .catch((e) => {
    console.error(e);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
