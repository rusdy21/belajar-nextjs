'use client';
import Button from "./Button";
import Link from "next/link";
import { useState } from "react";
import { MdSearch } from "react-icons/md";
import AccountDropdown from "./AccountDropdown";

type Props = {};

const NavBar: React.FC<Props> = () => {
  const [keyword, setKeyword] = useState("");
  const [isDropdownopen, setDropdownopen] = useState(false);
  
  const isLoggedin = true;

  return (
    <header className="h-16 border-b-slate-400 flex items-center justify-between px-24">
      <Link href="#">
        <img src="images/noobium_logo.svg" />
      </Link>
      <div className="w-[720px] absolute left-1/2 -translate-x-1/2 flex items-center">
        <MdSearch className="text-slate-400 mr-4" size={24} />
        <input
          className="font-sans text-sm placeholder-slate-400 text-slate-900 outline-none"
          type="text"
          placeholder="Search"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
        />
      </div>
      {isLoggedin && (
        <div>
        <Button onClick={() => setDropdownopen(!isDropdownopen)}>
        <img src="../images/people.svg" alt="user-login" className="w-10 h-10 rounded-full object-cover" />
        </Button>
        {isDropdownopen && (
          <AccountDropdown />
        )}        
        </div>
      )}
      {!isLoggedin && (
          <Link href="signin">
          <Button>Sign In</Button>
        </Link>
      )}
      
    </header>
  );
};

export default NavBar;
