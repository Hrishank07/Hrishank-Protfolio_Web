"use client"

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import styles from './HeroGlobe.module.css'

type Anchor = {
  id: string
  lat: number
  lon: number
  delay: number
}

const ANCHORS: Anchor[] = [
  { id: 'seattle', lat: 47.6062, lon: -122.3321, delay: 0 },
  { id: 'los-angeles', lat: 34.0522, lon: -118.2437, delay: 480 },
  { id: 'pune', lat: 18.5204, lon: 73.8567, delay: 960 },
  { id: 'singapore', lat: 1.3521, lon: 103.8198, delay: 1440 },
]

const CONNECTION_SEQUENCE: Array<[string, string]> = [
  ['seattle', 'los-angeles'],
  ['los-angeles', 'pune'],
  ['pune', 'singapore'],
  ['singapore', 'seattle'],
]

// Simplified but recognisable continent outlines (lat, lon pairs)
const CONTINENTS: Array<Array<[number, number]>> = [
  [
    [83, -56], [78, -80], [72, -100], [68, -118], [62, -128], [57, -134], [52, -134], [48, -126],
    [42, -118], [36, -110], [30, -102], [25, -94], [20, -86], [20, -78], [26, -72], [32, -70],
    [38, -72], [44, -80], [48, -90], [54, -100], [60, -108], [66, -114], [72, -118], [78, -120],
    [83, -112], [86, -100], [87, -80], [86, -64], [83, -56]
  ],
  [
    [14, -82], [8, -84], [2, -82], [-6, -78], [-14, -74], [-22, -70], [-30, -64],
    [-36, -56], [-40, -46], [-40, -38], [-34, -34], [-24, -36], [-14, -44], [-6, -52], [4, -60], [12, -70], [14, -82]
  ],
  [
    [73, -6], [70, 6], [66, 16], [60, 26], [54, 32], [48, 36], [42, 42], [36, 50], [34, 60],
    [40, 64], [48, 64], [56, 60], [62, 50], [68, 38], [71, 26], [73, 12], [73, -6]
  ],
  [
    [34, 20], [28, 14], [20, 12], [12, 18], [4, 24], [-4, 30], [-12, 36], [-18, 44],
    [-22, 54], [-20, 60], [-12, 62], [-4, 60], [6, 52], [16, 42], [26, 32], [34, 24]
  ],
  [
    [78, 60], [72, 74], [66, 86], [60, 96], [54, 104], [48, 112], [42, 122], [38, 132],
    [40, 142], [46, 148], [54, 152], [62, 150], [68, 142], [74, 130], [78, 112], [80, 94], [78, 60]
  ],
  [
    [0, 114], [-6, 124], [-14, 136], [-22, 146], [-30, 152], [-34, 158], [-26, 162],
    [-16, 160], [-8, 152], [-2, 140], [0, 126], [0, 114]
  ],
  [
    [-56, -180], [-54, -140], [-52, -100], [-54, -40], [-56, 0], [-54, 40], [-52, 100], [-54, 140], [-56, 180], [-56, -180]
  ],
]

const DEG2RAD = Math.PI / 180

const createRng = () => {
  let seed = 0x1a2b3c4d
  return () => {
    seed ^= seed << 13
    seed ^= seed >>> 17
    seed ^= seed << 5
    return (seed >>> 0) / 0xffffffff
  }
}

const findAnchorIndex = (id: string) => ANCHORS.findIndex((anchor) => anchor.id === id)

const latLonToVector = (lat: number, lon: number, radius: number) => {
  const latRad = lat * DEG2RAD
  const lonRad = lon * DEG2RAD
  const x = radius * Math.cos(latRad) * Math.cos(lonRad)
  const z = radius * Math.cos(latRad) * Math.sin(lonRad)
  const y = radius * Math.sin(latRad)
  return new THREE.Vector3(x, y, z)
}

