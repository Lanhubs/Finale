import { useParams } from "@remix-run/react";
import Footer from "./Utils/Footer";
import Header from "./Utils/Header";

export default ({ children }: { children: React.ReactNode }) => {
  const params = useParams();
  return (
    <>
    <main >

      <div className=" h-screen w-screen  bg-gray-900 text-white">
        
        {children}

        {/* <Footer /> */}
      </div>
    </main>
    </>
  );
};
