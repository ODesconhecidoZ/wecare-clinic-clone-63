
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Page Header */}
      <div className="bg-gradient-to-r from-primary/10 to-blue-50 pt-32 pb-10">
        <div className="container-custom">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
          <p className="text-lg text-gray-600">Learn more about MediCare Clinic and our commitment to exceptional healthcare.</p>
        </div>
      </div>

      {/* About Content */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1631815585553-a8672bf09995?w=800&auto=format&fit=crop&q=80" 
                alt="MediCare Clinic Team" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-semibold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-6">
                Founded in 1998, MediCare Clinic began as a small family practice with a mission to provide personalized, high-quality healthcare services to our community. Over the past 25 years, we've grown to become a comprehensive healthcare center offering a wide range of medical services, but our commitment to patient-centered care remains unchanged.
              </p>
              <p className="text-gray-600">
                Our team of experienced healthcare professionals works collaboratively to ensure that every patient receives the attention, care, and respect they deserve. We combine advanced medical technology with compassionate care to deliver exceptional healthcare services that improve the quality of life for our patients.
              </p>
            </div>
          </div>

          {/* Mission, Vision, Values */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide exceptional, patient-centered healthcare services that improve the quality of life for our patients and contribute to the wellbeing of our community.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the most trusted healthcare provider in our community, known for excellence in medical care, innovation, and compassionate service.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Values</h3>
              <p className="text-gray-600">
                Excellence, Compassion, Integrity, Respect, and Collaboration guide everything we do at MediCare Clinic.
              </p>
            </div>
          </div>

          {/* Why Choose Us */}
          <div className="mb-16">
            <h2 className="text-3xl font-semibold text-gray-800 mb-6 text-center">Why Choose MediCare Clinic</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-8 gap-x-12 mt-10">
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Experienced Medical Professionals</h4>
                  <p className="text-gray-600">
                    Our team consists of board-certified doctors, nurses, and support staff with years of experience in their respective fields.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Comprehensive Healthcare Services</h4>
                  <p className="text-gray-600">
                    From preventive care to specialized treatments, we offer a wide range of medical services to meet all your healthcare needs.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Patient-Centered Approach</h4>
                  <p className="text-gray-600">
                    We believe in involving patients in their care decisions and developing personalized treatment plans.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Modern Facilities</h4>
                  <p className="text-gray-600">
                    Our clinic is equipped with state-of-the-art medical technology to ensure accurate diagnosis and effective treatments.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Convenient Scheduling</h4>
                  <p className="text-gray-600">
                    We offer flexible appointment times, online booking, and minimal wait times to respect your schedule.
                  </p>
                </div>
              </div>
              
              <div className="flex">
                <div className="mr-4 text-primary">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-xl font-medium text-gray-800 mb-2">Compassionate Care</h4>
                  <p className="text-gray-600">
                    We treat each patient with dignity, respect, and empathy, ensuring a positive healthcare experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default About;
