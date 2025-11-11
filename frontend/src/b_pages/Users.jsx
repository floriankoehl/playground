

import UserCard from "../b_components/UserCard"
import { useState } from "react"









export default function Users ({sample_users}) {
    const [users, setUsers] = useState(sample_users)

    const render_all_users = () => {
        return users.map((user, i) => {
            return <UserCard key={i} name={user.name} />
        })
    }




    return (
        <>
            <div className="min-h-screen min-w-screen bg-blue-400 flex justify-center items-center">
                <div className="grid grid-cols-4 gap-5">
                    {render_all_users()}
                </div>

            </div>
        </>
    )
}



