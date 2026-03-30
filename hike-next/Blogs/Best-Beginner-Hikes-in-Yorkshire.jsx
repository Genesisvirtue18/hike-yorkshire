import React from 'react';
import Navbar from "../Components/NavBar/Navbar";


const SimpleHikingBlog = () => {
  return (
    <div>
      <Navbar />

      <div className="max-w-4xl mt-10 font-[Raleway] mx-auto px-4 py-8">
        
        {/* Header */}
        <header className="mb-12">
          <h1 className="text-4xl font-bold text-[#926A39] mb-6 text-center">
            The 5 Best Beginner Hikes in Yorkshire
          </h1>
          <div className="bg-[#FFF5F1] p-6 rounded-2xl border-l-4 border-[#C56441]">
            <p className="text-gray-700 text-lg leading-relaxed">
              Yorkshire is one of the best places in the UK to start hiking. With rolling hills, 
              dramatic limestone landscapes, and well-marked paths, the region offers plenty of 
              beginner-friendly trails that don't require advanced navigation skills or extreme fitness.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              Whether you're looking for gentle riverside strolls or rewarding hilltop views, 
              these five hikes will help you discover the beauty of Yorkshire on foot.
            </p>
          </div>
        </header>

        {/* Malham Cove */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#C56441] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              1
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Malham Cove (Yorkshire Dales)
            </h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 font-semibold">
              Difficulty: <span className="text-green-600">Easy–Moderate</span> | 
              Distance: <span className="text-blue-600">~4.5 km</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Malham Cove is one of the most iconic limestone formations in the Yorkshire Dales and an excellent introduction to hiking Yorkshire. The route follows well-maintained paths and gentle gradients, making it accessible for beginners with a basic fitness level.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              You'll pass Malham Tarn, Janet's Foss waterfall, and the dramatic limestone amphitheatre of the Cove itself. The short stone steps to the top are optional but rewarding.
            </p>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Highlights:</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Well-marked circular route</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Stunning limestone scenery</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Family-friendly trail</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Roseberry Topping */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#C56441] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              2
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Roseberry Topping (North York Moors)
            </h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 font-semibold">
              Difficulty: <span className="text-yellow-600">Moderate</span> | 
              Distance: <span className="text-blue-600">~3 km</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Often called Yorkshire's "mini Matterhorn," Roseberry Topping is short but rewarding. While the final ascent is a little steep, the trail is clearly defined and manageable for first-time hikers.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This hike is ideal if you want to experience a summit walk without committing to a long-distance trail.
            </p>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Highlights:</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Short hike with big views</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Excellent introduction to hill walking</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Panoramic views over North Yorkshire</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Bolton Abbey */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#C56441] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              3
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Bolton Abbey Riverside Walk
            </h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 font-semibold">
              Difficulty: <span className="text-green-600">Easy</span> | 
              Distance: <span className="text-blue-600">~5 km</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              This gentle riverside walk is perfect for those new to hiking or anyone looking for a peaceful walk in nature. The trail follows the River Wharfe through woodland and open meadows, with stepping stones adding a fun element.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              The route is flat, clearly signposted, and ideal for relaxed walking.
            </p>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Highlights:</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Flat, well-maintained paths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Scenic riverside views</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Ideal for all ages</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Ingleton Waterfalls */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#C56441] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              4
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Ingleton Waterfalls Trail (Short Loop)
            </h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 font-semibold">
              Difficulty: <span className="text-yellow-600">Easy–Moderate</span> | 
              Distance: <span className="text-blue-600">~4 km (shortened loop)</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              The Ingleton Waterfalls Trail is one of the most popular walking trails in the Yorkshire Dales. Beginners can enjoy a shorter loop while still experiencing dramatic waterfalls, stone bridges, and woodland paths.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              While there are some steps, the trail is well surfaced and easy to follow.
            </p>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Highlights:</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Multiple waterfalls</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Safe, maintained paths</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Great for building confidence</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Ilkley Moor */}
        <section className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-[#C56441] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
              5
            </div>
            <h2 className="text-3xl font-bold text-gray-900">
              Ilkley Moor (Cow and Calf Rocks)
            </h2>
          </div>
          
          <div className="bg-gray-50 p-4 rounded-lg mb-4">
            <p className="text-gray-600 font-semibold">
              Difficulty: <span className="text-green-600">Easy</span> | 
              Distance: <span className="text-blue-600">~3–4 km</span>
            </p>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700 text-lg leading-relaxed">
              Ilkley Moor offers open moorland walking with wide paths and gentle inclines. The Cow and Calf Rocks are easily accessible and provide a great introduction to moorland terrain without navigation complexity.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              This is a perfect spot for beginners wanting to experience classic Yorkshire walking trails.
            </p>
          </div>
          
          <div className="mt-6 bg-white p-5 rounded-xl shadow-sm border border-gray-200">
            <h3 className="font-bold text-gray-900 mb-3 text-lg">Highlights:</h3>
            <ul className="text-gray-700 space-y-2">
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Open views across Wharfedale</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Easy access from Ilkley town</span>
              </li>
              <li className="flex items-start">
                <span className="text-[#C56441] mr-2">•</span>
                <span>Great for sunset walks</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Tips Section */}
        <section className="mb-12 bg-gradient-to-r from-[#FFF5F1] to-[#FAD4C3] p-8 rounded-2xl">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            Beginner Hiking Tips for Yorkshire
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Wear sturdy walking shoes with good grip</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Check the weather before heading out</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Carry water and a light snack</span>
              </li>
            </ul>
            <ul className="text-gray-700 space-y-4">
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Stick to marked trails</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Start small and build confidence gradually</span>
              </li>
              <li className="flex items-start">
                <span className="bg-white text-[#C56441] rounded-full w-8 h-8 flex items-center justify-center mr-3 font-bold">✓</span>
                <span>Let someone know your route and expected return time</span>
              </li>
            </ul>
          </div>
        </section>

        {/* Final Thoughts */}
        <section className="border-t pt-10">
          <h2 className="text-2xl font-bold text-[#926A39] mb-6 text-center">
            Final Thoughts
          </h2>
          <div className="space-y-6">
            <p className="text-gray-700 text-lg leading-relaxed text-center max-w-3xl mx-auto">
              Yorkshire offers some of the best beginner hikes in the UK, combining accessibility with unforgettable scenery. From limestone landscapes to riverside paths and gentle hill walks, these trails are ideal for anyone starting their hiking journey.
            </p>
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <p className="text-gray-700 text-lg leading-relaxed italic">
                "If you're new to hiking Yorkshire Dales or simply want relaxed walking trails, these routes will help you fall in love with the outdoors and build confidence for more challenging adventures in the future."
              </p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="mt-12 mb-8 text-center">
          <p className="text-gray-600 mb-4">
            Ready to explore Yorkshire on foot?
          </p>
          <a 
            href="/hikes"
            className="inline-block px-8 py-3 bg-[#C56441] text-white font-semibold rounded-full hover:bg-[#a85632] transition-all duration-300 hover:shadow-lg"
          >
            Browse All Hikes
          </a>
        </section>

      </div>
    </div>
  );
};

export default SimpleHikingBlog;