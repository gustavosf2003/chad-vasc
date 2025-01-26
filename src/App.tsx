import "./App.css";
import Card from "./components/Card";
import Layout from "./components/Layout";
import { AnimatedList } from "./components/ui/animated-list";
import { NavLink } from "react-router";

function App() {
  return (
    <Layout className="justify-center " currentPageName="">
      <div className="flex flex-col gap-2  w-[800px]">
        <h2 className="max-w-xl text-3xl tracking-tighter text-left md:text-5xl font-regular">
          Dashboard clínico
        </h2>
        <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-lg text-muted-foreground">
          Ferramentas rápidas e precisas para apoiar suas decisões clínicas no
          dia a dia
        </p>
        <div className="mt-4">
          <AnimatedList>
            <NavLink to="/chadvasc">
              <Card
                title="ChadVasc"
                rightText="~ 1 min"
                description="O exame avalia o risco de AVC em fibrilação atrial, guiando a necessidade de anticoagulação preventiva"
              />
            </NavLink>
          </AnimatedList>
        </div>
      </div>
    </Layout>
  );
}

export default App;
