"use client";
import { api } from "@/convex/_generated/api";
import { useQuery } from "convex/react";
import { Tag } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";

export default function LabelList() {
  const labels = useQuery(api.labels.getLabels);

  if (!labels) {
    return <div>Loading...</div>;
  }

  const uniqueLabels = labels.filter((label, index, self) =>
    index === self.findIndex((t) => t._id === label._id)
  );

  return (
    <div className="xl:px-40">
      <div className="flex items-center justify-between">
        <h1 className="text-lg font-semibold md:text-2xl">Labels</h1>
      </div>
      <div className="flex flex-col gap-1 py-4">
        {uniqueLabels.map((label) => (
          <Link key={label._id.toString()} href={`/loggedin/filter-labels/${label._id}`}>
            <div className="flex items-center space-x-2 border-b-2 p-2 border-gray-100">
              <Tag className="text-primary w-5" />
              <Label
                htmlFor="labels"
                className="text-base font-normal hover:cursor-pointer"
              >
                {label.name}
              </Label>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}