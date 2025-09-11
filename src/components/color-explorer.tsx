"use client";

import chroma from "chroma-js";
import { useState } from "react";

import { Input } from "./ui/input";

export const ColorExplorer = () => {
  const [hex, setHex] = useState("");
  const [color, setColor] = useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!color) return;
    if (chroma(color).hex() === "Invalid") return;
    setHex(chroma(color).hex());
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Color Explorer</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Enter a color"
          value={color}
          onChange={(e) => setColor(e.target.value)}
        />
      </form>
      <div className="flex items-center justify-center flex-col gap-2">
        <div
          className="w-10 h-10 rounded-full border-2 border-gray-300"
          style={{ backgroundColor: hex }}
          id="color-preview"
        />
        <p className="font-bold">
          Hex: <span className="font-normal">{hex || "N/A"}</span>
        </p>
      </div>
    </div>
  );
};
