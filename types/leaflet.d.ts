declare module 'leaflet' {
  export interface MapOptions {
    center?: [number, number];
    zoom?: number;
    worldCopyJump?: boolean;
    [key: string]: any;
  }

  export interface IconOptions {
    iconUrl?: string;
    iconRetinaUrl?: string;
    shadowUrl?: string;
    iconSize?: [number, number];
    iconAnchor?: [number, number];
    popupAnchor?: [number, number];
    shadowSize?: [number, number];
    [key: string]: any;
  }

  export class Map {
    constructor(element: HTMLElement | string, options?: MapOptions);
    remove(): void;
    [key: string]: any;
  }

  export class Icon {
    constructor(options: IconOptions);
    [key: string]: any;
  }

  export class Marker {
    constructor(latlng: [number, number], options?: { icon?: Icon });
    addTo(map: Map): Marker;
    bindPopup(content: string): Marker;
    [key: string]: any;
  }

  export class TileLayer {
    constructor(urlTemplate: string, options?: any);
    addTo(map: Map): TileLayer;
    [key: string]: any;
  }

  export function map(element: HTMLElement | string, options?: MapOptions): Map;
  export function tileLayer(urlTemplate: string, options?: any): TileLayer;
  export function marker(latlng: [number, number], options?: { icon?: Icon }): Marker;
  export function icon(options: IconOptions): Icon;

  export namespace Marker {
    export const prototype: {
      options: {
        icon?: Icon;
      };
    };
  }

  const L: {
    map: typeof map;
    tileLayer: typeof tileLayer;
    marker: typeof marker;
    icon: typeof icon;
    Map: typeof Map;
    Marker: typeof Marker;
    Icon: typeof Icon;
    TileLayer: typeof TileLayer;
  };

  export default L;
}



