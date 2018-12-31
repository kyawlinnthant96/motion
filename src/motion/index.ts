import { SVGAttributes, ComponentType, ReactHTML, DetailedHTMLFactory } from "react"
import { htmlElements, svgElements, HTMLElements, SVGElements } from "./utils/supported-elements"
import { createMotionComponent } from "./component"
import { ComponentFactory } from "./types"

type UnwrapFactory<F> = F extends DetailedHTMLFactory<infer P, any> ? P : never

export type MotionComponents = { [K in HTMLElements]: ComponentFactory<UnwrapFactory<ReactHTML[K]>> } &
    { [K in SVGElements]: ComponentFactory<SVGAttributes<SVGElement>> }

export const motion: Partial<MotionComponents> = {}

htmlElements.forEach(element => (motion[element] = createMotionComponent(element)))
svgElements.forEach(element => (motion[element] = createMotionComponent(element)))
