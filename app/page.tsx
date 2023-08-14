import Image from "next/image";
// import styles from "./page.module.css";
import {
  Nav,
  Banner,
  Messaging,
  ProdFeatures,
  DarkExplore,
  Testimonial,
  Blogs,
  Sponsors,
  QMessageInput,
  Footer,
} from "@/components/exports";
import NavBar from "@/components/nav";
export default function Home() {
  return (
    <div style={{ width: "100vw", background: "red" }}>
      <NavBar />
      <Banner />
      <Messaging />
      <ProdFeatures />
      <DarkExplore />
      <Testimonial />
      <Blogs />
      <Sponsors />
      <QMessageInput />
      <Footer />
    </div>
  );
}
