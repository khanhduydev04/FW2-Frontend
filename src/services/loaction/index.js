import axios from "axios";

const fetchProvinces = async () => {
  const response = await axios.get(
    "https://open.oapi.vn/location/provinces?size=63"
  );
  return response.data;
};

const fetchDistricts = async (provinceId) => {
  const response = await axios.get(
    `https://open.oapi.vn/location/districts?provinceId=${provinceId}`
  );
  return response.data;
};

const fetchWards = async (districtId) => {
  const response = await axios.get(
    `https://open.oapi.vn/location/wards?districtId=${districtId}`
  );
  return response.data;
};

export { fetchProvinces, fetchDistricts, fetchWards };
