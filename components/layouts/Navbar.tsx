import Button from "../ui/Button";
import Link from "next/link";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const Navbar = () => {
  const user = localStorage.getItem("token")
  const router = useRouter()

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    toast.success("Logged out Successfully")
    router.push("/login")
  }

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/talents', label: 'Explore Talents' },
    { href: '/showTalents', label: 'Show your Talents' },
  ];


  return (
    <>
      <header className="flex justify-between items-center py-5 w-full fixed z-50 px-6 xl:px-20 bg-white border-b">
        <h1 className="text-primary-blue font-bold text-3xl">BeMyVoice</h1>
        <div className="w-12 h-12 md:hidden">
          <svg className="w-full h-full" width="800px" height="800px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z" fill="#eb5b39" /></svg>
        </div>
        <ul className="md:flex gap-10 hidden ">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={router.pathname === link.href ? 'text-primary-orange font-bold' : ''}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="md:flex gap-10 hidden ">
          {user ? <Button onClick={handleLogout} className="bg-white border border-primary-orange text-primary-orange font-bold rounded-10" text="Logout" /> : <Button className="bg-white border border-primary-orange text-primary-orange font-bold rounded-10" text="Sign up / login" />}
          <Button className="bg-primary-orange text-white" text="Support us"/>
        </div>
      </header>
    </>
  );
};

export default Navbar;
