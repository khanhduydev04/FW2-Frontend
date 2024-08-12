import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const SectionHeading = ({ title, url }) => {
  return (
    <div className="block-title flex items-center space-x-1 py-4 px-0 md:p-4 md:px-0">
      <div className="flex flex-1">
        <h4 className="font-semibold line-clamp-1 text-base md:text-[20px]">
          {title}
        </h4>
      </div>
      <div>
        {url && (
          <Link
            className="relative flex justify-center border-0 bg-transparent text-sm font-normal text-blue-500 outline-none md:hover:text-gray-700 md:text-base"
            type="button"
            to={url}
          >
            Xem thêm
          </Link>
        )}
      </div>
    </div>
  );
};

SectionHeading.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
};

export default SectionHeading;
