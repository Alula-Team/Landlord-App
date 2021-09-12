import React, { useContext } from 'react'
import { PropertiesContext } from '../../providers/PropertiesProvider'
import RNPickerSelect from "react-native-picker-select";

import { pickerStyles }  from './styles';

const PropertySelect = ({ value, onChange }) => {
  const properties = useContext(PropertiesContext);

  const options = properties.map((property) => {
    return (
      {
        label: `${property.address} ${property.unit}`,
        value: JSON.stringify(property),
        color: "#34383D"
      }
    )
  })

  return (
    <RNPickerSelect
      placeholder={{
        label: "Select Property",
        value: "selectProperty",
        color: "#34383D",
      }}
      style={pickerStyles}
      value={value}
      onValueChange={onChange}
      items={options}
    />
  )
}

export default PropertySelect