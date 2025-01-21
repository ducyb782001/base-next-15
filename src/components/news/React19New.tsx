"use client";
import React, { useState, useTransition } from "react";

function React19New() {
  const [name, setName] = useState("");
  const [error, setError] = useState(null);
  const [isPending, startTransition] = useTransition();

  const handleSubmit = () => {
    // startTransition(async () => {
    //   const error = await updateName(name);
    //   if (error) {
    //     setError(error);
    //     return;
    //   }
    // });
  };

  return (
    <div>
      <input value={name} onChange={(event) => setName(event.target.value)} />
      <button onClick={handleSubmit} disabled={isPending}>
        Update
      </button>
      {error && <p>{error}</p>}
    </div>
  );
}

export default React19New;
