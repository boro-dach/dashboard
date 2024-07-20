"use client"
import { CommandDemo } from "./Command"
import Notifications from "./Notifications"
  

export default function Header() {

  return (
    <div className="grid grid-cols-2 gap-4 p-4 border-b">
        <CommandDemo />
        <Notifications />
    </div>
  )
}
