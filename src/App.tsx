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
        <div className="my-4">
          <AnimatedList>
            <NavLink to="/glasgow" key="glasgow">
              <Card
                title="Glasgow"
                rightText="~ 2 min"
                description="O teste Glasgow Coma Scale (GCS) avalia o nível de consciência de pacientes com trauma cerebral, ajudando a determinar a gravidade da lesão"
              />
            </NavLink>
            <NavLink to="/chadvasc" key="chadvasc">
              <Card
                title="ChadVasc"
                rightText="~ 1 min"
                description="O teste avalia o risco de AVC em fibrilação atrial, guiando a necessidade de anticoagulação preventiva"
              />
            </NavLink>
            <NavLink to="/cardiovascular" key="cardiovascular">
              <Card
                title="Cardiovascular"
                rightText="~ 1 min"
                description="Avalie o risco cardiovascular do seu paciente com base em um questionário rápido e preciso"
              />
            </NavLink>
            <NavLink to="/ckd" key="ckd">
              <Card
                title="Taxa de Filtração Glomerular"
                rightText="~ 1:30 min"
                description="Avalie a função renal do seu paciente com base em um questionário rápido e preciso"
              />
            </NavLink>
            <NavLink to="/cid" key="cid">
              <Card
                title="CID - 10"
                rightText=""
                description="Busque por códigos CID-10 e encontre informações detalhadas sobre cada um deles"
              />
            </NavLink>
          </AnimatedList>
        </div>
      </div>
    </Layout>
  );
}

export default App;
