import { loadFonts } from "./base";

export const getInfo = () => ({
   "fontFamily": "Expletus Sans",
   "importName": "ExpletusSans",
   "version": "v29",
   "url": "https://fonts.googleapis.com/css2?family=Expletus+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700",
   "unicodeRanges": {
      "latin-ext": "U+0100-02AF, U+0304, U+0308, U+0329, U+1E00-1E9F, U+1EF2-1EFF, U+2020, U+20A0-20AB, U+20AD-20C0, U+2113, U+2C60-2C7F, U+A720-A7FF",
      "latin": "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
   },
   "fonts": {
      "italic": {
         "400": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsotokqbHo.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsouIkq.woff2"
         },
         "500": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsotokqbHo.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsouIkq.woff2"
         },
         "600": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsotokqbHo.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsouIkq.woff2"
         },
         "700": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsotokqbHo.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLpnK5v5_bqufTYdnhFzDj2ddfsouIkq.woff2"
         }
      },
      "normal": {
         "400": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddfAYupEu.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddf4Yug.woff2"
         },
         "500": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddfAYupEu.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddf4Yug.woff2"
         },
         "600": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddfAYupEu.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddf4Yug.woff2"
         },
         "700": {
            "latin-ext": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddfAYupEu.woff2",
            "latin": "https://fonts.gstatic.com/s/expletussans/v29/RLp5K5v5_bqufTYdnhFzDj2ddf4Yug.woff2"
         }
      }
   }
})

export const fontFamily = "Expletus Sans" as const;

type Variants = {
  italic: {
    weights: '400' | '500' | '600' | '700',
    subsets: 'latin' | 'latin-ext',
  },
  normal: {
    weights: '400' | '500' | '600' | '700',
    subsets: 'latin' | 'latin-ext',
  },
};

export const loadFont = <T extends keyof Variants>(
  style?: T,
  options?: {
    weights?: Variants[T]['weights'][];
    subsets?: Variants[T]['subsets'][];
    document?: Document;
  }
) => { 
  return loadFonts(getInfo(), style, options);
};
