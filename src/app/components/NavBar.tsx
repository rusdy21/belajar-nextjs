import Button from "./Button";
import Link from "next/link";
type Props = {};

const NavBar: React.FC<Props> = ()=>{
  return (
    <header className="h-16 border-b-slate-400 flex items-center justify-between px-24">
        <img src="images/noobium_logo.svg"/>
        <Link href="signin">
        <Button>Sign In</Button>
       </Link>
    </header>
  );
};

export default NavBar;