export default function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const animationRef = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(22, 1, 0.1, 20)
    camera.position.set(0, 0, 6)

    const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    let reduceMotion = motionQuery.matches

    const ambient = new THREE.AmbientLight(0x0f172a, 0.8)
    const keyLight = new THREE.PointLight(0x99c9ff, 2.5)
    keyLight.position.set(3, 4, 5)
    const rimLight = new THREE.PointLight(0x38bdf8, 1.6)
    rimLight.position.set(-4, -2, -5)
    scene.add(ambient, keyLight, rimLight)

    const earthGroup = new THREE.Group()
    scene.add(earthGroup)

    const radius = 2

    const sphereGeom = new THREE.SphereGeometry(radius, 96, 96)
    const sphereMat = new THREE.MeshPhongMaterial({
      color: 0x050b18,
      emissive: 0x0b1120,
      shininess: 18,
      specular: 0x111111,
    })
    const globe = new THREE.Mesh(sphereGeom, sphereMat)
    earthGroup.add(globe)

    const glowGeom = new THREE.SphereGeometry(radius * 1.05, 128, 128)
    const glowMat = new THREE.MeshBasicMaterial({ color: 0x4c9dff, transparent: true, opacity: 0.16, side: THREE.BackSide })
    const glow = new THREE.Mesh(glowGeom, glowMat)
    earthGroup.add(glow)

    const outlinesGroup = new THREE.Group()
    CONTINENTS.forEach((outline, index) => {
      const hue = (index * 36) % 360
      const color = new THREE.Color(`hsl(${hue}, 80%, 72%)`)
      const points3D = outline.map(([lat, lon]) => latLonToVector(lat, lon, radius * 1.01))
      const curve = new THREE.CatmullRomCurve3(points3D, true, 'centripetal')
      const points = curve.getPoints(512)
      const geometry = new THREE.BufferGeometry().setFromPoints(points)
      const material = new THREE.LineBasicMaterial({
        color,
        transparent: true,
        opacity: 0.58,
        linewidth: 1.6,
      })
      const line = new THREE.LineLoop(geometry, material)
      line.layers.enable(1)
      line.material.depthTest = false
      outlinesGroup.add(line)
    })
    earthGroup.add(outlinesGroup)

    const rng = createRng()
    const randomNodes = Array.from({ length: 16 }, () => ({
      lat: -55 + rng() * 110,
      lon: -180 + rng() * 360,
      id: `random-${Math.random().toString(36).slice(2, 8)}`,
    }))

    type Node = { lat: number; lon: number; delay?: number; id: string }
    const nodes: Node[] = [
      ...ANCHORS.map((anchor) => ({ ...anchor })),
      ...randomNodes,
    ]

    type Arc = {
      curve: THREE.CubicBezierCurve3
      line: THREE.Line
      head: THREE.Mesh
      start: number
      duration: number
    }

    const arcs: Arc[] = []
    let arcSchedule = 0

    const enqueueArc = (fromIndex: number, toIndex: number) => {
      const duration = reduceMotion ? 4200 : 6200 + rng() * 3200
      const start = arcSchedule
      arcSchedule += reduceMotion ? 900 : 1500 + rng() * 900

      const fromNode = nodes[fromIndex]
      const toNode = nodes[toIndex]

      const vStart = latLonToVector(fromNode.lat, fromNode.lon, radius * 1.002)
      const vEnd = latLonToVector(toNode.lat, toNode.lon, radius * 1.002)
      const mid = vStart.clone().add(vEnd).normalize().multiplyScalar(radius * (1.14 + rng() * 0.18))
      const ctrl1 = vStart.clone().lerp(mid, 0.6)
      const ctrl2 = vEnd.clone().lerp(mid, 0.6)

      const curve = new THREE.CubicBezierCurve3(vStart, ctrl1, ctrl2, vEnd)
      const curvePoints = curve.getPoints(200)
      const geometry = new THREE.BufferGeometry().setFromPoints(curvePoints)
      const material = new THREE.LineBasicMaterial({ color: 0x7dd3fc, transparent: true, opacity: 0.48, linewidth: 2 })
      const line = new THREE.Line(geometry, material)

      const headGeom = new THREE.SphereGeometry(radius * 0.03, 16, 16)
      const headMat = new THREE.MeshBasicMaterial({ color: 0xa78bfa })
      const head = new THREE.Mesh(headGeom, headMat)

      earthGroup.add(line)
      earthGroup.add(head)

      arcs.push({ curve, line, head, start, duration })
    }

    CONNECTION_SEQUENCE.forEach((pair) => {
      const fromIndex = findAnchorIndex(pair[0])
      const toIndex = findAnchorIndex(pair[1])
      if (fromIndex !== -1 && toIndex !== -1) {
        enqueueArc(fromIndex, toIndex)
      }
    })

    let cursor = findAnchorIndex(CONNECTION_SEQUENCE.at(-1)?.[1] ?? ANCHORS[0].id)
    if (cursor < 0) cursor = 0

    for (let i = 0; i < 24; i += 1) {
      let target = ANCHORS.length + Math.floor(rng() * randomNodes.length)
      if (target === cursor) target = (target + 2) % nodes.length
      enqueueArc(cursor, target)
      cursor = target
    }

    const anchorsGroup = new THREE.Group()
    ANCHORS.forEach((anchor, idx) => {
      const pos = latLonToVector(anchor.lat, anchor.lon, radius * 1.004)
      const coreGeom = new THREE.SphereGeometry(radius * 0.028, 16, 16)
      const coreMat = new THREE.MeshBasicMaterial({ color: new THREE.Color().setHSL(0.58 + idx * 0.1, 0.8, 0.65) })
      const core = new THREE.Mesh(coreGeom, coreMat)
      core.position.copy(pos)
      anchorsGroup.add(core)
    })
    earthGroup.add(anchorsGroup)

    const pointer = { currentTilt: 0, targetTilt: 0 }
    const startTime = performance.now()

    const resize = () => {
      const { clientWidth, clientHeight } = canvas
      renderer.setSize(clientWidth, clientHeight, false)
      camera.aspect = clientWidth / clientHeight
      camera.updateProjectionMatrix()
    }

    const handlePointerMove = (event: PointerEvent) => {
      const rect = canvas.getBoundingClientRect()
      const ratio = (event.clientX - rect.left) / rect.width - 0.5
      pointer.targetTilt = ratio * 0.45
    }

    const handlePointerLeave = () => {
      pointer.targetTilt = 0
    }

    const animate = () => {
      const elapsed = performance.now() - startTime
      const rotation = (elapsed * (reduceMotion ? 0.003 : 0.005)) % 360
      pointer.currentTilt += (pointer.targetTilt - pointer.currentTilt) * 0.08

      earthGroup.rotation.y = rotation * DEG2RAD
      earthGroup.rotation.z = pointer.currentTilt

      arcs.forEach((arc) => {
        const progress = ((elapsed - arc.start) % arc.duration) / arc.duration
        const eased = Math.max(0, Math.min(1, Math.sin(progress * Math.PI)))
        const position = arc.curve.getPoint(eased)
        arc.head.position.copy(position)
        const opacity = reduceMotion ? 0.28 + eased * 0.22 : 0.35 + eased * 0.3
        ;(arc.line.material as THREE.LineBasicMaterial).opacity = opacity
      })

      renderer.render(scene, camera)
      animationRef.current = requestAnimationLoop(animate)
    }

    resize()
    const requestAnimationLoop = (callback: FrameRequestCallback) => window.requestAnimationFrame(callback)
    const cancelAnimationLoop = (handle?: number) => handle !== undefined && window.cancelAnimationFrame(handle)
    animate()

    window.addEventListener('resize', resize)
    canvas.addEventListener('pointermove', handlePointerMove)
    canvas.addEventListener('pointerdown', handlePointerMove)
    canvas.addEventListener('pointerleave', handlePointerLeave)
    const handleMotion = (event: MediaQueryListEvent) => {
      reduceMotion = event.matches
    }
    if (motionQuery.addEventListener) {
      motionQuery.addEventListener('change', handleMotion)
    } else {
      motionQuery.addListener(handleMotion)
    }

    return () => {
      cancelAnimationLoop(animationRef.current)
      window.removeEventListener('resize', resize)
      canvas.removeEventListener('pointermove', handlePointerMove)
      canvas.removeEventListener('pointerdown', handlePointerMove)
      canvas.removeEventListener('pointerleave', handlePointerLeave)
      if (motionQuery.removeEventListener) {
        motionQuery.removeEventListener('change', handleMotion)
      } else {
        motionQuery.removeListener(handleMotion)
      }
      renderer.dispose()
      sphereGeom.dispose()
      sphereMat.dispose()
      glowGeom.dispose()
      glowMat.dispose()
      outlinesGroup.traverse((child) => {
        if (child instanceof THREE.Line) {
          child.geometry.dispose()
          if (child.material instanceof THREE.Material) child.material.dispose()
        }
      })
      arcs.forEach((arc) => {
        arc.line.geometry.dispose()
        if (arc.line.material instanceof THREE.Material) arc.line.material.dispose()
        arc.head.geometry.dispose()
        if (arc.head.material instanceof THREE.Material) arc.head.material.dispose()
      })
    }
  }, [])

  return (
    <div className={styles.globeWrapper}>
      <canvas ref={canvasRef} className={styles.canvas} aria-hidden="true" />
      <div className={styles.globeOverlay} aria-hidden="true" />
    </div>
  )
}
