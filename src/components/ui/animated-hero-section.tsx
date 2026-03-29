"use client"

import * as React from "react"
const COLOR = "#FFFFFF"
const HIT_COLOR_PROMPTING = "#CF2A44"
const HIT_COLOR_NEED = "#1E8C7A"
const BACKGROUND_TOP = "#1A1D39"
const BACKGROUND_MID = "#242542"
const BACKGROUND_BOTTOM = "#0E1126"
const BALL_COLOR = "#FFFFFF"
const PADDLE_COLOR = "#FFFFFF"
const LETTER_SPACING = 1
const WORD_SPACING = 3

const PIXEL_MAP = {
  ".": [[1]],
  P: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
  ],
  R: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  H: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  C: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  K: [
    [1, 0, 0, 1],
    [1, 0, 1, 0],
    [1, 1, 0, 0],
    [1, 0, 1, 0],
    [1, 0, 0, 1],
  ],
  B: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  V: [
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
  ],
  O: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  M: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 0, 0, 1],
  ],
  T: [
    [1, 1, 1, 1, 1],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  I: [
    [1, 1, 1],
    [0, 1, 0],
    [0, 1, 0],
    [0, 1, 0],
    [1, 1, 1],
  ],
  N: [
    [1, 0, 0, 0, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 1, 1],
    [1, 0, 0, 0, 1],
  ],
  G: [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1],
  ],
  S: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  A: [
    [0, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
  ],
  L: [
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  Y: [
    [1, 0, 0, 0, 1],
    [0, 1, 0, 1, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
    [0, 0, 1, 0, 0],
  ],
  U: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  D: [
    [1, 1, 1, 0],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 0],
  ],
  E: [
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  0: [
    [1, 1, 1, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
  ],
  2: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [1, 1, 1, 1],
    [1, 0, 0, 0],
    [1, 1, 1, 1],
  ],
  4: [
    [1, 0, 0, 1],
    [1, 0, 0, 1],
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 0, 1],
  ],
  7: [
    [1, 1, 1, 1],
    [0, 0, 0, 1],
    [0, 0, 1, 0],
    [0, 1, 0, 0],
    [1, 0, 0, 0],
  ],
} as const

interface Pixel {
  x: number
  y: number
  size: number
  hit: boolean
  hitColor: string
}

interface Star {
  x: number
  y: number
  radius: number
  speedX: number
  speedY: number
  baseAlpha: number
  twinklePhase: number
  twinkleSpeed: number
}



interface Ball {
  x: number
  y: number
  dx: number
  dy: number
  radius: number
}

interface Paddle {
  x: number
  y: number
  width: number
  height: number
  targetY: number
  isVertical: boolean
}

export type PromptingIsAllYouNeedProps = {
  className?: string
  children?: React.ReactNode
}

export function PromptingIsAllYouNeed({ className, children }: PromptingIsAllYouNeedProps) {
  const canvasRef = React.useRef<HTMLCanvasElement>(null)
  const [ctaTopPx, setCtaTopPx] = React.useState(0)
  const [layoutReady, setLayoutReady] = React.useState(false)
  const pixelsRef = React.useRef<Pixel[]>([])
  const starsRef = React.useRef<Star[]>([])
  const ballRef = React.useRef<Ball>({ x: 0, y: 0, dx: 0, dy: 0, radius: 0 })
  const paddlesRef = React.useRef<Paddle[]>([])
  const scaleRef = React.useRef(1)
  const rafRef = React.useRef<number | null>(null)

  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext("2d")
    if (!ctx) return

    const getViewportSize = () => {
      const rect = canvas.getBoundingClientRect()
      return { width: Math.max(1, Math.floor(rect.width)), height: Math.max(1, Math.floor(rect.height)) }
    }

    const resizeCanvas = () => {
      const { width, height } = getViewportSize()
      canvas.width = width
      canvas.height = height
      scaleRef.current = Math.min(canvas.width / 1000, canvas.height / 1000)
      initializeGame()
    }

    const initializeGame = () => {
      const scale = scaleRef.current
      // Slightly larger base pixels so the title reads well on large displays.
      const LARGE_PIXEL_SIZE = 15 * scale
      const SMALL_PIXEL_SIZE = 7 * scale
      const BALL_SPEED = 10 * scale
      const STAR_BASE_SPEED = 0.54 * scale

      pixelsRef.current = []
      const words = ["HACKBVP 7.0", "24hr HYBRID Hack"]

      const normalizeChar = (ch: string) => {
        // Keep digits and '.' as-is; normalize letters to uppercase for pixel-map lookup.
        if (ch === "." || (ch >= "0" && ch <= "9")) return ch
        return ch.toUpperCase()
      }

      const calculateWordWidth = (word: string, pixelSize: number) => {
        return (
          word.split("").reduce((width, letter) => {
            const mapped = normalizeChar(letter)
            const letterWidth = PIXEL_MAP[mapped as keyof typeof PIXEL_MAP]?.[0]?.length ?? 0
            return width + letterWidth * pixelSize + LETTER_SPACING * pixelSize
          }, 0) -
          LETTER_SPACING * pixelSize
        )
      }

      const totalWidthLargeBase = calculateWordWidth(words[0], LARGE_PIXEL_SIZE)
      const totalWidthSmallBase = words[1].split(" ").reduce((width, word, index) => {
        return width + calculateWordWidth(word, SMALL_PIXEL_SIZE) + (index > 0 ? WORD_SPACING * SMALL_PIXEL_SIZE : 0)
      }, 0)
      const totalWidthBase = Math.max(totalWidthLargeBase, totalWidthSmallBase)

      // Use both width and height to choose a scale that "fills" the hero nicely on any device.
      const largeTextHeightBase = 5 * LARGE_PIXEL_SIZE
      const smallTextHeightBase = 5 * SMALL_PIXEL_SIZE
      const spaceBetweenLinesBase = 5 * LARGE_PIXEL_SIZE
      const totalTextHeightBase = largeTextHeightBase + spaceBetweenLinesBase + smallTextHeightBase

      const scaleFactorWidth = (canvas.width * 0.92) / totalWidthBase
      // Leave vertical room for gap + floating CTA panel below the pixel text (same centered block).
      const scaleFactorHeight = (canvas.height * 0.36) / totalTextHeightBase
      const scaleFactorRaw = Math.min(scaleFactorWidth, scaleFactorHeight)
      // Keep it big, but avoid clipping on tiny screens.
      const scaleFactor = Math.max(0.85, Math.min(2.2, scaleFactorRaw))

      const adjustedLargePixelSize = LARGE_PIXEL_SIZE * scaleFactor
      const adjustedSmallPixelSize = SMALL_PIXEL_SIZE * scaleFactor

      const largeTextHeight = 5 * adjustedLargePixelSize
      const smallTextHeight = 5 * adjustedSmallPixelSize
      const spaceBetweenLines = 5 * adjustedLargePixelSize
      const totalTextHeight = largeTextHeight + spaceBetweenLines + smallTextHeight

      // Reserve space below pixel text for the floating CTA panel so text + CTAs read as one centered block.
      const GAP_TEXT_TO_CTA = 28 * scaleFactor
      const BUTTON_AREA_RESERVE = Math.max(168, Math.min(260, canvas.height * 0.14))
      const totalBlockHeight = totalTextHeight + GAP_TEXT_TO_CTA + BUTTON_AREA_RESERVE
      const blockOffsetY = Math.min(80, canvas.height * 0.06)
      const blockStartY = (canvas.height - totalBlockHeight) / 2 + blockOffsetY
      let startY = blockStartY

      setCtaTopPx(blockStartY + totalTextHeight + GAP_TEXT_TO_CTA)
      setLayoutReady(true)

      // Responsive star density with hard caps for smooth animation on low-end devices.
      const area = canvas.width * canvas.height
      const starCount = Math.max(120, Math.min(320, Math.floor(area / 9000)))
      starsRef.current = Array.from({ length: starCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: (0.45 + Math.random() * 1.35) * scale,
        speedX: STAR_BASE_SPEED * (0.45 + Math.random() * 0.8),
        speedY: STAR_BASE_SPEED * (0.22 + Math.random() * 0.22),
        baseAlpha: 0.28 + Math.random() * 0.38,
        twinklePhase: Math.random() * Math.PI * 2,
        twinkleSpeed: 0.004 + Math.random() * 0.012,
      }))

      words.forEach((word, wordIndex) => {
        const hitColor = wordIndex === 0 ? HIT_COLOR_PROMPTING : HIT_COLOR_NEED
        const pixelSize = wordIndex === 0 ? adjustedLargePixelSize : adjustedSmallPixelSize
        const totalWidth =
          wordIndex === 0
            ? calculateWordWidth(word, adjustedLargePixelSize)
            : words[1].split(" ").reduce((width, w, index) => {
                return (
                  width +
                  calculateWordWidth(w, adjustedSmallPixelSize) +
                  (index > 0 ? WORD_SPACING * adjustedSmallPixelSize : 0)
                )
              }, 0)

        let startX = (canvas.width - totalWidth) / 2

        if (wordIndex === 1) {
          word.split(" ").forEach((subWord) => {
            subWord.split("").forEach((letter) => {
              const mapped = normalizeChar(letter)
              const pixelMap = PIXEL_MAP[mapped as keyof typeof PIXEL_MAP]
              if (!pixelMap) return

              for (let i = 0; i < pixelMap.length; i++) {
                for (let j = 0; j < pixelMap[i].length; j++) {
                  if (pixelMap[i][j]) {
                    const x = startX + j * pixelSize
                    const y = startY + i * pixelSize
                    pixelsRef.current.push({ x, y, size: pixelSize, hit: false, hitColor })
                  }
                }
              }
              startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
            })
            startX += WORD_SPACING * adjustedSmallPixelSize
          })
        } else {
          word.split("").forEach((letter) => {
            const mapped = normalizeChar(letter)
            const pixelMap = PIXEL_MAP[mapped as keyof typeof PIXEL_MAP]
            if (!pixelMap) return

            for (let i = 0; i < pixelMap.length; i++) {
              for (let j = 0; j < pixelMap[i].length; j++) {
                if (pixelMap[i][j]) {
                  const x = startX + j * pixelSize
                  const y = startY + i * pixelSize
                  pixelsRef.current.push({ x, y, size: pixelSize, hit: false, hitColor })
                }
              }
            }
            startX += (pixelMap[0].length + LETTER_SPACING) * pixelSize
          })
        }
        startY += wordIndex === 0 ? largeTextHeight + spaceBetweenLines : 0
      })

      // Initialize ball position near the top right corner
      const ballStartX = canvas.width * 0.9
      const ballStartY = canvas.height * 0.1

      ballRef.current = {
        x: ballStartX,
        y: ballStartY,
        dx: -BALL_SPEED,
        dy: BALL_SPEED,
        radius: adjustedLargePixelSize / 2,
      }

      const paddleWidth = adjustedLargePixelSize
      const paddleLength = 10 * adjustedLargePixelSize

      paddlesRef.current = [
        {
          x: 0,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width - paddleWidth,
          y: canvas.height / 2 - paddleLength / 2,
          width: paddleWidth,
          height: paddleLength,
          targetY: canvas.height / 2 - paddleLength / 2,
          isVertical: true,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: 0,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
        {
          x: canvas.width / 2 - paddleLength / 2,
          y: canvas.height - paddleWidth,
          width: paddleLength,
          height: paddleWidth,
          targetY: canvas.width / 2 - paddleLength / 2,
          isVertical: false,
        },
      ]
    }

    const updateGame = () => {
      const ball = ballRef.current
      const paddles = paddlesRef.current

      ball.x += ball.dx
      ball.y += ball.dy

      if (ball.y - ball.radius < 0 || ball.y + ball.radius > canvas.height) {
        ball.dy = -ball.dy
      }
      if (ball.x - ball.radius < 0 || ball.x + ball.radius > canvas.width) {
        ball.dx = -ball.dx
      }

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          if (
            ball.x - ball.radius < paddle.x + paddle.width &&
            ball.x + ball.radius > paddle.x &&
            ball.y > paddle.y &&
            ball.y < paddle.y + paddle.height
          ) {
            ball.dx = -ball.dx
          }
        } else {
          if (
            ball.y - ball.radius < paddle.y + paddle.height &&
            ball.y + ball.radius > paddle.y &&
            ball.x > paddle.x &&
            ball.x < paddle.x + paddle.width
          ) {
            ball.dy = -ball.dy
          }
        }
      })

      paddles.forEach((paddle) => {
        if (paddle.isVertical) {
          paddle.targetY = ball.y - paddle.height / 2
          paddle.targetY = Math.max(0, Math.min(canvas.height - paddle.height, paddle.targetY))
          paddle.y += (paddle.targetY - paddle.y) * 0.1
        } else {
          paddle.targetY = ball.x - paddle.width / 2
          paddle.targetY = Math.max(0, Math.min(canvas.width - paddle.width, paddle.targetY))
          paddle.x += (paddle.targetY - paddle.x) * 0.1
        }
      })

      starsRef.current.forEach((star) => {
        star.x += star.speedX
        star.y += star.speedY
        star.twinklePhase += star.twinkleSpeed

        if (star.x - star.radius > canvas.width) {
          star.x = -star.radius
          star.y = Math.random() * canvas.height
        }
        if (star.y - star.radius > canvas.height) {
          star.y = -star.radius
          star.x = Math.random() * canvas.width
        }
      })

      pixelsRef.current.forEach((pixel) => {
        if (
          !pixel.hit &&
          ball.x + ball.radius > pixel.x &&
          ball.x - ball.radius < pixel.x + pixel.size &&
          ball.y + ball.radius > pixel.y &&
          ball.y - ball.radius < pixel.y + pixel.size
        ) {
          pixel.hit = true
          const centerX = pixel.x + pixel.size / 2
          const centerY = pixel.y + pixel.size / 2
          if (Math.abs(ball.x - centerX) > Math.abs(ball.y - centerY)) {
            ball.dx = -ball.dx
          } else {
            ball.dy = -ball.dy
          }
        }
      })
    }

    const drawGame = () => {
      const bgGradient = ctx.createLinearGradient(0, 0, 0, canvas.height)
      bgGradient.addColorStop(0, BACKGROUND_TOP)
      bgGradient.addColorStop(0.5, BACKGROUND_MID)
      bgGradient.addColorStop(1, BACKGROUND_BOTTOM)
      ctx.fillStyle = bgGradient
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      const radialGlow = ctx.createRadialGradient(
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.height * 0.05,
        canvas.width * 0.5,
        canvas.height * 0.4,
        canvas.height * 0.8
      )
      radialGlow.addColorStop(0, "rgba(88, 92, 164, 0.18)")
      radialGlow.addColorStop(1, "rgba(10, 12, 30, 0)")
      ctx.fillStyle = radialGlow
      ctx.fillRect(0, 0, canvas.width, canvas.height)

      starsRef.current.forEach((star) => {
        const twinkle = 0.75 + 0.25 * Math.sin(star.twinklePhase)
        ctx.globalAlpha = Math.min(1, star.baseAlpha * twinkle)
        ctx.fillStyle = "#FFFFFF"
        ctx.beginPath()
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2)
        ctx.fill()
      })
      ctx.globalAlpha = 1

      pixelsRef.current.forEach((pixel) => {
        ctx.fillStyle = pixel.hit ? pixel.hitColor : COLOR
        ctx.fillRect(pixel.x, pixel.y, pixel.size, pixel.size)
      })

      ctx.fillStyle = BALL_COLOR
      ctx.beginPath()
      ctx.arc(ballRef.current.x, ballRef.current.y, ballRef.current.radius, 0, Math.PI * 2)
      ctx.fill()

      ctx.fillStyle = PADDLE_COLOR
      paddlesRef.current.forEach((paddle) => {
        ctx.fillRect(paddle.x, paddle.y, paddle.width, paddle.height)
      })
    }

    const gameLoop = () => {
      updateGame()
      drawGame()
      rafRef.current = window.requestAnimationFrame(gameLoop)
    }

    const ro = new ResizeObserver(() => resizeCanvas())
    ro.observe(canvas)

    resizeCanvas()
    window.addEventListener("resize", resizeCanvas)
    gameLoop()

    return () => {
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current)
      ro.disconnect()
      window.removeEventListener("resize", resizeCanvas)
    }
  }, [])

  return (
    <div className={className ?? "absolute inset-0 w-full h-full"}>
      <canvas
        ref={canvasRef}
        className="absolute inset-0 h-full w-full"
        aria-label="Prompting Is All You Need: Pong game with pixel text"
      />
      {children ? (
        <div
          className={`pointer-events-none absolute left-0 right-0 z-10 flex justify-center px-4 transition-opacity duration-300 ${
            layoutReady ? "opacity-100" : "opacity-0"
          }`}
          style={{ top: ctaTopPx }}
          aria-hidden={!layoutReady}
        >
          <div className="pointer-events-auto w-full max-w-2xl">{children}</div>
        </div>
      ) : null}
    </div>
  )
}

export default PromptingIsAllYouNeed

