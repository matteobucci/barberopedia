'use client'
import React from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useRouter } from "next/navigation";
import signOut from "@/firebase/auth/signout"

function Page() {
    
    const handleLogout = async (event) => {

        const { result, error } = await signOut();

        if (error) {
            return console.log(error)
        }

        // else successful
        console.log(result)
        return router.push("/dashboard/signin")
    }

    const { userContext } = useAuthContext()
    const router = useRouter()

    React.useEffect(() => {
        if (userContext == null) router.push("/dashboard/signin")
    }, [userContext])

    return (<div>        
            <h1>Only logged in users can view this page</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>);
}

export default Page;