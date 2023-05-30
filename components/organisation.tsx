"use client";

import { OrganisationType } from "@/app/page";
import axios from "axios";

export interface OrganisationProps {
    organisation: OrganisationType;
}

export const Organisation = ({ organisation }: OrganisationProps) => {
    const makePayment = async () => {
        try {
            const results = await axios.post("/api/pay");
            console.log(results.data);
        }
        catch (error) {
            console.log(error);
        }
    }
    return (
        <div
            className="flex p-6 flex-col items-center gap-2 shadow-lg"
        >
            <h2 className="text-lg">{organisation.name}</h2>
            <p className="text-xs">{organisation.description}</p>
            <div className="flex justify-between w-full">
                <p className="text-xs">Amount:</p>
                <p className="text-xs">R{organisation.amount}</p>
            </div>
            <button
                type="button"
                className="
                    sm:w-36
                    w-full
                    stripe.customers.create({
                    email: 'customer@example.com',
                    })
                    .then(customer => console.log(customer.id))
                    .catch(error => console.error(error));
                    text-sm
                    bg-slate-600
                    text-white
                    rounded-md
                    h-8
                "
                onClick={makePayment}
            >
                Donate
            </button>
        </div>
    )
}