
import { useState } from "react";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Emily Rodriguez",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&auto=format&fit=crop&q=80",
      content: "I've been a patient at MediCare Clinic for over 5 years and have always received exceptional care. The staff is friendly and professional, and the doctors take the time to listen to my concerns. I highly recommend their services to anyone looking for quality healthcare.",
      rating: 5
    },
    {
      name: "Marcus Johnson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
      content: "After struggling to find a clinic that could address my chronic condition, I finally found MediCare Clinic. Their team provided a comprehensive treatment plan that has significantly improved my quality of life. I'm grateful for their expertise and compassionate care.",
      rating: 5
    },
    {
      name: "Sophia Chang",
      role: "Parent",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
      content: "As a parent, I trust MediCare Clinic with my children's health. The pediatric department is amazing - they make my kids feel comfortable during visits and provide clear explanations of treatments. The convenient online appointment booking system has been a lifesaver for our busy schedule.",
      rating: 5
    },
    {
      name: "Robert Wilson",
      role: "Patient",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
      content: "The preventive care program at MediCare Clinic has been instrumental in helping me maintain my health. The doctors are thorough and take a proactive approach to healthcare. The staff is always helpful with insurance questions and scheduling.",
      rating: 4
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <section className="section-padding bg-primary/5" id="testimonials">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="section-title">What Our Patients Say</h2>
          <p className="section-subtitle">
            Don't just take our word for it - hear what our patients have to say about their experiences at MediCare Clinic.
          </p>
        </div>

        <div className="relative">
          {/* Desktop Testimonials - Multiple Cards */}
          <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div
                key={index}
                className="bg-white p-8 rounded-xl shadow-md flex flex-col"
              >
                <div className="flex items-center mb-6">
                  <div className="mr-4">
                    <img
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">{testimonial.name}</h4>
                    <p className="text-gray-500">{testimonial.role}</p>
                    <div className="flex mt-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                      ))}
                      {[...Array(5 - testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 text-gray-300" />
                      ))}
                    </div>
                  </div>
                </div>
                <div className="flex-grow">
                  <p className="text-gray-600 italic">"{testimonial.content}"</p>
                </div>
              </div>
            ))}
          </div>

          {/* Mobile Testimonials - Single Card with Carousel */}
          <div className="md:hidden">
            <div className="bg-white p-6 rounded-xl shadow-md">
              <div className="flex items-center mb-6">
                <div className="mr-4">
                  <img
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-gray-500">{testimonials[currentIndex].role}</p>
                  <div className="flex mt-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-500 fill-current" />
                    ))}
                    {[...Array(5 - testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-gray-300" />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic mb-6">"{testimonials[currentIndex].content}"</p>
              <div className="flex justify-between">
                <button
                  onClick={prevSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronLeft className="h-5 w-5 text-gray-600" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                >
                  <ChevronRight className="h-5 w-5 text-gray-600" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
