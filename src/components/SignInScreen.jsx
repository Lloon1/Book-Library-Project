const SignInScreen = () => {
return (
    <div className="relative h-screen w-full">
      {/* Background Image */}
    <img
        src="path-to-your-image" // Replace with actual path to the background image
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover"
    />

      {/* Overlay */}
    <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content */}
    <div className="relative z-10 flex flex-col justify-center items-center h-full">
        {/* Logo */}
        <div className="mb-10">
          <img src="path-to-your-logo" alt="Logo" className="w-40" /> {/* Adjust size as needed */}
        </div>

        {/* Sign In Button */}
        <button className="bg-white text-black text-lg font-semibold py-2 px-6 mb-4 rounded-md w-3/4">
        Sign In
        </button>

        {/* Create Account Button */}
        <button className="bg-gold text-white text-lg font-semibold py-2 px-6 rounded-md w-3/4">
        Create Account
        </button>
    </div>
    </div>
);
};

export default SignInScreen;
