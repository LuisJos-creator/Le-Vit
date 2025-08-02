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

      <!-- The button to open modal -->
<label for="my_modal_${productos.sku}" class="btn btn-outline btn-info">Mas Info</label>

<!-- Put this part before </body> tag -->
<input type="checkbox" id="my_modal_${productos.sku}" class="modal-toggle" />
<div class="modal" role="dialog">
  <div class="modal-box">
    <h3 class="text-lg font-bold">${productos.nombre}</h3>
    <figure class="px-10 pt-10">
    <img
      src="${productos.img}"
      alt="${productos.nombre}"
      class="object-cover rounded-xl w-full h-full" />
  </figure>
    <p class="py-4">${productos.description}</p>
    <a href="${productos.enlace}" class="btn btn-dash btn-error">COMPRAR</a>
    <div class="modal-action">
      <label for="my_modal_${productos.sku}" class="btn btn-dash btn-primary">Close</label>
    </div>
  </div>

</div>
    </div>
  </div>
</div>
`;}
