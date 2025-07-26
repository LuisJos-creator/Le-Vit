export default function productosEl(productos) {
    return `
<div class="card bg-base-100 w-96 shadow-sm">
  <figure class="px-10 pt-10">
    <img
      src="${productos.img}"
      alt="${productos.nombre}"
      class="object-cover rounded-xl w-full h-full" />
  </figure>
  <div class="card-body items-center text-center">
    <h2 class="card-title">${productos.nombre}</h2>
    <span class="text-lg font-bold text-error">$${productos.price}</span>
    <div class="card-actions">
      <button onclick="window.location.href='${productos.enlace}';" class="btn btn-dash btn-error">COMPRAR</button>
    </div>
  </div>
</div>
`;}
