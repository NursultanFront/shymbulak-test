import type { Component } from 'vue';

export interface IAsideLinks {
  id: number;
  text: string;
  icon: Component;
  to: string;
}
