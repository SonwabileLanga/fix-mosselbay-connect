import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ReportForm from "@/components/ReportForm";
import ServiceMap from "@/components/ServiceMap";
import Dashboard from "@/components/Dashboard";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <ReportForm />
        <Dashboard />
        <ServiceMap />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
