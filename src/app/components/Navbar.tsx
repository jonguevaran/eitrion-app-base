// Esp: Importa el componente Link de Next.js para navegación interna
// Pt: (Portugal): Importa o componente Link do Next.js para navegação interna
// Eng: Imports the Link component from Next.js for internal navigation
import Link from "next/link";

// Esp: Define los elementos de navegación que se mostrarán en el navbar
// Pt: (Portugal): Define os itens de navegação que serão exibidos na barra de navegação
// Eng: Defines the navigation items to be displayed in the navbar
const navItems = [
  { href: "/", label: "Home" },
  { href: "/sections/about-us", label: "About Us" },
  { href: "/sections/blog", label: "Blog" },
  { href: "/sections/contact", label: "Contact" },
  { href: "/sections/login", label: "Login" },
  //{ href: "/dashboard/settings-app", label: "Settings App" },
];

// Esp: Componente Navbar que muestra los enlaces de navegación principales
// Pt: (Portugal): Componente Navbar que exibe os links de navegação principais
// Eng: Navbar component that displays the main navigation links
export default function Navbar() {
  return (
    // Esp: Barra de navegación con fondo gris oscuro y padding vertical
    // Pt: (Portugal): Barra de navegação com fundo cinzento escuro e padding vertical
    // Eng: Navigation bar with dark gray background and vertical padding
    <nav className="w-full bg-gray-800 py-4">
      <ul className="flex justify-center gap-8">
        {navItems.map((item) => (
          <li key={item.href}>
            {/*
              Esp: Enlace individual de navegación principal
              Pt: (Portugal): Link individual de navegação principal
              Eng: Individual main navigation link
            */}
            <Link href={item.href} className="text-white font-semibold hover:underline">
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
