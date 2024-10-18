import Button from "../Components/ui/Button";

const Forbidden = () => {
  return (
    <div className="flex flex-col py-16 px-8 lg:px-28 lg:flex-row-reverse items-center justify-center min-h-screen bg-main-light">
      <div className="lg:w-1/2 mt-12 lg:mt-0">
        <div className="relative">
          <div className="absolute inset-0 bg-main rounded-full filter blur-3xl opacity-40 animate-pulse"></div>
          <img
            src="403 Error Forbidden-rafiki.svg"
            alt="Access Denied"
            className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl transition-transform duration-300 transform hover:scale-105"
          />
        </div>
      </div>
      <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 space-y-8 lg:space-y-16">
        <p className="mt-4 text-4xl lg:text-6xl font-extrabold text-main tracking-wide">
          Access Denied!
        </p>
        <p className="mt-4 text-lg lg:text-xl max-w-md mx-auto lg:mx-0 text-gray-700">
          You don't have permission to view this page. Please contact your administrator if you believe this is a mistake.
        </p>
        <div className="mt-8 space-y-4 lg:space-y-0 lg:space-x-4">
          <Button
            to={"/"}
            text="Back to Dashboard"
            variant="fill"
            size="lg"
            className="w-full lg:w-auto bg-accent text-white hover:bg-accent-dark transition-colors duration-300 shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
