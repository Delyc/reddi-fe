import sidebarItems from "@/data/sidebarItem";
import { useState } from "react";
const Sidebar = () => {
  const [show, setShow] = useState(null);
  const handleShow = (id: any) => {
    setShow(id === show?null:id);
  };
  return (
    <>
      <section className="px-10 w-64 border min-h-[100vh] py-24 shadow rounded-sm bg-white">
        <div className="flex flex-col gap-5">
          {sidebarItems.map((sidebarItem, index) => {
            return (
              <div key={index}>
                <div className="flex items-center justify-center  rounded-lg bg-gray-100 px-10">
                  <div className="flex flex-col gap-5 w-full justify-center items-center">
                    <div className="flex justify-between items-center w-full">
                      <p>{sidebarItem.title}</p>
                      <button onClick={() => handleShow(sidebarItem.id)}>
                        <svg
                          width="800px"
                          height="800px"
                          viewBox="0 0 1024 1024"
                          className={`h-6 w-6 ${
                            show === sidebarItem.id ? "rotate-180" : "rotate-0"
                          } `}
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M903.232 256l56.768 50.432L512 768 64 306.432 120.768 256 512 659.072z"
                            fill="#000000"
                          />
                        </svg>
                      </button>
                    </div>
                    <p>
                      {show === sidebarItem.id && (
                        <div>
                          {sidebarItem.subTopics.map((subTopic, index) => {
                            return (
                              <div key={index}>
                                <p>{subTopic}</p>
                              </div>
                            );
                          })}{" "}
                        </div>
                      )}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
};
export default Sidebar;
