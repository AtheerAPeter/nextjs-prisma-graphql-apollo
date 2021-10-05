export const resolvers = {
  Query: {
    products: async (_parent, _args, ctx) =>
      await ctx.prisma.product.findMany(),

    product: async (_parent, args, ctx) =>
      await ctx.prisma.product.findFirst({ where: { id: args.id } }),
  },
};
