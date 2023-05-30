import { NextApiRequest, NextApiResponse } from "next";
import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
    try {
        const response = await fetch("https://checkout-online.yoco.com/checkouts", {
            headers: {
                Authorization: `Bearer sk_test_2ca440bdNm13y9Q7ac449049b51d`,
                ContentType: "application/json"
            },
            body: JSON.stringify({
                amount: 10000,
                currency: "ZAR",
                cancelUrl: "http://localhost:3000/"
            }),
            method: "POST"
        });
        const results = await response.json();
        console.log("Pass",results);
        NextResponse.json({ data:  results})
    }
    catch (error: any) {
        console.log(error);
    }
}