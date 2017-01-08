var legend = [
  // standard js words
  { search: 'break', replace: '!HODLOR;;;' },
  { search: 'case', replace: '?hooDLooRrr' },
  { search: 'catch', replace: '!!!HODLOR!!!' },
  { search: 'else', replace: 'hoDLOR!!!' },
  { search: 'for', replace: 'HODLOR{}' },
  { search: 'function', replace: 'HoDLoRHoDLoR' },
  { search: 'if', replace: 'HOdlor!!!' },
  { search: 'instanceof', replace: 'hodlorhodlorho' },
  { search: 'new', replace: 'HHHOOODLDDDOOORRR!!!' },
  { search: 'return', replace: 'HODLOR::' },
  { search: 'switch', replace: 'HODLORHODLOR' },
  { search: 'throw', replace: '!hOdlor!' },
  { search: 'try', replace: '!hodlOr!' },
  { search: 'typeof', replace: 'Hodlor?????????!?!?!?!?' },
  { search: 'var', replace: '$HODLOR:' },
  { search: 'while', replace: 'hodlor............' },
  { search: 'console.log', replace: 'hodlor.hodl' },

  // most common letters that are not h, o, d or r
  // s a c m p t b f g i n e l w u v j k q y z x
  // "x "
  { search: 's', replace: 'Hodlor ' },
  { search: 'a', replace: 'HODLOR ' },
  { search: 'c', replace: 'hodlor ' },
  
  // "x. "
  { search: 'm', replace: 'Hodlor. ' },
  { search: 'p', replace: 'HODLOR. ' },
  { search: 't', replace: 'hodlor. ' },

  // "x! "
  { search: 'b', replace: 'Hodlor! ' },
  { search: 'f', replace: 'HODLOR! ' },
  { search: 'g', replace: 'hodlor! ' },

  // "x? "
  { search: 'i', replace: 'Hodlor? ' },
  { search: 'n', replace: 'HODLOR? ' },
  { search: 'e', replace: 'hodlor? ' },

  // "x!? "
  { search: 'l', replace: 'Hodlor!? ' },
  { search: 'w', replace: 'HODLOR!? ' },
  { search: 'u', replace: 'hodlor!? ' },

  // "x?! "
  { search: 'v', replace: 'Hodlor?! ' },
  { search: 'j', replace: 'HODLOR?! ' },
  { search: 'k', replace: 'hodlor?! ' },

  // "x!?! "
  { search: 'q', replace: 'Hodlor!?! ' },
  { search: 'y', replace: 'HODLOR!?! ' },
  { search: 'z', replace: 'hodlor!?! ' },

  // "x?!? "
  { search: 'x', replace: 'Hodlor?!? ' },
  { search: 'S', replace: 'HODLOR?!? ' },
  { search: 'A', replace: 'hodlor?!? ' },

  // "x... "
  { search: 'C', replace: 'Hodlor... ' },
  { search: 'M', replace: 'HODLOR... ' },
  { search: 'P', replace: 'hodlor... ' },

  // "x-"
  { search: 'T', replace: 'Hodlor- ' },
  { search: 'B', replace: 'HODLOR- ' },
  { search: 'F', replace: 'hodlor- ' },

  // "prepending HoOodloOor"
  { search: 'G', replace: 'HoOodloOorHodlor ' },
  { search: 'I', replace: 'HoOodloOorHODLOR ' },
  { search: 'N', replace: 'HoOodloOorhodlor ' },

  // "prepending Hooodlorr"
  { search: 'E', replace: 'HooodlorrHodlor ' },
  { search: 'L', replace: 'HooodlorrHODLOR ' },
  { search: 'W', replace: 'Hooodlorrhodlor ' },

  // "appending Hooodlorr"
  { search: 'U', replace: 'HodlorHooodlorr ' },
  { search: 'V', replace: 'HODLORHooodlorr ' },
  { search: 'J', replace: 'hodlorHooodlorr ' },

  // "appending HoOodloOor"
  { search: 'K', replace: 'HodlorHoOodloOor ' },
  { search: 'Q', replace: 'HODLORHoOodloOor ' },
  { search: 'Y', replace: 'hodlorHoOodloOor ' },

  // "prepending HoOodloOorHooodlorr"
  { search: 'Z', replace: 'HoOodloOorHooodlorrHodlor ' },
  { search: 'X', replace: 'HoOodloOorHooodlorrHODLOR ' }
];

module.exports = legend;