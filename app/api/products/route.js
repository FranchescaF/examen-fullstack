let products = []; // memoria temporal

// GET → obtener todos los productos
export async function GET() {
  return Response.json(products);
}

// POST → agregar producto
export async function POST(req) {
  const body = await req.json();
  const { name, price } = body;

  // Validaciones
  if (!name || typeof name !== "string") {
    return Response.json({ error: "Nombre inválido" }, { status: 400 });
  }
  if (isNaN(price) || Number(price) <= 0) {
    return Response.json({ error: "Precio inválido" }, { status: 400 });
  }

  const newProduct = { id: Date.now(), name, price: Number(price) };
  products.push(newProduct);

  return Response.json(newProduct, { status: 201 });
}
