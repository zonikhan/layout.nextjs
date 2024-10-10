

import Link from "next/link";

export default function Header(){
   
  return(
       <div>
        

        <ul className="flex gap-2 bg-yellow-600">
    <li>
        <Link href="/">Home</Link>
    </li>
    <li><Link href="/">about</Link>About</li>
    <li><Link href="/contact"></Link>Contact Us</li>
    <li><Link href="/career">Career</Link></li>
</ul>
</div>
  );
}
