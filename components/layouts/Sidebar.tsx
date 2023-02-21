import sidebarItems from "../../data/sidebarItem";
import { useState } from "react";
const Sidebar = () => {
  const [show, setShow] = useState(null);
  const handleShow = (id: any) => {
    setShow(id === show?null:id);
  };
  return (
    <>
   
    </>
  );
};
export default Sidebar;
