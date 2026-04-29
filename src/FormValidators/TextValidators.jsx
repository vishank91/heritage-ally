import React from 'react'

export default function TextValidators(e) {
  let { name, value } = e.target
  switch (name) {
    case "name":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (value.length < 3 || value.length > 100)
        return name + " Field Length Must Be 3-100 Characters"
      else
        return ""

    case "basePrice":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (parseInt(value) < 1)
        return "Price Must Be 1 or More Then 1"
      else
        return ""

    case "discount":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (parseInt(value) < 0 || parseInt(value) > 100)
        return "Discount Must Be In Range 0-100"
      else
        return ""

    case "stockQuantity":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (parseInt(value) < 0)
        return "Price Must Be 0 or More Then 0"
      else
        return ""

    case "description":
    case "answer":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (value.length < 50)
        return name + " Field Length Must Be 50 Character or More"
      else
        return ""

    case "question":
      if (!value || value.length === 0)
        return name + " Field is Mendatory"
      else if (value.length < 20)
        return name + " Field Length Must Be 20 Character or More"
      else
        return ""

    default:
      return ""
  }
}
