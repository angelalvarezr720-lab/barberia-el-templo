import { BannerBienvenida } from "../Componentes/BannerBienvenida";
import { GaleriaDeCortes } from "../Componentes/GaleriaDeCortes";
import { GaleriaDeNuestroTemplo } from "../Componentes/GaleriaDeNuestroTemplo";
import { BannerParaOfrecer } from "../Componentes/BannerParaOfrecer";


const Home = () => {

  return (
    <div className="container-fluid px-0">
      <section className="py-2">
        <BannerBienvenida/>
      </section>
      <section className="py-2">
        <GaleriaDeCortes />
      </section>
      <section className="py-4">
      <GaleriaDeNuestroTemplo/>
      </section>
      <section className="py-4">
        <BannerParaOfrecer/>
      </section>
    </div>
  );
};

export default Home;
