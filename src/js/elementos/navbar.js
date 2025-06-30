import categorias from "../datos/categorias";
import coloresFondo from "../datos/coloresFondo";
// No need for a global 'tema' variable; handle theme changes directly in the event listener.

export default function Navbar() {
  return `
<div class="navbar bg-base-100 shadow-sm">
  <div class="navbar-start">
    <div class="dropdown">
      <div tabindex="0" role="button" class="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul tabindex="0" class="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Inicio</a></li>
        <li><a>Todos</a></li>
        <li>
          <a>Categorias</a>
          <ul class="p-2">
            ${categorias.map(categoria => `
            <li><a><img src="${categoria.icono}" width="20" id="${categoria.id}"> ${categoria.nombre}</a></li>
            `).join('')}
          </ul>
        </li>
        <li>
        <a>Color de Fondo</a>
        <ul class="p-2">
            ${coloresFondo.map(color => `
            <li>
              <a>
                <img src="${color.icono}" width="20" id="${color.id}" data-tema="${color.tema}"> ${color.nombre}
              </a>
            </li>
            `).join('')}
          </ul>
        </li>
      </ul>
      </div>
    <a class="btn btn-ghost text-xl"><img src="src/img/shopgle_cart2.png" width="300px"></a>
  </div>
  <div class="navbar-center hidden lg:flex">
    <ul class="menu menu-horizontal px-1">
      <li><a>Inicio</a></li>
      <li><a>Todos</a></li>
      <li>
        <details>
          <summary>Categorias</summary>
          <ul class="p-2 w-2xs">
            ${categorias.map(categoria => `
            <li><a><img src="${categoria.icono}" width="20" id="${categoria.id}"> ${categoria.nombre}</a></li>
            `).join('')}
          </ul>
        </details>
      </li>
      <li>
        <details>
          <summary>Color de Fondo</summary>
          <ul class="p-2 w-2xs">
            ${coloresFondo.map(color => `
            <li>
              <a>
                <img src="${color.icono}" width="20" id="${color.id}" data-tema="${color.tema}"> ${color.nombre}
              </a>
            </li>
            `).join('')}
          </ul>
        </details>
    </ul>
  </div>
  <div class="navbar-end">
    <a class="btn">Button</a>
  </div>
</div>
`;
}

