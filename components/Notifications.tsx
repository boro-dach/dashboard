import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from "@radix-ui/react-dropdown-menu";
import { Bell } from "lucide-react";
import { ModeToggle } from "./ModeToggle";
import { Button } from "./ui/button";
import { useState } from "react";

export default function Notifications() {

    const [notifications, setNotifications] = useState <any> ([
        {
            text: "Notification",
            date: "07-17-2024",
            read: true
        },
        {
            text: "Another notification",
            date: "07-17-2024",
            read: false
        }
    ])

  return (
    <div className="flex items-center justify-end gap-2">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button className="relative" variant={"outline"} size={"icon"}>
                        <div 
                            className={`absolute -top-2 -right-1 h-3 w-3 rounded-full my-1 
                            ${notifications.find((x: any) => x.read === false) ? 'bg-green-500' : 'bg-red-500'}`}>
                        </div>
                        <Bell className="h-4 w-4"/>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {notifications.map((item: any, key: number) => 
                        <DropdownMenuItem key={key} className="py-2 px-3 cursor-pointer flex items-start gap-2 hover:bg-zinc-200 transition-all duration-300">
                            <div className={`h-2 w-2 rounded-full my-1 ${item.read ? 'bg-green-500' : 'bg-red-600'}`}></div>
                            <div>
                                <p>{item.text}</p>
                                <p className="text-xs text-zinc-500">{item.date}</p>
                            </div>
                        </DropdownMenuItem>)}
                </DropdownMenuContent>
            </DropdownMenu>
            <ModeToggle/>
        </div>
  )
}