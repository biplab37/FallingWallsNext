import { Banner, SectionHeader } from "../components";
import Link from "next/link";

export default function Contact() {
  return (
    <>
      <div className="flex-grow">
        <Banner imageurl="./uwr.jpg" text="Contact Us" />
        <div>
          <SectionHeader title="Contact Details" />
          <div className="max-container text-lg px-6">
            <div>
              <span className="font-medium uppercase tracking-wide">
                Local Organiser:{" "}
              </span>
              Prof. David Blaschke
            </div>
            <div>
              <span className="font-medium uppercase tracking-wide">
                Email:{" "}
              </span>
              <Link
                href="mailto:david.blaschke@uwr.edu.pl"
                className="hover:underline"
              >
                david.blaschke@uwr.edu.pl
              </Link>
            </div>
            <div>
              <span className="font-medium uppercase tracking-wide">
                Phone:
              </span>{" "}
              +48 123 456 789
            </div>
          </div>
          <SectionHeader title="How to get here" />
          <div className="max-container flex gap-2 p-4">
            <div className="basis-1/2"></div>
            <div className="border shadow-lg rounded-lg overflow-hidden basis-1/2 justify-center h-auto">
              <div className="flex aspect-video p-1">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2504.7031595628746!2d17.031110512604272!3d51.1139367392525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470fe9df06afffff%3A0x89c8b96d04306850!2sThe%20Oratorium%20Marianum!5e0!3m2!1sen!2spl!4v1713812799395!5m2!1sen!2spl"
                  width="100%"
                  // width="600"
                  // height="450"
                  // style="border:0;"
                  allowFullScreen={true}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
