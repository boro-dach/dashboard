"use client"

import { Bell, Icon } from "lucide-react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"

export default function Header() {
  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
        <CommandDemo />
        <div className="flex items-center justify-end">
            <Button variant={"outline"} size={"icon"}>
                <Bell className="h-4 w-4"/>
            </Button>
        </div>
    </div>
  )
}