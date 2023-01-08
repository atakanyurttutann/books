import { ColumnCard, BookInfoCard } from "@/components/ui/card";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { getBooks } from "@/src/redux/slice/bookSlice";
import Image from "next/image";
const HomePageView = () => {
  const { books } = useSelector((state) => state.book);
  const [booksFilter, setBooksFilter] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    if (books?.docs) {
      if (books.numFound == 0) {
        setBooksFilter([]);
      } else {
        let newData = [];
        books.docs.forEach((item, index) => {
          const findIndex = newData.findIndex(
            (q) => q.year == item.first_publish_year,
          );
          if (findIndex != -1) {
            newData[findIndex].data.push(item);
          } else {
            newData.push({ year: item.first_publish_year, data: [item] });
          }
        });
        setBooksFilter(newData);
      }
    }
  }, [books]);
  useEffect(() => {
    dispatch(
      getBooks({
        params: {
          author: "mehmet",
          sort: "old",
        },
      }),
    );
  }, [dispatch]);

  const sumbit = (e) => {
    e.preventDefault();
    dispatch(
      getBooks({
        params: { author: e.target.author.value, sort: "old" },
      }),
    );
  };
  return (
    <div className=" custom-container ">
      <div className=" w-full mt-[63px]  font-robotoRegular ">
        <div className=" flex items-center w-full flex-wrap">
          <div className=" lg:w-auto w-full text-[28px] text-[#707090] mr-10">
            Lorem Board
          </div>
          <div className="text-[#1E272E] text-[15px] mr-3">books of</div>
          <form onSubmit={sumbit} className="flex">
            <input
              name="author"
              required
              className=" border-b outline-none mr-3"
            />
            <button
              type="sumbit"
              className=" w-[67px] h-[22px]  flex justify-center items-center bg-[#373A3B] text-white rounded text-[12px]">
              sumbit
            </button>
          </form>
          <div id="loading" className=" ml-4 hidden items-center  ">
            <div className="loader mr-3"></div>
            <div className=" text-[#2F2432] text-[12px]">Loading...</div>
          </div>
        </div>
        {booksFilter.length > 0 ? (
          <div className="  w-full   overflow-scroll mt-[30px]  px-3">
            <div className="   flex">
              {" "}
              {booksFilter?.map((item, index) => {
                return (
                  <div
                    key={index}
                    className=" min-w-full lg:min-w-[22%] mr-[40px]">
                    <ColumnCard title={item.year}>
                      {item.data.map((item, index) => (
                        <div key={index} className=" mb-5">
                          <BookInfoCard info={item} />
                        </div>
                      ))}
                    </ColumnCard>
                  </div>
                );
              })}{" "}
            </div>
          </div>
        ) : (
          <div className=" h-[600px] w-full flex justify-center items-center flex-col">
            <Image
              width={251}
              height={282}
              alt="empty"
              src={"/empty-state-image.png"}
            />
            <div className=" text-[#2C3A47] text-[30px] mt-[50px]">
              There is no board to show
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default HomePageView;
