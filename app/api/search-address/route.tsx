import { NextResponse } from "next/server";


const BASE_URL = "https://api.mapbox.com/search/searchbox/v1/suggest"

// http://localhost:3000/api/search-address?q=bilekahalli
export async function GET(request:any){
    const {searchParams} = new URL(request?.url)
    const searchText = searchParams.get('q')

    const res = await fetch(BASE_URL+'?q='+searchText+'&language=en&limit=10&session_token=0f8a591b-0306-4111-8940-cc5747c0e6be&'+"access_token="+process.env.MAP_ACCESS_TOKEN,{
        headers : {
            "Content-Type" : "application/json"
        }
    })

    const searchResult = await res.json();

    return NextResponse.json({searchResult})
}