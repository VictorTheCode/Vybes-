const Home = async () => {
  return (
    <div className="min-h-screen bg-gray-80 flex flex-col items-center justify-center -mt-16">
      <h1 className="text-4xl font-bold mb-8 font-(family-name:var(--font-geist-sans) text-[#333333]">
        Vybes AI Website Builder
      </h1>
      <p className="text-lg text-gray-600">
        Welcome to Vybes, your AI-powered website builder!
      </p>
      <div className="mt-10 w-full max-w-4xl px-4">
        <div className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">Get Started</h2>
          <p className="text-gray-700 mb-6">
            To create your first AI-generated website, click the button below to
            begin the process.
          </p>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            Create Your Website
          </button>
        </div>
      </div>

      <div>
        <footer className="mt-20 text-gray-500">
          &copy; {new Date().getFullYear()} Vybes. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default Home;
