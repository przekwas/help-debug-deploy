import { ImFacebook, ImTwitter, ImYoutube } from "react-icons/im";
import Link from "next/link";
import { Newsletter } from "./children";

export default function Footer() {
  const bg = {
    backgroundImage: "url('/assets/images/footer.png')",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "bottom left",
  };

  return (
    <footer className="bg-gray-50" style={bg}>
      <Newsletter />
      <div className="container mx-auto flex justify-center py-12">
        <div className="py-5">
          <div className="flex gap-6 justify-center">
            <Link href={"/"}>
              <a>
                <ImFacebook color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a href="">
                <ImTwitter color="#888888" />
              </a>
            </Link>
            <Link href={"/"}>
              <a href="">
                <ImYoutube color="#888888" />
              </a>
            </Link>
          </div>

          <p className="py-5 text-gray-400">
            Copyright ©2022 All Rights Reserved | This template was made with
            Daily Tuition
          </p>
          <p className="text-gray-400 text-center">Terms and Conditions</p>
        </div>
      </div>
    </footer>
  );
}
