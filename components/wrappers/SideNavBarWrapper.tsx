import Navbar from "../layouts/Navbar";
import Sidebar from "../layouts/Sidebar";

interface Props {
    children: any
}

const SideNavBarWrapper = () => {
    return ( 
        <section className=" w-full fixed ">
            <Navbar />
            <Sidebar/>

           

       
        </section>
     );
}
 
export default SideNavBarWrapper;