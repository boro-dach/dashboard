"use client"

import { Bell, Icon } from "lucide-react"
import { CommandDemo } from "./Command"
import { Button } from "./ui/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { useState } from "react"
import { ModeToggle } from "./ModeToggle"
import Notifications from "./Notifications"
  

export default function Header() {

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
        <CommandDemo />
        <Notifications />
    </div>
  )
}
