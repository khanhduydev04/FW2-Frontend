import PropTypes from "prop-types";

const BrandCard = ({
  url = "https://www.pharmacity.vn/collection/cham-da-cung-la-roche-posay",
  imageUrl,
  name,
}) => {
  return (
    <a className="group relative" href={url}>
      <picture>
        <img
          className="h-full w-full object-cover md:rounded-sm"
          src={imageUrl}
          alt="Cetaphil"
          loading="lazy"
          width="500"
          height="500"
        />
      </picture>
      <label className="absolute bottom-0 line-clamp-1 w-full px-2 py-1 text-center text-xs group-odd:bg-blue-300 group-even:bg-blue-100 md:rounded-b md:py-3.5 md:text-base z-[1]">
        {name}
      </label>
    </a>
  );
};

BrandCard.propTypes = {
  url: PropTypes.string,
  imageUrl: PropTypes.string,
  name: PropTypes.string,
};

export default BrandCard;
