
import { useNavigate } from "react-router-dom";
import EventSubmissionForm from "@/components/EventSubmissionForm";
import { Event } from "@/types";
import { Button } from "@/components/ui/button";

const SubmitEvent = () => {
  const navigate = useNavigate();
  
  const handleSubmit = (event: Event) => {
    // In a real application, this would send data to a backend
    // For now, we'll simulate adding it and redirect to the main page
    console.log("Event submitted:", event);
    navigate("/");
  };
  
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8 flex items-center">
          <Button
            variant="outline"
            onClick={() => navigate("/")}
            className="mr-4"
          >
            Back to Dashboard
          </Button>
          <h1 className="text-2xl font-bold text-gray-900">Submit New Event</h1>
        </div>
        
        <div className="bg-white shadow-sm rounded-lg p-6 border">
          <EventSubmissionForm onSubmit={handleSubmit} />
        </div>
      </div>
    </div>
  );
};

export default SubmitEvent;
