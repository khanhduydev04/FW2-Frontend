const EditCatagoryPage = () => {
  return (
    <div className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative h-[585px]">
          <div className="px-4">
            <h1 className="text-xl font-bold leading-6 text-gray-900 mb-5">
              Cập nhật danh mục
            </h1>
            <form action="" id="addCategory">
              <div className="grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 mb-5">
                <div className="sm:col-span-3">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Tên danh mục
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="name"
                      id="name"
                      autoComplete="given-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
                <div className="sm:col-span-3">
                  <label
                    htmlFor="description"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Mô tả
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="description"
                      id="description"
                      autoComplete="family-name"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
              <button
                type="submit"
                className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
              >
                Cập nhật
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditCatagoryPage;
