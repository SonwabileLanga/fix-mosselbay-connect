import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SimpleReportForm from "@/components/SimpleReportForm";
import SimpleDashboard from "@/components/SimpleDashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <SimpleReportForm />
        <SimpleDashboard />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
