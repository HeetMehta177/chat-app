"use client";
import { api } from "@/convex/_generated/api";
import { useMutation, useQuery } from "convex/react";
import React from "react";

function tasksPage() {
  const tasks = useQuery(api.tasks.getTasks);
  const deleteTask = useMutation(api.tasks.deleteTask);
  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks?.map((task) => (
          <li key={task._id}>
            <span>{task.text}</span>
            <button onClick={async () => await deleteTask({ id: task._id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default tasksPage;
