export const OPERATION_TYPES = [
  {
    url: 'en-venta',
    label: 'Venta',
    value: 'SELL'
  },
  {
    url: 'en-renta',
    label: 'Renta',
    value: 'RENT'
  },
  {
    url: 'compartir',
    label: 'Compartir',
    value: 'SHARE'
  }
]

export const OPERATION_TYPES_BIBLIO = OPERATION_TYPES.reduce(
  (acc, { value, label }) => ({ ...acc, [value]: label }),
  {}
)

export const PROPERTY_TYPES = [
  {
    url: 'departamentos',
    label: 'Departamento',
    value: 'APARTMENT',
  },
  {
    url: 'casas',
    label: 'Casa',
    value: 'HOUSE',
  },
  {
    url: 'terreno',
    label: 'Terreno',
    value: 'LOTS',
  },
  {
    url: 'cuarto',
    label: 'Cuarto',
    value: 'ROOMS',
  },
  {
    url: 'local',
    label: 'Local',
    value: 'STORE',
  },
  {
    url: 'bodega',
    label: 'Bodega',
    value: 'WAREHOUSE',
  },
  {
    url: 'oficina',
    label: 'Oficina',
    value: 'OFFICE',
  },
  {
    url: 'edificio',
    label: 'Edificio',
    value: 'BUILDING',
  },
  {
    url: 'hotel',
    label: 'Hotel',
    value: 'HOTEL',
  },
  {
    url: 'rancho',
    label: 'Rancho',
    value: 'RANCH',
  },
]

export const PROPERTY_TYPES_BIBLIO = PROPERTY_TYPES.reduce(
  (acc, { label, value }) => ({ ...acc, [value]: label }),
  {}
)