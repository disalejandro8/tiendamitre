# Redes de @tiendamitreba

Contenido de Instagram para la cuenta **@tiendamitreba** (productos de Disma: bebidas, almacén, limpieza y perfumería).
Los perfumes son de otra cuenta (Milanni) y no van acá.

## Historias listas (`historias/`)

| Archivo | Contenido | Estado |
|---|---|---|
| `historia-1.png` | "¿Ya trabajás los productos que más vendemos?": SKYY Raspberry, Buhero Negro, Gancia Americano | Aprobada |
| `historia-2.png` | Votación "¿Cuál es tu fernet?": A Buhero Negro, B 1882, C Capri, D Branca | Aprobada; la encuesta de Instagram no se puede agregar por API |
| `historia-3.png` | "¿Cuál de estos no te puede faltar en tu mesa navideña?": Sidra Del Valle, pan dulce Valente, Mantecol | Aprobada; ídem encuesta |
| `historia-plusbelle-mercado.png` | "4 de cada 10 litros de shampoo en Argentina son Plusbelle" | **No publicar** hasta tener fuente actual del dato (Kantar/Scentia/Nielsen o la marca) |

## Fuentes

- Ventas: SIGMA, sistema `disma` (vista `ventas_items`), 12/08 al 10/11/2026, sin el rubro SERVICIO LOGISTICO.
- Fotos de producto: tienda propia `maxi.tiendamitre.com.ar` (imágenes provistas por los proveedores).
- Las historias de bebidas alcohólicas llevan la leyenda "Beber con moderación. Prohibida su venta a menores de 18 años."

## Regenerar

```bash
cd historias
node ../generador/historias.js
```

Requiere Playwright (ya instalado en las sesiones en la nube).
