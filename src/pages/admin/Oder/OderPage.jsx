import React from 'react'

const OderPage = () => {
    return (
        <main className="bg-white rounded-xl py-10 px-[66px]">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="relative h-[585px]">
                    <div className="px-4">
                        <div className="sm:flex sm:items-center">
                            <div className="flex-auto">
                                <h1 className="text-xl font-bold leading-6 text-gray-900">
                                    Đơn hàng
                                </h1>
                                <p className="mt-2 text-sm text-gray-700">
                                    Bảng danh sách bao gồm thông tin của tất cả các đơn hàng.
                                </p>
                            </div>
                        </div>
                        <div className="mt-4 flow-root">
                            <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                                <div className="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
                                    <table className="min-w-full divide-y-[1px] divide-gray-300 text-center">
                                        <thead>
                                            <tr>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Mã đơn hàng
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Sản phẩm
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Tên người đặt
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Số điện thoại
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Địa chỉ
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Tổng tiền
                                                </th>
                                                <th
                                                    scope="col"
                                                    className="px-3 py-3.5 text-sm font-semibold text-gray-900"
                                                >
                                                    Trạng thái
                                                </th>
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
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    adasad
                                                </td>
                                                <td className="whitespace-nowrap px-3 py-4 text-sm text-gray-900">
                                                    adasad
                                                </td>
                                                <td className="py-4 pl-3 pr-4 flex justify-center gap-4 text-sm font-medium sm:pr-3 select-none">
                                                    <button className=' text-green-600'>Duyệt đơn</button>
                                                    <button className='text-red-600'>Hủy</button>
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
    )
}

export default OderPage