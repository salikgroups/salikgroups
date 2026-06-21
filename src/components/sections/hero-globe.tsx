"use client";

import { useEffect, useRef } from "react";

export function HeroGlobe() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const N = 240;
    const pts: { x: number; y: number; z: number; accent: boolean }[] = [];
    for (let i = 0; i < N; i++) {
      const y = 1 - (i / (N - 1)) * 2;
      const r = Math.sqrt(Math.max(0, 1 - y * y));
      const th = i * 2.3999632;
      pts.push({
        x: Math.cos(th) * r,
        y,
        z: Math.sin(th) * r,
        accent: i % 9 === 0,
      });
    }

    const links: [number, number][] = [];
    for (let i = 0; i < N; i++) {
      const distances: [number, number][] = [];
      for (let j = 0; j < N; j++) {
        if (i === j) continue;
        const dx = pts[i].x - pts[j].x;
        const dy = pts[i].y - pts[j].y;
        const dz = pts[i].z - pts[j].z;
        distances.push([dx * dx + dy * dy + dz * dz, j]);
      }
      distances.sort((a, b) => a[0] - b[0]);
      links.push([distances[0][1], distances[1][1]]);
    }

    let width = 0;
    let height = 0;
    let dpr = 1;
    let radius = 0;
    let mx = 0;
    let my = 0;
    let tmx = 0;
    let tmy = 0;
    let rot = 0;
    let raf = 0;

    const resize = () => {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      radius = Math.min(width, height) * 0.4;
    };

    const onMove = (event: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      tmx = ((event.clientX - rect.left) / rect.width - 0.5) * 0.8;
      tmy = ((event.clientY - rect.top) / rect.height - 0.5) * 0.8;
    };

    const onLeave = () => {
      tmx = 0;
      tmy = 0;
    };

    const project = (
      p: (typeof pts)[number],
      ay: number,
      ax: number,
    ) => {
      const x = p.x;
      const y = p.y;
      const z = p.z;
      const cx = Math.cos(ay);
      const sx = Math.sin(ay);
      const x1 = x * cx - z * sx;
      const z1 = x * sx + z * cx;
      const cy = Math.cos(ax);
      const sy = Math.sin(ax);
      const y1 = y * cy - z1 * sy;
      const z2 = y * sy + z1 * cy;
      const persp = 1.6 / (1.6 - z2 * 0.9);
      return {
        sx: width / 2 + x1 * radius * persp,
        sy: height / 2 + y1 * radius * persp,
        z: z2,
        s: persp,
      };
    };

    const loop = () => {
      mx += (tmx - mx) * 0.05;
      my += (tmy - my) * 0.05;
      rot += 0.0022;
      ctx.clearRect(0, 0, width, height);
      const projected = pts.map((p) => project(p, rot + mx, my * 0.6));

      for (let i = 0; i < N; i++) {
        for (const j of links[i]) {
          const a = projected[i];
          const b = projected[j];
          const depth = (a.z + b.z) / 2;
          const alpha = Math.max(0, 0.18 + depth * 0.22);
          ctx.strokeStyle = `rgba(120,150,210,${alpha.toFixed(3)})`;
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(a.sx, a.sy);
          ctx.lineTo(b.sx, b.sy);
          ctx.stroke();
        }
      }

      const order = projected
        .map((p, i) => [p.z, i] as const)
        .sort((a, b) => a[0] - b[0]);

      for (const [, i] of order) {
        const p = projected[i];
        const accent = pts[i].accent;
        const rad = (accent ? 2.6 : 1.6) * p.s;
        const alpha = Math.max(0.12, 0.4 + p.z * 0.45);
        if (accent) {
          ctx.fillStyle = `rgba(244,159,28,${Math.min(1, alpha + 0.3).toFixed(3)})`;
          ctx.shadowColor = "rgba(244,159,28,0.8)";
          ctx.shadowBlur = 8 * p.s;
        } else {
          ctx.fillStyle = `rgba(190,205,235,${alpha.toFixed(3)})`;
          ctx.shadowBlur = 0;
        }
        ctx.beginPath();
        ctx.arc(p.sx, p.sy, rad, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.shadowBlur = 0;
      raf = requestAnimationFrame(loop);
    };

    resize();
    loop();
    window.addEventListener("resize", resize);
    canvas.addEventListener("mousemove", onMove);
    canvas.addEventListener("mouseleave", onLeave);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      canvas.removeEventListener("mousemove", onMove);
      canvas.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return (
    <div className="relative hidden aspect-square place-items-center md:grid">
      <div className="absolute h-[86%] w-[86%] animate-sg-spin rounded-full border border-sg-accent/25" />
      <div className="absolute h-[64%] w-[64%] animate-sg-spin-reverse rounded-full border border-dashed border-white/12" />
      <canvas ref={canvasRef} className="relative h-full w-full" />
      <div className="animate-sg-float absolute right-[8%] top-[6%] rounded-sg-md border border-white/12 bg-sg-surface/85 px-4 py-3 backdrop-blur-sm">
        <div className="text-xs text-[#7c89a8]">Solar yield</div>
        <div className="font-display font-bold text-sg-accent">Optimised</div>
      </div>
      <div
        className="animate-sg-float absolute bottom-[10%] left-[2%] rounded-sg-md border border-white/12 bg-sg-surface/85 px-4 py-3 backdrop-blur-sm"
        style={{ animationDelay: "0.8s" }}
      >
        <div className="text-xs text-[#7c89a8]">Surveillance</div>
        <div className="font-display font-bold text-white">24/7 monitored</div>
      </div>
    </div>
  );
}
