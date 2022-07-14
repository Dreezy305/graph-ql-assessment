/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import "./App.css";
import { useQuery, gql } from "@apollo/client";
import { ReactComponent as Glass } from "./assets/glass.svg";
import { ReactComponent as Funnel } from "./assets/funnel.svg";
import UserImg from "./assets/userImg.png";
import Priority from "./components/Priority";
import Types from "./components/Types";

function App() {
  const [filter, setFilter] = React.useState("");
  const [book, setBook] = React.useState<any>();

  const GET_BOOKS = gql`
    query {
      books {
        id
        name
        author {
          id
        }
        releaseDate
        priority
        authorName
        type
      }
    }
  `;

  React.useEffect(() => {
    getBook();
  });

  const { loading, error, data } = useQuery(GET_BOOKS);
  const getBook = async () => {
    setBook(data);
  };

  console.log(book?.books, "km");

  const getData = (data: any) => {
    let dataArr = [];
    dataArr.push(data);
  };

  const getDataFromPriority = (data: any) => {
    let dataArr = [];
    dataArr.push(data);
    console.log(dataArr);
  };

  const searchBar = () => {
    return (
      <div className="relative w-3/4 pt-8">
        <input
          type={"text"}
          id="search-bar"
          name="search-bar"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          placeholder="Search by author name"
          className="rounded-md w-full mx-auto border-solid bg-[#F2F2F2] py-3 px-3 outline-none shadow-none font-Poppins_Regular"
        />
        <Glass className="absolute top-12 right-4" />
      </div>
    );
  };

  const filterSelectors = () => {
    return (
      <div className="flex flex-row space-x-7 items-center mt-8">
        <Types getData={getData} />
        <Priority getData={getDataFromPriority} />
        <select className="w-24 h-9 rounded-md border-solid border-black outline-none px-1 font-Jarkata_Medium">
          <option value="" disabled selected hidden>
            Dates
          </option>
        </select>
      </div>
    );
  };

  const dataCard = () => {
    return (
      <>
        {book?.books.map((i: any) => {
          return (
            <>
              <div
                className="w-36 h-11 lg:flex lg:flex-row lg:items-center lg:justify-between rounded-md bg-[#0F1642] px-4 mt-8 cursor-pointer py-4 text-center"
                key={i.id}
              >
                <h6 className="font-medium text-white text-sm font-Jarkata_Medium">
                  {i.releaseDate}
                </h6>
              </div>
              <div className="bg-white w-2/3 rounded-xl shadow-lg shadow-indigo-500/40 py-7 mt-4 border-solid border-black">
                <div className="flex flex-row px-8 space-x-8">
                  <img
                    src={UserImg}
                    className="h-20 w-20 rounded-2xl"
                    alt="user image"
                  />
                  <div className="flex flex-col space-y-0">
                    <div className="flex flex-row space-x-1">
                      <span className="font-Poppins_Regular">Author Name:</span>
                      <span className="font-Poppins_Regular">
                        {i.authorName}
                      </span>
                    </div>
                    <div className="flex flex-row space-x-1">
                      <span className="font-Poppins_Regular">Title:</span>
                      <span className="font-Poppins_Regular">{i.name}</span>
                    </div>
                    <div className="flex flex-row space-x-1">
                      <span className="italic font-Poppins_Regular">Type:</span>
                      <span className="font-Poppins_Regular">{i.type}</span>
                    </div>
                    <div className="flex flex-row space-x-1">
                      <span className="italic font-Poppins_Regular">
                        Priority:
                      </span>
                      <span
                        className={`font-Poppins_Regular ${
                          i.priority === "Low"
                            ? "text-[#ef4444]"
                            : i.priority === "Medium"
                            ? "text-[#fb923c]"
                            : i.priority === "High"
                            ? "text-[#15803d]"
                            : "text-blue-400"
                        }`}
                      >
                        {i.priority}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </>
    );
  };
  return (
    <div className="container mx-auto lg:mx-auto pb-7">
      {searchBar()}
      <div className="w-24 h-11 lg:flex lg:flex-row lg:items-center lg:justify-between rounded-md bg-[#0F1642] px-4 mt-8 cursor-pointer py-4">
        <Funnel fill="#fff" className="cursor-pointer" />
        <h5 className="font-mono text-white text-xs font-medium leading-3 cursor-pointer font-Jarkata_Medium">
          Filter
        </h5>
      </div>
      {filterSelectors()}
      {dataCard()}
    </div>
  );
}

export default App;
