// Esp: Importa el componente Link de Next.js para navegación interna
// Pt: (Portugal): Importa o componente Link do Next.js para navegação interna
// Eng: Imports the Link component from Next.js for internal navigation
import Link from "next/link";

// Esp: Define los elementos de navegación que se mostrarán en el footer
// Pt: (Portugal): Define os itens de navegação que serão exibidos no rodapé
// Eng: Defines the navigation items to be displayed in the footer
const navItems = [
  { href: "/", label: "Home" },
  { href: "/sections/about-us", label: "About Us" },
  { href: "/sections/blog", label: "Blog" },
  { href: "/sections/contact", label: "Contact" },
  { href: "/sections/login", label: "Login" },
  //{ href: "/dashboard/settings-app", label: "Settings App" },
];


// Esp: Componente Footer que muestra los enlaces de navegación y el texto "Footer"
// Pt: (Portugal): Componente Footer que exibe os links de navegação e o texto "Footer"
// Eng: Footer component that displays navigation links and the "Footer" text
export default function Footer() {
  return (
    <footer className="w-full bg-gray-800 py-6 mt-8">
      <div className="flex flex-row justify-between max-w-5xl mx-auto w-full">
        {/*
          Esp: Columna izquierda con los links de navegación
          Pt: (Portugal): Coluna esquerda com os links de navegação
          Eng: Left column with navigation links
        */}
        <div className="flex-1">
          <ul className="flex flex-col items-start space-y-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white font-semibold hover:underline">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        {/*
          Esp: Columna central con el título Footer
          Pt: (Portugal): Coluna central com o título Footer
          Eng: Center column with Footer title
        */}
        <div className="flex-1 flex flex-col items-center justify-center">
          <div className="text-white font-bold">Footer</div>
        </div>
        {/*
          Esp: Columna derecha vacía para posible contenido futuro
          Pt: (Portugal): Coluna direita vazia para conteúdo futuro
          Eng: Right column empty for future content
        */}
        <div className="flex-1"></div>
      </div>
    </footer>
  );
}