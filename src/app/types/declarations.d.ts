
declare module "*.module.css" {
    const classes: { [key: string]: string };
    export default classes;
  }
  
declare module "*.png" {
    const value: string;
    export default value;
  }
  
  declare module "*.svg" {
    const content: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
    export default content;
  }
  