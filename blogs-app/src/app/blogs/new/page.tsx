"use client";

import { createBlog } from "@/app/actions/blogs";
import { useActionState } from "react";

const initialState = {
  errors: {},
  values: {
    title: "",
    author: "",
    url: "",
  },
};

export default function NewBlog() {
  const [state, formAction] = useActionState(createBlog, initialState);

  return (
    <div>
      <h2>Create new blog</h2>
      <form action={formAction}>
        <div>
          <label>
            Title
            <input
              type="text"
              name="title"
              defaultValue={state.values?.title}
            />
          </label>
          {state.errors?.title && (
            <p style={{ color: "red " }}>{state.errors.title}</p>
          )}
        </div>
        <div>
          <label>
            Author
            <input
              type="text"
              name="author"
              defaultValue={state.values?.author}
            />
          </label>
          {state.errors?.author && (
            <p style={{ color: "red " }}>{state.errors.author}</p>
          )}
        </div>
        <div>
          <label>
            Url
            <input type="text" name="url" defaultValue={state.values?.url} />
          </label>
          {state.errors?.url && (
            <p style={{ color: "red " }}>{state.errors.url}</p>
          )}
        </div>
        <button type="submit">Create</button>
      </form>
    </div>
  );
}
