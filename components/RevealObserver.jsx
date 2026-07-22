'use client'

import { useEffect } from 'react'

/** Lightweight scroll reveals for [data-reveal] elements. Respects reduced motion. */
export default function RevealObserver() {
  useEffect(() => {
    const nodes = Array.from(document.querySelectorAll('[data-reveal]'))
    if (!nodes.length) return undefined

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      nodes.forEach((node) => node.classList.add('is-in'))
      return undefined
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-in')
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.12, rootMargin: '0px 0px -6% 0px' }
    )

    nodes.forEach((node, index) => {
      if (!node.style.getPropertyValue('--delay')) {
        node.style.setProperty('--delay', `${Math.min(index % 6, 5) * 55}ms`)
      }
      observer.observe(node)
    })

    return () => observer.disconnect()
  }, [])

  return null
}
