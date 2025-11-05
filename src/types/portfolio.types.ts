export interface Header {
  homepage?: string;
  title?: string;
}

export interface Social {
  linkedin?: string;
  github?: string;
  twitter?: string;
}

export interface About {
  name?: string;
  role?: string;
  picture?: string;
  description?: string;
  resume?: string;
  social?: Social;
}

export interface Project {
  name: string;
  description: string;
  stack: string[];
  sourceCode?: string;
  livePreview?: string;
  image?: string;
}

export interface Contact {
  email?: string;
}