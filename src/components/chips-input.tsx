"use client";

import { useState } from "react";

import { XIcon } from "lucide-react";
import useLocalStorage from "use-local-storage";

import { Badge } from "./ui/badge";
import { Input } from "./ui/input";

export const ChipsInput = () => {
  const [value, setValue] = useState("");
  const [tags, setTags] = useLocalStorage<string[]>("tags", []);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (value.trim() === "") return;
    setTags([value, ...tags]);
    setValue("");
  };
  const handleRemove = (tag: string) => {
    setTags(tags.filter((t: string) => t !== tag));
  };
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Chips Input</h2>
      <form onSubmit={handleSubmit}>
        <Input
          placeholder="Add a tag"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
      </form>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="px-4 py-2 flex items-center"
          >
            {tag}{" "}
            <span
              className="cursor-pointer ml-2"
              onClick={() => handleRemove(tag)}
            >
              <XIcon className="size-3" />
            </span>{" "}
          </Badge>
        ))}
      </div>
    </div>
  );
};
