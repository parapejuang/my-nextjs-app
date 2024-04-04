import { NextResponse } from "next/server";
import CustomPaging from "@/components/Carousel/myCaro";

async function GetDataApi() {
  const res = await fetch("https://myschoolsite.vercel.app/api/image", {
    cache: "no-store",
    headers: {
      "Content-Type": "application/json",
    },
  });
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
async function GetData() {
  const res = await fetch(
    "https://myschoolsite.vercel.app/data/imageData.json",
    {
      cache: "no-store",
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  return res.json();
}
export default async function FetchLists() {
  try {
    const data = await GetData();
    // Process the fetched data if needed
    // console.log(data);
    return (
      <>
        <h1>hhh</h1>
      </>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return null; // Return null or handle the error gracefully
  }
}
async function FetchFile() {
  const res = await fetch(
    "https://myschoolsite.vercel.app/data/imageData.json",
    {
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }
  const maim = await res.json();
  console.log(maim.key);
  if (!maim) {
    return <div>Error fetching data</div>;
  }
  return (
    <div>
      {maim.map(
        (item: any) => (
          console.log(item.key),
          (<img key={item.key} alt="HALO" src={item.url} />)
        )
      )}
    </div>
  );
}
