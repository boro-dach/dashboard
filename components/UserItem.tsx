"use client"
export default function UserItem() {
  return (
    <div className="flex items-center justify-between gap-2 border rounded-md p-2">
        <div className="avatar rounded-full min-h-10 min-w-10 bg-zinc-500 text-white font-[700] flex items-center justify-center">
            <p>NS</p>
        </div>
        <div className="grow">
            <p className=" text-[1rem] font-bold">Name Surname</p>
            <p className="text-[0.75rem] text-zinc-500">mail@gmail.com</p>
        </div>
    </div>
  )
}
