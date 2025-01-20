import { createBrowserRouter, Navigate } from "react-router";
import AsistentePagina from "../Paginas/Asistente/AsistentePagina";
import { AudioATextoPagina } from "../Paginas/Audio-A-Texto/AudioATexto";
import { GenerarImagenesPagina } from "../Paginas/Generar-Imagenes/GenerarImagenes";
import { OrtografiaPagina } from "../Paginas/Ortografia/Ortografia";
import { ProsContrasPagina } from "../Paginas/Pros-Contras/ProsContras";
import { PropsContrasStremsPagina } from "../Paginas/Props-Contras-Strems/PropsContrasStrems";
import { TraductorPagina } from "../Paginas/Traductor/Traductor";
import { DashboardLayout } from "../Layout/DashboardLayout";

export const menuRoutes = [
    {
      to: "/orthography",
      icon: "fa-solid fa-spell-check",
      title: "Ortografía",
      description: "Corregir ortografía",
      component: <OrtografiaPagina />
    },
    {
      to: "/pros-cons",
      icon: "fa-solid fa-code-compare",
      title: "Pros & Cons",
      description: "Comparar pros y contras",
      component: <ProsContrasPagina />
    },
    {
      to: "/pros-cons-stream",
      icon: "fa-solid fa-water",
      title: "Como stream",
      description: "Con stream de mensajes",
      component: <PropsContrasStremsPagina />
    },
    {
      to: "/translate",
      icon: "fa-solid fa-language",
      title: "Traducir",
      description: "Textos a otros idiomas",
      component: <TraductorPagina />
    },
    
    {
      to: "/image-generation",
      icon: "fa-solid fa-image",
      title: "Imágenes",
      description: "Generar imágenes",
      component: <GenerarImagenesPagina />
    },
   
    {
      to: "/audio-to-text",
      icon: "fa-solid fa-comment-dots",
      title: "Audio a texto",
      description: "Convertir audio a texto",
      component: <AudioATextoPagina />
    },
    {
      to: "/assistant",
      icon: "fa-solid fa-user",
      title: "Asistente",
      description: "Información del asistente",
      component: <AsistentePagina />
    },
  ];


  export const router  =  createBrowserRouter([
    {
        path:"/",
        element: <DashboardLayout/>,
        children: [
            ...menuRoutes.map( route => ({
                path: route.to,
                element: route.component
            })),
            {
                path:'',
                element: <Navigate to={menuRoutes[0].to}/>
            }
        ]

    }
  ])