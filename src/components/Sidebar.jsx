import Link from "next/link";
import Icon from "react-hero-icon";

function Sidebar() {
  return (
    <div>
      <div className="h-screen flex flex-col bg-blue-700 w-20  items-center hover:w-24  fixed ">
        <h5 className="flex flex-col text-center text-sm">
          <Icon className="flex w-24 h-11 my-5" icon="home" type="solid" />
          <p>Dashboard</p>
        </h5>
        <Link href="/ListCar" as="listcar">
          <h5 className="flex flex-col text-center text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-24 h-11 my-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
              <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
            </svg>
            <p>Car List</p>
          </h5>
        </Link>
      </div>
    </div>
  );
}

export default Sidebar;
