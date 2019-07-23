/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';


export namespace Components {
  interface HelloWorld {
    'name': string;
  }
  interface MtnButton {
    'color': 'primary' | 'accent' | 'light';
    'disabled': boolean;
    'shape': 'square' | 'round';
    'size': 'small' | 'default' | 'large';
    'type': 'button' | 'reset' | 'submit';
  }
  interface MtnTab {
    'active': boolean;
    'disabled': boolean;
    'label': string;
  }
  interface MtnTabs {
    'openTab': (index: number) => Promise<void>;
  }
}

declare global {


  interface HTMLHelloWorldElement extends Components.HelloWorld, HTMLStencilElement {}
  var HTMLHelloWorldElement: {
    prototype: HTMLHelloWorldElement;
    new (): HTMLHelloWorldElement;
  };

  interface HTMLMtnButtonElement extends Components.MtnButton, HTMLStencilElement {}
  var HTMLMtnButtonElement: {
    prototype: HTMLMtnButtonElement;
    new (): HTMLMtnButtonElement;
  };

  interface HTMLMtnTabElement extends Components.MtnTab, HTMLStencilElement {}
  var HTMLMtnTabElement: {
    prototype: HTMLMtnTabElement;
    new (): HTMLMtnTabElement;
  };

  interface HTMLMtnTabsElement extends Components.MtnTabs, HTMLStencilElement {}
  var HTMLMtnTabsElement: {
    prototype: HTMLMtnTabsElement;
    new (): HTMLMtnTabsElement;
  };
  interface HTMLElementTagNameMap {
    'hello-world': HTMLHelloWorldElement;
    'mtn-button': HTMLMtnButtonElement;
    'mtn-tab': HTMLMtnTabElement;
    'mtn-tabs': HTMLMtnTabsElement;
  }
}

declare namespace LocalJSX {
  interface HelloWorld extends JSXBase.HTMLAttributes<HTMLHelloWorldElement> {
    'name'?: string;
  }
  interface MtnButton extends JSXBase.HTMLAttributes<HTMLMtnButtonElement> {
    'color'?: 'primary' | 'accent' | 'light';
    'disabled'?: boolean;
    'shape'?: 'square' | 'round';
    'size'?: 'small' | 'default' | 'large';
    'type'?: 'button' | 'reset' | 'submit';
  }
  interface MtnTab extends JSXBase.HTMLAttributes<HTMLMtnTabElement> {
    'active'?: boolean;
    'disabled'?: boolean;
    'label'?: string;
  }
  interface MtnTabs extends JSXBase.HTMLAttributes<HTMLMtnTabsElement> {
    'onChange'?: (event: CustomEvent<any>) => void;
  }

  interface IntrinsicElements {
    'hello-world': HelloWorld;
    'mtn-button': MtnButton;
    'mtn-tab': MtnTab;
    'mtn-tabs': MtnTabs;
  }
}

export { LocalJSX as JSX };


declare module "@stencil/core" {
  export namespace JSX {
    interface IntrinsicElements extends LocalJSX.IntrinsicElements {}
  }
}


