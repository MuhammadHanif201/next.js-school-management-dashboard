const Homepage = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-2">Homepage</h1>
      <p>
        If you are on <code>http://localhost:3000</code>, please go to{" "}
        <a
          href="/admin"
          className="text-blue-600 underline hover:text-blue-800"
        >
          /admin
        </a>{" "}
        for the admin dashboard.
      </p>
    </div>
  );
};

export default Homepage;
