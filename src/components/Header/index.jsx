import { Link, NavLink } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { getTokens } from "../../utils/auth";
import { useDispatch } from "react-redux";
import { authLogOut } from "../../store/reducers/authSlice";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let username = "";
  if (getTokens().accessToken) {
    username = jwtDecode(getTokens().accessToken).username || "";
  }
  const handleLogout = () => {
    dispatch(authLogOut());
    navigate("/");
  };

  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <header className="bg-green-600">
      <div className="container mx-auto grid grid-cols-[40px_1fr_40px] grid-rows-[40px] content-center pt-1.5 pb-2 md:grid-cols-[200px_1fr_270px] md:grid-rows-[56px] md:pt-4 md:pb-[44px]">
        <div className="grid place-content-start content-center md:hidden">
          <button
            type="button"
            aria-haspopup="dialog"
            aria-expanded="false"
            aria-controls="radix-:Rd4l9m:"
            data-state="closed"
          >
            <svg
              width="24"
              height="24"
              className="text-white"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3 17H21C21.5523 17 22 17.4477 22 18C22 18.5128 21.614 18.9355 21.1166 18.9933L21 19H3C2.44772 19 2 18.5523 2 18C2 17.4872 2.38604 17.0645 2.88338 17.0067L3 17H21H3ZM2.99988 11L20.9999 10.9978C21.5522 10.9978 22 11.4454 22 11.9977C22 12.5105 21.6141 12.9333 21.1167 12.9911L21.0001 12.9978L3.00012 13C2.44784 13.0001 2 12.5524 2 12.0001C2 11.4873 2.38594 11.0646 2.88326 11.0067L2.99988 11L20.9999 10.9978L2.99988 11ZM3 5H21C21.5523 5 22 5.44772 22 6C22 6.51284 21.614 6.93551 21.1166 6.99327L21 7H3C2.44772 7 2 6.55228 2 6C2 5.48716 2.38604 5.06449 2.88338 5.00673L3 5H21H3Z"
                fill="currentColor"
              ></path>
            </svg>
          </button>
        </div>
        <div className="grid place-content-center content-center mt-3 transition-[opacity] duration-300 md:place-content-start">
          <Link className="text-2xl md:text-3xl text-white font-bold " to={"/"}>
            PHARMARTIST
          </Link>
        </div>
        <div className="grid place-content-end content-center md:col-start-3 md:col-end-4 md:place-content-stretch">
          <div className="flex h-full items-center justify-between">
            <div className="hidden md:flex items-center">
              {username ? (
                <div className="relative flex items-center">
                  <span
                    className="flex justify-center items-center gap-1 text-white mr-2 text-xl cursor-pointer"
                    onClick={togglePopup}
                  >
                    <FontAwesomeIcon icon={faUser} />
                    <p className="text-lg font-medium">{username}</p>
                  </span>
                  {isPopupVisible && (
                    <div className="absolute top-full mt-2 right-0 bg-white border border-gray-300 rounded-lg shadow-lg z-10">
                      <button
                        className="block w-[110px] px-4 py-2 text-left text-black"
                        onClick={() => {
                          handleLogout();
                          setPopupVisible(false);
                        }}
                      >
                        Đăng xuất
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  to={"/tai-khoan/dang-nhap"}
                  className="flex items-center cursor-pointer text-white"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="size-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.5 6a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0ZM3.751 20.105a8.25 8.25 0 0 1 16.498 0 .75.75 0 0 1-.437.695A18.683 18.683 0 0 1 12 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 0 1-.437-.695Z"
                      clipRule="evenodd"
                    />
                  </svg>

                  <div className="ml-2 font-medium">Đăng nhập</div>
                </Link>
              )}
            </div>
            <div className="cart-mini relative shrink-0 md:ml-auto css-62ialb">
              <Link
                className="inline-flex items-center justify-center w-10 h-10 bg-white rounded-full md:w-[134px] md:h-[48px] md:rounded-[42px]"
                to={"/gio-hang"}
              >
                <div className="relative">
                  <span
                    className="estore-icon  css-1usv4xi"
                    style={{
                      fontSize: "20px",
                      verticalAlign: "middle",
                      color: "white",
                    }}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="size-5 md:size-6 text-green-600"
                    >
                      <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                    </svg>
                  </span>
                </div>
                <span className="hidden md:block font-medium  text-green-600 ml-2">
                  Giỏ hàng
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="col-span-full mt-1.5 grid h-[36px] content-center transition-[margin] md:col-start-2 md:col-end-3 md:row-start-1 md:row-end-2 md:mx-auto md:mt-0 md:h-auto md:w-[680px]">
          <div className="relative">
            <div>
              <span className="relative inline-flex items-center bg-white rounded-[28px] p-1 pl-3 w-full sm:p-[6px] sm:pl-4 sm:rounded-[35px]">
                <input
                  id="search_header"
                  placeholder="Tìm tên thuốc, bệnh lý, thực phẩm chức năng..."
                  autoComplete="off"
                  maxLength="200"
                  className="w-full text-ellipsis bg-transparent text-[#020b27] outline-none placeholder:text-text-tertiary placeholder-shown:text-ellipsis h-[28px] sm:h-[40px] text-body1 placeholder:text-sm peer"
                  defaultValue=""
                />
                <button className="ml-2 items-center h-[20px] w-[20px] shrink-0 text-[#4a4f63] hidden">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.0033 2.4C17.3053 2.4 21.6033 6.69807 21.6033 12C21.6033 17.3019 17.3053 21.6 12.0033 21.6C6.70139 21.6 2.40332 17.3019 2.40332 12C2.40332 6.69807 6.70139 2.4 12.0033 2.4ZM9.37464 8.53646C9.1408 8.37447 8.81749 8.39761 8.60921 8.60589L8.53978 8.68899C8.37779 8.92283 8.40093 9.24614 8.60921 9.45442L11.1548 12L8.60921 14.5456L8.53978 14.6287C8.37779 14.8625 8.40093 15.1858 8.60921 15.3941L8.69231 15.4635C8.92615 15.6255 9.24946 15.6024 9.45774 15.3941L12.0033 12.8485L14.5489 15.3941L14.632 15.4635C14.8658 15.6255 15.1892 15.6024 15.3974 15.3941L15.4669 15.311C15.6289 15.0772 15.6057 14.7539 15.3974 14.5456L12.8518 12L15.3974 9.45442L15.4669 9.37132C15.6289 9.13748 15.6057 8.81417 15.3974 8.60589L15.3143 8.53646C15.0805 8.37447 14.7572 8.39761 14.5489 8.60589L12.0033 11.1515L9.45774 8.60589L9.37464 8.53646Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
                <button className="shrink-0 rounded-full bg-green-100 text-text-focus size-7 p-1.5 md:size-10 md:p-[12px] ml-3 text-green-600 peer-focus:bg-green-600 peer-focus:text-white transition-colors">
                  <svg
                    width="100%"
                    height="100%"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="size-4"
                  >
                    <path
                      d="M10.9414 1.93125C5.98269 1.93125 1.94336 5.97057 1.94336 10.9293C1.94336 15.888 5.98269 19.9352 10.9414 19.9352C13.0594 19.9352 15.0074 19.193 16.5469 17.9606L20.2949 21.7066C20.4841 21.888 20.7367 21.988 20.9987 21.9853C21.2607 21.9826 21.5112 21.8775 21.6966 21.6923C21.882 21.5072 21.9875 21.2569 21.9906 20.9949C21.9936 20.7329 21.8939 20.4801 21.7129 20.2907L17.9648 16.5427C19.1983 15.0008 19.9414 13.0498 19.9414 10.9293C19.9414 5.97057 15.9001 1.93125 10.9414 1.93125ZM10.9414 3.93128C14.8192 3.93128 17.9395 7.05148 17.9395 10.9293C17.9395 14.8071 14.8192 17.9352 10.9414 17.9352C7.06357 17.9352 3.94336 14.8071 3.94336 10.9293C3.94336 7.05148 7.06357 3.93128 10.9414 3.93128Z"
                      fill="currentColor"
                    ></path>
                  </svg>
                </button>
              </span>
              <div className="hidden md:block md:absolute md:left-[-100px] md:right-[-100px] md:text-center md:whitespace-nowrap md:overflow-hidden md:mx-auto md:mt-1">
                <ul className="flex items-center text-white md:gap-4 md:justify-center text-sm">
                  <li className="item">
                    <Link to={"/"}>dung dịch vệ sinh</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>men vi sinh</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>sữa rửa mặt</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>kẽm</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>kem chống nắng</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>D3k2</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>canxi</Link>
                  </li>
                  <li className="item">
                    <Link to={"/"}>Dhc</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container hidden md:flex justify-center items-center gap-x-10 pb-4 font-medium text-white">
        <NavLink to={"/san-pham"}>Thuốc</NavLink>
        <NavLink to={"/san-pham"}>Thực phẩm chức năng</NavLink>
        <NavLink to={"/san-pham"}>Dược mỹ phẩm</NavLink>
        <NavLink to={"/san-pham"}>Mẹ và bé</NavLink>
        <NavLink to={"/san-pham"}>Chăm sóc cá nhân</NavLink>
        <NavLink to={"/san-pham"}>Thiết bị y tế</NavLink>
        <NavLink to={"/san-pham"}>Bệnh</NavLink>
        <NavLink to={"/san-pham"}>Góc sức khỏe</NavLink>
      </div>
    </header>
  );
};

export default Header;
