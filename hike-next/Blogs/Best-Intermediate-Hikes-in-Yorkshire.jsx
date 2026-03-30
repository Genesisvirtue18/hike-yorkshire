import React from "react";
import Navbar from "../Components/NavBar/Navbar";



const IntermediateHikingBlog = () => {
  return (
    <div>
      <Navbar />
  
      <div className="max-w-6xl mt-10 font-[Raleway] mx-auto px-4 py-8">
        {/* Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            The 5 Best Intermediate Hikes in Yorkshire
          </h1>
          <p className="text-gray-600">
            Ready to level up your hiking? Yorkshire's dramatic landscapes offer
            the perfect progression for hikers who've mastered beginner trails.
            These intermediate routes combine longer distances, moderate
            elevation gains, and varied terrain to test your stamina while
            rewarding you with spectacular scenery.
          </p>
        </header>

        {/* 1. Three Peaks */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            1. The Yorkshire Three Peaks
          </h2>
          <p className="text-gray-500 mb-3">
            Difficulty: Intermediate–Challenging | Distance: 24 km | Elevation:
            1,585 m
          </p>
          <p className="text-gray-700 mb-3">
            The Yorkshire Three Peaks Challenge — Pen-y-ghent, Whernside, and
            Ingleborough — is a classic endurance route. Starting from
            Horton-in-Ribblesdale, this circular walk delivers dramatic scenery
            and a serious physical test.
          </p>
          <p className="text-gray-700">
            While demanding, fit intermediate hikers will find it achievable.
            Completing all three peaks in a single day is a milestone for many
            Yorkshire walkers.
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Key Challenges:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Long ascents and descents</li>
              <li>Weather exposure on ridges</li>
              <li>8–10 hour walking time</li>
              <li>Navigation awareness required</li>
            </ul>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <p className="text-blue-800 text-sm">
              💡 <strong>Tip:</strong> Start early, carry enough water, and use
              poles to protect knees on descents.
            </p>
          </div>
        </section>

        {/* 2. Cleveland Way */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            2. Cleveland Way: Sutton Bank to Gormire Lake
          </h2>
          <p className="text-gray-500 mb-3">
            Difficulty: Intermediate | Distance: 14 km | Elevation: 450 m
          </p>
          <p className="text-gray-700 mb-3">
            This dramatic section of the Cleveland Way offers cliff-top paths,
            woodland tracks, and panoramic views across the Vale of York.
          </p>
          <p className="text-gray-700">
            It’s ideal for hikers building confidence on exposed terrain without
            technical scrambling.
          </p>

          <div className="mt-4">
            <h3 className="font-semibold text-gray-900 mb-2">
              Technical Elements:
            </h3>
            <ul className="list-disc pl-5 text-gray-700">
              <li>Narrow cliff paths</li>
              <li>Steep climbs and descents</li>
              <li>Mixed woodland and moorland terrain</li>
              <li>Rocky underfoot sections</li>
            </ul>
          </div>
        </section>

        {/* 3. Upper Wharfedale */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            3. Upper Wharfedale: Kettlewell to Buckden Pike
          </h2>
          <p className="text-gray-500 mb-3">
            Difficulty: Intermediate | Distance: 16 km | Elevation: 650 m
          </p>
          <p className="text-gray-700 mb-3">
            This rewarding circular route climbs steadily to Buckden Pike,
            offering classic limestone scenery and open moorland walking.
          </p>
          <p className="text-gray-700">
            It’s a perfect blend of valley paths and high ground navigation.
          </p>

          <div className="mt-4 p-4 bg-green-50 rounded-lg">
            <p className="text-green-800 text-sm">
              🌿 <strong>Seasonal Tip:</strong> Spring wildflowers, summer
              heather, and winter snow all change the character of this walk.
            </p>
          </div>
        </section>

        {/* 4. North York Moors */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            4. North York Moors: Farndale & Blakey Ridge
          </h2>
          <p className="text-gray-500 mb-3">
            Difficulty: Intermediate | Distance: 18 km | Elevation: 500 m
          </p>
          <p className="text-gray-700 mb-3">
            A more remote-feeling route combining sheltered dale walking with
            exposed moorland crossing.
          </p>
          <p className="text-gray-700">
            Excellent for developing navigation skills and confidence in wild
            terrain.
          </p>

          <ul className="list-disc pl-5 text-gray-700 mt-4">
            <li>Pathless moorland sections</li>
            <li>Boggy ground after rain</li>
            <li>Strong winds on Blakey Ridge</li>
            <li>Historic standing stones and railway remains</li>
          </ul>
        </section>

        {/* 5. Yorkshire Wolds */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            5. Yorkshire Wolds: Thixendale Circular
          </h2>
          <p className="text-gray-500 mb-3">
            Difficulty: Intermediate | Distance: 21 km | Elevation: 550 m
          </p>
          <p className="text-gray-700 mb-3">
            The rolling chalk hills of the Wolds deliver relentless ups and
            downs, making this a fantastic endurance builder.
          </p>
          <p className="text-gray-700">
            Quiet, uncrowded, and deceptively challenging.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-xl font-bold mb-4">
            🌟 Essential Intermediate Hiking Skills
          </h2>
          <ul className="text-gray-700 space-y-1 text-sm">
            <li>• Confident OS map reading</li>
            <li>• Compass basics</li>
            <li>• Weather interpretation</li>
            <li>• Emergency decision-making</li>
          </ul>
        </section>

        {/* Final */}
        <section className="border-t pt-8">
          <h2 className="text-2xl font-bold mb-4">
            🏁 Final Advice
          </h2>
          <p className="text-gray-700 mb-4">
            Intermediate routes demand respect. Know when to turn back, hike
            with others when possible, and always leave your route plan behind.
          </p>
          <div className="bg-green-50 p-4 rounded-lg">
            <p className="text-green-800 font-semibold">
              Happy hiking! 🥾 The Yorkshire hills are waiting.
            </p>
          </div>
        </section>
      </div>

    </div>
  );
};

export default IntermediateHikingBlog;
