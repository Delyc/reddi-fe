import Settings from "../svgs/Settings";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <section className="flex items-center justify-between px-20 py-5 w-full z-50 bg-white">
        <h1 className="font-bold text-3xl">Reddit </h1>
        <Input placeholder="Search" className="w-1/2"/>
        <div className="flex gap-10">
        
          <Link href="/signup"> <Button text="Login" className="rounded-lg" /> </Link>
        <Settings className="text-red-500 w-12 h-12" />
        </div>
        
      </section>
    </>
  );
};
export default Navbar;
