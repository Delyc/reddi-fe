import Navbar from "../layouts/Navbar";

interface Props {
    children: any
}

const SideNavBarWrapper = () => {
    return ( 
        <section className=" w-full fixed ">
            <Navbar />

           

       
        </section>
     );
}
 
export default SideNavBarWrapper;