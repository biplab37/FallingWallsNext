import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-2xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="w-2/3 sm:w-1/2 md:w-1/4">
            {/* <FWLWLogo font="text-4xl" /> */}
            {/* <Image
              src="./fwl-logo.webp"
              alt="Falling Walls Lab Wrocław"
              width={50}
              height={40}
              layout="responsive"
            /> */}
            <img src="./fwl-logo.webp" alt="Falling Walls Lab Wrocław" />
          </div>
          <div className="grid grid-cols-2 gap-12 sm:gap-24 sm:grid-cols-2">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    href="https://falling-walls.com/lab/"
                    className="hover:underline"
                  >
                    Falling Walls Lab Main Website
                  </Link>
                </li>
                <li>
                  <Link href="" className="hover:underline">
                    University of Wrocław
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Contact Us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  {/* <Phone className="inline-block w-4 h-4 -mt-1 me-1" /> */}
                  <span> +48 123 456 789</span>
                </li>
                <li>
                  {/* <Mail className="inline-block w-4 h-4 -mt-1 me-1" /> */}
                  <Link
                    href="mailto:%64%61%76%69%64%2e%62%6c%61%73%63%68%6b%65%40%75%77%72%2e%65%64%75%2e%70%6c"
                    className="hover:underline"
                  >
                    david.blaschke@uwr.edu.pl
                  </Link>
                  {/* <Link to="" className="hover:underline">
                      david.blaschke@uwr.edu.pl
                    </Link> */}
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2024 Biplab Mahato. All Rights Reserved.
          </span>
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
            >
              {/* <Facebook className="h-6 w-6" /> */}
              <span className="sr-only">Facebook page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              {/* <Twitter className="h-6 w-6" /> */}
              <span className="sr-only">Twitter page</span>
            </Link>
            <Link
              href="#"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
            >
              {/* <GitHub className="h-6 w-6" /> */}
              <span className="sr-only">GitHub account</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
