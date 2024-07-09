import Image from "next/image";
import Img1 from "@/assets/image/properties/f1.jpg";
import Img2 from "@/assets/image/properties/e1.jpg";
import Img3 from "@/assets/image/properties/a1.jpg";
import Img4 from "@/assets/image/properties/b1.jpg";
import Img5 from "@/assets/image/properties/c1.jpg";

import Link from "next/link";

export default function Home() {
  return (
    <div>
      {/* <!-- Hero --> */}
      <section className="bg-blue-700 py-20 mb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-6xl">
              Find The Perfect Rental
            </h1>
            <p className="my-4 text-xl text-white">
              Discover the perfect property that suits your needs.
            </p>
          </div>
          <form className="mt-3 mx-auto max-w-2xl w-full flex flex-col md:flex-row items-center">
            <div className="w-full md:w-3/5 md:pr-2 mb-4 md:mb-0">
              <label className="sr-only">Location</label>
              <input
                type="text"
                placeholder="Enter Location (City, State, Zip, etc"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <div className="w-full md:w-2/5 md:pl-2">
              <label  className="sr-only">
                Property Type
              </label>
              <select
                id="property-type"
                className="w-full px-4 py-3 rounded-lg bg-white text-gray-800 focus:outline-none focus:ring focus:ring-blue-500"
              >
                <option value="All">All</option>
                <option value="Apartment">Apartment</option>
                <option value="Studio">Studio</option>
                <option value="Condo">Condo</option>
                <option value="House">House</option>
                <option value="Cabin Or Cottage">Cabin or Cottage</option>
                <option value="Loft">Loft</option>
                <option value="Room">Room</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <button
              type="submit"
              className="md:ml-4 mt-4 md:mt-0 w-full md:w-auto px-6 py-3 rounded-lg bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-500"
            >
              Search
            </button>
          </form>
        </div>
      </section>

      {/* <!-- Renters and Owners --> */}
      <section>
        <div className="container-xl lg:container m-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Renters</h2>
              <p className="mt-2 mb-4">
                Find your dream rental property. Bookmark properties and contact
                owners.
              </p>
              <a
                href="/properties.html"
                className="inline-block bg-black text-white rounded-lg px-4 py-2 hover:bg-gray-700"
              >
                Browse Properties
              </a>
            </div>
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h2 className="text-2xl font-bold">For Property Owners</h2>
              <p className="mt-2 mb-4">
                List your properties and reach potential tenants. Rent as an
                airbnb or long term.
              </p>
              <a
                href="/add-property.html"
                className="inline-block bg-blue-500 text-white rounded-lg px-4 py-2 hover:bg-blue-600"
              >
                Add Property
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Featured Properties --> */}
      <section className="bg-blue-50 px-4 pt-6 pb-10">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Featured Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
              <Image
                src={Img1}
                alt=""
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Seaside Retreat</h3>
                <div className="text-gray-600 mb-4">Condo</div>
                <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                  $2,500/wk
                </h3>
                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fa-solid fa-bed"></i> 4
                    <span className="md:hidden lg:inline">Beds</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-bath"></i> 3
                    <span className="md:hidden lg:inline">Baths</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    2,800 <span className="md:hidden lg:inline">sqft</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Nightly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </p>
                </div>

                <div className="border border-gray-200 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <span className="text-orange-700"> Boston MA </span>
                  </div>
                  <a
                    href="property.html"
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-md relative flex flex-col md:flex-row">
              <Image
                src={Img2}
                alt=""
                className="object-cover rounded-t-xl md:rounded-tr-none md:rounded-l-xl w-full md:w-2/5"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold">Modern Downtown Studio</h3>
                <div className="text-gray-600 mb-4">Studio</div>
                <h3 className="absolute top-[10px] left-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                  $4,200/mo
                </h3>
                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fa-solid fa-bed"></i> 1
                    <span className="md:hidden lg:inline">Beds</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-bath"></i> 1
                    <span className="md:hidden lg:inline">Baths</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    900 <span className="md:hidden lg:inline">sqft</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Nightly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </p>
                </div>

                <div className="border border-gray-200 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between">
                  <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <span className="text-orange-700"> Chicago IL </span>
                  </div>
                  <a
                    href="property.html"
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Recent Properties --> */}
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* <!-- Listing 1 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <Image src={Img3} alt="" className="object-cover rounded-t-xl" />
              <div className="p-4">
                <div className="text-left md:text-center lg:text-left mb-6">
                  <div className="text-gray-600">Apartment</div>
                  <h3 className="text-xl font-bold">Boston Commons Retreat</h3>
                </div>
                <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                  $4,200/mo
                </h3>

                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fa-solid fa-bed"></i> 3
                    <span className="md:hidden lg:inline">Beds</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-bath"></i> 2
                    <span className="md:hidden lg:inline">Baths</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    1,500 <span className="md:hidden lg:inline">sqft</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Monthly
                  </p>
                </div>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <span className="text-orange-700"> Boston MA </span>
                  </div>
                  <a
                    href="property.html"
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Listing 2 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <Image
                src={Img4}
                alt="aa"
                className="object-cover rounded-t-xl"
              />
              <div className="p-4">
                <div className="text-left md:text-center lg:text-left mb-6">
                  <div className="text-gray-600">Loft</div>
                  <h3 className="text-xl font-bold">Cozy Downtown Loft</h3>
                </div>
                <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                  $4,000/mo
                </h3>

                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fa-solid fa-bed"></i> 2
                    <span className="md:hidden lg:inline">Beds</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-bath"></i> 2
                    <span className="md:hidden lg:inline">Baths</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    1,800 <span className="md:hidden lg:inline">sqft</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Monthly
                  </p>
                </div>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <span className="text-orange-700"> New York NY </span>
                  </div>
                  <a
                    href="property.html"
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
            {/* <!-- Listing 3 --> */}
            <div className="bg-white rounded-xl shadow-md relative">
              <Image
                src={Img5}
                alt="aa"
                className="object-cover rounded-t-xl"
              />
              <div className="p-4">
                <div className="text-left md:text-center lg:text-left mb-6">
                  <div className="text-gray-600">Condo</div>
                  <h3 className="text-xl font-bold">
                    Luxury Condo With a View
                  </h3>
                </div>
                <h3 className="absolute top-[10px] right-[10px] bg-white px-4 py-2 rounded-lg text-blue-500 font-bold text-right md:text-center lg:text-right">
                  $3,300/mo
                </h3>

                <div className="flex justify-center gap-4 text-gray-500 mb-4">
                  <p>
                    <i className="fa-solid fa-bed"></i> 3
                    <span className="md:hidden lg:inline">Beds</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-bath"></i> 2
                    <span className="md:hidden lg:inline">Baths</span>
                  </p>
                  <p>
                    <i className="fa-solid fa-ruler-combined"></i>
                    2,200 <span className="md:hidden lg:inline">sqft</span>
                  </p>
                </div>

                <div className="flex justify-center gap-4 text-green-900 text-sm mb-4">
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Nightly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Weekly
                  </p>
                  <p>
                    <i className="fa-solid fa-money-bill"></i> Monthly
                  </p>
                </div>

                <div className="border border-gray-100 mb-5"></div>

                <div className="flex flex-col lg:flex-row justify-between mb-4">
                  <div className="flex align-middle gap-2 mb-4 lg:mb-0">
                    <i className="fa-solid fa-location-dot text-lg text-orange-700"></i>
                    <span className="text-orange-700"> Los Angeles CA </span>
                  </div>
                  <a
                    href="property.html"
                    className="h-[36px] bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg text-center text-sm"
                  >
                    Details
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
    </div>
  );
}
