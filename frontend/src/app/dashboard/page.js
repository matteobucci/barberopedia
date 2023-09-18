'use client'
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import { useRouter } from "next/navigation";

function Page() {

    const user = {
        name: "John Doe"
    }

    // const { user } = useAuthContext()
    // const router = useRouter()

    // React.useEffect(() => {
    //     if (user == null) router.push("/")
    // }, [user])

    const appointments = [
        {
            id: 1,
            date: "2022-01-01",
            time: "10:00 AM",
            barber: "John Doe",
            service: "Haircut",
            status: "Confirmed"
        },
        {
            id: 2,
            date: "2022-01-02",
            time: "2:00 PM",
            barber: "Jane Smith",
            service: "Beard Trim",
            status: "Pending"
        },
        {
            id: 3,
            date: "2022-01-03",
            time: "11:30 AM",
            barber: "Bob Johnson",
            service: "Shave",
            status: "Cancelled"
        }
    ]

    return (
        <div>
            <h1>Welcome, {user.name}!</h1>
            <h2>Your Appointments:</h2>
            <ul>
                {appointments.map(appointment => (
                    <li key={appointment.id}>
                        <p>Date: {appointment.date}</p>
                        <p>Time: {appointment.time}</p>
                        <p>Barber: {appointment.barber}</p>
                        <p>Service: {appointment.service}</p>
                        <p>Status: {appointment.status}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Page;