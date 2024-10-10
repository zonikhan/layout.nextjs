
import Link from "next/link";
export default function Career(){
   return(
       <div className="bg-rose-700 h-12">
        <div className="text-blue-700 flex justify-between item-center"></div>

           <ul className="flex gap-2 bg-green-600">
               <li>
                   <Link href="/">Home</Link>
               </li>
               <li><Link href="/">about</Link>About</li>
               <li><Link href="/career">Careers</Link></li>
               <li><Link href="/contact-us">Contact Us</Link></li>
           </ul>
           <h1>Careers page</h1>{" "}
       </div>
   );
}