import type { TransitionConfig as SvelteTransitionConfig } from 'svelte/transition';

export interface RouteInfo {
  path: string;
}

export type TransitionEffect = {
  in: (node: Element) => SvelteTransitionConfig;
  out: (node: Element) => SvelteTransitionConfig;
};

export type TransitionFunction = (context: TransitionContext) => TransitionEffect;

/**
 * @todo: Add information about is-mobile here in the future
 */
export interface TransitionContext {
  //isMobile: boolean
}

export interface TransitionDefinition {
  from: string;
  to: string;
  transitions: TransitionEffect | TransitionFunction;
}

export interface TransitionConfigInput {
  transitions: TransitionDefinition[];
  defaultTransition: TransitionEffect | TransitionFunction;
}

export type TransitionConfig = (from: RouteInfo, to: RouteInfo) => TransitionEffect;