import { useState } from "react";
import LoginInicio from '../components/LoginInicio';

export default function index() {
  const [numeroSocio, setNumeroSocio] = useState("");
  const [telefono, setTelefono] = useState("");

  return (
    <LoginInicio/>
  );
}

