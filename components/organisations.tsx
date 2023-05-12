"use client"

import { OrganisationType } from "@/app/page";
import { Organisation } from "./organisation";

export interface OrganisationsProps {
    organisations: OrganisationType[];
}

/**
 * 
 * @param OrganisationsProps - properties including organisations list
 * @returns Next Component
 */
export const Organisations = ({ organisations } : OrganisationsProps) => {
    return (
        <div className="flex-col sm:flex-col gap-8">
            {
                organisations.map((organisation, index) => (
                    <Organisation
                        key={index}
                        organisation={organisation}
                    />
                ))
            }
        </div>
    )
}