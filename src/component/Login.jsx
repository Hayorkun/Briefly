const Login = () => {
  return (
    <section className="h-[90vh] relative overflow-hidden flex items-center justify-center">
      <div className="glow absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>
      <div className="glow-reverse absolute w-96 h-96 bg-teal-500/20 rounded-full blur-3xl"></div>

      <div className="relative z-10 rounded-xl w-md p-10 flex flex-col bg-white/5 backdrop-blur-md shadow-white/20 shadow-md">
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl mb-2">
            Welcome to Briefly<span className="text-teal-400">.</span>!
          </h1>
          <p className="text-center max-w-70 text-[10px] text-white/45 mb-5">
            Credentials are only used to authenticate in{" "}
            <span className="text-white bold">proofhub</span>. All saved data
            will be stored in your database.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Login;
