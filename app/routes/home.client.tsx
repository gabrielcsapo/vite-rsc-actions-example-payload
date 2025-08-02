"use client";

import { fetchData } from "./home.actions";

export function TestingActionButton() {
  return (
    <button
      className="btn"
      onClick={() => {
        fetchData();
      }}
    >
      Say Hello
    </button>
  );
}
