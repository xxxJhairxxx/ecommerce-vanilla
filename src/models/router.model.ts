export interface Iroute {
  path: string;
  component: () => Promise<{ default: () => Promise<HTMLDivElement> } |{ default: () => HTMLDivElement }>;
}