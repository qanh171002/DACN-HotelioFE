import Button from "../components/Button";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-sm p-8 bg-white shadow-md rounded-xl">
        <div className="flex flex-col items-center">
          <h1 className="mt-2 text-2xl font-bold text-blue-500">Hotelio</h1>
          <p className="mb-6 font-medium text-gray-700">
            Sign in to your account
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Username</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1 font-medium">Email</label>
            <input
              type="email"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="testuser@gmail.com"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-1 font-medium">Password</label>
            <input
              type="password"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="mt-1 text-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <Button className="w-full font-semibold uppercase rounded-md">
            Sign up
          </Button>
        </form>
        <div className="mt-5 text-center text-md">
          Already have an account?{" "}
          <a href="/login" className="text-blue-500 hover:underline">
            Sign in
          </a>
        </div>
      </div>
    </div>
  );
}

export default Signup;
