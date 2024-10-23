import FacultySection from "@components/FacultySection";
import Footer from "@components/Footer";
import Hero from "@components/Hero";

const FacultyPage = () => {
  const imageUrl = "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=3032&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  return (
    <>
      <Hero name="Faculties" lineTwoHeading={'Faculties'} image={imageUrl}/>
      <FacultySection />
      <Footer />
    </>
  );
};

export default FacultyPage;
