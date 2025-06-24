import { v } from "convex/values";
import { query, mutation } from "./_generated/server";

export const getTasks = query({
  args: {},
  handler: async (ctx, args) => {
    return await ctx.db.query("tasks").collect();
  },
});

export const addTask = mutation({
  args: {
    text: v.string(),
  },
  handler: async (ctx, args) => {
    return await ctx.db.insert("tasks", { text: args.text, completed: false });
  },
});

export const deleteTask = mutation({
  args: {
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.delete(args.id);
  },
});

export const updateTask = mutation({
  args: {
    id: v.id("tasks"),
  },
  handler: async (ctx, args) => {
    return await ctx.db.patch(args.id, { completed: true });
  },
});
