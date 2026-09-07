import fs from 'fs'
import sharp from 'sharp'

const dir = 'public/brand'

// 1) Extract the embedded PNG from the bloated favicon.svg
const svg = fs.readFileSync(`${dir}/favicon.svg`, 'utf8')
const m = svg.match(/data:image\/png;base64,([A-Za-z0-9+/=]+)/)
if (!m) throw new Error('no embedded png in favicon.svg')
const srcPng = Buffer.from(m[1], 'base64')
const meta = await sharp(srcPng).metadata()
console.log('embedded png:', meta.width + 'x' + meta.height, Math.round(srcPng.length / 1024) + 'KB')

// 2) Small crisp favicon PNGs
for (const size of [32, 48, 64, 180]) {
  const out = await sharp(srcPng).resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } }).png({ compressionLevel: 9, palette: true }).toBuffer()
  fs.writeFileSync(`${dir}/favicon-${size}.png`, out)
  console.log(`favicon-${size}.png`, Math.round(out.length / 1024) + 'KB')
}

// 3) Tiny SVG favicon that embeds the 64px raster (keeps /brand/favicon.svg path + svg type)
const small64 = fs.readFileSync(`${dir}/favicon-64.png`)
const smallSvg = `<?xml version="1.0" encoding="UTF-8"?>\n<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 64 64" width="64" height="64"><image href="data:image/png;base64,${small64.toString('base64')}" width="64" height="64"/></svg>\n`
fs.writeFileSync(`${dir}/favicon.svg`, smallSvg)
console.log('favicon.svg ->', Math.round(Buffer.byteLength(smallSvg) / 1024) + 'KB')

// 4) Re-encode oversized manifest icons at their true dimensions
const reencode = [
  ['web-app-manifest-192x192.png', 192],
  ['web-app-manifest-512x512.png', 512],
  ['web-app-manifest-maskable-192x192.png', 192],
  ['web-app-manifest-maskable-512x512.png', 512],
  ['apple-touch-icon.png', 180],
]
for (const [name, size] of reencode) {
  const p = `${dir}/${name}`
  if (!fs.existsSync(p)) continue
  const before = fs.statSync(p).size
  const out = await sharp(p).resize(size, size, { fit: 'cover' }).png({ compressionLevel: 9, palette: true, quality: 90 }).toBuffer()
  fs.writeFileSync(p, out)
  console.log(name, Math.round(before / 1024) + 'KB ->', Math.round(out.length / 1024) + 'KB')
}
