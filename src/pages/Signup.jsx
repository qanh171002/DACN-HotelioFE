import Button from "../components/Button";

function Signup() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="w-full max-w-sm rounded-xl bg-white p-8 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="mt-2 text-2xl font-bold text-blue-500">Hotelio</h1>
          <p className="mb-6 font-medium text-gray-700">
            Sign in to your account
          </p>
        </div>
        <form>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Username</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-4">
            <label className="mb-1 block font-medium">Email</label>
            <input
              type="email"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>
          <div className="mb-6">
            <label className="mb-1 block font-medium">Password</label>
            <input
              type="password"
              className="w-full rounded-md border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <div className="mt-1 text-right">
              <a href="#" className="text-sm text-gray-500 hover:underline">
                Forgot password?
              </a>
            </div>
          </div>
          <Button className="w-full rounded-md font-semibold uppercase">
            Sign up
          </Button>
        </form>
        <div className="text-md mt-5 text-center">
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
