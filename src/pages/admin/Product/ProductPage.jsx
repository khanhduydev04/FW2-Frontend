const AdminProductPage = () => {
  return (
    <main className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <div className="sm:flex sm:items-center">
              <div className="flex-auto">
                <h1 className="text-xl font-bold leading-6 text-gray-900">
                  Sản phẩm
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Bảng danh sách bao gồm thông tin của tất cả các sản phẩm.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <a href="/admin/product/add">
                  <button
                    type="button"
                    className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                  >
                    Thêm sản phẩm
                  </button>
                </a>
              </div>
            </div>
            <div className="mt-4 flow-root">
              <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                  <table className="min-w-full divide-y-[1px] divide-gray-300">
                    <thead>
                      <tr>
                        <th
                          scope="col"
                          className="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-gray-900 sm:pl-3"
                        >
                          #
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Tên sản phẩm
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Giá
                        </th>
                        <th
                          scope="col"
                          className="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
                        >
                          Hình ảnh
                        </th>
                        <th
                          scope="col"
                          className="relative py-3.5 pl-3 pr-4 sm:pr-3"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="bg-white">
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          abc
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          dcs
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 select-none">
                          <a
                            href="/admin/product/edit/:id"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Sửa
                          </a>
                          <span className="text-red-600 hover:text-red-800 ml-4 cursor-pointer btn-delete">
                            Xóa
                          </span>
                        </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          abc
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          dcs
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 select-none">
                          <a
                            href="/admin/product/edit/:id"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Sửa
                          </a>
                          <span className="text-red-600 hover:text-red-800 ml-4 cursor-pointer btn-delete">
                            Xóa
                          </span>
                        </td>
                      </tr>
                      <tr className="odd:bg-white even:bg-slate-50">
                        <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                          abc
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          dcs
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                          adasad
                        </td>
                        <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 select-none">
                          <a
                            href="/admin/product/edit/:id"
                            className="text-indigo-600 hover:text-indigo-900"
                          >
                            Sửa
                          </a>
                          <span className="text-red-600 hover:text-red-800 ml-4 cursor-pointer btn-delete">
                            Xóa
                          </span>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default AdminProductPage;
