import Layout from "./components/Layout";
import Amanda from "@/assets/amanda.png";

export default function AboutMe() {
  return (
    <Layout className="justify-center  !p-0" currentPageName="Sobre mim">
      <div className="flex flex-col gap-2  w-[800px]">
        <div className="px-4">
          <h2 className="max-w-xl text-3xl tracking-tighter text-left md:text-5xl font-regular">
            Sobre mim
          </h2>
          <p className="max-w-xl text-lg leading-relaxed tracking-tight text-left lg:max-w-lg text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quod
            optio aut voluptates delectus vel facere quasi exercitationem
            voluptate ipsum, repellat sit repellendus voluptatum quae rerum
            incidunt enim provident? Libero!
          </p>
          <p className="max-w-xl mt-4 text-lg leading-relaxed tracking-tight text-left lg:max-w-lg text-muted-foreground">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab quod
            optio aut voluptates delectus vel facere quasi exercitationem
            voluptate ipsum.
          </p>
        </div>
        <div className="flex justify-end">
          <img src={Amanda} alt="Dra. Amanda Vicente" className="w-80" />
        </div>
      </div>
    </Layout>
  );
}
