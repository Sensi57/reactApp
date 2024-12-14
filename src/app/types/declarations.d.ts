declare module "*.module.css" {
  const classes: Record<string, string>;
  export default classes;
}

declare module "*.png" {
  const value: string;
  export default value;
}

declare module "*.svg" {
  // Поддержка импорта как строки и React-компонента
  const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  export default content;
  export const ReactComponent: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}

declare namespace classNames {
  type Value = string | number | boolean | undefined | null;
  type Mapping = Record<string, boolean>;
  type Argument = Value | Mapping | ArgumentArray | ReadonlyArgumentArray;
  interface ArgumentArray extends Array<Argument> {}
  interface ReadonlyArgumentArray extends ReadonlyArray<Argument> {}
}

interface ClassNames {
  (...args: classNames.ArgumentArray): string;
  default: ClassNames;
}

declare const classNames: ClassNames;
