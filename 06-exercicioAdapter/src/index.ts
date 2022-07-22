import TransportadoraAdapter from "./adapters/TransportadoraAdapter";
import ICorreios from "./correios/ICorreios";
import Transportadora from "./transportadora/Transportadora";

const transporte : ICorreios = new TransportadoraAdapter(new Transportadora());
transporte.sendCorreios();
transporte.receiveCorreios();