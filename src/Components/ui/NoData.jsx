import Button from "./Button";
import Nodata from "../../../public/Nodata.svg";

function NoData({
  title = "",
  description = "",
  buttonText = "",
  buttonTo = "",
  insideTable = false, // New prop to toggle table rendering
}) {
  if (insideTable) {
    return (
      <tr>
        <td colSpan="4" className="p-4">
          <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-main-light  p-20">
            <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 space-y-20">
              <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-main ">
                {title}
              </h1>
              <p className="mt-4 text-2xl lg:text-4xl font-bold text-gray-800 dark:text-text-dark">
                {description}
              </p>
            </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 hidden lg:block ">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-main to-main-light rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
                <img
                  src={Nodata}
                  alt="No data"
                  className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </td>
      </tr>
    );
  }

  return (
    <div className="flex flex-col lg:flex-row items-center justify-center w-full bg-main-light  p-20">
      <div className="text-center lg:text-left lg:w-1/2 lg:pr-12 space-y-20">
        <h1 className="text-6xl font-extrabold text-transparent bg-clip-text bg-main ">
          {title}
        </h1>
        <p className="mt-4 text-2xl lg:text-4xl font-bold text-gray-800 dark:text-text-dark">
          {description}
        </p>
      </div>
      <div className="lg:w-1/2 mt-12 lg:mt-0 hidden lg:block ">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-main to-main-light  rounded-full filter blur-3xl opacity-30 animate-pulse"></div>
          <img
            src={Nodata}
            alt="No data"
            className="relative z-10 w-full max-w-lg mx-auto rounded-lg shadow-2xl transform hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </div>
  );
}

export default NoData;
