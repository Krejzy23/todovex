"use client";
import { Menu } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { primaryNavItems, secondaryNavItems } from "@/utils";
import Image from "next/image";
import SearchForm from "./search-form";
import UserProfile from "./user-profile";
import taskflowLogo from "@/public/logo/taskflow.png";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect, useState } from "react";
import { Hash } from "lucide-react";
import { cn } from "@/lib/utils";
import AddProjectDialog from "../projects/add-project-dialog";
import { Doc } from "@/convex/_generated/dataModel";

interface MyListTitleType {
  [key: string]: string;
}

export default function MobileNav({
  navTitle = "",
  navLink = "#",
}: {
  navTitle?: string;
  navLink?: string;
}) {
  const projectList = useQuery(api.projects.getProjects);

  const LIST_OF_TITLE_IDS: MyListTitleType = {
    primary: "",
    projects: "My Projects",
  };

  const [navItems, setNavItems] = useState([...primaryNavItems]);

  const renderItems = (projectList: Array<Doc<"projects">>) => {
    return projectList.slice(0, 4).map(({ _id, name }, idx) => {
      return {
        ...(idx === 0 && { id: "projects" }),
        name,
        link: `/loggedin/projects/${_id.toString()}`,
        icon: <Hash className="w-4 h-4" />,
      };
    });
  };

  useEffect(() => {
    if (projectList) {
      const projectItems = renderItems(projectList);
      const items = [...primaryNavItems, ...projectItems];
      setNavItems(items);
    }
  }, [projectList]);

  return (
    <header className="flex h-14 items-center gap-4 border-b bg-muted/40 px-4 lg:h-[60px] lg:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="shrink-0 md:hidden">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle navigation menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="flex flex-col">
          <nav className="grid gap-2 text-lg font-medium">
            <UserProfile />

            {navItems.map(({ name, icon, link, id }, idx) => (
              <div key={idx}>
                {id && (
                  <div
                    className={cn(
                      "flex items-center mt-2 mb-2",
                      id === "filters" && "my-1"
                    )}
                  >
                    <p className="flex flex-1 text-base">
                      {LIST_OF_TITLE_IDS[id]}
                    </p>
                    {LIST_OF_TITLE_IDS[id] === "My Projects" && (
                      <AddProjectDialog />
                    )}
                  </div>
                )}
                <div className={cn("flex items-center lg:w-full")}>
                  <Link
                    key={idx}
                    href={link}
                    className="mx-[-0.65rem] flex items-center text-sm gap-2 rounded-xl px-3 py-1  hover:text-blue-500"
                  >
                    {icon}
                    {name}
                  </Link>
                </div>
              </div>
            ))}

            {projectList && projectList.length > 4 && (
              <Link
                href="/loggedin/projects"
                className="mx-[-0.65rem] flex items-center text-sm gap-4 px-3 py-2 hover:text-blue-500"
              >
                Show all projects...
              </Link>
            )}
          </nav>
          <div className="mt-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-md -mt-4">Visit My</CardTitle>
                <CardDescription>
                  {secondaryNavItems.map(({ name, icon, link }, idx) => (
                    <Link
                      key={idx}
                      href={link}
                      className="mx-[-0.65rem] flex items-center gap-2 px-3 hover:text-foreground"
                    >
                      {icon}
                      {name}
                    </Link>
                  ))}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="sm" className="w-full">
                  Contact Me
                </Button>
              </CardContent>
            </Card>
          </div>
        </SheetContent>
      </Sheet>
      <div className="flex items-center md:justify-between w-full gap-1 md:gap-2 py-2">
        <div className="lg:flex-1">
          <Link href={navLink}>
            <p className="text-sm font-semibold text-foreground/70 w-24">
              {navTitle}
            </p>
          </Link>
        </div>
        <div className="place-content-center w-full flex-1">
          <SearchForm />
        </div>
        <div className="flex flex-row items-center justify-center ">
          <Image
            alt="logo"
            src={taskflowLogo}
            width={48}
            height={48}
            className="lg:w-20 lg:h-20"
          />
          <p className="font-bold">TaskFlow</p>
        </div>
      </div>
    </header>
  );
}
