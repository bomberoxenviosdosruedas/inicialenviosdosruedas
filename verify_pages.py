import asyncio
from playwright.async_api import async_playwright
import os

async def capture_screenshots():
    routes = {
        "home": "/",
        "contacto": "/contacto",
        "envios_express": "/servicios/envios-express",
        "envios_flex": "/servicios/enviosflex",
        "envios_lowcost": "/servicios/envios-lowcost",
        "plan_emprendedores": "/servicios/plan-emprendedores",
        "sobre_nosotros": "/nosotros/sobre-nosotros",
        "preguntas_frecuentes": "/nosotros/preguntas-frecuentes",
        "redes": "/nosotros/nuestras-redes",
        "terminos": "/terminos-y-condiciones",
        "privacidad": "/politica-de-privacidad",
        "cotizar_express": "/cotizar/express",
        "cotizar_lowcost": "/cotizar/lowcost"
    }

    viewports = [
        {"name": "mobile", "width": 320, "height": 568},
        {"name": "tablet", "width": 768, "height": 1024},
        {"name": "desktop", "width": 1280, "height": 720},
        {"name": "large_desktop", "width": 1440, "height": 900}
    ]

    os.makedirs("verification", exist_ok=True)
    print(f"Directory 'verification' ready.")

    async with async_playwright() as p:
        browser = await p.chromium.launch()
        context = await browser.new_context()

        for route_name, path in routes.items():
            for vp in viewports:
                page = await context.new_page()
                await page.set_viewport_size({"width": vp["width"], "height": vp["height"]})

                try:
                    url = f"http://localhost:3000{path}"
                    # Increased timeout and wait_until for robustness
                    await page.goto(url, wait_until="load", timeout=90000)
                    await asyncio.sleep(2) # Give animations time to settle

                    output_path = f"verification/audit_{route_name}_{vp['name']}.png"
                    await page.screenshot(path=output_path, full_page=True)
                    print(f"Captured {output_path}")
                except Exception as e:
                    print(f"Failed to capture {route_name} at {vp['name']}: {e}")
                finally:
                    await page.close()

        await browser.close()

if __name__ == "__main__":
    asyncio.run(capture_screenshots())
