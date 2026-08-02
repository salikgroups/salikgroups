import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, company, phone, service, details } = body;

    // Log the submission to the server logs
    console.log("=== NEW SURVEY REQUEST ===");
    console.log(`Name: ${name}`);
    console.log(`Company: ${company || "N/A"}`);
    console.log(`Phone: ${phone}`);
    console.log(`Service Required: ${service}`);
    console.log(`Project Details: ${details}`);
    console.log("==========================");

    // Forward the data to Google Form automatically
    try {
      const googleFormUrl = "https://docs.google.com/forms/d/e/1FAIpQLSeYXnc-YKD5Yf5NRDFnCWZyaiEkeK2WCrK_Au3luQzkUV9cKA/formResponse";
      const formParams = new URLSearchParams();
      formParams.append("entry.205693007", name || "");
      formParams.append("entry.1886490453", company || "");
      formParams.append("entry.1345409532", phone || "");
      
      const combinedDetails = `Service Required: ${service || ""}\n\nProject Details:\n${details || ""}`;
      formParams.append("entry.1172500195", combinedDetails);

      const response = await fetch(googleFormUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formParams.toString(),
      });
      
      if (!response.ok) {
        console.warn(`Google Form submission response status: ${response.status}`);
      } else {
        console.log("Successfully forwarded submission to Google Form.");
      }
    } catch (googleError) {
      // Log error but do not fail the main request
      console.error("Error forwarding to Google Form:", googleError);
    }

    return NextResponse.json({ success: true, message: "Survey logged successfully" });
  } catch (error) {
    console.error("Survey submission error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
