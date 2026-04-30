import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/footer";

const IntermediateHikingBlog = () => {
  // Larger dummy paragraphs for a clean, readable feel
  const paraOne =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.";

  const paraTwo =
    "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.";

  return (
    <div>
      <Navbar />

      {/* Wider container */}
      <div className="max-w-5xl mx-auto mt-15 px-4 sm:px-6 lg:px-8 py-12 font-[Raleway]">
        {/* Title and subtitle */}
        <div className="mb-8">
          <h1 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-3">
            The 5 Best Intermediate Hikes in Yorkshire
          </h1>
          <p className="text-lg text-gray-500">
            From dales to moors — your next adventure starts here
          </p>
        </div>

        {/* Author & simple message */}
        <div className="flex items-center gap-4 pb-6 mb-6 border-b border-gray-200">
          
          <div>
            <p className="font-medium text-gray-800">Eleanor Whitby</p>
            <p className="text-sm text-gray-500">
              “These hills have taught me more than any trail manual. Enjoy every step.”
            </p>
          </div>
        </div>

        {/* Two images row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=1200&q=80"
            alt="Hiker overlooking Yorkshire valley"
            className="w-full h-52 object-cover rounded-lg shadow-md"
          />
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1200&q=80"
            alt="Limestone pavement in Yorkshire Dales"
            className="w-full h-52 object-cover rounded-lg shadow-md"
          />
        </div>

        {/* First large paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">{paraOne}</p>

        {/* Three images row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-8">
          <img
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Moorland path in North York Moors"
            className="w-full h-52 object-cover rounded-lg shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Sunset over Yorkshire hills"
            className="w-full h-52 object-cover rounded-lg shadow-sm"
          />
          <img
            src="https://images.unsplash.com/photo-1589792923971-f7c5d7d5a531?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Sheep on Yorkshire trail"
            className="w-full h-52 object-cover rounded-lg shadow-sm"
          />
        </div>

        {/* Second large paragraph */}
        <p className="text-gray-700 text-lg leading-relaxed mb-10">{paraTwo}</p>

        {/* ===== FINAL MESSAGE / CONCLUSION SECTION ===== */}
       <div className="bg-green-50 border-l-4 border-green-600 p-4 rounded-md mb-6">
  <h2 className="text-xl font-semibold text-gray-800 mb-2">
    🏁 Final Thoughts
  </h2>
  <p className="text-gray-700 text-base leading-relaxed">
    These intermediate routes offer the perfect balance of challenge and reward.
    From the Three Peaks to the quiet Wolds, each step brings you closer to the
    heart of Yorkshire. Pack your sense of adventure, respect the elements,
    and take only photographs — the hills are waiting.
  </p>
</div>

        {/* Final line with website link */}
        <div className="border-t pt-8 text-center">
          <p className="text-gray-700 text-lg">
            Visit{" "}
            <a
              href="#"
              className="text-green-700 font-semibold underline hover:text-green-900 transition"
            >
              www.hikeyorkshire.com
            </a>{" "}
            to explore guided hikes, foraging days, and eco-friendly outdoor
            experiences.
          </p>
          <p className="text-xs text-gray-400 mt-4">© Eleanor Whitby · Hike Yorkshire</p>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default IntermediateHikingBlog;