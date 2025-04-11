"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const ApplicationStatusPage = () => {
  const router = useRouter();
  // Simulated application status. In a real-world scenario, 
  // you could fetch this value from your API or context.
  const [status, setStatus] = useState("underCounselling");
  const [message, setMessage] = useState("");

  useEffect(() => {
    // Set the message based on the application status
    switch (status) {
      case "underCounselling":
        setMessage("Your application is under counselling. Please wait while we process it.");
        break;
      case "withSubadmin":
        setMessage("Your application is with the subadmin. Please wait...");
        break;
      case "withAdmin":
        setMessage("Your application is on its way to the admin for approval.");
        break;
      case "approved":
        // After approval, you can redirect to login after a short delay
        setMessage("Your application has been approved. Redirecting to login...");
        setTimeout(() => {
          router.push("/Login");
        }, 3000);
        break;
      default:
        setMessage("Unknown application status.");
    }
  }, [status, router]);

  // For demonstration purposes, include buttons to simulate status change.
  // In a production system, status changes would be triggered by API events.
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      <h2 className="text-2xl font-bold mb-4">Application Status</h2>
      <p className="text-lg text-center mb-8">{message}</p>
      
      <div className="space-x-2">
        <button
          onClick={() => setStatus("underCounselling")}
          className="px-4 py-2 bg-blue-600 text-white rounded-md"
        >
          Under Counselling
        </button>
        <button
          onClick={() => setStatus("withSubadmin")}
          className="px-4 py-2 bg-green-600 text-white rounded-md"
        >
          With Subadmin
        </button>
        <button
          onClick={() => setStatus("withAdmin")}
          className="px-4 py-2 bg-yellow-600 text-white rounded-md"
        >
          With Admin
        </button>
        <button
          onClick={() => setStatus("approved")}
          className="px-4 py-2 bg-indigo-600 text-white rounded-md"
        >
          Approved
        </button>
      </div>
    </div>
  );
};

export default ApplicationStatusPage;
