"use client";
import {
  ListFilter,
  LogOut,
  MessageSquareDiff,
  Search,
  User,
} from "lucide-react";
import { Input } from "../ui/input";
import ThemeSwitch from "./theme-switch";
import Conversation from "./conversation";
import { conversations } from "@/dummy-data/db";
import { UserButton } from "@clerk/nextjs";
import { SignedIn, SignOutButton } from "@clerk/clerk-react";

const LeftPanel = () => {
  return (
    <div className="w-1/4 border-gray-600 border-r">
      <div className="sticky top-0 bg-gray-100 dark:bg-gray-800 z-10">
        {/* Header */}
        <div className="flex justify-between bg-gray-100 dark:bg-gray-800 p-3 items-center">
          <UserButton />
          <div className="flex items-center gap-3">
            <MessageSquareDiff size={20} />
            <ThemeSwitch />
          </div>
        </div>
        <div className="p-3 flex items-center">
          {/* Search */}
          <div className="relative h-10 mx-3 flex-1">
            <Search
              className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 z-10"
              size={18}
            />
            <Input
              type="text"
              placeholder="Search or start a new chat"
              className="pl-10 py-2 text-sm w-full rounded shadow-sm bg-gray-100 dark:bg-gray-800 focus-visible:ring-transparent"
            />
          </div>
          <ListFilter className="cursor-pointer" />
        </div>
      </div>

      {/* Chat List */}
      <div className="my-3 flex flex-col gap-0 max-h-[80%] overflow-auto">
        {conversations.map((conversation) => (
          <Conversation key={conversation._id} conversation={conversation} />
        ))}

        {conversations?.length === 0 && (
          <>
            <p className="text-center text-gray-500 text-sm mt-3">
              No conversations yet
            </p>
            <p className="text-center text-gray-500 text-sm mt-3">
              We understand {"you're"} an introvert, but {"you've"} got to start
              somewhere 😊
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default LeftPanel;
