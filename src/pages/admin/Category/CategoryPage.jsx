import { useEffect, useState } from "react";
import { getCategories, deleteCategory } from "../../../services/category";
import { toast } from "react-toastify";

const CategoryPage = () => {
  const [categories, setCategories] = useState([]);

  const fetchCategories = async () => {
    try {
      const res = await getCategories();
      if (res) {
        setCategories(res.data.data.categories);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await deleteCategory(id);
      if (res) {
        toast.success("Xóa danh mục thành công");
        fetchCategories();
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <main className="bg-white rounded-xl py-10 px-[66px]">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="relative min-h-[585px]">
          <div className="px-4">
            <div className="sm:flex sm:items-center">
              <div className="flex-auto">
                <h1 className="text-xl font-bold leading-6 text-gray-900">
                  Danh mục
                </h1>
                <p className="mt-2 text-sm text-gray-700">
                  Bảng danh sách bao gồm thông tin của tất cả các danh mục.
                </p>
              </div>
              <div className="mt-4 sm:ml-16 sm:mt-0 sm:flex-none">
                <a href="/admin/categories/add">
                  <button
                    type="button"
                    className="block rounded-md bg-green-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-green-500 transition-colors"
                  >
                    Thêm danh mục
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
                          Tên danh mục
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
                      {categories.map((category, index) => (
                        <tr
                          className="odd:bg-white even:bg-slate-50"
                          key={index}
                        >
                          <td className="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-gray-900 sm:pl-3">
                            {index + 1}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                            {category.name}
                          </td>
                          <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                            <img
                              src={category.image}
                              alt=""
                              className="size-20 rounded-lg"
                            />
                          </td>
                          <td className="relative whitespace-nowrap py-4 pl-3 pr-4 text-right text-sm font-medium sm:pr-3 select-none">
                            <a
                              href={`/admin/categories/edit/${category._id}`}
                              className="text-indigo-600 hover:text-indigo-900"
                            >
                              Sửa
                            </a>
                            <span
                              className="text-red-600 hover:text-red-800 ml-4 cursor-pointer btn-delete"
                              onClick={() => handleDelete(category._id)}
                            >
                              Xóa
                            </span>
                          </td>
                        </tr>
                      ))}
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

export default CategoryPage;
