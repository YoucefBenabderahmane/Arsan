// src/components/Count.jsx
import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Count = () => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Ensures the animation happens only once when the component comes into view
    threshold: 0.5, // Adjust the threshold as needed
  });

  const data = [
    {
      count: 100,
      label: "Competitions Held",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    },
    {
      count: 2587,
      label: "Awards Earned",
      description: "Natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam."
    }
  ];

  return (
    <div ref={ref} className="w-full py-20 bg-white text-black">
      <div className="max-w-[1000px] mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-10">
          {data.map((item, index) => (
            <div key={index} className="flex flex-col items-start">
              <p className="text-6xl font-alga mb-2">
                {inView && (
                  <>
                    {index === 0 ? (
                      <>
                        +<CountUp start={0} end={item.count} duration={2} />
                      </>
                    ) : (
                      <>
                        +<CountUp start={0} end={item.count} duration={2} />
                      </>
                    )}
                  </>
                )}
              </p>
              <h3 className="text-2xl font-alga mb-2">{item.label}</h3>
              <p className="text-gray-600">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Count;
