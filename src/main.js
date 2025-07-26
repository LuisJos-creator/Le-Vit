import navbar from './components/navbar.js';
import './css/style.css'
import coloresFondo from './data/coloresFondo.js';
import titulo from './components/titulo.js';
import productosEl from './components/productosEl.js';
import productos from "./data/productos";

function renderProductos(productosFiltrados) {
  document.querySelector('#productos-grid').innerHTML = 
    productosFiltrados.map(producto => productosEl(producto)).join('');
}

document.querySelector('#app').innerHTML = `
${navbar()}
${titulo()}
<div id="productos-grid" class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
   ${productos.map(productos => productosEl(productos)).join('')}
</div>
`;

// Delegación de eventos para categorías
document.addEventListener('click', function(e) {
  if (e.target.closest('[data-categoria-id]')) {
    e.preventDefault();
    const categoriaId = e.target.closest('[data-categoria-id]').getAttribute('data-categoria-id');
    const filtrados = productos.filter(p => p.id === categoriaId);
    renderProductos(filtrados);
  }
});

