import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNavBar";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justify-center items-center flex-col overflow-hidden
    mx-auto sm:px-10 px-5">
      <div className="max-wp7xl w-full">
        <FloatingNav navItems={[
          {name:'Home',
           link:'/',
           icon:<FaHome />
          },

          {name:'About',
            link:'/about',
            icon:<FaHome />
           },

           {name:'Projects',
            link:'/projects',
            icon:<FaHome />
           },
          
        ]}/>
        <Hero />
        <Grid />
      </div>
    </main>
    
  );
}
