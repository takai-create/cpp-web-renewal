import "./v2.css";
import Header from "../../components/v2/Header";
import Footer from "../../components/v2/Footer";

export default function V2Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
